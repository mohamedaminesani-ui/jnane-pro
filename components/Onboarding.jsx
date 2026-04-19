// Jnane Pro — Screen 1: Onboarding (3-slide intro)
// Premium, photo-centric with serif headline accent.

const Onboarding = ({ dark = false, initialSlide = 0 }) => {
  const [slide, setSlide] = React.useState(initialSlide);
  const slides = [
    {
      tone: 'palm',
      label: 'hero / dar-bouazza villa garden',
      eyebrow: 'Bienvenue',
      titleA: 'Votre jardin,',
      titleB: 'entretenu.',
      body: 'Des jardiniers de confiance pour vos villas, ryads et résidences — partout au Maroc.',
    },
    {
      tone: 'olive',
      label: 'hero / palmier dattier',
      eyebrow: 'Expertise',
      titleA: 'Spécialistes',
      titleB: 'des palmiers.',
      body: 'Élagage, traitement du charançon rouge, transplantation. Équipes certifiées, matériel professionnel.',
    },
    {
      tone: 'sunset',
      label: 'hero / jardin rabat souissi',
      eyebrow: 'Sérénité',
      titleA: 'Devis en 24h,',
      titleB: 'sans surprise.',
      body: 'Photos, visite sur place, prix transparent. Vous validez, on s\'occupe du reste.',
    },
  ];
  const s = slides[slide];

  return (
    <div style={{
      height: '100%', display: 'flex', flexDirection: 'column',
      background: JP.cream, fontFamily: 'DM Sans, system-ui, sans-serif',
      color: JP.ink,
    }}>
      {/* full-bleed image — takes top 58% */}
      <div style={{ position: 'relative', height: '58%', padding: '0 0 0 0' }}>
        <JPPhoto tone={s.tone} label={s.label} h="100%" r={0}
          style={{ borderBottomLeftRadius: 32, borderBottomRightRadius: 32 }}>
          {/* skip button overlay */}
          <button style={{
            position:'absolute', top: 60, right: 20, zIndex: 2,
            background: 'rgba(255,255,255,0.22)', backdropFilter: 'blur(14px)',
            WebkitBackdropFilter: 'blur(14px)',
            border: '1px solid rgba(255,255,255,0.3)',
            color: '#fff', fontSize: 13, fontWeight: 500,
            padding: '7px 14px', borderRadius: 100, cursor: 'pointer',
            fontFamily: 'inherit', letterSpacing: 0.1,
          }}>Passer</button>

          {/* eyebrow badge */}
          <div style={{
            position:'absolute', left: 24, top: 60,
            display:'flex', alignItems:'center', gap: 8,
          }}>
            <div style={{
              width: 28, height: 1, background: 'rgba(255,255,255,0.8)',
            }}/>
            <span style={{
              color: 'rgba(255,255,255,0.9)', fontSize: 11,
              fontWeight: 500, letterSpacing: 2, textTransform: 'uppercase',
            }}>{s.eyebrow}</span>
          </div>

          {/* bottom gradient */}
          <div style={{
            position:'absolute', inset: 0,
            background: 'linear-gradient(to bottom, transparent 55%, rgba(0,0,0,0.35) 100%)',
          }}/>
        </JPPhoto>
      </div>

      {/* content */}
      <div style={{
        flex: 1, padding: '32px 28px 24px',
        display: 'flex', flexDirection: 'column',
      }}>
        {/* headline */}
        <h1 style={{
          margin: 0, fontFamily: '"Instrument Serif", "DM Serif Display", Georgia, serif',
          fontWeight: 400, fontSize: 40, lineHeight: 1.02,
          letterSpacing: -0.5, color: JP.greenInk,
        }}>
          {s.titleA}<br/>
          <em style={{ fontStyle: 'italic', color: JP.green }}>{s.titleB}</em>
        </h1>
        <p style={{
          margin: '16px 0 0', fontSize: 15.5, lineHeight: 1.5,
          color: JP.inkMid, maxWidth: 320, textWrap: 'pretty',
        }}>{s.body}</p>

        {/* spacer */}
        <div style={{ flex: 1 }}/>

        {/* dots + CTA */}
        <div style={{ display:'flex', alignItems:'center', gap: 16, marginTop: 20 }}>
          <div style={{ display:'flex', gap: 6, flex: 1 }}>
            {slides.map((_, i) => (
              <div key={i}
                onClick={() => setSlide(i)}
                style={{
                  height: 6, borderRadius: 3, cursor:'pointer',
                  width: i === slide ? 26 : 6,
                  background: i === slide ? JP.green : JP.sandDeep,
                  transition: 'all 280ms cubic-bezier(.2,.8,.2,1)',
                }}/>
            ))}
          </div>
          <button
            onClick={() => setSlide((slide + 1) % slides.length)}
            style={{
              width: 64, height: 64, borderRadius: 100,
              background: JP.green, color: '#fff', border: 'none',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer', boxShadow: '0 10px 24px rgba(30,91,58,0.35)',
            }}>
            <JPIcon name="arrow" size={22} color="#fff" strokeW={2}/>
          </button>
        </div>
      </div>
    </div>
  );
};

window.Onboarding = Onboarding;
