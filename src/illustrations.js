// Illustrations SVG par histoire — uniquement paysages et symboles.
// Aucune représentation des prophètes (visage / silhouette humaine identifiable).

const wrap = (inner, viewBox = '0 0 400 260') =>
  `<svg viewBox="${viewBox}" xmlns="http://www.w3.org/2000/svg" class="w-full h-full" preserveAspectRatio="xMidYMid slice">${inner}</svg>`;

// 1. Adam — Le jardin du paradis
const adam = wrap(`
  <defs>
    <linearGradient id="sky-adam" x1="0" x2="0" y1="0" y2="1">
      <stop offset="0%" stop-color="#bae6fd"/>
      <stop offset="100%" stop-color="#dcfce7"/>
    </linearGradient>
  </defs>
  <rect width="400" height="260" fill="url(#sky-adam)"/>
  <!-- collines -->
  <path d="M0,200 Q80,150 160,180 T320,170 T400,190 L400,260 L0,260 Z" fill="#86efac"/>
  <path d="M0,220 Q100,190 200,210 T400,215 L400,260 L0,260 Z" fill="#4ade80"/>
  <!-- arbre central -->
  <rect x="190" y="130" width="20" height="80" rx="4" fill="#7c3e1d"/>
  <circle cx="200" cy="120" r="55" fill="#22c55e"/>
  <circle cx="170" cy="135" r="35" fill="#16a34a"/>
  <circle cx="230" cy="135" r="35" fill="#16a34a"/>
  <!-- fruits -->
  <circle cx="180" cy="115" r="6" fill="#f87171"/>
  <circle cx="215" cy="105" r="6" fill="#f87171"/>
  <circle cx="225" cy="135" r="6" fill="#fbbf24"/>
  <circle cx="170" cy="155" r="6" fill="#fbbf24"/>
  <!-- petites fleurs -->
  <g fill="#f9a8d4"><circle cx="60" cy="225" r="4"/><circle cx="64" cy="221" r="4"/><circle cx="56" cy="221" r="4"/><circle cx="60" cy="217" r="4"/></g>
  <g fill="#fde68a"><circle cx="330" cy="230" r="4"/><circle cx="334" cy="226" r="4"/><circle cx="326" cy="226" r="4"/><circle cx="330" cy="222" r="4"/></g>
  <g fill="#c4b5fd"><circle cx="100" cy="240" r="4"/><circle cx="104" cy="236" r="4"/><circle cx="96" cy="236" r="4"/></g>
  <!-- soleil -->
  <circle cx="340" cy="55" r="22" fill="#fde047"/>
  <circle cx="340" cy="55" r="14" fill="#facc15"/>
  <!-- oiseaux -->
  <path d="M80,60 q5,-6 10,0 q5,-6 10,0" stroke="#1f2937" stroke-width="2" fill="none"/>
  <path d="M120,80 q4,-5 8,0 q4,-5 8,0" stroke="#1f2937" stroke-width="2" fill="none"/>
`);

// 2. Nûh — L'arche, la pluie, la montagne
const nuh = wrap(`
  <defs>
    <linearGradient id="sky-nuh" x1="0" x2="0" y1="0" y2="1">
      <stop offset="0%" stop-color="#475569"/>
      <stop offset="100%" stop-color="#94a3b8"/>
    </linearGradient>
  </defs>
  <rect width="400" height="260" fill="url(#sky-nuh)"/>
  <!-- nuages -->
  <ellipse cx="80" cy="40" rx="50" ry="14" fill="#cbd5e1"/>
  <ellipse cx="200" cy="30" rx="60" ry="16" fill="#cbd5e1"/>
  <ellipse cx="330" cy="50" rx="55" ry="14" fill="#cbd5e1"/>
  <!-- montagne au loin -->
  <path d="M250,180 L320,80 L390,180 Z" fill="#64748b"/>
  <path d="M300,110 L320,80 L340,110 Z" fill="#e2e8f0"/>
  <!-- pluie -->
  <g stroke="#7dd3fc" stroke-width="2" stroke-linecap="round" opacity="0.8">
    <line x1="40" y1="60" x2="36" y2="76"/>
    <line x1="60" y1="80" x2="56" y2="96"/>
    <line x1="100" y1="60" x2="96" y2="76"/>
    <line x1="140" y1="80" x2="136" y2="96"/>
    <line x1="180" y1="55" x2="176" y2="71"/>
    <line x1="220" y1="75" x2="216" y2="91"/>
    <line x1="260" y1="55" x2="256" y2="71"/>
    <line x1="300" y1="70" x2="296" y2="86"/>
    <line x1="350" y1="80" x2="346" y2="96"/>
    <line x1="380" y1="60" x2="376" y2="76"/>
  </g>
  <!-- eau -->
  <path d="M0,200 Q50,190 100,200 T200,200 T300,200 T400,200 L400,260 L0,260 Z" fill="#0ea5e9"/>
  <path d="M0,220 Q50,210 100,220 T200,220 T300,220 T400,220 L400,260 L0,260 Z" fill="#0284c7"/>
  <!-- arche -->
  <path d="M120,200 L280,200 L260,180 L140,180 Z" fill="#92400e"/>
  <rect x="160" y="140" width="80" height="40" fill="#b45309"/>
  <rect x="170" y="150" width="14" height="14" fill="#fef3c7"/>
  <rect x="195" y="150" width="14" height="14" fill="#fef3c7"/>
  <rect x="220" y="150" width="14" height="14" fill="#fef3c7"/>
  <!-- mât -->
  <rect x="198" y="100" width="4" height="40" fill="#78350f"/>
  <path d="M202,105 L240,120 L202,135 Z" fill="#fef3c7"/>
`);

// 3. Ibrâhîm — Étoiles, lune, et Ka'ba stylisée
const ibrahim = wrap(`
  <defs>
    <linearGradient id="sky-ibr" x1="0" x2="0" y1="0" y2="1">
      <stop offset="0%" stop-color="#1e1b4b"/>
      <stop offset="60%" stop-color="#7c2d12"/>
      <stop offset="100%" stop-color="#fbbf24"/>
    </linearGradient>
  </defs>
  <rect width="400" height="260" fill="url(#sky-ibr)"/>
  <!-- étoiles -->
  <g fill="#fef3c7">
    <circle cx="40" cy="40" r="2"/>
    <circle cx="90" cy="60" r="3"/>
    <circle cx="130" cy="30" r="2"/>
    <circle cx="180" cy="50" r="2.5"/>
    <circle cx="240" cy="35" r="2"/>
    <circle cx="290" cy="60" r="3"/>
    <circle cx="350" cy="40" r="2"/>
    <circle cx="370" cy="80" r="2"/>
    <circle cx="60" cy="100" r="2"/>
    <circle cx="320" cy="100" r="2"/>
  </g>
  <!-- croissant -->
  <g transform="translate(70 80)">
    <circle cx="0" cy="0" r="22" fill="#fde68a"/>
    <circle cx="6" cy="-4" r="20" fill="#1e1b4b"/>
  </g>
  <!-- montagnes -->
  <path d="M0,200 L80,140 L160,200 Z" fill="#1f2937" opacity="0.7"/>
  <path d="M240,200 L320,150 L400,200 Z" fill="#1f2937" opacity="0.7"/>
  <!-- sable -->
  <path d="M0,200 Q200,180 400,200 L400,260 L0,260 Z" fill="#fbbf24"/>
  <path d="M0,225 Q200,210 400,225 L400,260 L0,260 Z" fill="#f59e0b"/>
  <!-- Ka'ba stylisée -->
  <g transform="translate(170 150)">
    <rect x="0" y="0" width="60" height="55" fill="#1f2937"/>
    <rect x="0" y="20" width="60" height="6" fill="#fbbf24"/>
    <rect x="22" y="35" width="16" height="20" fill="#fbbf24" rx="2"/>
  </g>
  <!-- petite flamme symbolique au sol -->
  <g transform="translate(330 195)">
    <path d="M0,0 Q-4,-10 0,-18 Q4,-10 0,0 Z" fill="#fb923c"/>
    <path d="M0,-2 Q-2,-8 0,-12 Q2,-8 0,-2 Z" fill="#fde047"/>
  </g>
`);

// 4. Yûsuf — Onze étoiles, soleil, lune, et un puits
const yusuf = wrap(`
  <defs>
    <linearGradient id="sky-yus" x1="0" x2="0" y1="0" y2="1">
      <stop offset="0%" stop-color="#312e81"/>
      <stop offset="100%" stop-color="#7c3aed"/>
    </linearGradient>
  </defs>
  <rect width="400" height="260" fill="url(#sky-yus)"/>
  <!-- 11 étoiles disposées en arc -->
  <g fill="#fef9c3">
    <circle cx="50" cy="60" r="4"/>
    <circle cx="85" cy="45" r="4"/>
    <circle cx="120" cy="38" r="4"/>
    <circle cx="155" cy="35" r="4"/>
    <circle cx="200" cy="32" r="5"/>
    <circle cx="245" cy="35" r="4"/>
    <circle cx="280" cy="38" r="4"/>
    <circle cx="315" cy="45" r="4"/>
    <circle cx="350" cy="60" r="4"/>
    <circle cx="105" cy="90" r="3"/>
    <circle cx="295" cy="90" r="3"/>
  </g>
  <!-- soleil à gauche -->
  <g transform="translate(60 110)">
    <circle r="18" fill="#fde047"/>
    <circle r="12" fill="#facc15"/>
  </g>
  <!-- lune à droite -->
  <g transform="translate(340 110)">
    <circle r="20" fill="#e0e7ff"/>
    <circle cx="6" cy="-4" r="16" fill="#312e81"/>
  </g>
  <!-- sable -->
  <path d="M0,200 Q200,180 400,200 L400,260 L0,260 Z" fill="#fbbf24"/>
  <!-- puits -->
  <g transform="translate(165 165)">
    <ellipse cx="35" cy="40" rx="35" ry="8" fill="#451a03"/>
    <rect x="0" y="0" width="70" height="40" fill="#92400e"/>
    <ellipse cx="35" cy="0" rx="35" ry="8" fill="#1c0a00"/>
    <!-- briques -->
    <path d="M0,15 L70,15 M0,30 L70,30" stroke="#7c2d12" stroke-width="1"/>
    <path d="M15,0 L15,15 M35,15 L35,30 M50,0 L50,15 M20,30 L20,40 M50,30 L50,40" stroke="#7c2d12" stroke-width="1"/>
    <!-- toit -->
    <rect x="-5" y="-25" width="80" height="6" fill="#78350f"/>
    <rect x="0" y="-30" width="4" height="10" fill="#78350f"/>
    <rect x="66" y="-30" width="4" height="10" fill="#78350f"/>
    <path d="M-10,-30 L80,-30 L70,-40 L0,-40 Z" fill="#dc2626"/>
  </g>
`);

