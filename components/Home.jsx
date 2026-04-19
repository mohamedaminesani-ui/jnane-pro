// Jnane Pro — Screen 2: Home
// Greeting + search, quick-book card, categories grid, promo banner, nearby services.

const Home = () => {
  const cats = [
    { name: 'Entretien', sub: 'Tonte, taille', tone: 'palm', icon: 'tools' },
    { name: 'Palmiers', sub: 'Élagage, soins', tone: 'olive', icon: 'palm' },
    { name: 'Design', sub: 'Aménagement', tone: 'sunset', icon: 'sparkle' },
    { name: 'Boutique', sub: 'Plantes & outils', tone: 'villa', icon: 'shop' },
  ];

  return (
    <div style={{
      background: JP.cream, minHeight: '100%', paddingBottom: 120,
      fontFamily: 'DM Sans, system-ui, sans-serif', color: JP.ink,
    }}>
      {/* header */}
      <div style={{
        padding: '8px 20px 18px', display: 'flex', alignItems: 'center', gap: 12,
      }}>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 12, color: JP.inkSoft, letterSpacing: 0.3,
            display: 'flex', alignItems: 'center', gap: 4 }}>
            <JPIcon name="pin" size={12} color={JP.green}/>
            Casablanca, Ain Diab
          </div>
          <div style={{ fontSize: 22, fontWeight: 600, marginTop: 2,
            fontFamily: '"Instrument Serif", Georgia, serif', fontWeight: 400,
            color: JP.greenInk, letterSpacing: -0.3 }}>
            Bonjour, Youssef <span style={{ color: JP.leaf }}>·</span>
          </div>
        </div>
        <div style={{
          width: 44, height: 44, borderRadius: 100, background: JP.white,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 2px 6px rgba(0,0,0,0.04), 0 0 0 1px '+JP.line,
          position: 'relative',
        }}>
          <JPIcon name="bell" size={20} color={JP.ink}/>
          <div style={{
            position:'absolute', top: 10, right: 11,
            width: 8, height: 8, borderRadius: 100, background: JP.terracotta,
            boxShadow: '0 0 0 2px '+JP.white,
          }}/>
        </div>
      </div>

      {/* search */}
      <div style={{ padding: '0 20px 18px' }}>
        <div style={{
          height: 52, borderRadius: 16, background: JP.white,
          display: 'flex', alignItems: 'center', padding: '0 16px', gap: 12,
          boxShadow: '0 2px 6px rgba(0,0,0,0.03), 0 0 0 1px '+JP.line,
        }}>
          <JPIcon name="search" size={20} color={JP.inkSoft}/>
          <span style={{ flex: 1, fontSize: 15, color: JP.inkSoft }}>
            Rechercher un service ou plante…
          </span>
          <div style={{ width: 1, height: 22, background: JP.line }}/>
          <div style={{
            width: 32, height: 32, borderRadius: 10, background: JP.sandLight,
            display:'flex', alignItems:'center', justifyContent:'center',
          }}>
            <JPIcon name="sliders" size={16} color={JP.green}/>
          </div>
        </div>
      </div>

      {/* promo banner — hero card */}
      <div style={{ padding: '0 20px 22px' }}>
        <div style={{
          borderRadius: 24, overflow: 'hidden', position: 'relative',
          background: JP.green, height: 140, padding: '20px 22px',
          display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
          boxShadow: '0 10px 24px rgba(30,91,58,0.18)',
        }}>
          {/* decorative photo on right */}
          <div style={{
            position: 'absolute', right: -20, top: -10, bottom: -10, width: 180,
            opacity: 0.9,
          }}>
            <JPPhoto tone="olive" label="palmier" h="100%" r={0}
              style={{ height: '100%',
                maskImage: 'linear-gradient(to left, #000 40%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to left, #000 40%, transparent 100%)',
              }}/>
          </div>
          <div style={{ position:'relative', zIndex: 1 }}>
            <div style={{
              display:'inline-flex', alignItems:'center', gap: 6,
              padding: '4px 10px', borderRadius: 100,
              background: 'rgba(255,255,255,0.18)',
              backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)',
              border: '1px solid rgba(255,255,255,0.25)',
            }}>
              <div style={{ width: 6, height: 6, borderRadius: 100, background: JP.leafSoft }}/>
              <span style={{ fontSize: 10, color: '#fff', fontWeight: 500,
                letterSpacing: 1.5, textTransform: 'uppercase' }}>Offre printemps</span>
            </div>
            <div style={{
              fontFamily: '"Instrument Serif", Georgia, serif', fontWeight: 400,
              fontSize: 26, color: '#fff', lineHeight: 1.1, marginTop: 10,
              letterSpacing: -0.3, maxWidth: 200,
            }}>
              <span style={{ fontStyle: 'italic' }}>–20%</span> sur l'élagage des palmiers
            </div>
          </div>
          <div style={{ position:'relative', zIndex: 1, display:'flex', alignItems:'center', gap: 8 }}>
            <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.8)' }}>
              Jusqu'au 30 avril
            </span>
            <div style={{ flex: 1 }}/>
            <div style={{
              width: 36, height: 36, borderRadius: 100, background: '#fff',
              display:'flex', alignItems:'center', justifyContent:'center',
            }}>
              <JPIcon name="arrow" size={16} color={JP.green} strokeW={2}/>
            </div>
          </div>
        </div>
      </div>

      {/* categories */}
      <div style={{ padding: '0 20px 10px',
        display: 'flex', alignItems:'baseline', justifyContent:'space-between' }}>
        <h3 style={{ margin:0, fontSize: 18, fontWeight: 600, color: JP.ink,
          letterSpacing: -0.2 }}>Services</h3>
        <span style={{ fontSize: 13, color: JP.green, fontWeight: 500 }}>Tout voir</span>
      </div>
      <div style={{
        padding: '10px 20px 22px', display: 'grid',
        gridTemplateColumns: '1fr 1fr', gap: 12,
      }}>
        {cats.map((c) => (
          <div key={c.name} style={{
            background: JP.white, borderRadius: 20, padding: 16, position: 'relative',
            boxShadow: '0 2px 6px rgba(0,0,0,0.03), 0 0 0 1px '+JP.line,
            minHeight: 116,
          }}>
            <div style={{
              width: 44, height: 44, borderRadius: 14,
              background: JP.sandLight, border: '1px solid '+JP.sandDeep,
              display:'flex', alignItems:'center', justifyContent:'center',
            }}>
              <JPIcon name={c.icon} size={22} color={JP.green}/>
            </div>
            <div style={{ marginTop: 14, fontSize: 15, fontWeight: 600, color: JP.ink }}>
              {c.name}
            </div>
            <div style={{ fontSize: 12, color: JP.inkSoft, marginTop: 2 }}>
              {c.sub}
            </div>
          </div>
        ))}
      </div>

      {/* quick book card */}
      <div style={{ padding: '0 20px 22px' }}>
        <div style={{
          borderRadius: 20, background: JP.sand, padding: 18,
          display: 'flex', alignItems: 'center', gap: 14,
          border: '1px solid '+JP.sandDeep,
        }}>
          <div style={{
            width: 56, height: 56, borderRadius: 16, background: JP.white,
            display:'flex', alignItems:'center', justifyContent:'center',
            boxShadow: '0 2px 6px rgba(0,0,0,0.04)',
          }}>
            <JPIcon name="calendar" size={26} color={JP.green}/>
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: 11, letterSpacing: 1.5, textTransform: 'uppercase',
              color: JP.green, fontWeight: 600 }}>Réserver vite</div>
            <div style={{ fontSize: 15, fontWeight: 600, color: JP.greenInk, marginTop: 2,
              lineHeight: 1.25 }}>
              Entretien mensuel · à partir de 350 DH
            </div>
            <div style={{ fontSize: 12, color: JP.inkMid, marginTop: 2 }}>
              Créneau disponible ce samedi
            </div>
          </div>
          <div style={{
            width: 40, height: 40, borderRadius: 100, background: JP.green,
            display:'flex', alignItems:'center', justifyContent:'center', flexShrink: 0,
          }}>
            <JPIcon name="arrow" size={18} color="#fff" strokeW={2}/>
          </div>
        </div>
      </div>

      {/* recent / nearby */}
      <div style={{ padding: '0 20px 10px',
        display: 'flex', alignItems:'baseline', justifyContent:'space-between' }}>
        <h3 style={{ margin:0, fontSize: 18, fontWeight: 600, color: JP.ink,
          letterSpacing: -0.2 }}>Près de vous</h3>
        <span style={{ fontSize: 13, color: JP.green, fontWeight: 500 }}>Voir tout</span>
      </div>
      <div style={{ padding: '10px 0 0 20px', display: 'flex', gap: 12, overflowX: 'auto' }}>
        {[
          { t: 'Tonte de pelouse', p: 'dès 280 DH', rating: '4.9', tone: 'palm' },
          { t: 'Taille de haies', p: 'dès 200 DH', rating: '4.8', tone: 'olive' },
          { t: 'Traitement palmiers', p: 'dès 450 DH', rating: '5.0', tone: 'sunset' },
        ].map((x, i) => (
          <div key={i} style={{
            width: 180, flexShrink: 0, background: JP.white, borderRadius: 20,
            padding: 10, boxShadow: '0 2px 6px rgba(0,0,0,0.03), 0 0 0 1px '+JP.line,
          }}>
            <JPPhoto tone={x.tone} h={110} r={14} label="service"/>
            <div style={{ padding: '10px 6px 4px' }}>
              <div style={{ fontSize: 14, fontWeight: 600, color: JP.ink }}>{x.t}</div>
              <div style={{ display:'flex', alignItems:'center', gap: 4, marginTop: 4 }}>
                <JPIcon name="star" size={12} color={JP.leaf} strokeW={2}/>
                <span style={{ fontSize: 11.5, color: JP.inkMid, fontWeight: 500 }}>{x.rating}</span>
                <span style={{ fontSize: 11.5, color: JP.inkSoft }}>· {x.p}</span>
              </div>
            </div>
          </div>
        ))}
        <div style={{ width: 20, flexShrink: 0 }}/>
      </div>
    </div>
  );
};

