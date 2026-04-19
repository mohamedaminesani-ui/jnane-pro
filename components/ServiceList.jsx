// Jnane Pro — Screen 3: Service list (filterable)

const ServiceList = () => {
  const [cat, setCat] = React.useState('Entretien');
  const cats = ['Tous', 'Entretien', 'Palmiers', 'Design', 'Boutique'];
  const chips = ['Proche de vous', 'Note 4.5+', 'Dispo cette semaine', 'Dès 300 DH'];

  const services = [
    { t: 'Tonte & entretien pelouse', p: 280, u: '/ visite', rating: 4.9, reviews: 142,
      pro: 'Équipe Jnane', tone: 'palm', badge: 'Populaire', cat: 'Entretien',
      duration: '1h 30' },
    { t: 'Taille de haies et arbustes', p: 200, u: '/ m²', rating: 4.8, reviews: 89,
      pro: 'Hassan & équipe', tone: 'olive', cat: 'Entretien',
      duration: '2h' },
    { t: 'Désherbage complet', p: 180, u: '/ 100m²', rating: 4.7, reviews: 54,
      pro: 'Équipe Jnane', tone: 'earth', cat: 'Entretien',
      duration: '3h' },
    { t: 'Arrosage automatique · install.', p: 1200, u: 'forfait', rating: 4.9, reviews: 31,
      pro: 'Karim Technicien', tone: 'pool', cat: 'Entretien',
      duration: '½ journée', badge: 'Pro certifié' },
  ];

  return (
    <div style={{ background: JP.cream, minHeight: '100%', paddingBottom: 120,
      fontFamily: 'DM Sans, system-ui, sans-serif', color: JP.ink }}>

      {/* header */}
      <div style={{ padding: '8px 20px 16px' }}>
        <div style={{ display:'flex', alignItems:'center', gap: 12 }}>
          <div style={{
            width: 40, height: 40, borderRadius: 12, background: JP.white,
            display:'flex', alignItems:'center', justifyContent:'center',
            boxShadow: '0 0 0 1px '+JP.line,
          }}>
            <JPIcon name="back" size={18} color={JP.ink}/>
          </div>
          <div style={{ flex: 1, textAlign: 'center' }}>
            <div style={{ fontSize: 11, letterSpacing: 1.5, color: JP.inkSoft,
              textTransform: 'uppercase', fontWeight: 500 }}>Catégorie</div>
            <div style={{ fontSize: 16, fontWeight: 600, color: JP.ink, marginTop: 1 }}>
              {cat === 'Tous' ? 'Tous les services' : cat}
            </div>
          </div>
          <div style={{
            width: 40, height: 40, borderRadius: 12, background: JP.white,
            display:'flex', alignItems:'center', justifyContent:'center',
            boxShadow: '0 0 0 1px '+JP.line,
          }}>
            <JPIcon name="search" size={18} color={JP.ink}/>
          </div>
        </div>

        {/* editorial heading */}
        <h1 style={{
          margin: '22px 0 4px',
          fontFamily: '"Instrument Serif", Georgia, serif', fontWeight: 400,
          fontSize: 34, lineHeight: 1, letterSpacing: -0.5, color: JP.greenInk,
        }}>
          Services <em style={{ fontStyle:'italic', color: JP.green }}>d'entretien</em>
        </h1>
        <p style={{ margin: 0, fontSize: 14, color: JP.inkMid }}>
          28 prestations disponibles près de vous
        </p>
      </div>

      {/* category pills */}
      <div style={{ padding: '4px 0 12px 20px', display: 'flex', gap: 8, overflowX: 'auto' }}>
        {cats.map(c => {
          const on = c === cat;
          return (
            <div key={c} onClick={() => setCat(c)} style={{
              flexShrink: 0, padding: '9px 16px', borderRadius: 100,
              background: on ? JP.green : JP.white,
              color: on ? '#fff' : JP.ink, fontSize: 13, fontWeight: 500,
              border: '1px solid '+(on ? JP.green : JP.line),
              cursor: 'pointer',
            }}>{c}</div>
          );
        })}
        <div style={{ width: 20, flexShrink: 0 }}/>
      </div>

      {/* filter chips */}
      <div style={{ padding: '0 0 16px 20px', display: 'flex', gap: 8, overflowX: 'auto' }}>
        <div style={{
          flexShrink: 0, padding: '8px 12px', borderRadius: 10,
          background: JP.sandLight, border: '1px solid '+JP.sandDeep,
          display:'flex', alignItems:'center', gap: 6,
          fontSize: 12, fontWeight: 500, color: JP.greenInk,
        }}>
          <JPIcon name="sliders" size={14} color={JP.green}/>
          Filtres
        </div>
        {chips.map(c => (
          <div key={c} style={{
            flexShrink: 0, padding: '8px 12px', borderRadius: 10,
            background: JP.white, border: '1px solid '+JP.line,
            fontSize: 12, color: JP.inkMid,
          }}>{c}</div>
        ))}
        <div style={{ width: 20, flexShrink: 0 }}/>
      </div>

      {/* result cards */}
      <div style={{ padding: '0 20px', display:'flex', flexDirection:'column', gap: 14 }}>
        {services.map((s, i) => (
          <div key={i} style={{
            background: JP.white, borderRadius: 22, overflow:'hidden',
            boxShadow: '0 2px 6px rgba(0,0,0,0.03), 0 0 0 1px '+JP.line,
          }}>
            <div style={{ position:'relative', padding: 10 }}>
              <JPPhoto tone={s.tone} h={170} r={16} label={s.t.toLowerCase()}/>
              {s.badge && (
                <div style={{
                  position:'absolute', top: 20, left: 20,
                  padding: '5px 10px', borderRadius: 100,
                  background: 'rgba(255,255,255,0.9)', backdropFilter:'blur(12px)',
                  WebkitBackdropFilter:'blur(12px)',
                  fontSize: 10.5, fontWeight: 600, color: JP.greenInk,
                  letterSpacing: 0.5, textTransform: 'uppercase',
                }}>{s.badge}</div>
              )}
              <div style={{
                position:'absolute', top: 20, right: 20,
                width: 34, height: 34, borderRadius: 100,
                background: 'rgba(255,255,255,0.92)', backdropFilter:'blur(12px)',
                WebkitBackdropFilter:'blur(12px)',
                display:'flex', alignItems:'center', justifyContent:'center',
              }}>
                <JPIcon name="heart" size={16} color={JP.ink}/>
              </div>
            </div>
            <div style={{ padding: '4px 18px 16px' }}>
              <div style={{ display:'flex', alignItems:'flex-start', gap: 12 }}>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 15.5, fontWeight: 600, color: JP.ink,
                    lineHeight: 1.25 }}>{s.t}</div>
                  <div style={{ fontSize: 12.5, color: JP.inkMid, marginTop: 3 }}>
                    par {s.pro}
                  </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: 10, color: JP.inkSoft, letterSpacing: 0.5,
                    textTransform:'uppercase', fontWeight: 500 }}>dès</div>
                  <div style={{ fontSize: 17, fontWeight: 700, color: JP.greenInk,
                    fontFamily: 'DM Sans, system-ui, sans-serif', lineHeight: 1 }}>
                    {s.p} <span style={{ fontSize: 11, fontWeight: 500, color: JP.inkMid }}>DH</span>
                  </div>
                  <div style={{ fontSize: 10.5, color: JP.inkSoft, marginTop: 1 }}>{s.u}</div>
                </div>
              </div>
              <div style={{ display:'flex', alignItems:'center', gap: 14, marginTop: 12,
                paddingTop: 12, borderTop: '1px solid '+JP.lineSoft }}>
                <div style={{ display:'flex', alignItems:'center', gap: 4 }}>
                  <JPIcon name="star" size={13} color={JP.leaf} strokeW={2}/>
                  <span style={{ fontSize: 12.5, fontWeight: 600, color: JP.ink }}>{s.rating}</span>
                  <span style={{ fontSize: 12, color: JP.inkSoft }}>({s.reviews})</span>
                </div>
                <div style={{ width: 3, height: 3, borderRadius: 100, background: JP.inkSoft }}/>
                <div style={{ display:'flex', alignItems:'center', gap: 4 }}>
                  <JPIcon name="clock" size={13} color={JP.inkMid}/>
                  <span style={{ fontSize: 12, color: JP.inkMid }}>{s.duration}</span>
                </div>
                <div style={{ flex: 1 }}/>
                <div style={{
                  padding: '7px 12px', borderRadius: 100, background: JP.sandLight,
                  fontSize: 12, fontWeight: 600, color: JP.greenInk,
                  display:'flex', alignItems:'center', gap: 4,
                }}>
                  Voir
                  <JPIcon name="chevron" size={12} color={JP.greenInk} strokeW={2}/>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

window.ServiceList = ServiceList;