// 5. Mûsâ — Mer fendue, montagne au loin
const musa = wrap(`
  <defs>
    <linearGradient id="sky-mus" x1="0" x2="0" y1="0" y2="1">
      <stop offset="0%" stop-color="#fef3c7"/>
      <stop offset="100%" stop-color="#fdba74"/>
    </linearGradient>
    <linearGradient id="sea-mus" x1="0" x2="0" y1="0" y2="1">
      <stop offset="0%" stop-color="#06b6d4"/>
      <stop offset="100%" stop-color="#0e7490"/>
    </linearGradient>
  </defs>
  <rect width="400" height="260" fill="url(#sky-mus)"/>
  <!-- soleil -->
  <circle cx="200" cy="80" r="32" fill="#fbbf24" opacity="0.85"/>
  <circle cx="200" cy="80" r="22" fill="#fde047"/>
  <!-- montagne du Sinaï au fond -->
  <path d="M250,200 L330,90 L400,200 Z" fill="#7c2d12" opacity="0.7"/>
  <path d="M310,120 L330,90 L350,120 Z" fill="#fde68a"/>
  <!-- mer fendue : deux murs d'eau -->
  <path d="M0,200 L0,260 L160,260 L160,200 Q140,160 130,140 Q120,120 110,100 L0,100 Z" fill="url(#sea-mus)"/>
  <path d="M400,200 L400,260 L240,260 L240,200 Q260,160 270,140 Q280,120 290,100 L400,100 Z" fill="url(#sea-mus)"/>
  <!-- vagues sur les murs -->
  <g stroke="#bae6fd" stroke-width="2" fill="none">
    <path d="M40,140 q15,-5 30,0 t30,0"/>
    <path d="M30,170 q20,-5 40,0 t40,0"/>
    <path d="M260,140 q15,-5 30,0 t30,0"/>
    <path d="M270,170 q20,-5 40,0 t40,0"/>
  </g>
  <!-- chemin sec entre les deux -->
  <path d="M160,200 L240,200 L240,260 L160,260 Z" fill="#fbbf24"/>
  <path d="M160,205 L240,205 M170,220 L230,220 M165,235 L235,235 M170,250 L230,250" stroke="#f59e0b" stroke-width="1" opacity="0.6"/>
  <!-- empreintes (pas de pieds humains, juste petites traces stylisées) -->
  <g fill="#92400e" opacity="0.6">
    <ellipse cx="180" cy="225" rx="3" ry="5"/>
    <ellipse cx="200" cy="240" rx="3" ry="5"/>
    <ellipse cx="220" cy="225" rx="3" ry="5"/>
  </g>
`);

// 6. Sâlih — montagne, rocher fendu, chamelle
const salih = wrap(`
  <defs>
    <linearGradient id="sky-sal" x1="0" x2="0" y1="0" y2="1">
      <stop offset="0%" stop-color="#fde68a"/>
      <stop offset="100%" stop-color="#fb923c"/>
    </linearGradient>
  </defs>
  <rect width="400" height="260" fill="url(#sky-sal)"/>
  <!-- soleil -->
  <circle cx="320" cy="60" r="28" fill="#fff7ed" opacity="0.9"/>
  <circle cx="320" cy="60" r="20" fill="#fde047"/>
  <!-- montagnes au fond -->
  <path d="M0,170 L60,90 L120,150 L180,80 L240,160 L320,100 L400,170 L400,260 L0,260 Z" fill="#9a3412" opacity="0.7"/>
  <!-- rocher central fendu -->
  <g transform="translate(160 130)">
    <path d="M0,40 L0,0 Q15,-10 30,0 L30,40 Z" fill="#78716c"/>
    <path d="M50,40 L50,0 Q65,-10 80,0 L80,40 Z" fill="#78716c"/>
    <!-- fente -->
    <path d="M30,40 L30,0 L50,0 L50,40" fill="#1c1917"/>
    <!-- éclats -->
    <circle cx="40" cy="-3" r="2" fill="#fef3c7"/>
    <circle cx="42" cy="-10" r="1.5" fill="#fef3c7"/>
    <circle cx="38" cy="-15" r="1" fill="#fef3c7"/>
  </g>
  <!-- sol sablonneux -->
  <path d="M0,220 Q200,210 400,220 L400,260 L0,260 Z" fill="#fbbf24"/>
  <path d="M0,240 Q200,230 400,240 L400,260 L0,260 Z" fill="#f59e0b"/>
  <!-- chamelle stylisée (silhouette simple) -->
  <g transform="translate(240 195)" fill="#92400e">
    <!-- corps -->
    <ellipse cx="35" cy="15" rx="32" ry="10"/>
    <!-- bosse -->
    <path d="M20,10 Q30,-5 40,8 Q35,2 30,8 Z"/>
    <path d="M40,10 Q50,-5 60,8 Q55,2 50,8 Z"/>
    <!-- cou -->
    <rect x="55" y="-5" width="6" height="18" rx="2"/>
    <!-- tête -->
    <ellipse cx="64" cy="-8" rx="8" ry="5"/>
    <!-- pattes -->
    <rect x="14" y="22" width="3" height="14"/>
    <rect x="22" y="22" width="3" height="14"/>
    <rect x="46" y="22" width="3" height="14"/>
    <rect x="54" y="22" width="3" height="14"/>
    <!-- petit chamelon -->
    <ellipse cx="-15" cy="22" rx="14" ry="6"/>
    <path d="M-22,18 Q-18,10 -10,16 Z"/>
    <rect x="-22" y="26" width="2" height="8"/>
    <rect x="-12" y="26" width="2" height="8"/>
    <ellipse cx="0" cy="13" rx="4" ry="3"/>
  </g>
`);

// 7. Ayyûb — oasis, source jaillissante, palmier
const ayyub = wrap(`
  <defs>
    <linearGradient id="sky-ayy" x1="0" x2="0" y1="0" y2="1">
      <stop offset="0%" stop-color="#a7f3d0"/>
      <stop offset="100%" stop-color="#fef3c7"/>
    </linearGradient>
  </defs>
  <rect width="400" height="260" fill="url(#sky-ayy)"/>
  <!-- soleil doux -->
  <circle cx="60" cy="60" r="24" fill="#fde047" opacity="0.9"/>
  <!-- oiseaux -->
  <path d="M150,40 q5,-5 10,0 q5,-5 10,0" stroke="#1f2937" stroke-width="2" fill="none"/>
  <path d="M210,55 q4,-4 8,0 q4,-4 8,0" stroke="#1f2937" stroke-width="2" fill="none"/>
  <!-- collines -->
  <path d="M0,180 Q100,160 200,180 T400,175 L400,260 L0,260 Z" fill="#86efac"/>
  <!-- palmier -->
  <g transform="translate(80 100)">
    <rect x="-3" y="0" width="6" height="100" fill="#92400e"/>
    <path d="M0,0 Q-30,-15 -50,-5 Q-25,-5 0,5 Z" fill="#16a34a"/>
    <path d="M0,0 Q30,-15 50,-5 Q25,-5 0,5 Z" fill="#16a34a"/>
    <path d="M0,-5 Q-15,-30 -25,-25 Q-10,-15 0,5 Z" fill="#15803d"/>
    <path d="M0,-5 Q15,-30 25,-25 Q10,-15 0,5 Z" fill="#15803d"/>
    <path d="M0,-8 Q-5,-30 0,-40 Q5,-30 0,-8 Z" fill="#22c55e"/>
    <!-- dattes -->
    <circle cx="-3" cy="3" r="2" fill="#7c2d12"/>
    <circle cx="3" cy="5" r="2" fill="#7c2d12"/>
    <circle cx="0" cy="2" r="2" fill="#7c2d12"/>
  </g>
  <!-- source d'eau jaillissante -->
  <g transform="translate(220 150)">
    <!-- bassin -->
    <ellipse cx="0" cy="60" rx="55" ry="12" fill="#0ea5e9"/>
    <ellipse cx="0" cy="58" rx="45" ry="9" fill="#38bdf8"/>
    <!-- éclaboussures -->
    <g fill="#7dd3fc">
      <circle cx="-10" cy="40" r="3"/>
      <circle cx="0" cy="20" r="4"/>
      <circle cx="12" cy="35" r="3"/>
      <circle cx="-15" cy="10" r="2"/>
      <circle cx="20" cy="15" r="2"/>
      <circle cx="0" cy="0" r="3"/>
    </g>
    <!-- jet d'eau -->
    <path d="M-5,40 Q-3,20 0,0 Q3,20 5,40" fill="#bae6fd" stroke="#7dd3fc" stroke-width="1"/>
  </g>
  <!-- petites fleurs -->
  <g fill="#f9a8d4"><circle cx="40" cy="220" r="4"/><circle cx="44" cy="216" r="4"/><circle cx="36" cy="216" r="4"/></g>
  <g fill="#fde68a"><circle cx="350" cy="225" r="4"/><circle cx="354" cy="221" r="4"/><circle cx="346" cy="221" r="4"/></g>
`);

// 8. Yûnus — la baleine, la mer, la lune
const yunus = wrap(`
  <defs>
    <linearGradient id="sky-yun" x1="0" x2="0" y1="0" y2="1">
      <stop offset="0%" stop-color="#0c0a45"/>
      <stop offset="100%" stop-color="#1e3a8a"/>
    </linearGradient>
    <linearGradient id="sea-yun" x1="0" x2="0" y1="0" y2="1">
      <stop offset="0%" stop-color="#1e40af"/>
      <stop offset="100%" stop-color="#0f172a"/>
    </linearGradient>
  </defs>
  <rect width="400" height="260" fill="url(#sky-yun)"/>
  <!-- étoiles -->
  <g fill="#fef9c3">
    <circle cx="40" cy="40" r="2"/>
    <circle cx="100" cy="60" r="2.5"/>
    <circle cx="160" cy="35" r="2"/>
    <circle cx="280" cy="50" r="2"/>
    <circle cx="350" cy="30" r="2"/>
    <circle cx="370" cy="80" r="1.5"/>
  </g>
  <!-- croissant de lune -->
  <g transform="translate(320 70)">
    <circle r="22" fill="#fef3c7"/>
    <circle cx="7" cy="-5" r="20" fill="#0c0a45"/>
  </g>
  <!-- mer -->
  <rect y="140" width="400" height="120" fill="url(#sea-yun)"/>
  <!-- vagues -->
  <g stroke="#3b82f6" stroke-width="2" fill="none" opacity="0.7">
    <path d="M0,150 q20,-8 40,0 t40,0 t40,0 t40,0 t40,0 t40,0 t40,0 t40,0 t40,0"/>
    <path d="M0,170 q20,-6 40,0 t40,0 t40,0 t40,0 t40,0 t40,0 t40,0 t40,0 t40,0"/>
  </g>
  <!-- baleine -->
  <g transform="translate(150 175)">
    <!-- corps -->
    <ellipse cx="60" cy="20" rx="80" ry="28" fill="#475569"/>
    <ellipse cx="60" cy="14" rx="78" ry="22" fill="#64748b"/>
    <!-- ventre clair -->
    <ellipse cx="60" cy="32" rx="60" ry="10" fill="#94a3b8"/>
    <!-- queue -->
    <path d="M-15,15 L-50,0 L-40,15 L-50,30 Z" fill="#475569"/>
    <!-- nageoire -->
    <path d="M40,40 Q30,55 50,52 Z" fill="#334155"/>
    <!-- œil -->
    <circle cx="100" cy="14" r="3" fill="#fef9c3"/>
    <circle cx="101" cy="14" r="1.5" fill="#0f172a"/>
    <!-- bouche -->
    <path d="M125,22 Q115,28 100,25" stroke="#0f172a" stroke-width="1.5" fill="none"/>
    <!-- jet d'eau -->
    <g fill="#bae6fd" opacity="0.9">
      <ellipse cx="50" cy="-8" rx="3" ry="8"/>
      <ellipse cx="60" cy="-15" rx="4" ry="10"/>
      <ellipse cx="70" cy="-8" rx="3" ry="8"/>
    </g>
  </g>
`);

