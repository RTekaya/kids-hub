const wrap = (inner) =>
  `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">${inner}</svg>`;

export const symbols = {
  star: wrap(`
    <path d="M32 6 L39 25 L60 26 L43 39 L49 59 L32 47 L15 59 L21 39 L4 26 L25 25 Z" fill="#FBBF24" stroke="#D4A24C" stroke-width="2" stroke-linejoin="round"/>
  `),
  moon: wrap(`
    <path d="M44 12 a22 22 0 1 0 8 38 a18 18 0 0 1 -8 -38 z" fill="#E5E7EB" stroke="#94A3B8" stroke-width="2"/>
    <circle cx="36" cy="22" r="2" fill="#94A3B8"/>
    <circle cx="42" cy="36" r="2.5" fill="#94A3B8"/>
    <circle cx="34" cy="44" r="1.5" fill="#94A3B8"/>
  `),
  sun: wrap(`
    <g stroke="#F59E0B" stroke-width="3" stroke-linecap="round">
      <line x1="32" y1="4" x2="32" y2="12"/>
      <line x1="32" y1="52" x2="32" y2="60"/>
      <line x1="4" y1="32" x2="12" y2="32"/>
      <line x1="52" y1="32" x2="60" y2="32"/>
      <line x1="12" y1="12" x2="18" y2="18"/>
      <line x1="46" y1="46" x2="52" y2="52"/>
      <line x1="52" y1="12" x2="46" y2="18"/>
      <line x1="18" y1="46" x2="12" y2="52"/>
    </g>
    <circle cx="32" cy="32" r="14" fill="#FCD34D" stroke="#F59E0B" stroke-width="2"/>
  `),
  mountain: wrap(`
    <path d="M4 54 L22 26 L34 42 L44 18 L60 54 Z" fill="#78716C" stroke="#44403C" stroke-width="2" stroke-linejoin="round"/>
    <path d="M22 26 L28 34 L25 38 L18 32 Z" fill="#FAFAF9"/>
    <path d="M44 18 L48 26 L42 26 Z" fill="#FAFAF9"/>
  `),
  water: wrap(`
    <path d="M4 24 Q14 16 24 24 T44 24 T60 24 V44 H4 Z" fill="#60A5FA" stroke="#2563EB" stroke-width="2"/>
    <path d="M4 36 Q14 30 24 36 T44 36 T60 36" fill="none" stroke="#93C5FD" stroke-width="2"/>
    <path d="M4 48 Q14 42 24 48 T44 48 T60 48" fill="none" stroke="#BFDBFE" stroke-width="2"/>
  `),
  palm: wrap(`
    <rect x="29" y="32" width="6" height="28" rx="2" fill="#92400E"/>
    <path d="M32 32 Q14 22 8 28 Q14 26 22 30 Q14 32 12 38 Q20 30 30 32" fill="#16A34A"/>
    <path d="M32 32 Q50 22 56 28 Q50 26 42 30 Q50 32 52 38 Q44 30 34 32" fill="#16A34A"/>
    <path d="M32 32 Q32 14 24 8 Q30 14 30 22 Q34 14 40 8 Q32 14 32 32" fill="#15803D"/>
  `),
  flower: wrap(`
    <circle cx="32" cy="20" r="8" fill="#F9A8D4"/>
    <circle cx="44" cy="32" r="8" fill="#F9A8D4"/>
    <circle cx="32" cy="44" r="8" fill="#F9A8D4"/>
    <circle cx="20" cy="32" r="8" fill="#F9A8D4"/>
    <circle cx="32" cy="32" r="6" fill="#FBBF24"/>
    <line x1="32" y1="44" x2="32" y2="60" stroke="#16A34A" stroke-width="3"/>
  `),
  heart: wrap(`
    <path d="M32 56 C 8 40, 8 18, 22 18 C 28 18, 32 22, 32 28 C 32 22, 36 18, 42 18 C 56 18, 56 40, 32 56 Z" fill="#EF4444" stroke="#B91C1C" stroke-width="2"/>
  `),
};

export const symbolKeys = Object.keys(symbols);

export const renderSymbol = (key) => symbols[key] || '';
