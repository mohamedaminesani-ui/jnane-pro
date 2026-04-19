// Jnane Pro — Design tokens
const JP = {
  // Brand palette
  green: '#1E5B3A',       // deep green — primary
  greenInk: '#173F2A',    // deeper for text on light
  leaf: '#7CB342',        // light/fresh green — accent
  leafSoft: '#A8CF7A',
  sand: '#E8DCC4',        // warm beige
  sandLight: '#F4ECDA',
  sandDeep: '#D9C9A5',
  cream: '#FBF7EE',       // page bg
  ink: '#1C1F1B',         // soft black text
  inkMid: '#4A4E48',
  inkSoft: '#7A7F78',
  line: 'rgba(28,31,27,0.08)',
  lineSoft: 'rgba(28,31,27,0.05)',
  terracotta: '#C4704A',  // subtle accent for promos
  white: '#FFFFFF',
};

// Placeholder imagery — warm gradient tiles evoking Moroccan gardens
// label: short monospace caption for what should go here
const JPPhoto = ({ label = 'garden', tone = 'palm', h = 180, r = 20, style = {}, children }) => {
  const tones = {
    palm:    ['#2C6B42', '#4A8C5A', '#7CB342'],
    villa:   ['#D9C9A5', '#E8DCC4', '#F4ECDA'],
    sunset:  ['#C4704A', '#E8B987', '#E8DCC4'],
    earth:   ['#6B4423', '#8C6342', '#B08C6A'],
    night:   ['#1E3A2A', '#2C5B42', '#4A7C5A'],
    pool:    ['#5A9EAD', '#8CC2CC', '#D9ECEE'],
    olive:   ['#6B7344', '#8C9456', '#B3B88A'],
  };
  const [a,b,c] = tones[tone] || tones.palm;
  return (
    <div style={{
      height: h, borderRadius: r, position: 'relative', overflow: 'hidden',
      background: `linear-gradient(135deg, ${a} 0%, ${b} 55%, ${c} 100%)`,
      ...style,
    }}>
      {/* subtle frond lines */}
      <svg width="100%" height="100%" viewBox="0 0 200 200" preserveAspectRatio="none"
        style={{ position:'absolute', inset:0, opacity: 0.18, mixBlendMode:'overlay' }}>
        <defs>
          <pattern id={`p-${tone}-${h}`} x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
            <path d="M0 30 Q15 15 30 30" stroke="#fff" strokeWidth="0.6" fill="none"/>
          </pattern>
        </defs>
        <rect width="200" height="200" fill={`url(#p-${tone}-${h})`}/>
      </svg>
      <div style={{
        position:'absolute', left: 10, bottom: 8,
        fontFamily: 'ui-monospace, "SF Mono", Menlo, monospace',
        fontSize: 9, letterSpacing: 0.5, color: 'rgba(255,255,255,0.78)',
        textTransform: 'uppercase',
      }}>{`// ${label}`}</div>
      {children}
    </div>
  );
};