// Bottom tab bar — floating
const HomeTabBar = ({ active = 'home', ios = true }) => {
  const tabs = [
    { id: 'home', i: 'home', l: 'Accueil' },
    { id: 'search', i: 'grid', l: 'Services' },
    { id: 'book', i: 'calendar', l: 'Réservations' },
    { id: 'profile', i: 'user', l: 'Profil' },
  ];
  return (
    <div style={{
      position: 'absolute', left: 16, right: 16,
      bottom: ios ? 24 : 28, zIndex: 30,
      background: 'rgba(255,255,255,0.88)',
      backdropFilter: 'blur(22px) saturate(180%)',
      WebkitBackdropFilter: 'blur(22px) saturate(180%)',
      borderRadius: 24, padding: '10px 8px',
      border: '1px solid rgba(28,31,27,0.06)',
      boxShadow: '0 12px 30px rgba(0,0,0,0.08), 0 0 0 1px rgba(255,255,255,0.4) inset',
      display: 'flex', alignItems: 'center', justifyContent: 'space-around',
      fontFamily: 'DM Sans, system-ui, sans-serif',
    }}>
      {tabs.map(t => {
        const on = t.id === active;
        return (
          <div key={t.id} style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2,
            padding: on ? '7px 14px' : '7px 10px', borderRadius: 14,
            background: on ? JP.green : 'transparent',
            transition: 'all 200ms',
          }}>
            <JPIcon name={t.i} size={20} color={on ? '#fff' : JP.inkMid}
              strokeW={on ? 2 : 1.75}/>
            <div style={{
              fontSize: 10.5, fontWeight: 500,
              color: on ? '#fff' : JP.inkMid,
            }}>{t.l}</div>
          </div>
        );
      })}
    </div>
  );
};

// Home status header (for iOS — covers status bar area)
const HomeStatusPad = ({ h = 56 }) => (
  <div style={{ height: h, background: JP.cream }}/>
);

Object.assign(window, { Home, HomeTabBar, HomeStatusPad });