// 9. Dâwûd — vallée, mouton, harpe symbolique, oiseau
const dawud = wrap(`
  <defs>
    <linearGradient id="sky-daw" x1="0" x2="0" y1="0" y2="1">
      <stop offset="0%" stop-color="#fef3c7"/>
      <stop offset="100%" stop-color="#a78bfa"/>
    </linearGradient>
  </defs>
  <rect width="400" height="260" fill="url(#sky-daw)"/>
  <!-- montagnes -->
  <path d="M0,170 L80,80 L160,170 Z" fill="#7c3aed" opacity="0.6"/>
  <path d="M120,180 L220,70 L320,180 Z" fill="#6d28d9" opacity="0.6"/>
  <path d="M280,180 L360,100 L400,180 L400,180 Z" fill="#5b21b6" opacity="0.6"/>
  <!-- soleil/lune -->
  <circle cx="220" cy="70" r="20" fill="#fef9c3" opacity="0.9"/>
  <!-- oiseau qui écoute -->
  <g transform="translate(110 90)" fill="#1e293b">
    <ellipse cx="0" cy="0" rx="8" ry="5"/>
    <circle cx="6" cy="-3" r="4"/>
    <path d="M9,-4 L13,-5 L9,-2 Z" fill="#f59e0b"/>
    <path d="M-6,2 L-12,8 L-4,5 Z"/>
  </g>
  <!-- vallée -->
  <path d="M0,200 Q200,180 400,200 L400,260 L0,260 Z" fill="#86efac"/>
  <path d="M0,225 Q200,215 400,225 L400,260 L0,260 Z" fill="#4ade80"/>
  <!-- mouton stylisé -->
  <g transform="translate(80 215)">
    <ellipse cx="20" cy="0" rx="22" ry="14" fill="#f8fafc"/>
    <circle cx="28" cy="-8" r="6" fill="#f8fafc"/>
    <circle cx="38" cy="-3" r="5" fill="#f8fafc"/>
    <circle cx="32" cy="-14" r="5" fill="#f8fafc"/>
    <circle cx="22" cy="-12" r="5" fill="#f8fafc"/>
    <circle cx="12" cy="-10" r="5" fill="#f8fafc"/>
    <!-- tête -->
    <ellipse cx="42" cy="2" rx="6" ry="5" fill="#1f2937"/>
    <circle cx="44" cy="0" r="1.5" fill="#fff"/>
    <!-- pattes -->
    <rect x="8" y="12" width="3" height="8" fill="#1f2937"/>
    <rect x="18" y="12" width="3" height="8" fill="#1f2937"/>
    <rect x="28" y="12" width="3" height="8" fill="#1f2937"/>
    <rect x="36" y="12" width="3" height="8" fill="#1f2937"/>
  </g>
  <!-- harpe symbolique (instrument à cordes pour le Zaboûr) -->
  <g transform="translate(280 175)">
    <path d="M0,0 Q-15,-30 -25,-50 L25,-50 Q15,-30 0,0 Z" fill="#92400e"/>
    <path d="M-2,0 L-2,-50 M5,-5 L5,-50 M12,-10 L12,-50 M-9,-5 L-9,-50 M-16,-15 L-16,-50" stroke="#fde047" stroke-width="0.8"/>
    <ellipse cx="0" cy="0" rx="5" ry="2" fill="#451a03"/>
  </g>
`);

// 10. Sulaymân — trône, hirondelle/huppe, fourmi, vent
const sulayman = wrap(`
  <defs>
    <linearGradient id="sky-sul" x1="0" x2="0" y1="0" y2="1">
      <stop offset="0%" stop-color="#fde68a"/>
      <stop offset="100%" stop-color="#86efac"/>
    </linearGradient>
  </defs>
  <rect width="400" height="260" fill="url(#sky-sul)"/>
  <!-- soleil -->
  <circle cx="350" cy="55" r="22" fill="#fde047"/>
  <!-- vent stylisé -->
  <g stroke="#fbbf24" stroke-width="2" fill="none" opacity="0.6">
    <path d="M40,40 q30,-10 60,0 q-10,5 -20,0"/>
    <path d="M60,80 q40,-8 80,0 q-12,5 -24,0"/>
    <path d="M30,120 q35,-10 70,0 q-12,5 -24,0"/>
  </g>
  <!-- huppe (oiseau) en vol -->
  <g transform="translate(220 80)" fill="#92400e">
    <ellipse cx="0" cy="0" rx="14" ry="6"/>
    <circle cx="11" cy="-2" r="6"/>
    <!-- crête -->
    <path d="M9,-7 L11,-15 L13,-7 M12,-7 L14,-16 L16,-7 M15,-7 L17,-15 L19,-7" stroke="#451a03" stroke-width="1.5" fill="none"/>
    <!-- bec -->
    <path d="M17,-2 L24,-1 L17,1 Z" fill="#1f2937"/>
    <!-- ailes -->
    <path d="M-5,-2 L-15,-8 L-5,2 Z" fill="#451a03"/>
    <path d="M-10,2 L-22,8 L-8,4 Z" fill="#451a03"/>
    <!-- queue -->
    <path d="M-12,0 L-22,-2 L-22,4 Z" fill="#1f2937"/>
  </g>
  <!-- palais avec coupole -->
  <g transform="translate(50 130)">
    <rect x="0" y="20" width="80" height="70" fill="#fef3c7"/>
    <path d="M0,20 Q40,-15 80,20 Z" fill="#22c55e"/>
    <rect x="30" y="55" width="20" height="35" fill="#7c2d12" rx="10"/>
    <!-- minarets -->
    <rect x="-5" y="0" width="6" height="35" fill="#fef3c7"/>
    <path d="M-5,0 L-2,-10 L1,0 Z" fill="#22c55e"/>
    <rect x="79" y="0" width="6" height="35" fill="#fef3c7"/>
    <path d="M79,0 L82,-10 L85,0 Z" fill="#22c55e"/>
  </g>
  <!-- trône au centre -->
  <g transform="translate(200 175)">
    <rect x="-30" y="0" width="60" height="40" fill="#a16207"/>
    <rect x="-35" y="-30" width="70" height="35" fill="#ca8a04" rx="5"/>
    <!-- coussin -->
    <rect x="-25" y="-5" width="50" height="10" fill="#dc2626" rx="2"/>
    <!-- pieds -->
    <rect x="-30" y="40" width="8" height="10" fill="#78350f"/>
    <rect x="22" y="40" width="8" height="10" fill="#78350f"/>
    <!-- couronne sur le trône -->
    <g transform="translate(0 -38)">
      <path d="M-12,0 L-8,-10 L-4,-3 L0,-12 L4,-3 L8,-10 L12,0 Z" fill="#fbbf24"/>
      <circle cx="0" cy="-12" r="2" fill="#dc2626"/>
    </g>
  </g>
  <!-- sol/herbe -->
  <path d="M0,225 Q200,215 400,225 L400,260 L0,260 Z" fill="#4ade80"/>
  <!-- fourmis (rangée) -->
  <g fill="#1f2937">
    <ellipse cx="320" cy="240" rx="3" ry="2"/>
    <ellipse cx="335" cy="240" rx="3" ry="2"/>
    <ellipse cx="350" cy="240" rx="3" ry="2"/>
  </g>
`);

// 11. Zakariyâ — mihrab, colombe, fruits hors saison
const zakariya = wrap(`
  <defs>
    <linearGradient id="sky-zak" x1="0" x2="0" y1="0" y2="1">
      <stop offset="0%" stop-color="#fce7f3"/>
      <stop offset="100%" stop-color="#fef3c7"/>
    </linearGradient>
  </defs>
  <rect width="400" height="260" fill="url(#sky-zak)"/>
  <!-- soleil doux -->
  <circle cx="60" cy="55" r="22" fill="#fde047" opacity="0.7"/>
  <!-- mihrab (niche en arche) -->
  <g transform="translate(140 60)">
    <rect x="0" y="50" width="120" height="150" fill="#fef3c7" stroke="#a16207" stroke-width="2"/>
    <!-- arche intérieure -->
    <path d="M15,200 L15,100 Q15,60 60,60 Q105,60 105,100 L105,200 Z" fill="#fef9c3" stroke="#a16207" stroke-width="2"/>
    <!-- décoration arche -->
    <path d="M25,180 L25,100 Q25,72 60,72 Q95,72 95,100 L95,180" fill="none" stroke="#ca8a04" stroke-width="1.5" stroke-dasharray="2 3"/>
    <!-- plat de fruits dans la niche -->
    <ellipse cx="60" cy="180" rx="28" ry="6" fill="#a16207"/>
    <circle cx="48" cy="170" r="6" fill="#dc2626"/>
    <circle cx="60" cy="167" r="7" fill="#ea580c"/>
    <circle cx="72" cy="170" r="6" fill="#a3e635"/>
    <circle cx="55" cy="160" r="5" fill="#facc15"/>
    <circle cx="68" cy="160" r="5" fill="#dc2626"/>
    <!-- petites feuilles -->
    <path d="M56,158 q4,-4 8,0" stroke="#16a34a" stroke-width="1.5" fill="none"/>
  </g>
  <!-- colombe blanche en vol -->
  <g transform="translate(70 130)" fill="#fff">
    <ellipse cx="0" cy="0" rx="14" ry="6"/>
    <circle cx="11" cy="-3" r="5"/>
    <path d="M15,-3 L20,-2 L15,-1 Z" fill="#f59e0b"/>
    <path d="M-5,-3 Q-15,-15 -25,-8 Q-15,-3 -5,0 Z" fill="#f1f5f9"/>
    <path d="M-3,3 Q-15,12 -22,8 Q-12,3 -3,5 Z" fill="#f1f5f9"/>
    <path d="M-12,0 L-20,2 L-20,-2 Z" fill="#e2e8f0"/>
    <circle cx="13" cy="-3" r="0.8" fill="#1f2937"/>
  </g>
  <!-- petites étoiles -->
  <g fill="#fbbf24">
    <circle cx="320" cy="40" r="3"/>
    <circle cx="350" cy="80" r="2"/>
    <circle cx="100" cy="60" r="2"/>
  </g>
`);