// Simple icon set — outlined, 1.75 stroke
const JPIcon = ({ name, size = 22, color = 'currentColor', strokeW = 1.75 }) => {
  const p = { stroke: color, strokeWidth: strokeW, fill: 'none', strokeLinecap: 'round', strokeLinejoin: 'round' };
  const paths = {
    search: <><circle cx="11" cy="11" r="7" {...p}/><path d="M20 20l-3.5-3.5" {...p}/></>,
    bell:   <><path d="M6 16V11a6 6 0 1112 0v5l1.5 2h-15L6 16z" {...p}/><path d="M10 20a2 2 0 004 0" {...p}/></>,
    plus:   <><path d="M12 5v14M5 12h14" {...p}/></>,
    arrow:  <><path d="M5 12h14M13 6l6 6-6 6" {...p}/></>,
    back:   <><path d="M15 6l-6 6 6 6" {...p}/></>,
    close:  <><path d="M6 6l12 12M18 6L6 18" {...p}/></>,
    check:  <><path d="M5 12l5 5 9-10" {...p}/></>,
    pin:    <><path d="M12 2a7 7 0 017 7c0 5-7 13-7 13S5 14 5 9a7 7 0 017-7z" {...p}/><circle cx="12" cy="9" r="2.5" {...p}/></>,
    clock:  <><circle cx="12" cy="12" r="9" {...p}/><path d="M12 7v5l3 2" {...p}/></>,
    camera: <><rect x="3" y="7" width="18" height="13" rx="2.5" {...p}/><circle cx="12" cy="13.5" r="3.5" {...p}/><path d="M9 7l1.5-2h3L15 7" {...p}/></>,
    phone:  <><path d="M5 4h3l2 5-2 1a11 11 0 006 6l1-2 5 2v3a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z" {...p}/></>,
    star:   <><path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.5 2.9 1-6.1L3 9.5l6.1-.9L12 3z" {...p}/></>,
    heart:  <><path d="M12 20s-7-4.5-7-10a4 4 0 017-2.5A4 4 0 0119 10c0 5.5-7 10-7 10z" {...p}/></>,
    chevron:<><path d="M9 6l6 6-6 6" {...p}/></>,
    chevDn: <><path d="M6 9l6 6 6-6" {...p}/></>,
    chevUp: <><path d="M6 15l6-6 6 6" {...p}/></>,
    sliders:<><path d="M4 6h10M18 6h2M4 12h4M12 12h8M4 18h14M20 18h0" {...p}/><circle cx="16" cy="6" r="2" {...p}/><circle cx="10" cy="12" r="2" {...p}/><circle cx="17" cy="18" r="2" {...p}/></>,
    grid:   <><rect x="4" y="4" width="7" height="7" rx="1.5" {...p}/><rect x="13" y="4" width="7" height="7" rx="1.5" {...p}/><rect x="4" y="13" width="7" height="7" rx="1.5" {...p}/><rect x="13" y="13" width="7" height="7" rx="1.5" {...p}/></>,
    home:   <><path d="M4 11l8-7 8 7v8a1 1 0 01-1 1h-4v-6h-6v6H5a1 1 0 01-1-1v-8z" {...p}/></>,
    calendar:<><rect x="4" y="5" width="16" height="16" rx="2.5" {...p}/><path d="M4 10h16M9 3v4M15 3v4" {...p}/></>,
    user:   <><circle cx="12" cy="8" r="4" {...p}/><path d="M4 20a8 8 0 0116 0" {...p}/></>,
    leaf:   <><path d="M4 20C4 10 10 4 20 4c0 10-6 16-16 16z" {...p}/><path d="M4 20L14 10" {...p}/></>,
    palm:   <><path d="M12 22V10" {...p}/><path d="M12 10C9 7 5 6 3 7c1-3 5-5 9-4" {...p}/><path d="M12 10c3-3 7-4 9-3-1-3-5-5-9-4" {...p}/><path d="M12 10c-2-3-2-7 0-9 2 2 2 6 0 9z" {...p}/></>,
    shop:   <><path d="M4 8h16l-1 11a2 2 0 01-2 2H7a2 2 0 01-2-2L4 8z" {...p}/><path d="M9 8V6a3 3 0 016 0v2" {...p}/></>,
    tools:  <><path d="M14 6a3 3 0 104 4l5 5-3 3-5-5a3 3 0 01-4-4L8 2 4 6l5 5" {...p}/></>,
    sparkle:<><path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5L18 18M6 18l2.5-2.5M15.5 8.5L18 6" {...p}/></>,
    upload: <><path d="M12 4v12M7 9l5-5 5 5M4 20h16" {...p}/></>,
    flag:   <><path d="M5 21V4M5 4h12l-2 4 2 4H5" {...p}/></>,
    msg:    <><path d="M4 6a2 2 0 012-2h12a2 2 0 012 2v9a2 2 0 01-2 2h-7l-5 4v-4H6a2 2 0 01-2-2V6z" {...p}/></>,
    share:  <><circle cx="6" cy="12" r="2.5" {...p}/><circle cx="18" cy="6" r="2.5" {...p}/><circle cx="18" cy="18" r="2.5" {...p}/><path d="M8 11l8-4M8 13l8 4" {...p}/></>,
    info:   <><circle cx="12" cy="12" r="9" {...p}/><path d="M12 11v6M12 7.5v.5" {...p}/></>,
    truck:  <><path d="M2 17V7h12v10M14 11h4l3 3v3h-7" {...p}/><circle cx="7" cy="18" r="2" {...p}/><circle cx="17" cy="18" r="2" {...p}/></>,
  };
  return <svg width={size} height={size} viewBox="0 0 24 24" style={{ display:'block' }}>{paths[name]}</svg>;
};

Object.assign(window, { JP, JPPhoto, JPIcon });
