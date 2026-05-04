const COLORS = ['#FBBF24', '#3F8E5C', '#7CC0E8', '#F472B6', '#A78BFA', '#FB923C'];

export const renderConfetti = (count = 36) => {
  const pieces = Array.from({ length: count }, (_, i) => {
    const left = Math.random() * 100;
    const delay = Math.random() * 1.5;
    const duration = 2.5 + Math.random() * 2;
    const color = COLORS[i % COLORS.length];
    const size = 6 + Math.random() * 8;
    const rotate = Math.random() * 360;
    return `<span class="confetti-piece" style="left:${left}%;background:${color};width:${size}px;height:${size * 1.4}px;animation-delay:${delay}s;animation-duration:${duration}s;transform:rotate(${rotate}deg)"></span>`;
  }).join('');
  return `<div class="confetti-stage" aria-hidden="true">${pieces}</div>`;
};