// 12. ʿÎsâ — palmier, dattes, source, étoile lumineuse
const isa = wrap(`
  <defs>
    <linearGradient id="sky-isa" x1="0" x2="0" y1="0" y2="1">
      <stop offset="0%" stop-color="#bae6fd"/>
      <stop offset="100%" stop-color="#fef3c7"/>
    </linearGradient>
  </defs>
  <rect width="400" height="260" fill="url(#sky-isa)"/>
  <!-- étoile lumineuse principale -->
  <g transform="translate(320 60)">
    <circle r="14" fill="#fef9c3" opacity="0.6"/>
    <path d="M0,-18 L4,-4 L18,0 L4,4 L0,18 L-4,4 L-18,0 L-4,-4 Z" fill="#fde047"/>
  </g>
  <!-- rayons -->
  <g stroke="#fde047" stroke-width="1" opacity="0.5">
    <line x1="320" y1="20" x2="320" y2="0"/>
    <line x1="280" y1="60" x2="260" y2="60"/>
    <line x1="360" y1="60" x2="380" y2="60"/>
    <line x1="295" y1="35" x2="285" y2="25"/>
    <line x1="345" y1="35" x2="355" y2="25"/>
  </g>
  <!-- collines -->
  <path d="M0,180 Q100,160 200,180 T400,175 L400,260 L0,260 Z" fill="#fde68a"/>
  <path d="M0,210 Q100,200 200,210 T400,205 L400,260 L0,260 Z" fill="#fcd34d"/>
  <!-- palmier (sec qui revit) -->
  <g transform="translate(180 100)">
    <rect x="-4" y="0" width="8" height="120" fill="#92400e"/>
    <!-- palmes -->
    <path d="M0,0 Q-35,-5 -55,5 Q-25,0 0,8 Z" fill="#16a34a"/>
    <path d="M0,0 Q35,-5 55,5 Q25,0 0,8 Z" fill="#16a34a"/>
    <path d="M0,-3 Q-15,-25 -28,-22 Q-12,-12 0,5 Z" fill="#15803d"/>
    <path d="M0,-3 Q15,-25 28,-22 Q12,-12 0,5 Z" fill="#15803d"/>
    <path d="M0,-5 Q-3,-30 0,-40 Q3,-30 0,-5 Z" fill="#22c55e"/>
    <!-- régime de dattes mûres -->
    <g fill="#7c2d12">
      <circle cx="-6" cy="3" r="2"/>
      <circle cx="6" cy="3" r="2"/>
      <circle cx="0" cy="6" r="2"/>
      <circle cx="-3" cy="9" r="2"/>
      <circle cx="3" cy="9" r="2"/>
    </g>
  </g>
  <!-- source d'eau -->
  <g transform="translate(220 200)">
    <ellipse cx="0" cy="0" rx="40" ry="8" fill="#0ea5e9"/>
    <ellipse cx="0" cy="-2" rx="32" ry="5" fill="#38bdf8"/>
    <g stroke="#7dd3fc" stroke-width="1.5" fill="none">
      <path d="M-15,-3 q5,-2 10,0"/>
      <path d="M5,-3 q5,-2 10,0"/>
    </g>
  </g>
  <!-- petites fleurs -->
  <g fill="#fda4af"><circle cx="50" cy="225" r="3"/><circle cx="54" cy="221" r="3"/><circle cx="46" cy="221" r="3"/></g>
  <g fill="#c4b5fd"><circle cx="350" cy="220" r="3"/><circle cx="354" cy="216" r="3"/><circle cx="346" cy="216" r="3"/></g>
`);

// 13. Muhammad ﷺ — montagne de Hira, lumière de la révélation, croissant et étoile
const muhammad = wrap(`
  <defs>
    <linearGradient id="sky-muh" x1="0" x2="0" y1="0" y2="1">
      <stop offset="0%" stop-color="#0c0a45"/>
      <stop offset="60%" stop-color="#7c3aed"/>
      <stop offset="100%" stop-color="#fb923c"/>
    </linearGradient>
    <radialGradient id="hira-light" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#fef9c3" stop-opacity="1"/>
      <stop offset="60%" stop-color="#fde047" stop-opacity="0.4"/>
      <stop offset="100%" stop-color="#fde047" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="400" height="260" fill="url(#sky-muh)"/>
  <!-- étoiles -->
  <g fill="#fef9c3">
    <circle cx="40" cy="40" r="2"/>
    <circle cx="90" cy="25" r="2"/>
    <circle cx="320" cy="35" r="2.5"/>
    <circle cx="370" cy="60" r="2"/>
    <circle cx="60" cy="80" r="1.5"/>
  </g>
  <!-- croissant + étoile (symbole) -->
  <g transform="translate(70 60)">
    <circle r="20" fill="#fef3c7"/>
    <circle cx="6" cy="-4" r="18" fill="#0c0a45"/>
    <g transform="translate(28 4)" fill="#fde047">
      <path d="M0,-8 L2,-2 L8,-2 L3,2 L5,8 L0,4 L-5,8 L-3,2 L-8,-2 L-2,-2 Z"/>
    </g>
  </g>
  <!-- montagnes -->
  <path d="M0,180 L60,120 L130,180 Z" fill="#1e293b" opacity="0.85"/>
  <path d="M260,180 L340,90 L400,180 Z" fill="#1e293b" opacity="0.85"/>
  <!-- mont Hira au centre, plus haut -->
  <path d="M120,210 L200,60 L290,210 Z" fill="#0f172a"/>
  <!-- halo de lumière sur la montagne (révélation) -->
  <circle cx="200" cy="100" r="60" fill="url(#hira-light)"/>
  <!-- ouverture de la grotte -->
  <ellipse cx="200" cy="140" rx="14" ry="20" fill="#fef3c7"/>
  <ellipse cx="200" cy="140" rx="9" ry="14" fill="#fde047"/>
  <!-- rayons -->
  <g stroke="#fde047" stroke-width="1.5" opacity="0.6">
    <line x1="200" y1="60" x2="200" y2="40"/>
    <line x1="170" y1="80" x2="155" y2="65"/>
    <line x1="230" y1="80" x2="245" y2="65"/>
    <line x1="155" y1="120" x2="135" y2="115"/>
    <line x1="245" y1="120" x2="265" y2="115"/>
  </g>
  <!-- sol/sable -->
  <path d="M0,210 Q200,200 400,210 L400,260 L0,260 Z" fill="#fbbf24"/>
  <path d="M0,235 Q200,225 400,235 L400,260 L0,260 Z" fill="#f59e0b"/>
  <!-- petite caravane (chameau symbolique au loin) -->
  <g transform="translate(330 215)" fill="#78350f" opacity="0.6">
    <ellipse cx="0" cy="0" rx="10" ry="4"/>
    <path d="M-4,0 Q0,-7 4,0 Z"/>
    <rect x="6" y="-5" width="2" height="6"/>
    <ellipse cx="9" cy="-7" rx="3" ry="2"/>
  </g>
`);

// 14. Idris — étoiles, plume d'écriture, lumière du ciel
const idris = wrap(`
  <defs>
    <linearGradient id="sky-idr" x1="0" x2="0" y1="0" y2="1">
      <stop offset="0%" stop-color="#1e1b4b"/>
      <stop offset="100%" stop-color="#7c3aed"/>
    </linearGradient>
  </defs>
  <rect width="400" height="260" fill="url(#sky-idr)"/>
  <!-- étoiles + constellations -->
  <g fill="#fef9c3">
    <circle cx="40" cy="40" r="3"/>
    <circle cx="90" cy="60" r="2.5"/>
    <circle cx="130" cy="30" r="2"/>
    <circle cx="180" cy="70" r="3"/>
    <circle cx="250" cy="40" r="2"/>
    <circle cx="300" cy="80" r="3"/>
    <circle cx="350" cy="50" r="2"/>
    <circle cx="80" cy="120" r="2"/>
    <circle cx="320" cy="130" r="2"/>
  </g>
  <g stroke="#fef9c3" stroke-width="0.5" opacity="0.6">
    <line x1="40" y1="40" x2="90" y2="60"/>
    <line x1="90" y1="60" x2="130" y2="30"/>
    <line x1="130" y1="30" x2="180" y2="70"/>
  </g>
  <!-- rayon de lumière vertical -->
  <path d="M180,0 L220,0 L240,260 L160,260 Z" fill="#fde047" opacity="0.15"/>
  <!-- pupitre/livre -->
  <g transform="translate(150 170)">
    <path d="M0,30 L100,30 L100,40 L0,40 Z" fill="#451a03"/>
    <path d="M5,30 L48,15 L48,30 Z" fill="#fef3c7"/>
    <path d="M52,15 L95,30 L52,30 Z" fill="#fef3c7"/>
    <line x1="48" y1="15" x2="48" y2="30" stroke="#a16207" stroke-width="0.5"/>
    <line x1="52" y1="15" x2="52" y2="30" stroke="#a16207" stroke-width="0.5"/>
    <!-- lignes d'écriture -->
    <g stroke="#1f2937" stroke-width="0.5" opacity="0.5">
      <line x1="10" y1="20" x2="44" y2="20"/>
      <line x1="14" y1="24" x2="44" y2="24"/>
      <line x1="56" y1="20" x2="90" y2="20"/>
      <line x1="56" y1="24" x2="86" y2="24"/>
    </g>
  </g>
  <!-- plume d'écriture -->
  <g transform="translate(260 130) rotate(-30)" fill="#fef9c3">
    <path d="M0,0 Q5,-30 0,-50 Q-5,-30 0,0 Z"/>
    <rect x="-1" y="0" width="2" height="20" fill="#92400e"/>
    <path d="M-3,18 L3,18 L3,22 L-3,22 Z" fill="#1f2937"/>
  </g>
  <!-- sol -->
  <path d="M0,225 L400,225 L400,260 L0,260 Z" fill="#312e81"/>
`);

// 15. Hûd — palais effondrés, vent destructeur, désert
const hud = wrap(`
  <defs>
    <linearGradient id="sky-hud" x1="0" x2="0" y1="0" y2="1">
      <stop offset="0%" stop-color="#fcd34d"/>
      <stop offset="100%" stop-color="#dc2626"/>
    </linearGradient>
  </defs>
  <rect width="400" height="260" fill="url(#sky-hud)"/>
  <!-- soleil rouge -->
  <circle cx="320" cy="60" r="28" fill="#fde047" opacity="0.6"/>
  <circle cx="320" cy="60" r="20" fill="#f97316"/>
  <!-- vent (lignes courbes) -->
  <g stroke="#fef3c7" stroke-width="2" fill="none" opacity="0.7">
    <path d="M0,40 q40,-15 80,0 q40,15 80,0 q40,-15 80,0"/>
    <path d="M0,80 q50,-10 100,0 q50,10 100,0 q50,-10 100,0"/>
    <path d="M0,120 q40,-12 80,0 q40,12 80,0 q40,-12 80,0"/>
    <path d="M0,160 q50,-8 100,0 q50,8 100,0"/>
  </g>
  <!-- sable/désert -->
  <path d="M0,180 Q200,160 400,180 L400,260 L0,260 Z" fill="#fbbf24"/>
  <path d="M0,210 Q200,195 400,210 L400,260 L0,260 Z" fill="#d97706"/>
  <!-- ruines de palais (renversés) -->
  <g fill="#7c2d12">
    <!-- colonne renversée 1 -->
    <rect x="40" y="195" width="60" height="14" rx="2"/>
    <ellipse cx="40" cy="202" rx="6" ry="8"/>
    <ellipse cx="100" cy="202" rx="6" ry="8"/>
    <!-- colonne renversée 2 -->
    <rect x="120" y="190" width="50" height="14" rx="2" transform="rotate(-15 145 197)"/>
    <!-- colonne debout (cassée) -->
    <rect x="200" y="160" width="14" height="35" fill="#92400e"/>
    <rect x="195" y="155" width="24" height="6" fill="#a16207"/>
    <!-- débris -->
    <rect x="240" y="200" width="20" height="6"/>
    <rect x="270" y="195" width="14" height="8"/>
    <rect x="305" y="200" width="22" height="5"/>
    <rect x="340" y="198" width="16" height="7"/>
    <!-- pierres éparses -->
    <circle cx="50" cy="218" r="3"/>
    <circle cx="180" cy="220" r="4"/>
    <circle cx="280" cy="222" r="3"/>
    <circle cx="370" cy="218" r="3"/>
  </g>
`);

