export const reportsCss = `
  @keyframes fadeUp { from { opacity:0;transform:translateY(14px) scale(.97); } to { opacity:1;transform:none; } }
  @keyframes fadeIn { from { opacity:0; } to { opacity:1; } }
  .modal-wrap { animation: fadeUp .22s cubic-bezier(.16,1,.3,1) both; }
  .overlay-bg { animation: fadeIn .15s ease both; backdrop-filter: blur(6px); -webkit-backdrop-filter: blur(6px); }
  .modal-panel { box-shadow: 0 25px 50px -12px rgba(0,0,0,.25), 0 0 0 1px rgba(0,0,0,.04); }
  .nav-btn:hover { background: var(--color-background-secondary) !important; }
  .type-opt:hover { border-color: #378add !important; }
  .tl-opt:hover { border-color: #378add !important; }
  .tr-hover:hover td { background: var(--color-background-secondary); }
  .stat-tile { transition: transform .12s; }
  .stat-tile:hover { transform: translateY(-1px); }
  .report-row:hover { background: var(--color-background-secondary); }
`;
