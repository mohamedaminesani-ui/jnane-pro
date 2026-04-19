// Jnane Pro — Screen 5: Quote request form

const QuoteForm = () => {
  const [step] = React.useState(2); // step indicator
  const [propType, setPropType] = React.useState('villa');
  const [surface, setSurface] = React.useState(350);
  const [slot, setSlot] = React.useState('mat');
  const propTypes = [
    { id: 'villa', l: 'Villa', i: 'home' },
    { id: 'ryad', l: 'Ryad', i: 'home' },
    { id: 'appt', l: 'Appart.', i: 'home' },
    { id: 'pro', l: 'Pro', i: 'flag' },
  ];
  const slots = [
    { id: 'mat', l: 'Matin', h: '08h – 12h' },
    { id: 'apm', l: 'Après-midi', h: '12h – 17h' },
    { id: 'soir', l: 'Fin de journée', h: '17h – 19h' },
  ];

  return (
    <div style={{ background: JP.cream, minHeight: '100%', paddingBottom: 140,
      fontFamily: 'DM Sans, system-ui, sans-serif', color: JP.ink }}>

      {/* header */}
      <div style={{ padding: '8px 20px 8px' }}>
        <div style={{ display:'flex', alignItems:'center', gap: 12 }}>
          <div style={{
            width: 40, height: 40, borderRadius: 12, background: JP.white,
            display:'flex', alignItems:'center', justifyContent:'center',
            boxShadow: '0 0 0 1px '+JP.line,
          }}>
            <JPIcon name="close" size={18} color={JP.ink}/>
          </div>
          <div style={{ flex: 1, textAlign: 'center' }}>
            <div style={{ fontSize: 11, letterSpacing: 1.5, color: JP.inkSoft,
              textTransform: 'uppercase', fontWeight: 500 }}>Étape {step} / 3</div>
            <div style={{ fontSize: 15, fontWeight: 600, marginTop: 1 }}>
              Demande de devis
            </div>
          </div>
          <div style={{ width: 40 }}/>
        </div>
        {/* progress */}
        <div style={{ display:'flex', gap: 6, marginTop: 12 }}>
          {[1,2,3].map(i => (
            <div key={i} style={{
              flex: 1, height: 4, borderRadius: 2,
              background: i <= step ? JP.green : JP.sandDeep,
            }}/>
          ))}
        </div>
      </div>

      {/* section title */}
      <div style={{ padding: '18px 20px 4px' }}>
        <h1 style={{ margin: 0,
          fontFamily: '"Instrument Serif", Georgia, serif', fontWeight: 400,
          fontSize: 28, lineHeight: 1.05, letterSpacing: -0.3, color: JP.greenInk,
        }}>
          Parlez-nous de <em style={{ fontStyle:'italic', color: JP.green }}>votre jardin</em>
        </h1>
        <p style={{ margin: '6px 0 0', fontSize: 13.5, color: JP.inkMid }}>
          Plus on en sait, plus notre devis sera précis.
        </p>
      </div>

      {/* property type */}
      <div style={{ padding: '20px 20px 0' }}>
        <Label n="Type de propriété"/>
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr 1fr 1fr', gap: 8 }}>
          {propTypes.map(p => {
            const on = p.id === propType;
            return (
              <div key={p.id} onClick={() => setPropType(p.id)} style={{
                padding: '12px 6px', borderRadius: 14,
                background: on ? JP.green : JP.white,
                border: '1px solid '+(on ? JP.green : JP.line),
                display:'flex', flexDirection:'column', alignItems:'center', gap: 6,
                cursor: 'pointer',
              }}>
                <JPIcon name={p.i} size={20} color={on ? '#fff' : JP.inkMid}/>
                <div style={{ fontSize: 12, fontWeight: 500,
                  color: on ? '#fff' : JP.ink }}>{p.l}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* surface */}
      <div style={{ padding: '18px 20px 0' }}>
        <div style={{ display:'flex', alignItems:'baseline', justifyContent:'space-between' }}>
          <Label n="Surface du jardin"/>
          <span style={{ fontSize: 15, fontWeight: 700, color: JP.greenInk }}>
            {surface} <span style={{ fontSize: 11, fontWeight: 500, color: JP.inkMid }}>m²</span>
          </span>
        </div>
        <div style={{
          background: JP.white, borderRadius: 16, padding: '14px 16px 16px',
          boxShadow: '0 0 0 1px '+JP.line,
        }}>
          {/* custom slider */}
          <div style={{ position:'relative', height: 6, background: JP.sand,
            borderRadius: 100 }}>
            <div style={{ position:'absolute', left: 0, top: 0, bottom: 0,
              width: (surface/1000*100)+'%', background: JP.green, borderRadius: 100 }}/>
            <div style={{
              position:'absolute', left: `calc(${surface/1000*100}% - 12px)`, top: -9,
              width: 24, height: 24, borderRadius: 100, background: '#fff',
              border: '3px solid '+JP.green,
              boxShadow: '0 2px 8px rgba(30,91,58,0.25)',
            }}/>
            <input type="range" min="50" max="1000" step="10" value={surface}
              onChange={e => setSurface(+e.target.value)}
              style={{ position:'absolute', inset: -10, width:'100%', opacity: 0, cursor:'pointer' }}/>
          </div>
          <div style={{ display:'flex', justifyContent:'space-between', marginTop: 10,
            fontSize: 11, color: JP.inkSoft }}>
            <span>50 m²</span><span>500 m²</span><span>1000 m²</span>
          </div>
        </div>
      </div>

      {/* photo upload */}
      <div style={{ padding: '18px 20px 0' }}>
        <div style={{ display:'flex', alignItems:'baseline', justifyContent:'space-between' }}>
          <Label n="Photos du jardin"/>
          <span style={{ fontSize: 11, color: JP.inkSoft }}>3 / 10</span>
        </div>
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr 1fr 1fr', gap: 8 }}>
          {/* add tile */}
          <div style={{
            aspectRatio: '1', borderRadius: 14,
            background: JP.white, border: '1.5px dashed '+JP.sandDeep,
            display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center',
            gap: 4,
          }}>
            <JPIcon name="plus" size={20} color={JP.green} strokeW={2}/>
            <div style={{ fontSize: 10, color: JP.inkMid, fontWeight: 500 }}>Ajouter</div>
          </div>
          {['palm','olive','villa'].map((t, i) => (
            <div key={i} style={{ position:'relative', aspectRatio:'1' }}>
              <JPPhoto tone={t} h="100%" r={14} label="jardin"/>
              <div style={{
                position:'absolute', top: 5, right: 5, width: 20, height: 20,
                borderRadius: 100, background: 'rgba(0,0,0,0.5)',
                display:'flex', alignItems:'center', justifyContent:'center',
              }}>
                <JPIcon name="close" size={12} color="#fff" strokeW={2.5}/>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* GPS location */}
      <div style={{ padding: '18px 20px 0' }}>
        <Label n="Adresse d'intervention"/>
        <div style={{
          background: JP.white, borderRadius: 16,
          boxShadow: '0 0 0 1px '+JP.line, overflow:'hidden',
        }}>
          {/* mini map */}
          <div style={{
            height: 120, position:'relative',
            background: `linear-gradient(135deg, ${JP.sandLight} 0%, ${JP.sand} 100%)`,
          }}>
            {/* faux map lines */}
            <svg width="100%" height="100%" style={{ position:'absolute', inset: 0, opacity: 0.4 }}>
              <path d="M 0 40 Q 100 20 200 60 T 400 80" stroke={JP.sandDeep}
                strokeWidth="14" fill="none"/>
              <path d="M 30 0 Q 50 60 120 90 T 300 140" stroke={JP.sandDeep}
                strokeWidth="8" fill="none"/>
              <path d="M 0 100 L 400 100" stroke={JP.sandDeep} strokeWidth="2" strokeDasharray="4 6"/>
            </svg>
            {/* pin */}
            <div style={{
              position:'absolute', left:'50%', top:'50%', transform:'translate(-50%, -100%)',
              display:'flex', flexDirection:'column', alignItems:'center',
            }}>
              <div style={{
                padding:'4px 8px', borderRadius: 100, background: JP.green,
                color:'#fff', fontSize: 10, fontWeight: 600, marginBottom: 4,
                whiteSpace: 'nowrap',
              }}>Votre position</div>
              <div style={{
                width: 28, height: 28, borderRadius: 100, background: '#fff',
                border: '3px solid '+JP.green,
                display:'flex', alignItems:'center', justifyContent:'center',
              }}>
                <div style={{ width: 10, height: 10, borderRadius: 100, background: JP.green }}/>
              </div>
            </div>
          </div>
          <div style={{ padding: '12px 14px', display:'flex', alignItems:'center', gap: 10 }}>
            <JPIcon name="pin" size={18} color={JP.green}/>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 13, fontWeight: 600 }}>Villa 47, Rue des Jasmins</div>
              <div style={{ fontSize: 11.5, color: JP.inkSoft }}>Ain Diab, Casablanca 20180</div>
            </div>
            <div style={{
              padding: '6px 10px', borderRadius: 100, background: JP.sandLight,
              fontSize: 11.5, fontWeight: 600, color: JP.greenInk,
            }}>Modifier</div>
          </div>
        </div>
      </div>

      {/* preferred time slot */}
      <div style={{ padding: '18px 20px 0' }}>
        <Label n="Créneau préféré"/>
        <div style={{ display:'flex', gap: 8, marginBottom: 10 }}>
          {['Lun 22', 'Mar 23', 'Mer 24', 'Jeu 25'].map((d, i) => (
            <div key={d} style={{
              flex: 1, padding: '10px 0', textAlign:'center', borderRadius: 14,
              background: i === 2 ? JP.green : JP.white,
              color: i === 2 ? '#fff' : JP.ink,
              border: '1px solid '+(i === 2 ? JP.green : JP.line),
            }}>
              <div style={{ fontSize: 10, opacity: 0.8,
                textTransform: 'uppercase', letterSpacing: 0.5 }}>{d.split(' ')[0]}</div>
              <div style={{ fontSize: 17, fontWeight: 700, marginTop: 2 }}>{d.split(' ')[1]}</div>
            </div>
          ))}
        </div>
        <div style={{ display:'flex', flexDirection:'column', gap: 8 }}>
          {slots.map(s => {
            const on = s.id === slot;
            return (
              <div key={s.id} onClick={() => setSlot(s.id)} style={{
                padding: '14px 16px', borderRadius: 14, cursor: 'pointer',
                background: on ? JP.sandLight : JP.white,
                border: '1px solid '+(on ? JP.green : JP.line),
                display:'flex', alignItems:'center', gap: 12,
              }}>
                <div style={{
                  width: 22, height: 22, borderRadius: 100,
                  border: '2px solid '+(on ? JP.green : JP.line),
                  background: on ? JP.green : 'transparent',
                  display:'flex', alignItems:'center', justifyContent:'center',
                }}>
                  {on && <JPIcon name="check" size={12} color="#fff" strokeW={3}/>}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 14, fontWeight: 600 }}>{s.l}</div>
                  <div style={{ fontSize: 11.5, color: JP.inkSoft, marginTop: 1 }}>{s.h}</div>
                </div>
                <JPIcon name="clock" size={16} color={JP.inkSoft}/>
              </div>
            );
          })}
        </div>
      </div>

      {/* sticky CTA */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        padding: '14px 20px 30px',
        background: 'linear-gradient(to top, '+JP.cream+' 60%, rgba(251,247,238,0) 100%)',
        display: 'flex', alignItems: 'center', gap: 10,
      }}>
        <button style={{
          height: 54, padding: '0 18px', borderRadius: 16,
          border: '1px solid '+JP.line, background: JP.white, color: JP.ink,
          fontSize: 14, fontWeight: 500, fontFamily: 'inherit', cursor: 'pointer',
        }}>Retour</button>
        <button style={{
          flex: 1, height: 54, borderRadius: 16, border: 'none',
          background: JP.green, color: '#fff', fontSize: 15, fontWeight: 600,
          display:'flex', alignItems:'center', justifyContent:'center', gap: 8,
          fontFamily: 'inherit', cursor: 'pointer',
          boxShadow: '0 10px 24px rgba(30,91,58,0.28)',
        }}>
          Envoyer la demande
          <JPIcon name="arrow" size={18} color="#fff" strokeW={2}/>
        </button>
      </div>
    </div>
  );
};

const Label = ({ n }) => (
  <div style={{
    fontSize: 11, letterSpacing: 1.5, textTransform: 'uppercase',
    fontWeight: 600, color: JP.greenInk, marginBottom: 10,
    fontFamily: 'DM Sans, system-ui, sans-serif',
  }}>{n}</div>
);

Object.assign(window, { QuoteForm, Label });