// 16. Lût — ville renversée, pluie de pierres
const lut = wrap(`
  <defs>
    <linearGradient id="sky-lut" x1="0" x2="0" y1="0" y2="1">
      <stop offset="0%" stop-color="#7f1d1d"/>
      <stop offset="100%" stop-color="#1e1b4b"/>
    </linearGradient>
  </defs>
  <rect width="400" height="260" fill="url(#sky-lut)"/>
  <!-- pluie de pierres -->
  <g fill="#a3a3a3">
    <circle cx="40" cy="30" r="3"/>
    <circle cx="80" cy="50" r="2.5"/>
    <circle cx="120" cy="20" r="3"/>
    <circle cx="170" cy="40" r="2.5"/>
    <circle cx="220" cy="25" r="3"/>
    <circle cx="270" cy="50" r="2.5"/>
    <circle cx="320" cy="30" r="3"/>
    <circle cx="370" cy="45" r="2.5"/>
    <circle cx="60" cy="80" r="2"/>
    <circle cx="150" cy="90" r="2.5"/>
    <circle cx="240" cy="80" r="2"/>
    <circle cx="350" cy="90" r="2"/>
  </g>
  <g stroke="#a3a3a3" stroke-width="1" opacity="0.6">
    <line x1="40" y1="30" x2="36" y2="50"/>
    <line x1="120" y1="20" x2="116" y2="45"/>
    <line x1="220" y1="25" x2="216" y2="50"/>
    <line x1="320" y1="30" x2="316" y2="55"/>
  </g>
  <!-- lune sang -->
  <circle cx="60" cy="55" r="22" fill="#dc2626" opacity="0.6"/>
  <!-- ville renversée (maisons à l'envers) -->
  <g transform="translate(0 150)" fill="#451a03">
    <!-- maison renversée 1 -->
    <g transform="translate(60 0) scale(1 -1)">
      <rect x="0" y="-40" width="50" height="40"/>
      <path d="M-5,-40 L25,-60 L55,-40 Z"/>
      <rect x="20" y="-15" width="10" height="15" fill="#fef3c7"/>
      <rect x="5" y="-30" width="8" height="8" fill="#fef3c7"/>
      <rect x="37" y="-30" width="8" height="8" fill="#fef3c7"/>
    </g>
    <!-- maison renversée 2 -->
    <g transform="translate(180 0) scale(1 -1)">
      <rect x="0" y="-50" width="60" height="50"/>
      <path d="M-5,-50 L30,-75 L65,-50 Z"/>
      <rect x="25" y="-15" width="10" height="15" fill="#fef3c7"/>
      <rect x="8" y="-35" width="10" height="10" fill="#fef3c7"/>
      <rect x="42" y="-35" width="10" height="10" fill="#fef3c7"/>
    </g>
    <!-- maison renversée 3 -->
    <g transform="translate(290 0) scale(1 -1)">
      <rect x="0" y="-35" width="45" height="35"/>
      <path d="M-3,-35 L22,-50 L48,-35 Z"/>
      <rect x="18" y="-12" width="9" height="12" fill="#fef3c7"/>
    </g>
  </g>
  <!-- mer Morte au pied -->
  <path d="M0,230 Q200,220 400,230 L400,260 L0,260 Z" fill="#0f172a"/>
  <path d="M0,245 Q200,238 400,245 L400,260 L0,260 Z" fill="#1e293b"/>
`);

// 17. Ismâʿîl — Ka'ba en construction, source de Zamzam
const ismail = wrap(`
  <defs>
    <linearGradient id="sky-ism" x1="0" x2="0" y1="0" y2="1">
      <stop offset="0%" stop-color="#fde68a"/>
      <stop offset="100%" stop-color="#fbbf24"/>
    </linearGradient>
  </defs>
  <rect width="400" height="260" fill="url(#sky-ism)"/>
  <!-- soleil -->
  <circle cx="60" cy="55" r="25" fill="#fef3c7" opacity="0.7"/>
  <!-- montagnes (Safa et Marwa stylisées) -->
  <path d="M0,180 L60,120 L120,180 Z" fill="#a16207" opacity="0.7"/>
  <path d="M280,180 L340,120 L400,180 Z" fill="#a16207" opacity="0.7"/>
  <!-- sol sablonneux -->
  <path d="M0,180 L400,180 L400,260 L0,260 Z" fill="#fbbf24"/>
  <path d="M0,210 Q200,200 400,210 L400,260 L0,260 Z" fill="#d97706"/>
  <!-- Ka'ba en construction -->
  <g transform="translate(150 130)">
    <!-- base -->
    <rect x="0" y="20" width="100" height="55" fill="#1f2937"/>
    <!-- bandes dorées (kiswa) -->
    <rect x="0" y="35" width="100" height="6" fill="#fbbf24"/>
    <!-- porte -->
    <rect x="40" y="50" width="20" height="25" fill="#fbbf24" rx="2"/>
    <!-- mur en construction sur le toit -->
    <g fill="#374151">
      <rect x="0" y="14" width="20" height="6"/>
      <rect x="25" y="14" width="20" height="6"/>
      <rect x="55" y="14" width="20" height="6"/>
      <rect x="80" y="14" width="20" height="6"/>
      <rect x="10" y="8" width="20" height="6"/>
      <rect x="40" y="8" width="20" height="6"/>
      <rect x="70" y="8" width="20" height="6"/>
    </g>
    <!-- pierres au pied (à monter) -->
    <g fill="#374151">
      <rect x="-30" y="68" width="14" height="8"/>
      <rect x="-25" y="60" width="14" height="8"/>
      <rect x="115" y="68" width="14" height="8"/>
    </g>
  </g>
  <!-- source de Zamzam -->
  <g transform="translate(80 200)">
    <ellipse cx="0" cy="0" rx="20" ry="6" fill="#0ea5e9"/>
    <ellipse cx="0" cy="-2" rx="14" ry="3" fill="#38bdf8"/>
    <g fill="#7dd3fc"><circle cx="-5" cy="-8" r="2"/><circle cx="3" cy="-12" r="2"/><circle cx="0" cy="-18" r="1.5"/></g>
  </g>
  <!-- arc et flèches (Ismâʿîl était archer) -->
  <g transform="translate(310 180)">
    <path d="M0,0 Q15,-25 0,-50" stroke="#7c2d12" stroke-width="3" fill="none"/>
    <line x1="0" y1="0" x2="0" y2="-50" stroke="#451a03" stroke-width="0.5"/>
    <!-- flèche -->
    <line x1="-5" y1="-25" x2="20" y2="-25" stroke="#92400e" stroke-width="1.5"/>
    <path d="M20,-25 L25,-23 L20,-22 Z" fill="#1f2937"/>
    <path d="M-5,-25 L-9,-27 L-9,-23 Z" fill="#fef3c7"/>
  </g>
`);

// 18. Ishâq — anges visiteurs (silhouettes), repas, fleurs (annonciation)
const ishaq = wrap(`
  <defs>
    <linearGradient id="sky-ish" x1="0" x2="0" y1="0" y2="1">
      <stop offset="0%" stop-color="#fce7f3"/>
      <stop offset="100%" stop-color="#fef3c7"/>
    </linearGradient>
  </defs>
  <rect width="400" height="260" fill="url(#sky-ish)"/>
  <!-- soleil/lumière -->
  <circle cx="200" cy="60" r="35" fill="#fef9c3" opacity="0.5"/>
  <circle cx="200" cy="60" r="22" fill="#fde047"/>
  <!-- rayons -->
  <g stroke="#fde047" stroke-width="1" opacity="0.5">
    <line x1="200" y1="20" x2="200" y2="0"/>
    <line x1="160" y1="60" x2="140" y2="60"/>
    <line x1="240" y1="60" x2="260" y2="60"/>
    <line x1="175" y1="35" x2="160" y2="20"/>
    <line x1="225" y1="35" x2="240" y2="20"/>
  </g>
  <!-- 3 colonnes lumineuses (anges visiteurs) -->
  <g fill="#fef9c3" opacity="0.7">
    <ellipse cx="120" cy="160" rx="20" ry="40"/>
    <ellipse cx="200" cy="155" rx="22" ry="45"/>
    <ellipse cx="280" cy="160" rx="20" ry="40"/>
  </g>
  <g fill="#fde047" opacity="0.5">
    <circle cx="120" cy="125" r="14"/>
    <circle cx="200" cy="115" r="16"/>
    <circle cx="280" cy="125" r="14"/>
  </g>
  <!-- collines -->
  <path d="M0,200 Q200,180 400,200 L400,260 L0,260 Z" fill="#fbbf24"/>
  <path d="M0,225 Q200,215 400,225 L400,260 L0,260 Z" fill="#d97706"/>
  <!-- table avec repas -->
  <g transform="translate(60 195)">
    <rect x="0" y="20" width="80" height="6" fill="#92400e"/>
    <rect x="5" y="26" width="3" height="20" fill="#7c2d12"/>
    <rect x="72" y="26" width="3" height="20" fill="#7c2d12"/>
    <!-- plat -->
    <ellipse cx="40" cy="20" rx="30" ry="6" fill="#a16207"/>
    <ellipse cx="40" cy="18" rx="22" ry="4" fill="#fbbf24"/>
    <!-- nourriture -->
    <ellipse cx="35" cy="14" rx="6" ry="3" fill="#7c2d12"/>
    <ellipse cx="50" cy="14" rx="5" ry="3" fill="#dc2626"/>
  </g>
  <!-- petites fleurs joie -->
  <g fill="#f9a8d4">
    <circle cx="320" cy="220" r="4"/><circle cx="324" cy="216" r="4"/><circle cx="316" cy="216" r="4"/><circle cx="320" cy="212" r="4"/>
  </g>
  <g fill="#a78bfa">
    <circle cx="350" cy="235" r="3"/><circle cx="354" cy="231" r="3"/><circle cx="346" cy="231" r="3"/>
  </g>
`);

