const SUPABASE_URL = 'https://zswwwnufyvrliwpdfqae.supabase.co';
const SUPABASE_KEY = 'sb_publishable_6UpcVYvLB47tS9G7aMZNFA_v0Pxmn9g';

const sbClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// ===== AUTH =====
async function verifyPin(pin) {
  const { data, error } = await sbClient.rpc('verify_pin', { input_pin: pin });
  if (error) throw error;
  return data === true;
}

// ===== DATABASE OPERATIONS =====

const db = {
  // --- MISSING ---
  async getMissing() {
    const { data, error } = await sbClient
      .from('missing')
      .select('code')
      .order('code');
    if (error) throw error;
    return data.map(row => row.code);
  },

  async addMissing(codes) {
    const rows = codes.map(code => ({ code }));
    const { data, error } = await sbClient
      .from('missing')
      .upsert(rows, { onConflict: 'code', ignoreDuplicates: true });
    if (error) throw error;
    return rows.length;
  },

  async removeMissing(code) {
    const { error } = await sbClient
      .from('missing')
      .delete()
      .eq('code', code);
    if (error) throw error;
  },

  async clearMissingByPrefix(prefix) {
    const { error } = await sbClient
      .from('missing')
      .delete()
      .like('code', `${prefix} %`);
    if (error) throw error;
  },

  // --- REPEATS ---
  async getRepeats() {
    const { data, error } = await sbClient
      .from('repeats')
      .select('code, quantity')
      .order('code');
    if (error) throw error;
    const map = {};
    for (const row of data) {
      map[row.code] = row.quantity;
    }
    return map;
  },

  async addRepeats(codes) {
    const { data: existing } = await sbClient
      .from('repeats')
      .select('code, quantity')
      .in('code', codes);

    const existingMap = {};
    for (const row of (existing || [])) {
      existingMap[row.code] = row.quantity;
    }

    const toInsert = [];
    const toUpdate = [];
    for (const code of codes) {
      if (existingMap[code]) {
        existingMap[code]++;
        toUpdate.push({ code, quantity: existingMap[code] });
      } else {
        existingMap[code] = 1;
        toInsert.push({ code, quantity: 1 });
      }
    }

    if (toInsert.length > 0) {
      await sbClient.from('repeats').insert(toInsert);
    }
    for (const item of toUpdate) {
      await sbClient.from('repeats').update({ quantity: item.quantity }).eq('code', item.code);
    }
  },

  async removeRepeat(code) {
    const { data: existing } = await sbClient
      .from('repeats')
      .select('quantity')
      .eq('code', code)
      .maybeSingle();

    if (existing && existing.quantity > 1) {
      await sbClient
        .from('repeats')
        .update({ quantity: existing.quantity - 1 })
        .eq('code', code);
    } else {
      await sbClient
        .from('repeats')
        .delete()
        .eq('code', code);
    }
  },

  async clearRepeatsByPrefix(prefix) {
    const { error } = await sbClient
      .from('repeats')
      .delete()
      .like('code', `${prefix} %`);
    if (error) throw error;
  }
};
