// ===== ALBUM DATA =====
const ALBUM = {
  FWC: { name: "FIFA World Cup", flag: "🏆", max: 9 },
  MUS: { name: "Museo FIFA", flag: "🏛️", max: 11 },
  CZE: { name: "República Checa", flag: "🇨🇿", max: 20, group: "A" },
  MEX: { name: "México", flag: "🇲🇽", max: 20, group: "A" },
  RSA: { name: "Sudáfrica", flag: "🇿🇦", max: 20, group: "A" },
  KOR: { name: "Corea del Sur", flag: "🇰🇷", max: 20, group: "A" },
  BIH: { name: "Bosnia y Herzegovina", flag: "🇧🇦", max: 20, group: "B" },
  CAN: { name: "Canadá", flag: "🇨🇦", max: 20, group: "B" },
  QAT: { name: "Catar", flag: "🇶🇦", max: 20, group: "B" },
  SUI: { name: "Suiza", flag: "🇨🇭", max: 20, group: "B" },
  BRA: { name: "Brasil", flag: "🇧🇷", max: 20, group: "C" },
  HAI: { name: "Haití", flag: "🇭🇹", max: 20, group: "C" },
  MAR: { name: "Marruecos", flag: "🇲🇦", max: 20, group: "C" },
  SCO: { name: "Escocia", flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", max: 20, group: "C" },
  AUS: { name: "Australia", flag: "🇦🇺", max: 20, group: "D" },
  PAR: { name: "Paraguay", flag: "🇵🇾", max: 20, group: "D" },
  TUR: { name: "Turquía", flag: "🇹🇷", max: 20, group: "D" },
  USA: { name: "Estados Unidos", flag: "🇺🇸", max: 20, group: "D" },
  CUW: { name: "Curazao", flag: "🇨🇼", max: 20, group: "E" },
  ECU: { name: "Ecuador", flag: "🇪🇨", max: 20, group: "E" },
  GER: { name: "Alemania", flag: "🇩🇪", max: 20, group: "E" },
  CIV: { name: "Costa de Marfil", flag: "🇨🇮", max: 20, group: "E" },
  JPN: { name: "Japón", flag: "🇯🇵", max: 20, group: "F" },
  NED: { name: "Países Bajos", flag: "🇳🇱", max: 20, group: "F" },
  SWE: { name: "Suecia", flag: "🇸🇪", max: 20, group: "F" },
  TUN: { name: "Túnez", flag: "🇹🇳", max: 20, group: "F" },
  BEL: { name: "Bélgica", flag: "🇧🇪", max: 20, group: "G" },
  EGY: { name: "Egipto", flag: "🇪🇬", max: 20, group: "G" },
  IRN: { name: "Irán", flag: "🇮🇷", max: 20, group: "G" },
  NZL: { name: "Nueva Zelanda", flag: "🇳🇿", max: 20, group: "G" },
  CPV: { name: "Cabo Verde", flag: "🇨🇻", max: 20, group: "H" },
  KSA: { name: "Arabia Saudita", flag: "🇸🇦", max: 20, group: "H" },
  ESP: { name: "España", flag: "🇪🇸", max: 20, group: "H" },
  URU: { name: "Uruguay", flag: "🇺🇾", max: 20, group: "H" },
  FRA: { name: "Francia", flag: "🇫🇷", max: 20, group: "I" },
  IRQ: { name: "Irak", flag: "🇮🇶", max: 20, group: "I" },
  NOR: { name: "Noruega", flag: "🇳🇴", max: 20, group: "I" },
  SEN: { name: "Senegal", flag: "🇸🇳", max: 20, group: "I" },
  ALG: { name: "Argelia", flag: "🇩🇿", max: 20, group: "J" },
  ARG: { name: "Argentina", flag: "🇦🇷", max: 20, group: "J" },
  AUT: { name: "Austria", flag: "🇦🇹", max: 20, group: "J" },
  JOR: { name: "Jordania", flag: "🇯🇴", max: 20, group: "J" },
  COL: { name: "Colombia", flag: "🇨🇴", max: 20, group: "K" },
  COD: { name: "RD Congo", flag: "🇨🇩", max: 20, group: "K" },
  POR: { name: "Portugal", flag: "🇵🇹", max: 20, group: "K" },
  UZB: { name: "Uzbekistán", flag: "🇺🇿", max: 20, group: "K" },
  CRO: { name: "Croacia", flag: "🇭🇷", max: 20, group: "L" },
  ENG: { name: "Inglaterra", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", max: 20, group: "L" },
  GHA: { name: "Ghana", flag: "🇬🇭", max: 20, group: "L" },
  PAN: { name: "Panamá", flag: "🇵🇦", max: 20, group: "L" }
};

const TOTAL_ALBUM = 980;

// ===== AUTH =====
const ADMIN_HASH = '5f4d8c3a9b2e1f7a6d0c4b8e3f2a1d5c';
let isAdmin = false;

function hashPin(pin) {
  let hash = 0;
  for (let i = 0; i < pin.length; i++) {
    const char = pin.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  return Math.abs(hash).toString(16);
}

function checkAdmin() {
  if (isAdmin) return true;
  const pin = prompt('Ingresá tu contraseña de administrador:');
  if (!pin) return false;
  if (pin === '_f1f4wc2026!') {
    isAdmin = true;
    sessionStorage.setItem('wc2026_admin', '1');
    return true;
  }
  alert('Contraseña incorrecta');
  return false;
}

function restoreSession() {
  isAdmin = sessionStorage.getItem('wc2026_admin') === '1';
}

// ===== STATE =====
let state = {
  missing: [],
  repeats: {}
};

async function save() {
  // No-op: state is persisted via db calls directly
}

async function load() {
  try {
    state.missing = await db.getMissing();
    state.repeats = await db.getRepeats();
  } catch (e) {
    console.error('Error cargando datos de Supabase:', e);
    const saved = localStorage.getItem('wc2026_state');
    if (saved) {
      const parsed = JSON.parse(saved);
      state.missing = parsed.missing || [];
      state.repeats = parsed.repeats || {};
    }
  }
}

// ===== PARSING =====
function parseNumbers(input) {
  const result = [];
  const cleaned = input.replace(/\s/g, '');
  if (!cleaned) return { numbers: [], error: null };

  const parts = cleaned.split(',');
  for (const part of parts) {
    if (part.includes('-')) {
      const [startStr, endStr] = part.split('-');
      const start = parseInt(startStr);
      const end = parseInt(endStr);
      if (isNaN(start) || isNaN(end)) {
        return { numbers: [], error: `Rango inválido: "${part}"` };
      }
      if (start > end) {
        return { numbers: [], error: `Rango invertido: "${part}" (el inicio debe ser menor al final)` };
      }
      for (let i = start; i <= end; i++) {
        result.push(i);
      }
    } else {
      const num = parseInt(part);
      if (isNaN(num)) {
        return { numbers: [], error: `Número inválido: "${part}"` };
      }
      result.push(num);
    }
  }

  const unique = [...new Set(result)].sort((a, b) => a - b);
  return { numbers: unique, error: null };
}

function validatePrefix(prefix) {
  const upper = prefix.trim().toUpperCase();
  if (!upper) return { code: null, error: "Ingresa un código de país" };
  if (!ALBUM[upper]) return { code: null, error: `Código "${upper}" no encontrado en el álbum` };
  return { code: upper, error: null };
}

function validateNumbers(numbers, prefix) {
  const max = ALBUM[prefix].max;
  const outOfRange = numbers.filter(n => n < 1 || n > max);
  if (outOfRange.length > 0) {
    return { error: `Números fuera de rango (1-${max}): ${outOfRange.join(', ')}` };
  }
  return { error: null };
}

function buildStickerCodes(prefix, numbers) {
  return numbers.map(n => `${prefix} ${n}`);
}

// ===== STATE OPERATIONS =====
async function addMissing(codes) {
  const newCodes = codes.filter(c => !state.missing.includes(c));
  if (newCodes.length === 0) return 0;

  await db.addMissing(newCodes);

  for (const code of newCodes) {
    state.missing.push(code);
  }
  state.missing.sort((a, b) => {
    const [pa, na] = a.split(' ');
    const [pb, nb] = b.split(' ');
    if (pa !== pb) return pa.localeCompare(pb);
    return parseInt(na) - parseInt(nb);
  });
  return newCodes.length;
}

async function removeMissing(code) {
  await db.removeMissing(code);
  state.missing = state.missing.filter(c => c !== code);
}

async function addRepeats(codes) {
  await db.addRepeats(codes);

  for (const code of codes) {
    if (state.repeats[code]) {
      state.repeats[code]++;
    } else {
      state.repeats[code] = 1;
    }
  }
  return codes.length;
}

async function removeRepeat(code) {
  await db.removeRepeat(code);
  if (state.repeats[code] > 1) {
    state.repeats[code]--;
  } else {
    delete state.repeats[code];
  }
}

async function clearMissingByPrefix(prefix) {
  await db.clearMissingByPrefix(prefix);
  state.missing = state.missing.filter(c => !c.startsWith(prefix + ' '));
}

async function clearRepeatsByPrefix(prefix) {
  await db.clearRepeatsByPrefix(prefix);
  for (const key of Object.keys(state.repeats)) {
    if (key.startsWith(prefix + ' ')) {
      delete state.repeats[key];
    }
  }
}

// ===== STATS =====
function getStats() {
  const missingCount = state.missing.length;
  const repeatsCount = Object.values(state.repeats).reduce((s, v) => s + v, 0);
  const collected = TOTAL_ALBUM - missingCount;
  const percent = Math.round((collected / TOTAL_ALBUM) * 100);
  return { collected, missingCount, repeatsCount, total: TOTAL_ALBUM, percent };
}

function getMissingByPrefix() {
  const grouped = {};
  for (const code of state.missing) {
    const [prefix] = code.split(' ');
    if (!grouped[prefix]) grouped[prefix] = [];
    grouped[prefix].push(code);
  }
  return grouped;
}

function getRepeatsByPrefix() {
  const grouped = {};
  for (const [code, count] of Object.entries(state.repeats)) {
    const [prefix] = code.split(' ');
    if (!grouped[prefix]) grouped[prefix] = [];
    grouped[prefix].push({ code, count });
  }
  return grouped;
}

// ===== NAVIGATION =====
function navigate(page) {
  if ((page === 'missing' || page === 'repeats') && !checkAdmin()) {
    return;
  }

  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  document.getElementById(`page-${page}`).classList.add('active');
  document.querySelector(`.nav-item[data-page="${page}"]`).classList.add('active');

  if (page === 'dashboard') renderDashboard();
  if (page === 'missing') renderMissing();
  if (page === 'repeats') renderRepeats();
  if (page === 'trade') renderTrade();
}

// ===== RENDER: DASHBOARD =====
function renderDashboard() {
  const stats = getStats();
  const dashOffset = 377 - (377 * stats.percent / 100);
  const missingByPrefix = getMissingByPrefix();

  const topCountries = Object.entries(missingByPrefix)
    .filter(([prefix]) => ALBUM[prefix] && ALBUM[prefix].group)
    .map(([prefix, codes]) => {
      const info = ALBUM[prefix];
      const progress = Math.round(((info.max - codes.length) / info.max) * 100);
      return { prefix, name: info.name, flag: info.flag, progress, missing: codes.length };
    })
    .sort((a, b) => b.missing - a.missing)
    .slice(0, 4);

  document.getElementById('page-dashboard').innerHTML = `
    <div class="progress-section">
      <div class="progress-circle">
        <svg viewBox="0 0 130 130">
          <defs>
            <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style="stop-color:#001f5b"/>
              <stop offset="100%" style="stop-color:#ff453a"/>
            </linearGradient>
          </defs>
          <circle class="track" cx="65" cy="65" r="60"/>
          <circle class="indicator" cx="65" cy="65" r="60" style="stroke-dashoffset: ${dashOffset}"/>
        </svg>
        <div class="progress-percent">${stats.percent}%</div>
      </div>
      <p class="progress-label">Solo faltan ${stats.missingCount} para completar</p>
      ${stats.percent >= 80 ? `
        <span class="elite-badge">
          <span class="material-symbols-outlined" style="font-size:14px">workspace_premium</span>
          Élite
        </span>
      ` : stats.percent >= 50 ? `
        <span class="elite-badge">
          <span class="material-symbols-outlined" style="font-size:14px">workspace_premium</span>
          Avanzado
        </span>
      ` : ''}
    </div>

    <div class="stats-grid">
      <div class="stat-card">
        <div class="stat-icon collected">
          <span class="material-symbols-outlined">inventory_2</span>
        </div>
        <div>
          <div class="stat-value">${stats.collected}</div>
          <div class="stat-label">Coleccionadas</div>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-icon missing">
          <span class="material-symbols-outlined">help</span>
        </div>
        <div>
          <div class="stat-value">${stats.missingCount}</div>
          <div class="stat-label">Faltantes</div>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-icon repeats">
          <span class="material-symbols-outlined">filter_none</span>
        </div>
        <div>
          <div class="stat-value">${stats.repeatsCount}</div>
          <div class="stat-label">Repetidas</div>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-icon total">
          <span class="material-symbols-outlined">sports_soccer</span>
        </div>
        <div>
          <div class="stat-value">${stats.total}</div>
          <div class="stat-label">Total Álbum</div>
        </div>
      </div>
    </div>

    <div class="action-buttons">
      <button class="btn-primary" onclick="navigate('missing')">
        <span class="material-symbols-outlined" style="font-size:18px">add_circle</span>
        Agregar Faltantes
      </button>
      <button class="btn-secondary" onclick="navigate('repeats')">
        <span class="material-symbols-outlined" style="font-size:18px">content_copy</span>
        Agregar Repetidas
      </button>
    </div>

    ${topCountries.length > 0 ? `
      <div class="section-header">
        <span class="section-title">Más Faltantes</span>
        <a class="view-all" onclick="navigate('missing')">Ver Todos</a>
      </div>
      <div class="country-list">
        ${topCountries.map(c => `
          <div class="country-card" onclick="navigate('missing')">
            <span style="font-size:32px">${c.flag}</span>
            <div class="country-info">
              <div class="country-name">${c.name}</div>
              <div class="country-progress-bar">
                <div class="country-progress-fill${c.progress === 100 ? ' complete' : ''}" style="width: ${c.progress}%"></div>
              </div>
            </div>
            <span class="country-percent">${c.progress}%</span>
            ${c.progress >= 95 ? '<span class="material-symbols-outlined country-star">star</span>' : ''}
          </div>
        `).join('')}
      </div>
    ` : `
      <div class="empty-state">
        <span class="material-symbols-outlined">emoji_events</span>
        <p>¡Empieza agregando tus figuritas faltantes!</p>
      </div>
    `}
  `;
}

// ===== RENDER: MISSING =====
function renderMissing() {
  const missingByPrefix = getMissingByPrefix();
  const prefixes = Object.keys(missingByPrefix).sort();

  document.getElementById('page-missing').innerHTML = `
    <div class="section-header">
      <span class="section-title">Mis Faltantes</span>
      <span class="label-bold" style="color: var(--error)">${state.missing.length} total</span>
    </div>

    <div class="input-form">
      <div class="form-row">
        <div class="form-field prefix-field">
          <label>País / Sección</label>
          <input type="text" id="missing-prefix" placeholder="MEX" maxlength="3" autocomplete="off" list="prefix-list">
        </div>
        <div class="form-field numbers-field">
          <label>Números</label>
          <input type="text" id="missing-numbers" placeholder="1,3,7-10" autocomplete="off">
        </div>
      </div>
      <button class="btn-primary btn-full" onclick="handleAddMissing()">
        <span class="material-symbols-outlined" style="font-size:18px">add</span>
        Agregar Faltantes
      </button>
      <div id="missing-feedback" class="feedback"></div>
    </div>

    <datalist id="prefix-list">
      ${Object.entries(ALBUM).map(([code, info]) => `<option value="${code}">${info.name}</option>`).join('')}
    </datalist>

    ${prefixes.length > 0 ? `
      <div class="sticker-groups">
        ${prefixes.map(prefix => {
          const info = ALBUM[prefix];
          const codes = missingByPrefix[prefix];
          const numbers = codes.map(c => parseInt(c.split(' ')[1]));
          return `
            <div class="sticker-group">
              <div class="sticker-group-header">
                <span style="font-size:20px">${info.flag}</span>
                <span class="country-group-name">${info.name} (${prefix})</span>
                <span class="country-group-count">${codes.length}/${info.max}</span>
                <button class="btn-icon" onclick="handleClearMissing('${prefix}')" title="Eliminar todas de ${prefix}">
                  <span class="material-symbols-outlined" style="font-size:16px">delete</span>
                </button>
              </div>
              <div class="sticker-tags">
                ${numbers.sort((a, b) => a - b).map(n => `
                  <span class="sticker-tag">
                    ${prefix} ${n}
                    <button class="tag-remove" onclick="handleRemoveMissing('${prefix} ${n}')">×</button>
                  </span>
                `).join('')}
              </div>
            </div>
          `;
        }).join('')}
      </div>
    ` : `
      <div class="empty-state">
        <span class="material-symbols-outlined">check_circle</span>
        <p>No tienes figuritas registradas como faltantes.</p>
        <p class="body-md" style="color:var(--on-surface-variant)">Usa el formulario de arriba para agregar las que te faltan.</p>
      </div>
    `}
  `;
}

async function handleAddMissing() {
  const prefixInput = document.getElementById('missing-prefix');
  const numbersInput = document.getElementById('missing-numbers');
  const feedback = document.getElementById('missing-feedback');

  const { code, error: prefixError } = validatePrefix(prefixInput.value);
  if (prefixError) {
    showFeedback(feedback, prefixError, 'error');
    return;
  }

  const { numbers, error: parseError } = parseNumbers(numbersInput.value);
  if (parseError) {
    showFeedback(feedback, parseError, 'error');
    return;
  }
  if (numbers.length === 0) {
    showFeedback(feedback, 'Ingresa al menos un número', 'error');
    return;
  }

  const { error: rangeError } = validateNumbers(numbers, code);
  if (rangeError) {
    showFeedback(feedback, rangeError, 'error');
    return;
  }

  const codes = buildStickerCodes(code, numbers);
  try {
    const added = await addMissing(codes);
    showFeedback(feedback, `Se agregaron ${added} figurita${added !== 1 ? 's' : ''} faltante${added !== 1 ? 's' : ''} de ${code}`, 'success');
    numbersInput.value = '';
    prefixInput.value = '';
    setTimeout(() => renderMissing(), 800);
  } catch (e) {
    showFeedback(feedback, `Error al guardar: ${e.message}`, 'error');
  }
}

async function handleRemoveMissing(code) {
  await removeMissing(code);
  renderMissing();
}

async function handleClearMissing(prefix) {
  const info = ALBUM[prefix];
  if (confirm(`¿Eliminar todas las faltantes de ${info.name} (${prefix})?`)) {
    await clearMissingByPrefix(prefix);
    renderMissing();
  }
}

// ===== RENDER: REPEATS =====
function renderRepeats() {
  const repeatsByPrefix = getRepeatsByPrefix();
  const prefixes = Object.keys(repeatsByPrefix).sort();
  const totalRepeats = Object.values(state.repeats).reduce((s, v) => s + v, 0);

  document.getElementById('page-repeats').innerHTML = `
    <div class="section-header">
      <span class="section-title">Mis Repetidas</span>
      <span class="label-bold" style="color: var(--gold)">${totalRepeats} total</span>
    </div>

    <div class="input-form">
      <div class="form-row">
        <div class="form-field prefix-field">
          <label>País / Sección</label>
          <input type="text" id="repeats-prefix" placeholder="ARG" maxlength="3" autocomplete="off" list="prefix-list-r">
        </div>
        <div class="form-field numbers-field">
          <label>Números</label>
          <input type="text" id="repeats-numbers" placeholder="2,5,8-12" autocomplete="off">
        </div>
      </div>
      <button class="btn-primary btn-full" onclick="handleAddRepeats()">
        <span class="material-symbols-outlined" style="font-size:18px">add</span>
        Agregar Repetidas
      </button>
      <div id="repeats-feedback" class="feedback"></div>
    </div>

    <datalist id="prefix-list-r">
      ${Object.entries(ALBUM).map(([code, info]) => `<option value="${code}">${info.name}</option>`).join('')}
    </datalist>

    ${prefixes.length > 0 ? `
      <div class="repeats-summary">
        <div class="repeats-total">
          <span class="material-symbols-outlined">swap_horiz</span>
          Total: ${totalRepeats} disponibles para intercambio
        </div>
      </div>

      <div class="sticker-groups">
        ${prefixes.map(prefix => {
          const info = ALBUM[prefix];
          const items = repeatsByPrefix[prefix];
          return `
            <div class="sticker-group">
              <div class="sticker-group-header">
                <span style="font-size:20px">${info.flag}</span>
                <span class="country-group-name">${info.name} (${prefix})</span>
                <span class="country-group-count">${items.length} figuritas</span>
                <button class="btn-icon" onclick="handleClearRepeats('${prefix}')" title="Eliminar todas de ${prefix}">
                  <span class="material-symbols-outlined" style="font-size:16px">delete</span>
                </button>
              </div>
              <div class="sticker-tags">
                ${items.sort((a, b) => parseInt(a.code.split(' ')[1]) - parseInt(b.code.split(' ')[1])).map(item => `
                  <span class="sticker-tag repeat-tag">
                    ${item.code}
                    ${item.count > 1 ? `<span class="tag-count">x${item.count}</span>` : ''}
                    <button class="tag-remove" onclick="handleRemoveRepeat('${item.code}')">−</button>
                  </span>
                `).join('')}
              </div>
            </div>
          `;
        }).join('')}
      </div>
    ` : `
      <div class="empty-state">
        <span class="material-symbols-outlined">content_copy</span>
        <p>No tienes figuritas repetidas registradas.</p>
        <p class="body-md" style="color:var(--on-surface-variant)">Agrega las que tengas de más para ofrecerlas en intercambio.</p>
      </div>
    `}
  `;
}

async function handleAddRepeats() {
  const prefixInput = document.getElementById('repeats-prefix');
  const numbersInput = document.getElementById('repeats-numbers');
  const feedback = document.getElementById('repeats-feedback');

  const { code, error: prefixError } = validatePrefix(prefixInput.value);
  if (prefixError) {
    showFeedback(feedback, prefixError, 'error');
    return;
  }

  const { numbers, error: parseError } = parseNumbers(numbersInput.value);
  if (parseError) {
    showFeedback(feedback, parseError, 'error');
    return;
  }
  if (numbers.length === 0) {
    showFeedback(feedback, 'Ingresa al menos un número', 'error');
    return;
  }

  const { error: rangeError } = validateNumbers(numbers, code);
  if (rangeError) {
    showFeedback(feedback, rangeError, 'error');
    return;
  }

  const codes = buildStickerCodes(code, numbers);
  try {
    const added = await addRepeats(codes);
    showFeedback(feedback, `Se agregaron ${added} figurita${added !== 1 ? 's' : ''} repetida${added !== 1 ? 's' : ''} de ${code}`, 'success');
    numbersInput.value = '';
    prefixInput.value = '';
    setTimeout(() => renderRepeats(), 800);
  } catch (e) {
    showFeedback(feedback, `Error al guardar: ${e.message}`, 'error');
  }
}

async function handleRemoveRepeat(code) {
  await removeRepeat(code);
  renderRepeats();
}

async function handleClearRepeats(prefix) {
  const info = ALBUM[prefix];
  if (confirm(`¿Eliminar todas las repetidas de ${info.name} (${prefix})?`)) {
    await clearRepeatsByPrefix(prefix);
    renderRepeats();
  }
}

// ===== RENDER: TRADE =====
function renderTrade() {
  const totalRepeats = Object.values(state.repeats).reduce((s, v) => s + v, 0);

  document.getElementById('page-trade').innerHTML = `
    <div class="section-header">
      <span class="section-title">Intercambio</span>
    </div>
    <p class="section-subtitle">Ingresá las figuritas que te faltan para ver cuáles tengo disponibles para darte.</p>

    <div class="input-form">
      <div class="form-row">
        <div class="form-field prefix-field">
          <label>País / Sección</label>
          <input type="text" id="trade-prefix" placeholder="MEX" maxlength="3" autocomplete="off" list="prefix-list-t">
        </div>
        <div class="form-field numbers-field">
          <label>Números que te faltan</label>
          <input type="text" id="trade-numbers" placeholder="1,5,9-12" autocomplete="off">
        </div>
      </div>
      <button class="btn-primary btn-full" onclick="handleAddTradeSearch()">
        <span class="material-symbols-outlined" style="font-size:18px">add</span>
        Agregar a Búsqueda
      </button>
      <div id="trade-feedback" class="feedback"></div>
    </div>

    <datalist id="prefix-list-t">
      ${Object.entries(ALBUM).map(([code, info]) => `<option value="${code}">${info.name}</option>`).join('')}
    </datalist>

    <div id="trade-visitor-list"></div>

    <div id="trade-results" style="display:none">
      <div id="trade-matches"></div>
      <div id="trade-my-missing"></div>
    </div>
  `;
}

let visitorNeeds = [];

function handleAddTradeSearch() {
  const prefixInput = document.getElementById('trade-prefix');
  const numbersInput = document.getElementById('trade-numbers');
  const feedback = document.getElementById('trade-feedback');

  const { code, error: prefixError } = validatePrefix(prefixInput.value);
  if (prefixError) {
    showFeedback(feedback, prefixError, 'error');
    return;
  }

  const { numbers, error: parseError } = parseNumbers(numbersInput.value);
  if (parseError) {
    showFeedback(feedback, parseError, 'error');
    return;
  }
  if (numbers.length === 0) {
    showFeedback(feedback, 'Ingresa al menos un número', 'error');
    return;
  }

  const { error: rangeError } = validateNumbers(numbers, code);
  if (rangeError) {
    showFeedback(feedback, rangeError, 'error');
    return;
  }

  const codes = buildStickerCodes(code, numbers);
  for (const c of codes) {
    if (!visitorNeeds.includes(c)) visitorNeeds.push(c);
  }

  showFeedback(feedback, `${codes.length} figurita${codes.length !== 1 ? 's' : ''} agregada${codes.length !== 1 ? 's' : ''} a la búsqueda`, 'success');
  numbersInput.value = '';
  prefixInput.value = '';

  renderTradeResults();
}

function removeVisitorNeed(code) {
  visitorNeeds = visitorNeeds.filter(c => c !== code);
  renderTradeResults();
}

function clearVisitorNeeds() {
  visitorNeeds = [];
  renderTradeResults();
}

function renderTradeResults() {
  const listContainer = document.getElementById('trade-visitor-list');
  const resultsContainer = document.getElementById('trade-results');

  if (visitorNeeds.length === 0) {
    listContainer.innerHTML = '';
    resultsContainer.style.display = 'none';
    return;
  }

  const matches = visitorNeeds.filter(code => state.repeats[code]);
  const noMatch = visitorNeeds.filter(code => !state.repeats[code]);

  const needsByPrefix = {};
  for (const code of visitorNeeds) {
    const [prefix] = code.split(' ');
    if (!needsByPrefix[prefix]) needsByPrefix[prefix] = [];
    needsByPrefix[prefix].push(code);
  }

  listContainer.innerHTML = `
    <div class="trade-section-header">
      <span class="section-title" style="font-size:15px">Buscando (${visitorNeeds.length})</span>
      <button class="view-all" onclick="clearVisitorNeeds()" style="color:var(--error)">Limpiar</button>
    </div>
    <div class="sticker-tags" style="margin-bottom: var(--spacing-lg)">
      ${visitorNeeds.map(code => `
        <span class="sticker-tag visitor-tag">
          ${code}
          <button class="tag-remove" onclick="removeVisitorNeed('${code}')">×</button>
        </span>
      `).join('')}
    </div>
  `;

  resultsContainer.style.display = 'block';

  const matchesHtml = matches.length > 0 ? `
    <div class="trade-result-section available">
      <div class="trade-result-header">
        <span class="material-symbols-outlined">check_circle</span>
        <span>Tengo disponibles para vos (${matches.length})</span>
      </div>
      <div class="sticker-tags">
        ${matches.map(code => `
          <span class="sticker-tag match-tag">
            ${code}
            <span class="tag-count">x${state.repeats[code]}</span>
          </span>
        `).join('')}
      </div>
    </div>
  ` : `
    <div class="trade-result-section no-match">
      <div class="trade-result-header">
        <span class="material-symbols-outlined">cancel</span>
        <span>No tengo ninguna de las que buscás</span>
      </div>
    </div>
  `;

  const missingByPrefix = getMissingByPrefix();
  const myMissingPrefixes = Object.keys(missingByPrefix).sort();
  const myMissingHtml = state.missing.length > 0 ? `
    <div class="trade-result-section my-needs">
      <div class="trade-result-header">
        <span class="material-symbols-outlined">help</span>
        <span>Estas me faltan a mí (${state.missing.length})</span>
      </div>
      <p class="section-subtitle">Revisá si tenés alguna de estas para ofrecerme a cambio:</p>
      <div class="sticker-groups compact">
        ${myMissingPrefixes.map(prefix => {
          const info = ALBUM[prefix];
          const codes = missingByPrefix[prefix];
          const numbers = codes.map(c => parseInt(c.split(' ')[1])).sort((a, b) => a - b);
          return `
            <div class="sticker-group-inline">
              <span class="inline-prefix">${info.flag} ${prefix}:</span>
              <span class="inline-numbers">${numbers.join(', ')}</span>
            </div>
          `;
        }).join('')}
      </div>
    </div>
  ` : `
    <div class="trade-result-section">
      <div class="trade-result-header">
        <span class="material-symbols-outlined">emoji_events</span>
        <span>¡No me falta ninguna figurita!</span>
      </div>
    </div>
  `;

  document.getElementById('trade-matches').innerHTML = matchesHtml;
  document.getElementById('trade-my-missing').innerHTML = myMissingHtml;
}

// ===== UTILITIES =====
function showFeedback(el, message, type) {
  el.textContent = message;
  el.className = `feedback ${type}`;
  el.style.display = 'block';
  if (type === 'success') {
    setTimeout(() => { el.style.display = 'none'; }, 3000);
  }
}

// ===== INIT =====
async function init() {
  restoreSession();
  await load();
  renderDashboard();
}

document.addEventListener('DOMContentLoaded', init);