// 19. Yaʿqûb — 12 étoiles (12 fils), chemise, larmes/bénédiction
const yaqub = wrap(`
  <defs>
    <linearGradient id="sky-yaq" x1="0" x2="0" y1="0" y2="1">
      <stop offset="0%" stop-color="#1e3a8a"/>
      <stop offset="100%" stop-color="#7c3aed"/>
    </linearGradient>
  </defs>
  <rect width="400" height="260" fill="url(#sky-yaq)"/>
  <!-- 12 étoiles disposées en cercle -->
  <g fill="#fef9c3">
    <circle cx="200" cy="40" r="4"/>
    <circle cx="260" cy="50" r="3"/>
    <circle cx="310" cy="80" r="3"/>
    <circle cx="335" cy="125" r="3"/>
    <circle cx="335" cy="165" r="3"/>
    <circle cx="310" cy="200" r="3"/>
    <circle cx="260" cy="220" r="3"/>
    <circle cx="200" cy="225" r="4"/>
    <circle cx="140" cy="220" r="3"/>
    <circle cx="90" cy="200" r="3"/>
    <circle cx="65" cy="165" r="3"/>
    <circle cx="65" cy="125" r="3"/>
  </g>
  <!-- petites étoiles décoratives -->
  <g fill="#fef9c3" opacity="0.6">
    <circle cx="40" cy="50" r="1.5"/>
    <circle cx="370" cy="50" r="1.5"/>
    <circle cx="380" cy="200" r="1.5"/>
  </g>
  <!-- chemise (de Yûsuf qu'on retrouve) -->
  <g transform="translate(150 110)">
    <!-- col -->
    <path d="M30,0 L50,0 L60,15 L40,15 Z" fill="#fef3c7"/>
    <path d="M50,0 L70,0 L60,15 L40,15 Z" fill="#fef3c7"/>
    <!-- corps de la chemise -->
    <path d="M20,15 L80,15 L95,30 L100,90 L0,90 L5,30 Z" fill="#fbbf24"/>
    <!-- manches -->
    <path d="M5,30 L-15,50 L-10,75 L10,55 Z" fill="#fbbf24"/>
    <path d="M95,30 L115,50 L110,75 L90,55 Z" fill="#fbbf24"/>
    <!-- bordures -->
    <g stroke="#a16207" stroke-width="1.5" fill="none">
      <path d="M20,15 L80,15"/>
      <path d="M40,15 L60,15"/>
      <line x1="50" y1="30" x2="50" y2="85"/>
    </g>
    <!-- décor floral -->
    <circle cx="35" cy="50" r="3" fill="#dc2626"/>
    <circle cx="65" cy="50" r="3" fill="#dc2626"/>
    <circle cx="50" cy="65" r="3" fill="#dc2626"/>
  </g>
  <!-- larmes/gouttes (espoir et joie) -->
  <g fill="#7dd3fc">
    <path d="M105,200 q-3,8 0,12 q3,-4 0,-12 Z"/>
    <path d="M295,205 q-3,8 0,12 q3,-4 0,-12 Z"/>
  </g>
`);

// 20. Shouʿayb — balance et poids (commerce)
const shuayb = wrap(`
  <defs>
    <linearGradient id="sky-shu" x1="0" x2="0" y1="0" y2="1">
      <stop offset="0%" stop-color="#a7f3d0"/>
      <stop offset="100%" stop-color="#fef3c7"/>
    </linearGradient>
  </defs>
  <rect width="400" height="260" fill="url(#sky-shu)"/>
  <!-- soleil -->
  <circle cx="340" cy="55" r="22" fill="#fde047"/>
  <!-- collines -->
  <path d="M0,180 Q100,160 200,180 T400,175 L400,260 L0,260 Z" fill="#86efac"/>
  <!-- balance romaine au centre -->
  <g transform="translate(200 90)">
    <!-- pied -->
    <rect x="-3" y="60" width="6" height="80" fill="#78350f"/>
    <ellipse cx="0" cy="140" rx="20" ry="5" fill="#451a03"/>
    <!-- traverse -->
    <rect x="-70" y="55" width="140" height="6" fill="#a16207"/>
    <!-- chaînes gauche -->
    <line x1="-65" y1="60" x2="-65" y2="80" stroke="#1f2937" stroke-width="1"/>
    <line x1="-50" y1="60" x2="-65" y2="80" stroke="#1f2937" stroke-width="1"/>
    <!-- plateau gauche (lourd, plus bas) -->
    <ellipse cx="-65" cy="85" rx="22" ry="6" fill="#fbbf24"/>
    <ellipse cx="-65" cy="83" rx="20" ry="5" fill="#fde047"/>
    <!-- pièces -->
    <circle cx="-72" cy="80" r="3" fill="#a16207"/>
    <circle cx="-65" cy="78" r="3" fill="#a16207"/>
    <circle cx="-58" cy="80" r="3" fill="#a16207"/>
    <!-- chaînes droite -->
    <line x1="50" y1="60" x2="65" y2="70" stroke="#1f2937" stroke-width="1"/>
    <line x1="80" y1="60" x2="65" y2="70" stroke="#1f2937" stroke-width="1"/>
    <!-- plateau droite -->
    <ellipse cx="65" cy="75" rx="22" ry="6" fill="#fbbf24"/>
    <ellipse cx="65" cy="73" rx="20" ry="5" fill="#fde047"/>
    <!-- grain/blé sur plateau droit -->
    <g fill="#a16207">
      <ellipse cx="55" cy="70" rx="2" ry="1"/>
      <ellipse cx="60" cy="68" rx="2" ry="1"/>
      <ellipse cx="65" cy="69" rx="2" ry="1"/>
      <ellipse cx="70" cy="67" rx="2" ry="1"/>
      <ellipse cx="75" cy="70" rx="2" ry="1"/>
    </g>
    <!-- aiguille (juste, équilibrée) -->
    <line x1="0" y1="55" x2="0" y2="40" stroke="#dc2626" stroke-width="2"/>
    <circle cx="0" cy="38" r="3" fill="#dc2626"/>
  </g>
  <!-- petits sacs/marchandises au sol -->
  <g transform="translate(60 215)" fill="#92400e">
    <ellipse cx="0" cy="10" rx="20" ry="6"/>
    <path d="M-18,8 Q0,-12 18,8 Z"/>
    <path d="M-3,-5 L3,-5 L0,-10 Z" fill="#a16207"/>
  </g>
  <g transform="translate(330 215)" fill="#92400e">
    <ellipse cx="0" cy="10" rx="18" ry="5"/>
    <path d="M-15,8 Q0,-10 15,8 Z"/>
  </g>
`);

// 21. Dhûl-Kifl — main qui se ferme (engagement), pleine lune
const dhulKifl = wrap(`
  <defs>
    <linearGradient id="sky-dhk" x1="0" x2="0" y1="0" y2="1">
      <stop offset="0%" stop-color="#1e3a8a"/>
      <stop offset="100%" stop-color="#475569"/>
    </linearGradient>
  </defs>
  <rect width="400" height="260" fill="url(#sky-dhk)"/>
  <!-- pleine lune -->
  <circle cx="320" cy="70" r="35" fill="#fef9c3" opacity="0.7"/>
  <circle cx="320" cy="70" r="28" fill="#fde68a"/>
  <!-- cratères -->
  <circle cx="312" cy="65" r="3" fill="#fbbf24" opacity="0.6"/>
  <circle cx="328" cy="78" r="2" fill="#fbbf24" opacity="0.6"/>
  <circle cx="318" cy="80" r="2.5" fill="#fbbf24" opacity="0.6"/>
  <!-- étoiles -->
  <g fill="#fef9c3">
    <circle cx="50" cy="40" r="2"/>
    <circle cx="100" cy="60" r="2"/>
    <circle cx="180" cy="50" r="2.5"/>
    <circle cx="240" cy="80" r="2"/>
    <circle cx="80" cy="120" r="1.5"/>
  </g>
  <!-- montagnes silencieuses -->
  <path d="M0,180 L80,100 L160,180 Z" fill="#1e293b"/>
  <path d="M120,200 L220,80 L320,200 Z" fill="#0f172a"/>
  <path d="M260,210 L350,130 L400,210 L400,210 Z" fill="#1e293b"/>
  <!-- vallée/plaine -->
  <path d="M0,210 L400,210 L400,260 L0,260 Z" fill="#334155"/>
  <!-- trois rouleaux/parchemins (les 3 engagements) -->
  <g transform="translate(80 200)" fill="#fef3c7">
    <ellipse cx="0" cy="20" rx="18" ry="5"/>
    <rect x="-15" y="10" width="30" height="10" fill="#fde68a"/>
    <ellipse cx="0" cy="10" rx="15" ry="3" fill="#fbbf24"/>
    <line x1="-10" y1="15" x2="10" y2="15" stroke="#92400e" stroke-width="1"/>
  </g>
  <g transform="translate(200 200)" fill="#fef3c7">
    <ellipse cx="0" cy="20" rx="20" ry="5"/>
    <rect x="-17" y="8" width="34" height="12" fill="#fde68a"/>
    <ellipse cx="0" cy="8" rx="17" ry="3" fill="#fbbf24"/>
    <line x1="-12" y1="14" x2="12" y2="14" stroke="#92400e" stroke-width="1"/>
  </g>
  <g transform="translate(320 200)" fill="#fef3c7">
    <ellipse cx="0" cy="20" rx="18" ry="5"/>
    <rect x="-15" y="10" width="30" height="10" fill="#fde68a"/>
    <ellipse cx="0" cy="10" rx="15" ry="3" fill="#fbbf24"/>
    <line x1="-10" y1="15" x2="10" y2="15" stroke="#92400e" stroke-width="1"/>
  </g>
`);

