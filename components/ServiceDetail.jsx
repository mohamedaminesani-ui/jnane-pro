// Jnane Pro — Screen 4: Service detail

const ServiceDetail = () => {
  const [faqOpen, setFaqOpen] = React.useState(1);
  const faqs = [
    { q: 'Que comprend l\'élagage d\'un palmier ?', a: 'Coupe des palmes sèches, nettoyage du stipe, traitement préventif contre le charançon rouge, et évacuation des déchets verts.' },
    { q: 'À quelle fréquence faut-il tailler mes palmiers ?', a: 'Une fois par an suffit pour la plupart des espèces. Les Phoenix canariensis peuvent demander deux passages en cas de forte infestation.' },
    { q: 'Combien de temps dure l\'intervention ?', a: 'Entre 45 min et 2h par arbre, selon la hauteur et l\'état. Nos équipes travaillent en binôme harnaché.' },
    { q: 'Intervenez-vous en cas d\'urgence ?', a: 'Oui, sous 24–48h pour les cas graves (palme en chute, charançon avéré).' },
  ];

  return (
    <div style={{ background: JP.cream, minHeight: '100%', paddingBottom: 140,
      fontFamily: 'DM Sans, system-ui, sans-serif', color: JP.ink }}>

      {/* hero */}
      <div style={{ position: 'relative' }}>
        <JPPhoto tone="olive" label="elagage palmier canariensis" h={340} r={0}
          style={{ borderBottomLeftRadius: 32, borderBottomRightRadius: 32 }}>
          {/* back + share overlay */}
          <div style={{
            position:'absolute', top: 56, left: 20, right: 20, zIndex: 2,
            display:'flex', justifyContent:'space-between',
          }}>
            {['back','share'].map((i, k) => (
              <div key={i} style={{
                width: 40, height: 40, borderRadius: 100,
                background: 'rgba(255,255,255,0.85)', backdropFilter:'blur(14px)',
                WebkitBackdropFilter:'blur(14px)',
                display:'flex', alignItems:'center', justifyContent:'center',
                marginLeft: k ? 'auto' : 0,
              }}>
                <JPIcon name={i} size={18} color={JP.ink}/>
              </div>
            ))}
          </div>
          {/* image counter */}
          <div style={{
            position:'absolute', bottom: 20, right: 20, padding: '6px 12px',
            borderRadius: 100, background: 'rgba(0,0,0,0.35)', backdropFilter:'blur(12px)',
            color: '#fff', fontSize: 12, fontWeight: 500,
          }}>1 / 8</div>
        </JPPhoto>
      </div>

      {/* title card — floats over image */}
      <div style={{ padding: '0 20px', marginTop: -30, position:'relative', zIndex: 2 }}>
        <div style={{
          background: JP.white, borderRadius: 24, padding: '22px 20px 18px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.08), 0 0 0 1px '+JP.line,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <div style={{
              padding: '3px 9px', borderRadius: 100, background: JP.sandLight,
              fontSize: 10.5, letterSpacing: 1, color: JP.greenInk, fontWeight: 600,
              textTransform: 'uppercase',
            }}>Palmiers</div>
            <div style={{ display:'flex', alignItems:'center', gap: 4, marginLeft: 'auto' }}>
              <JPIcon name="star" size={13} color={JP.leaf} strokeW={2}/>
              <span style={{ fontSize: 13, fontWeight: 600 }}>4.9</span>
              <span style={{ fontSize: 12, color: JP.inkSoft }}>(86 avis)</span>
            </div>
          </div>
          <h1 style={{
            margin: '12px 0 0', fontSize: 24, fontWeight: 600, color: JP.ink,
            letterSpacing: -0.4, lineHeight: 1.15,
          }}>
            Élagage & traitement <br/>
            <em style={{ fontFamily:'"Instrument Serif", Georgia, serif',
              fontWeight: 400, fontStyle: 'italic', color: JP.green }}>de palmiers</em>
          </h1>
          <div style={{ display:'flex', alignItems:'baseline', gap: 8, marginTop: 14 }}>
            <span style={{ fontSize: 11, color: JP.inkSoft, letterSpacing: 0.5,
              textTransform: 'uppercase', fontWeight: 500 }}>À partir de</span>
            <span style={{ fontSize: 28, fontWeight: 700, color: JP.greenInk,
              letterSpacing: -0.5 }}>450 <span style={{ fontSize: 14, fontWeight: 500,
              color: JP.inkMid }}>DH</span></span>
            <span style={{ fontSize: 12, color: JP.inkSoft }}>/ arbre</span>
          </div>
        </div>
      </div>

      {/* info strip */}
      <div style={{ padding: '18px 20px 4px', display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr', gap: 10 }}>
        {[
          { l: 'Durée', v: '45–90 min' },
          { l: 'Garantie', v: '3 mois' },
          { l: 'Équipe', v: 'Binôme' },
        ].map(x => (
          <div key={x.l} style={{
            background: JP.white, borderRadius: 14, padding: '10px 12px',
            boxShadow: '0 0 0 1px '+JP.line,
          }}>
            <div style={{ fontSize: 10.5, color: JP.inkSoft, letterSpacing: 0.3,
              textTransform: 'uppercase', fontWeight: 500 }}>{x.l}</div>
            <div style={{ fontSize: 13, fontWeight: 600, color: JP.ink, marginTop: 3 }}>
              {x.v}
            </div>
          </div>
        ))}
      </div>

      {/* description */}
      <div style={{ padding: '18px 20px 0' }}>
        <h3 style={{ margin:'0 0 8px', fontSize: 15, fontWeight: 600,
          letterSpacing: -0.2 }}>Description</h3>
        <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.55, color: JP.inkMid,
          textWrap: 'pretty' }}>
          Nos équipes spécialisées interviennent sur tous types de palmiers —
          Phoenix dactylifera, Washingtonia, canariensis — pour une coupe nette
          et un traitement préventif contre le charançon rouge.
        </p>
        <div style={{ marginTop: 10, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {['Phoenix dactylifera', 'Washingtonia', 'Canariensis', 'Traitement'].map(t => (
            <div key={t} style={{
              padding: '6px 10px', borderRadius: 100,
              background: JP.sandLight, border: '1px solid '+JP.sandDeep,
              fontSize: 11.5, color: JP.greenInk, fontWeight: 500,
            }}>{t}</div>
          ))}
        </div>
      </div>

      {/* what's included */}
      <div style={{ padding: '22px 20px 0' }}>
        <h3 style={{ margin:'0 0 10px', fontSize: 15, fontWeight: 600,
          letterSpacing: -0.2 }}>Inclus dans la prestation</h3>
        <div style={{ background: JP.white, borderRadius: 18, padding: 4,
          boxShadow: '0 0 0 1px '+JP.line }}>
          {[
            'Visite sur place & devis gratuit',
            'Coupe des palmes sèches',
            'Nettoyage du stipe',
            'Traitement préventif charançon',
            'Évacuation des déchets verts',
          ].map((x, i, a) => (
            <div key={x} style={{
              display:'flex', alignItems:'center', gap: 12, padding: '12px 14px',
              borderBottom: i < a.length - 1 ? '1px solid '+JP.lineSoft : 'none',
            }}>
              <div style={{
                width: 22, height: 22, borderRadius: 100,
                background: JP.leaf, display:'flex', alignItems:'center', justifyContent:'center',
              }}>
                <JPIcon name="check" size={14} color="#fff" strokeW={2.5}/>
              </div>
              <div style={{ fontSize: 14, color: JP.ink }}>{x}</div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div style={{ padding: '22px 20px 0' }}>
        <h3 style={{ margin:'0 0 10px', fontSize: 15, fontWeight: 600,
          letterSpacing: -0.2 }}>Questions fréquentes</h3>
        <div style={{ background: JP.white, borderRadius: 18,
          boxShadow: '0 0 0 1px '+JP.line, overflow:'hidden' }}>
          {faqs.map((f, i) => {
            const open = i === faqOpen;
            return (
              <div key={i} style={{
                borderBottom: i < faqs.length - 1 ? '1px solid '+JP.lineSoft : 'none',
              }}>
                <div onClick={() => setFaqOpen(open ? -1 : i)} style={{
                  padding: '14px 16px', display:'flex', alignItems:'center', gap: 10,
                  cursor: 'pointer',
                }}>
                  <div style={{ flex: 1, fontSize: 14, fontWeight: 500, color: JP.ink,
                    lineHeight: 1.35 }}>{f.q}</div>
                  <div style={{
                    width: 26, height: 26, borderRadius: 100,
                    background: open ? JP.green : JP.sandLight,
                    display:'flex', alignItems:'center', justifyContent:'center',
                    transition: 'all 200ms',
                  }}>
                    <JPIcon name={open ? 'chevUp' : 'chevDn'} size={14}
                      color={open ? '#fff' : JP.greenInk} strokeW={2}/>
                  </div>
                </div>
                {open && (
                  <div style={{
                    padding: '0 16px 14px',
                    fontSize: 13.5, lineHeight: 1.55, color: JP.inkMid,
                    textWrap: 'pretty',
                  }}>{f.a}</div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* CTA bar — sticky */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        padding: '14px 20px 30px',
        background: 'linear-gradient(to top, '+JP.cream+' 60%, rgba(251,247,238,0) 100%)',
        display: 'flex', alignItems: 'center', gap: 12,
      }}>
        <div style={{
          width: 54, height: 54, borderRadius: 16,
          background: JP.white, border: '1px solid '+JP.line,
          display:'flex', alignItems:'center', justifyContent:'center',
          boxShadow: '0 4px 12px rgba(0,0,0,0.04)',
        }}>
          <JPIcon name="msg" size={22} color={JP.green}/>
        </div>
        <button style={{
          flex: 1, height: 54, borderRadius: 16, border: 'none',
          background: JP.green, color: '#fff', fontSize: 15, fontWeight: 600,
          display:'flex', alignItems:'center', justifyContent:'center', gap: 8,
          fontFamily: 'inherit', letterSpacing: 0.1,
          boxShadow: '0 10px 24px rgba(30,91,58,0.28)', cursor: 'pointer',
        }}>
          Demander un devis
          <JPIcon name="arrow" size={18} color="#fff" strokeW={2}/>
        </button>
      </div>
    </div>
  );
};

window.ServiceDetail = ServiceDetail;
