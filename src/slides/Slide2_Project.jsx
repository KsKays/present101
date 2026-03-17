export default function Slide2_Project() {
  const types = [
    { icon: '🙋', title: 'Self Assessment',      desc: 'ประเมินทักษะตนเองในแต่ละด้าน',     color: '#ff6d29' },
    { icon: '👥', title: 'Colleague Assessment', desc: 'ประเมินเพื่อนร่วมงาน รับ Feedback', color: '#6c5ce7' },
    { icon: '🏆', title: 'Team Project',         desc: 'ประเมินการทำงานในระดับทีม',          color: '#00b894' },
  ]
  const roles = [
    'ศึกษาข้อมูลผู้ใช้งานและผลิตภัณฑ์ดิจิทัล',
    'วิเคราะห์ข้อมูลและสรุป Key Insight',
    'ออกแบบหน้าจอ User Interface',
    'จัดทำ Prototype ต้นแบบของระบบ',
    'ปรับปรุงงานตาม Feedback ของทีม',
  ]

  return (
    <div className="slide">
      <div style={{ maxWidth: 1100, margin: '0 auto', width: '100%', display: 'flex', flexDirection: 'column', gap: 16 }}>

        <div className="fu1">
          <span className="badge">02 — ลักษณะงาน & โครงการ KXAS</span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.7fr', gap: 18 }}>

          {/* ── Left: Roles ── */}
          <div className="fu2 card" style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, background: 'var(--gradient)', borderRadius: '14px 14px 0 0' }} />
            <div style={{ display: 'flex', gap: 11, alignItems: 'center', marginTop: 8 }}>
              <div style={{ width: 40, height: 40, borderRadius: 11, background: 'rgba(255,109,41,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', border: '1px solid rgba(255,109,41,0.2)' }}>👨‍💻</div>
              <div>
                <div style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--text)' }}>บทบาทและหน้าที่</div>
                <div style={{ fontSize: '0.82rem', color: 'var(--primary-dark)', fontWeight: 600 }}>Research & UX/UI Designer</div>
              </div>
            </div>

            <div className="divider-shimmer" />

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
              {roles.map((r, i) => (
                <li key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: '0.9rem', color: 'var(--text-soft)', lineHeight: 1.55 }}>
                  <span className="num-bullet" style={{ marginTop: 2 }}>{i + 1}</span>{r}
                </li>
              ))}
            </ul>

            <div style={{ marginTop: 'auto', padding: '10px 14px', borderRadius: 10, background: 'rgba(255,109,41,0.08)', border: '1px solid rgba(255,109,41,0.18)', display: 'flex', gap: 10, alignItems: 'center' }}>
              <span style={{ fontSize: '1.2rem' }}>🛠️</span>
              <div>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>เครื่องมือหลัก</div>
                <div style={{ fontWeight: 700, color: 'var(--primary-dark)', fontSize: '0.95rem' }}>Figma</div>
              </div>
            </div>
          </div>

          {/* ── Right: KXAS ── */}
          <div className="fu3" style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>

            {/* KXAS Hero */}
            <div className="card" style={{ background: 'linear-gradient(135deg, #fff8f5 0%, #fff 70%)', borderColor: 'rgba(255,109,41,0.2)' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, background: 'var(--gradient)', borderRadius: '14px 14px 0 0' }} />
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12, marginTop: 4 }}>
                <div>
                  <div style={{ fontSize: '1.9rem', fontWeight: 800 }} className="gradient-text">KXAS</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>KO-Experience Assessment System</div>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-soft)', lineHeight: 1.65, marginTop: 8, maxWidth: 400 }}>
                    ระบบประเมินทักษะบุคลากร ช่วยพนักงานติดตามทักษะตนเอง และช่วยผู้จัดการวิเคราะห์ทีมเพื่อวางแผนพัฒนาศักยภาพบุคลากร
                  </p>
                </div>
                <span className="tag" style={{ flexShrink: 0 }}>โครงงานหลัก</span>
              </div>
            </div>

            {/* Work photo */}
            <div className="photo-frame" style={{ height: 148 }}>
              <img src="/images/IMG_0201.png" alt="Work at KO Experience" />
              <div className="photo-overlay-bottom" />
              {/* KoEX logo badge on photo */}
              <div style={{ position: 'absolute', top: 10, right: 12, background: 'rgba(255,255,255,0.92)', borderRadius: 7, padding: '4px 9px', boxShadow: '0 2px 8px rgba(0,0,0,0.15)' }}>
                <img src="/images/KoEX.png" alt="KoEX" style={{ height: 18, objectFit: 'contain', display: 'block' }} />
              </div>
              <div style={{ position: 'absolute', bottom: 11, left: 14, right: 14, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.9)', fontWeight: 500 }}>การทำงานจริงในองค์กร</span>
                <span className="tag" style={{ fontSize: '0.7rem', background: 'rgba(255,109,41,0.85)', color: '#fff', border: 'none' }}>High-Fidelity UI</span>
              </div>
            </div>

            {/* 3 Assessment types */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 10 }}>
              {types.map((t, i) => (
                <div key={i} className="card" style={{ padding: '14px', textAlign: 'center', borderTop: `3px solid ${t.color}`, background: `linear-gradient(160deg,${t.color}0a 0%,#fff 60%)` }}>
                  <div style={{ fontSize: '1.7rem', marginBottom: 6 }}>{t.icon}</div>
                  <div style={{ fontWeight: 700, fontSize: '0.84rem', color: t.color, marginBottom: 5 }}>{t.title}</div>
                  <div style={{ fontSize: '0.73rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>{t.desc}</div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