// 22. Hârûn — bâton lumineux, deux mains qui s'aident
const harun = wrap(`
  <defs>
    <linearGradient id="sky-har" x1="0" x2="0" y1="0" y2="1">
      <stop offset="0%" stop-color="#bae6fd"/>
      <stop offset="100%" stop-color="#fde68a"/>
    </linearGradient>
  </defs>
  <rect width="400" height="260" fill="url(#sky-har)"/>
  <!-- soleil -->
  <circle cx="60" cy="55" r="25" fill="#fde047"/>
  <!-- montagne -->
  <path d="M250,200 L320,90 L400,200 Z" fill="#7c2d12" opacity="0.7"/>
  <path d="M300,120 L320,90 L340,120 Z" fill="#fde68a"/>
  <!-- collines -->
  <path d="M0,200 Q100,180 200,200 L200,260 L0,260 Z" fill="#86efac"/>
  <!-- deux mains qui se serrent / s'aident (silhouettes) -->
  <g transform="translate(140 110)">
    <!-- main gauche stylisée -->
    <g fill="#fbbf24">
      <ellipse cx="0" cy="40" rx="18" ry="22"/>
      <rect x="-3" y="0" width="6" height="20" rx="3"/>
      <rect x="6" y="-2" width="5" height="18" rx="2"/>
      <rect x="14" y="0" width="5" height="16" rx="2"/>
      <rect x="-12" y="0" width="5" height="18" rx="2"/>
    </g>
    <!-- main droite (en miroir) -->
    <g transform="translate(60 0) scale(-1 1)" fill="#f59e0b">
      <ellipse cx="0" cy="40" rx="18" ry="22"/>
      <rect x="-3" y="0" width="6" height="20" rx="3"/>
      <rect x="6" y="-2" width="5" height="18" rx="2"/>
      <rect x="14" y="0" width="5" height="16" rx="2"/>
      <rect x="-12" y="0" width="5" height="18" rx="2"/>
    </g>
    <!-- bâton entre les mains (lumineux, signe de Mûsâ et Hârûn) -->
    <rect x="22" y="-30" width="6" height="80" fill="#92400e"/>
    <circle cx="25" cy="-30" r="8" fill="#fef3c7" opacity="0.8"/>
    <circle cx="25" cy="-30" r="5" fill="#fde047"/>
    <!-- petits rayons -->
    <g stroke="#fde047" stroke-width="1.5" opacity="0.7">
      <line x1="25" y1="-45" x2="25" y2="-50"/>
      <line x1="15" y1="-35" x2="10" y2="-32"/>
      <line x1="35" y1="-35" x2="40" y2="-32"/>
    </g>
  </g>
  <!-- coeur (amour fraternel) -->
  <g transform="translate(310 160)" fill="#dc2626" opacity="0.7">
    <path d="M0,5 C-8,-5 -20,-5 -10,10 L0,20 L10,10 C20,-5 8,-5 0,5 Z"/>
  </g>
`);

// 23. Ilyâs — feu venu du ciel sur l'autel, idole brisée
const ilyas = wrap(`
  <defs>
    <linearGradient id="sky-ily" x1="0" x2="0" y1="0" y2="1">
      <stop offset="0%" stop-color="#7c2d12"/>
      <stop offset="50%" stop-color="#dc2626"/>
      <stop offset="100%" stop-color="#fbbf24"/>
    </linearGradient>
  </defs>
  <rect width="400" height="260" fill="url(#sky-ily)"/>
  <!-- éclair / feu du ciel -->
  <path d="M200,0 L195,80 L210,80 L200,160 L215,160 L195,240" stroke="#fde047" stroke-width="3" fill="#fef3c7" opacity="0.9"/>
  <!-- nuages -->
  <ellipse cx="100" cy="50" rx="40" ry="12" fill="#475569"/>
  <ellipse cx="320" cy="60" rx="35" ry="10" fill="#475569"/>
  <!-- montagnes -->
  <path d="M0,180 L60,120 L120,180 Z" fill="#7c2d12" opacity="0.7"/>
  <path d="M280,180 L350,110 L400,180 Z" fill="#7c2d12" opacity="0.7"/>
  <!-- sol/sable -->
  <path d="M0,180 L400,180 L400,260 L0,260 Z" fill="#fbbf24"/>
  <!-- autel avec flammes (acceptation du sacrifice par Allah) -->
  <g transform="translate(140 175)">
    <rect x="0" y="20" width="50" height="30" fill="#78350f"/>
    <rect x="-5" y="20" width="60" height="6" fill="#a16207"/>
    <!-- flammes -->
    <g>
      <path d="M10,20 Q5,5 15,-5 Q12,5 20,15 Z" fill="#dc2626"/>
      <path d="M20,20 Q15,0 25,-15 Q22,0 30,15 Z" fill="#f97316"/>
      <path d="M30,20 Q25,5 35,-5 Q32,5 40,15 Z" fill="#dc2626"/>
      <path d="M22,15 Q20,0 28,-8 Q25,0 30,12 Z" fill="#fde047"/>
    </g>
  </g>
  <!-- idole brisée (statue cassée) -->
  <g transform="translate(260 195)" fill="#1f2937">
    <!-- base -->
    <rect x="0" y="20" width="40" height="10"/>
    <!-- corps cassé -->
    <rect x="10" y="0" width="20" height="20"/>
    <!-- tête tombée à côté -->
    <ellipse cx="55" cy="28" rx="8" ry="6"/>
    <!-- éclats -->
    <path d="M5,20 L0,35 L10,30 Z"/>
    <path d="M30,20 L35,35 L40,28 Z"/>
  </g>
`);

// 24. Al-Yasaʿ — manteau qui passe, source d'eau guérissante
const alYasa = wrap(`
  <defs>
    <linearGradient id="sky-aly" x1="0" x2="0" y1="0" y2="1">
      <stop offset="0%" stop-color="#a7f3d0"/>
      <stop offset="100%" stop-color="#bae6fd"/>
    </linearGradient>
  </defs>
  <rect width="400" height="260" fill="url(#sky-aly)"/>
  <!-- soleil -->
  <circle cx="340" cy="55" r="25" fill="#fde047" opacity="0.85"/>
  <!-- oiseau -->
  <path d="M150,60 q5,-6 10,0 q5,-6 10,0" stroke="#1f2937" stroke-width="2" fill="none"/>
  <!-- collines -->
  <path d="M0,170 Q100,150 200,170 T400,165 L400,260 L0,260 Z" fill="#86efac"/>
  <path d="M0,200 Q100,185 200,200 T400,195 L400,260 L0,260 Z" fill="#4ade80"/>
  <!-- rivière qui guérit (eau bleue) -->
  <path d="M0,225 Q150,200 280,225 Q340,235 400,210" stroke="#0ea5e9" stroke-width="20" fill="none" opacity="0.85"/>
  <path d="M0,225 Q150,200 280,225 Q340,235 400,210" stroke="#7dd3fc" stroke-width="10" fill="none"/>
  <!-- bâton fleurissant (symbole de transmission) -->
  <g transform="translate(140 90)">
    <rect x="-2" y="0" width="4" height="100" fill="#92400e"/>
    <!-- petites feuilles vertes (vie qui revient) -->
    <ellipse cx="-8" cy="20" rx="6" ry="3" fill="#22c55e"/>
    <ellipse cx="8" cy="35" rx="6" ry="3" fill="#22c55e"/>
    <ellipse cx="-8" cy="50" rx="6" ry="3" fill="#22c55e"/>
    <!-- fleurs -->
    <circle cx="0" cy="0" r="6" fill="#f9a8d4"/>
    <circle cx="0" cy="0" r="2" fill="#fde047"/>
    <circle cx="-9" cy="-2" r="4" fill="#a78bfa"/>
    <circle cx="9" cy="-2" r="4" fill="#a78bfa"/>
  </g>
  <!-- manteau symbolique (transmission de la mission) -->
  <g transform="translate(260 130)" fill="#7c2d12">
    <path d="M0,0 L40,0 L50,15 L45,80 L-5,80 L-10,15 Z"/>
    <path d="M5,0 L20,15 L35,0 L20,30 Z" fill="#92400e"/>
    <!-- bordure dorée -->
    <path d="M-5,15 L5,0 L40,0 L50,15" stroke="#fde047" stroke-width="1" fill="none"/>
    <path d="M-5,80 L45,80" stroke="#fde047" stroke-width="1" fill="none"/>
  </g>
`);

// ─────────────────────────────────────────── Contes pour enfants

// Le chaton et l'oiseau — jardin avec arbre et nid
const taleCatBird = wrap(`
  <defs>
    <linearGradient id="sky-cb" x1="0" x2="0" y1="0" y2="1">
      <stop offset="0%" stop-color="#bae6fd"/>
      <stop offset="100%" stop-color="#dcfce7"/>
    </linearGradient>
  </defs>
  <rect width="400" height="260" fill="url(#sky-cb)"/>
  <!-- prairie -->
  <path d="M0,200 Q100,180 200,195 T400,200 L400,260 L0,260 Z" fill="#86efac"/>
  <path d="M0,225 Q120,210 240,220 T400,225 L400,260 L0,260 Z" fill="#4ade80"/>
  <!-- arbre central -->
  <rect x="195" y="120" width="14" height="80" rx="3" fill="#7c3e1d"/>
  <circle cx="202" cy="100" r="55" fill="#22c55e"/>
  <circle cx="178" cy="115" r="32" fill="#16a34a"/>
  <circle cx="226" cy="115" r="32" fill="#16a34a"/>
  <!-- nid sur la branche -->
  <ellipse cx="240" cy="118" rx="14" ry="6" fill="#92400e"/>
  <ellipse cx="240" cy="115" rx="10" ry="5" fill="#b45309"/>
  <!-- petit oiseau dans le nid -->
  <ellipse cx="240" cy="112" rx="6" ry="5" fill="#facc15"/>
  <circle cx="244" cy="111" r="2" fill="#92400e"/>
  <!-- chat sur tronc -->
  <ellipse cx="180" cy="190" rx="18" ry="11" fill="#9ca3af"/>
  <circle cx="167" cy="184" r="7" fill="#9ca3af"/>
  <path d="M163,180 L165,176 L167,180 Z M170,180 L172,176 L174,180 Z" fill="#9ca3af"/>
  <!-- soleil -->
  <circle cx="340" cy="50" r="20" fill="#fde047"/>
  <circle cx="340" cy="50" r="13" fill="#facc15"/>
  <!-- petites fleurs -->
  <g fill="#f9a8d4"><circle cx="60" cy="225" r="3"/><circle cx="63" cy="222" r="3"/><circle cx="57" cy="222" r="3"/></g>
  <g fill="#fde68a"><circle cx="320" cy="230" r="3"/><circle cx="323" cy="227" r="3"/><circle cx="317" cy="227" r="3"/></g>
`);

// L'arbre qui partageait — grand pommier dans la forêt
const taleSharingTree = wrap(`
  <defs>
    <linearGradient id="sky-st" x1="0" x2="0" y1="0" y2="1">
      <stop offset="0%" stop-color="#fef3c7"/>
      <stop offset="100%" stop-color="#fde68a"/>
    </linearGradient>
  </defs>
  <rect width="400" height="260" fill="url(#sky-st)"/>
  <path d="M0,210 Q100,185 200,200 T400,205 L400,260 L0,260 Z" fill="#86efac"/>
  <!-- arbre principal -->
  <rect x="185" y="120" width="30" height="100" rx="6" fill="#7c3e1d"/>
  <circle cx="200" cy="100" r="65" fill="#16a34a"/>
  <circle cx="160" cy="120" r="40" fill="#15803d"/>
  <circle cx="240" cy="120" r="40" fill="#15803d"/>
  <!-- pommes -->
  <g fill="#ef4444">
    <circle cx="170" cy="90" r="6"/><circle cx="200" cy="80" r="6"/>
    <circle cx="225" cy="100" r="6"/><circle cx="180" cy="125" r="6"/>
    <circle cx="220" cy="135" r="6"/><circle cx="245" cy="115" r="6"/>
    <circle cx="155" cy="105" r="6"/>
  </g>
  <!-- pommes au sol -->
  <circle cx="120" cy="225" r="7" fill="#ef4444"/>
  <circle cx="290" cy="225" r="7" fill="#ef4444"/>
  <!-- silhouettes d'animaux (sans détails) -->
  <ellipse cx="100" cy="225" rx="10" ry="6" fill="#a78bfa"/>
  <ellipse cx="310" cy="225" rx="10" ry="6" fill="#fb923c"/>
`);

