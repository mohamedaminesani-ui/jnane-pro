// Jnane Pro — Screen 6: Booking confirmation & tracking

const Tracking = () => {
  const steps = [
    { l: 'Demande reçue', t: 'Aujourd\'hui · 10h24', done: true },
    { l: 'Devis validé', t: 'Aujourd\'hui · 14h02', done: true },
    { l: 'Équipe en route', t: 'Arrive dans 18 min', done: true, active: true },
    { l: 'Intervention en cours', t: 'Prévu à 15h30', done: false },
    { l: 'Terminé', t: '—', done: false },
  ];

  return (
    <div style={{ background: JP.cream, minHeight: '100%', paddingBottom: 140,
      fontFamily: 'DM Sans, system-ui, sans-serif', color: JP.ink }}>

      {/* top hero strip — success */}
      <div style={{
        background: JP.green, padding: '16px 20px 28px',
        borderBottomLeftRadius: 28, borderBottomRightRadius: 28,
        position: 'relative', overflow: 'hidden',
      }}>
        {/* decorative */}
        <svg width="180" height="180" viewBox="0 0 180 180" style={{
          position:'absolute', right: -40, top: -40, opacity: 0.12,
        }}>
          <circle cx="90" cy="90" r="85" stroke="#fff" strokeWidth="1" fill="none"/>
          <circle cx="90" cy="90" r="60" stroke="#fff" strokeWidth="1" fill="none"/>
          <circle cx="90" cy="90" r="35" stroke="#fff" strokeWidth="1" fill="none"/>
        </svg>
        <div style={{ display:'flex', alignItems:'center', gap: 12 }}>
          <div style={{
            width: 40, height: 40, borderRadius: 12,
            background: 'rgba(255,255,255,0.15)', backdropFilter:'blur(10px)',
            display:'flex', alignItems:'center', justifyContent:'center',
          }}>
            <JPIcon name="back" size={18} color="#fff"/>
          </div>
          <div style={{ flex: 1, textAlign: 'center' }}>
            <div style={{ fontSize: 11, letterSpacing: 1.5, color: 'rgba(255,255,255,0.7)',
              textTransform: 'uppercase', fontWeight: 500 }}>Réservation</div>
            <div style={{ fontSize: 15, fontWeight: 600, color: '#fff', marginTop: 1 }}>
              #JP-24891
            </div>
          </div>
          <div style={{
            width: 40, height: 40, borderRadius: 12,
            background: 'rgba(255,255,255,0.15)', backdropFilter:'blur(10px)',
            display:'flex', alignItems:'center', justifyContent:'center',
          }}>
            <JPIcon name="info" size={18} color="#fff"/>
          </div>
        </div>

        <div style={{ marginTop: 22, position:'relative' }}>
          <div style={{
            display:'inline-flex', alignItems:'center', gap: 8,
            padding:'5px 12px', borderRadius: 100,
            background: 'rgba(255,255,255,0.18)',
            backdropFilter:'blur(10px)', WebkitBackdropFilter:'blur(10px)',
            border: '1px solid rgba(255,255,255,0.2)',
          }}>
            <div style={{ width: 8, height: 8, borderRadius: 100, background: JP.leafSoft,
              boxShadow: '0 0 0 4px rgba(168,207,122,0.25)' }}/>
            <span style={{ fontSize: 11, color: '#fff', fontWeight: 600,
              letterSpacing: 1, textTransform: 'uppercase' }}>En route</span>
          </div>
          <h1 style={{ margin: '12px 0 4px', color: '#fff',
            fontFamily: '"Instrument Serif", Georgia, serif', fontWeight: 400,
            fontSize: 32, lineHeight: 1.05, letterSpacing: -0.4 }}>
            L'équipe arrive <em style={{ fontStyle:'italic', color: JP.leafSoft }}>dans 18 min</em>
          </h1>
          <p style={{ margin: '6px 0 0', fontSize: 13.5, color: 'rgba(255,255,255,0.75)' }}>
            Samedi 24 avril · créneau 15h00 – 17h00
          </p>
        </div>
      </div>

      {/* technician card — floats */}
      <div style={{ padding: '0 20px', marginTop: -18, position:'relative', zIndex: 2 }}>
        <div style={{
          background: JP.white, borderRadius: 22, padding: 16,
          boxShadow: '0 10px 24px rgba(0,0,0,0.08), 0 0 0 1px '+JP.line,
        }}>
          <div style={{ display:'flex', alignItems:'center', gap: 14 }}>
            {/* photo */}
            <div style={{
              width: 62, height: 62, borderRadius: 18, overflow: 'hidden',
              position:'relative', flexShrink: 0,
            }}>
              <JPPhoto tone="earth" h={62} r={18} label="photo"/>
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 10, letterSpacing: 1.5, color: JP.inkSoft,
                textTransform:'uppercase', fontWeight: 600 }}>Votre technicien</div>
              <div style={{ fontSize: 16, fontWeight: 600, color: JP.ink, marginTop: 2 }}>
                Hassan El Fassi
              </div>
              <div style={{ display:'flex', alignItems:'center', gap: 6, marginTop: 3 }}>
                <JPIcon name="star" size={12} color={JP.leaf} strokeW={2}/>
                <span style={{ fontSize: 12, fontWeight: 500, color: JP.ink }}>4.9</span>
                <span style={{ fontSize: 11.5, color: JP.inkSoft }}>· 312 interventions</span>
              </div>
            </div>
          </div>

          <div style={{ display:'flex', gap: 8, marginTop: 14 }}>
            <div style={{
              flex: 1, height: 44, borderRadius: 12,
              background: JP.sandLight, border: '1px solid '+JP.sandDeep,
              display:'flex', alignItems:'center', justifyContent:'center', gap: 6,
              color: JP.greenInk, fontSize: 13, fontWeight: 600,
            }}>
              <JPIcon name="phone" size={15} color={JP.greenInk}/>
              Appeler
            </div>
            <div style={{
              flex: 1, height: 44, borderRadius: 12, background: JP.green,
              display:'flex', alignItems:'center', justifyContent:'center', gap: 6,
              color: '#fff', fontSize: 13, fontWeight: 600,
            }}>
              <JPIcon name="msg" size={15} color="#fff"/>
              Message
            </div>
          </div>
        </div>
      </div>

      {/* mini-map with ETA */}
      <div style={{ padding: '16px 20px 0' }}>
        <div style={{
          borderRadius: 22, overflow:'hidden', height: 160, position:'relative',
          background: `linear-gradient(135deg, ${JP.sandLight} 0%, ${JP.sand} 100%)`,
          boxShadow: '0 0 0 1px '+JP.line,
        }}>
          {/* roads */}
          <svg width="100%" height="100%" style={{ position:'absolute', inset: 0, opacity: 0.5 }}>
            <path d="M -20 120 Q 100 40 220 90 T 420 70" stroke={JP.sandDeep}
              strokeWidth="16" fill="none"/>
            <path d="M -20 120 Q 100 40 220 90 T 420 70" stroke="#fff"
              strokeWidth="2" strokeDasharray="8 10" fill="none"/>
            <path d="M 50 -20 Q 100 80 70 180" stroke={JP.sandDeep} strokeWidth="8" fill="none"/>
            <path d="M 300 -20 Q 280 80 360 180" stroke={JP.sandDeep} strokeWidth="8" fill="none"/>
          </svg>
          {/* tech pin (moving) */}
          <div style={{
            position:'absolute', left:'22%', top:'55%', transform:'translate(-50%, -100%)',
          }}>
            <div style={{
              width: 42, height: 42, borderRadius: 100,
              background: '#fff', border: '3px solid '+JP.green,
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
              display:'flex', alignItems:'center', justifyContent:'center',
            }}>
              <JPIcon name="truck" size={20} color={JP.green}/>
            </div>
          </div>
          {/* destination pin */}
          <div style={{
            position:'absolute', right:'12%', top:'40%', transform:'translate(50%, -100%)',
            display:'flex', flexDirection:'column', alignItems:'center',
          }}>
            <div style={{
              padding:'4px 9px', borderRadius: 100, background: JP.greenInk,
              color:'#fff', fontSize: 10, fontWeight: 600, marginBottom: 4,
              whiteSpace: 'nowrap',
            }}>Vous</div>
            <div style={{
              width: 22, height: 22, borderRadius: 100, background: JP.greenInk,
              border: '3px solid #fff',
            }}/>
          </div>
          {/* ETA badge */}
          <div style={{
            position:'absolute', bottom: 12, left: 12,
            padding: '8px 14px 8px 10px', borderRadius: 100,
            background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(12px)',
            display:'flex', alignItems:'center', gap: 8,
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          }}>
            <JPIcon name="clock" size={15} color={JP.green}/>
            <div>
              <div style={{ fontSize: 11, color: JP.inkSoft, lineHeight: 1 }}>Arrivée</div>
              <div style={{ fontSize: 14, fontWeight: 700, color: JP.greenInk,
                letterSpacing: -0.2, marginTop: 1 }}>15h18</div>
            </div>
          </div>
        </div>
      </div>

      {/* status timeline */}
      <div style={{ padding: '22px 20px 0' }}>
        <h3 style={{ margin:'0 0 14px', fontSize: 15, fontWeight: 600,
          letterSpacing: -0.2 }}>Suivi de l'intervention</h3>
        <div style={{
          background: JP.white, borderRadius: 20, padding: '14px 18px',
          boxShadow: '0 0 0 1px '+JP.line,
        }}>
          {steps.map((s, i) => (
            <div key={i} style={{ display:'flex', gap: 14, position:'relative' }}>
              {/* rail */}
              <div style={{ position:'relative', width: 22, flexShrink: 0,
                display: 'flex', justifyContent: 'center' }}>
                {i < steps.length - 1 && (
                  <div style={{
                    position:'absolute', top: 24, bottom: -10, width: 2,
                    background: s.done ? JP.green : JP.sandDeep,
                  }}/>
                )}
                <div style={{
                  width: s.active ? 22 : 18, height: s.active ? 22 : 18,
                  borderRadius: 100, marginTop: s.active ? 4 : 6,
                  background: s.done ? JP.green : '#fff',
                  border: s.done ? 'none' : '2px solid '+JP.sandDeep,
                  display:'flex', alignItems:'center', justifyContent:'center',
                  boxShadow: s.active ? '0 0 0 5px rgba(30,91,58,0.15)' : 'none',
                  zIndex: 1,
                }}>
                  {s.done && !s.active && <JPIcon name="check" size={11} color="#fff" strokeW={3}/>}
                  {s.active && <div style={{ width: 8, height: 8, borderRadius: 100, background: '#fff' }}/>}
                </div>
              </div>
              <div style={{ flex: 1, paddingBottom: i < steps.length - 1 ? 18 : 0 }}>
                <div style={{
                  fontSize: 14, fontWeight: s.active ? 700 : (s.done ? 600 : 500),
                  color: s.done ? JP.ink : JP.inkSoft,
                }}>{s.l}</div>
                <div style={{ fontSize: 12, color: s.active ? JP.green : JP.inkSoft,
                  marginTop: 2, fontWeight: s.active ? 600 : 400 }}>
                  {s.t}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* summary card */}
      <div style={{ padding: '16px 20px 0' }}>
        <div style={{
          background: JP.sand, borderRadius: 18, padding: '14px 16px',
          border: '1px solid '+JP.sandDeep,
        }}>
          <div style={{ display:'flex', alignItems:'center', gap: 12 }}>
            <JPPhoto tone="olive" label="palm" h={48} r={12}
              style={{ width: 48, flexShrink: 0 }}/>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 13.5, fontWeight: 600, color: JP.ink,
                lineHeight: 1.3 }}>Élagage de palmiers × 3</div>
              <div style={{ fontSize: 11.5, color: JP.inkMid, marginTop: 2 }}>
                Villa 47, Ain Diab
              </div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: 15, fontWeight: 700, color: JP.greenInk }}>
                1 350 <span style={{ fontSize: 11 }}>DH</span>
              </div>
              <div style={{ fontSize: 10.5, color: JP.inkSoft }}>Total TTC</div>
            </div>
          </div>
        </div>
      </div>

      {/* secondary actions */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0,
        padding: '14px 20px 30px',
        background: 'linear-gradient(to top, '+JP.cream+' 60%, rgba(251,247,238,0) 100%)',
        display: 'flex', gap: 10,
      }}>
        <button style={{
          flex: 1, height: 50, borderRadius: 14, border: '1px solid '+JP.line,
          background: JP.white, color: JP.ink, fontSize: 13, fontWeight: 500,
          fontFamily: 'inherit', cursor: 'pointer',
        }}>Annuler</button>
        <button style={{
          flex: 2, height: 50, borderRadius: 14, border: 'none',
          background: JP.greenInk, color: '#fff', fontSize: 14, fontWeight: 600,
          fontFamily: 'inherit', cursor: 'pointer',
          boxShadow: '0 6px 16px rgba(30,91,58,0.22)',
          display:'flex', alignItems:'center', justifyContent:'center', gap: 6,
        }}>
          <JPIcon name="share" size={15} color="#fff"/>
          Partager le suivi
        </button>
      </div>
    </div>
  );
};

window.Tracking = Tracking;