// L'abeille et la fleur — pré jaune avec fleur centrale
const taleBeeFlower = wrap(`
  <defs>
    <linearGradient id="sky-bf" x1="0" x2="0" y1="0" y2="1">
      <stop offset="0%" stop-color="#fef9c3"/>
      <stop offset="100%" stop-color="#fde68a"/>
    </linearGradient>
  </defs>
  <rect width="400" height="260" fill="url(#sky-bf)"/>
  <!-- prairie jaune -->
  <path d="M0,200 Q100,185 200,195 T400,200 L400,260 L0,260 Z" fill="#fde047"/>
  <path d="M0,220 Q120,210 240,215 T400,220 L400,260 L0,260 Z" fill="#facc15"/>
  <!-- soleil -->
  <circle cx="320" cy="55" r="22" fill="#f59e0b"/>
  <!-- fleur centrale grande -->
  <line x1="200" y1="200" x2="200" y2="160" stroke="#16a34a" stroke-width="4"/>
  <ellipse cx="195" cy="175" rx="6" ry="3" fill="#22c55e" transform="rotate(-30 195 175)"/>
  <ellipse cx="205" cy="178" rx="6" ry="3" fill="#22c55e" transform="rotate(30 205 178)"/>
  <circle cx="200" cy="140" r="14" fill="#f9a8d4"/>
  <circle cx="180" cy="155" r="14" fill="#f472b6"/>
  <circle cx="220" cy="155" r="14" fill="#f472b6"/>
  <circle cx="200" cy="170" r="14" fill="#f472b6"/>
  <circle cx="200" cy="140" r="8" fill="#fbbf24"/>
  <!-- petites fleurs -->
  <g fill="#a78bfa"><circle cx="60" cy="215" r="4"/><circle cx="64" cy="211" r="4"/><circle cx="56" cy="211" r="4"/></g>
  <g fill="#f9a8d4"><circle cx="320" cy="215" r="4"/><circle cx="324" cy="211" r="4"/><circle cx="316" cy="211" r="4"/></g>
  <!-- abeille -->
  <ellipse cx="260" cy="120" rx="9" ry="6" fill="#fde047"/>
  <rect x="252" y="116" width="3" height="8" fill="#1f2937"/>
  <rect x="259" y="116" width="3" height="8" fill="#1f2937"/>
  <rect x="266" y="116" width="3" height="8" fill="#1f2937"/>
  <ellipse cx="256" cy="116" rx="6" ry="3" fill="#e5e7eb" opacity="0.7"/>
  <ellipse cx="263" cy="116" rx="6" ry="3" fill="#e5e7eb" opacity="0.7"/>
  <!-- traces de vol -->
  <path d="M280 130 Q295 125 300 135 Q305 145 285 145" stroke="#1f2937" stroke-width="1" fill="none" stroke-dasharray="2 3"/>
`);

// Le petit chameau — désert avec dunes et oasis
const taleLittleCamel = wrap(`
  <defs>
    <linearGradient id="sky-lc" x1="0" x2="0" y1="0" y2="1">
      <stop offset="0%" stop-color="#fed7aa"/>
      <stop offset="100%" stop-color="#fde68a"/>
    </linearGradient>
  </defs>
  <rect width="400" height="260" fill="url(#sky-lc)"/>
  <!-- soleil -->
  <circle cx="320" cy="60" r="28" fill="#f59e0b"/>
  <circle cx="320" cy="60" r="20" fill="#fbbf24"/>
  <!-- dunes -->
  <path d="M0,200 Q80,170 180,195 T400,180 L400,260 L0,260 Z" fill="#fcd34d"/>
  <path d="M0,225 Q100,205 200,220 T400,215 L400,260 L0,260 Z" fill="#f59e0b"/>
  <!-- oasis (palmiers à droite) -->
  <rect x="345" y="170" width="6" height="40" fill="#7c2d12"/>
  <ellipse cx="348" cy="165" rx="20" ry="4" fill="#16a34a" transform="rotate(-15 348 165)"/>
  <ellipse cx="348" cy="165" rx="20" ry="4" fill="#16a34a" transform="rotate(15 348 165)"/>
  <ellipse cx="348" cy="160" rx="14" ry="3" fill="#15803d"/>
  <rect x="365" y="180" width="5" height="30" fill="#7c2d12"/>
  <ellipse cx="367" cy="178" rx="14" ry="3" fill="#16a34a" transform="rotate(-20 367 178)"/>
  <ellipse cx="367" cy="178" rx="14" ry="3" fill="#16a34a" transform="rotate(20 367 178)"/>
  <!-- chamelet (silhouette simple) -->
  <ellipse cx="120" cy="200" rx="22" ry="10" fill="#92400e"/>
  <path d="M105,193 Q110,182 115,193" fill="#92400e"/>
  <path d="M125,191 Q130,178 135,191" fill="#92400e"/>
  <ellipse cx="100" cy="195" rx="6" ry="5" fill="#92400e"/>
  <rect x="113" y="207" width="3" height="10" fill="#92400e"/>
  <rect x="125" y="207" width="3" height="10" fill="#92400e"/>
`);

// La graine qui devint un arbre — coupe terre/ciel avec plant
const taleSeedTree = wrap(`
  <defs>
    <linearGradient id="sky-sd" x1="0" x2="0" y1="0" y2="1">
      <stop offset="0%" stop-color="#bae6fd"/>
      <stop offset="100%" stop-color="#fef3c7"/>
    </linearGradient>
  </defs>
  <rect width="400" height="260" fill="url(#sky-sd)"/>
  <!-- soleil -->
  <circle cx="80" cy="50" r="22" fill="#fbbf24"/>
  <!-- nuages -->
  <ellipse cx="280" cy="60" rx="30" ry="10" fill="white" opacity="0.85"/>
  <ellipse cx="300" cy="55" rx="22" ry="9" fill="white" opacity="0.85"/>
  <!-- terre -->
  <rect y="180" width="400" height="80" fill="#a16207"/>
  <path d="M0,180 Q100,170 200,180 T400,180 L400,200 L0,200 Z" fill="#86efac"/>
  <!-- arbre adulte -->
  <rect x="195" y="120" width="14" height="70" rx="3" fill="#7c3e1d"/>
  <circle cx="202" cy="105" r="40" fill="#16a34a"/>
  <circle cx="180" cy="115" r="22" fill="#15803d"/>
  <circle cx="225" cy="115" r="22" fill="#15803d"/>
  <!-- petits plants à côté pour l'évolution -->
  <line x1="80" y1="200" x2="80" y2="170" stroke="#16a34a" stroke-width="3"/>
  <ellipse cx="76" cy="172" rx="6" ry="3" fill="#22c55e"/>
  <ellipse cx="84" cy="172" rx="6" ry="3" fill="#22c55e"/>
  <line x1="320" y1="200" x2="320" y2="155" stroke="#16a34a" stroke-width="3"/>
  <ellipse cx="314" cy="160" rx="8" ry="4" fill="#22c55e"/>
  <ellipse cx="326" cy="160" rx="8" ry="4" fill="#22c55e"/>
  <ellipse cx="320" cy="150" rx="10" ry="5" fill="#16a34a"/>
  <!-- graine sous terre -->
  <ellipse cx="160" cy="240" rx="6" ry="4" fill="#fde68a"/>
  <line x1="160" y1="240" x2="160" y2="210" stroke="#fde68a" stroke-width="1" stroke-dasharray="2 2"/>
`);

// L'étoile timide — ciel nocturne avec étoiles et forêt
const taleShyStar = wrap(`
  <defs>
    <linearGradient id="sky-ss" x1="0" x2="0" y1="0" y2="1">
      <stop offset="0%" stop-color="#1e1b4b"/>
      <stop offset="100%" stop-color="#4338ca"/>
    </linearGradient>
  </defs>
  <rect width="400" height="260" fill="url(#sky-ss)"/>
  <!-- lune -->
  <circle cx="60" cy="55" r="22" fill="#fde047"/>
  <circle cx="68" cy="50" r="18" fill="url(#sky-ss)"/>
  <!-- étoiles brillantes -->
  <g fill="#fde047">
    <path d="M280 50 L283 58 L291 58 L285 63 L287 71 L280 67 L273 71 L275 63 L269 58 L277 58 Z"/>
    <path d="M340 90 L342 95 L347 95 L343 98 L345 103 L340 100 L335 103 L337 98 L333 95 L338 95 Z"/>
    <path d="M150 30 L152 35 L157 35 L153 38 L155 43 L150 40 L145 43 L147 38 L143 35 L148 35 Z"/>
    <path d="M120 90 L122 95 L127 95 L123 98 L125 103 L120 100 L115 103 L117 98 L113 95 L118 95 Z"/>
  </g>
  <!-- petite étoile centrale (Lina) avec halo doux -->
  <circle cx="200" cy="100" r="14" fill="#fde047" opacity="0.3"/>
  <path d="M200 88 L202 96 L210 97 L204 102 L206 110 L200 106 L194 110 L196 102 L190 97 L198 96 Z" fill="#fde047"/>
  <!-- petits points scintillants -->
  <g fill="white" opacity="0.85">
    <circle cx="80" cy="120" r="1.2"/><circle cx="220" cy="40" r="1.2"/>
    <circle cx="360" cy="50" r="1.2"/><circle cx="380" cy="120" r="1.2"/>
    <circle cx="50" cy="160" r="1.2"/>
  </g>
  <!-- forêt en bas -->
  <path d="M0,200 L20,180 L40,200 L60,170 L80,200 L100,175 L120,200 L140,180 L160,200 L180,175 L200,200 L220,180 L240,200 L260,175 L280,200 L300,180 L320,200 L340,170 L360,200 L380,180 L400,200 L400,260 L0,260 Z" fill="#0f172a"/>
  <!-- petit chemin -->
  <path d="M180 240 Q200 230 220 240" stroke="#fde047" stroke-width="1" fill="none" stroke-dasharray="2 3" opacity="0.5"/>
`);

const map = {
  adam, idris, nuh, hud, salih, ibrahim, lut, ismail, ishaq, yaqub,
  yusuf, shuayb, ayyub, 'dhul-kifl': dhulKifl, musa, harun,
  dawud, sulayman, ilyas, 'al-yasa': alYasa, yunus,
  zakariya, isa, muhammad,
  // alias pour l'id composé
  'zakariya-yahya': zakariya,
  // contes
  'tale-cat-bird': taleCatBird,
  'tale-sharing-tree': taleSharingTree,
  'tale-bee-flower': taleBeeFlower,
  'tale-little-camel': taleLittleCamel,
  'tale-seed-tree': taleSeedTree,
  'tale-shy-star': taleShyStar,
};

export const getIllustration = (id) => map[id] || '';

// Petit favicon : une étoile dorée
export const favicon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><circle cx="32" cy="32" r="30" fill="#3F8E5C"/><path d="M32 14 L36 28 L50 28 L39 36 L43 50 L32 42 L21 50 L25 36 L14 28 L28 28 Z" fill="#FBBF24"/></svg>`;
