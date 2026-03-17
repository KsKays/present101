export default function Slide4_Outcomes() {
  const skills = [
    { icon: '💼', title: 'ประสบการณ์จริง',  desc: 'รับ Brief, ประชุมทีม, รับ/ให้ Feedback' },
    { icon: '🎨', title: 'UX/UI Design',     desc: 'User Research, Insight, User Flow' },
    { icon: '🔎', title: 'วิเคราะห์ปัญหา',  desc: 'หา Pain Points ออกแบบแนวทางแก้ไข' },
    { icon: '🛠️', title: 'Figma',            desc: 'Wireframe, Prototype, Design System' },
    { icon: '🗣️', title: 'Communication',    desc: 'นำเสนอแนวคิด อธิบายการตัดสินใจ' },
  ]
  const problems = [
    { icon: '👥', title: 'กลุ่มตัวอย่างจำกัด', desc: 'ผู้ให้สัมภาษณ์น้อย ข้อมูลอาจไม่ครบทุก User Type' },
    { icon: '🔄', title: 'เปลี่ยนแพลตฟอร์ม',  desc: 'Mobile → Website ต้องปรับโครงสร้างออกแบบใหม่' },
    { icon: '🧩', title: 'ระบบซับซ้อน',        desc: '3 รูปแบบประเมิน — ออกแบบ Flow ไม่ให้สับสน' },
    { icon: '⏱️', title: 'เวลาจำกัด',           desc: 'ไม่สามารถต่อยอดเป็น Production ในช่วงสหกิจ' },
  ]
  const suggestions = [
    { icon: '🧪', title: 'Usability Testing',  desc: 'ทดสอบกับผู้ใช้จริงก่อน Launch',     color: '#ff6d29' },
    { icon: '📈', title: 'ขยาย User Research', desc: 'กลุ่มตัวอย่างให้หลากหลายขึ้น',       color: '#6c5ce7' },
    { icon: '⚙️', title: 'ต่อยอด Production',  desc: 'พัฒนา Prototype เป็น Web App จริง', color: '#00b894' },
    { icon: '📊', title: 'เพิ่ม Analytics',    desc: 'Dashboard ให้ผู้บริหารดูข้อมูลทีม',   color: '#e17055' },
  ]

  return (
    <div className="slide">
      <div style={{ maxWidth: 1100, margin: '0 auto', width: '100%', display: 'flex', flexDirection: 'column', gap: 14 }}>

        <div className="fu1">
          <span className="badge">04 — ทักษะ / ปัญหา / ข้อเสนอแนะ</span>
        </div>

        {/* 3-column grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 14 }} className="fu2">

          {/* Skills */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <ColHeader icon="🎓" label="ทักษะที่ได้รับ" color="#ff6d29" bg="rgba(255,109,41,0.1)" />
            {skills.map((s, i) => (
              <div key={i} className="card" style={{ padding: '10px 13px', borderLeft: '3px solid #ff6d29', display: 'flex', flexDirection: 'column', gap: 4 }}>
                <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                  <span style={{ fontSize: '1rem' }}>{s.icon}</span>
                  <span style={{ fontWeight: 700, fontSize: '0.84rem', color: 'var(--primary-dark)' }}>{s.title}</span>
                </div>
                <div style={{ fontSize: '0.73rem', color: 'var(--text-muted)', lineHeight: 1.5, paddingLeft: 26 }}>{s.desc}</div>
              </div>
            ))}
          </div>

          {/* Problems */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <ColHeader icon="⚠️" label="ปัญหา & ข้อจำกัด" color="#6c5ce7" bg="rgba(108,92,231,0.1)" />
            {problems.map((p, i) => (
              <div key={i} className="card" style={{ padding: '10px 13px', borderLeft: '3px solid #6c5ce7', display: 'flex', flexDirection: 'column', gap: 4 }}>
                <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                  <span style={{ fontSize: '1rem' }}>{p.icon}</span>
                  <span style={{ fontWeight: 700, fontSize: '0.84rem', color: '#6c5ce7' }}>{p.title}</span>
                </div>
                <div style={{ fontSize: '0.73rem', color: 'var(--text-muted)', lineHeight: 1.5, paddingLeft: 26 }}>{p.desc}</div>
              </div>
            ))}
          </div>

          {/* Suggestions */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <ColHeader icon="💡" label="ข้อเสนอแนะ" color="#00b894" bg="rgba(0,184,148,0.1)" />
            {suggestions.map((s, i) => (
              <div key={i} className="card" style={{ padding: '10px 13px', borderLeft: `3px solid ${s.color}`, display: 'flex', flexDirection: 'column', gap: 4 }}>
                <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                  <span style={{ fontSize: '1rem' }}>{s.icon}</span>
                  <span style={{ fontWeight: 700, fontSize: '0.84rem', color: s.color }}>{s.title}</span>
                </div>
                <div style={{ fontSize: '0.73rem', color: 'var(--text-muted)', lineHeight: 1.5, paddingLeft: 26 }}>{s.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Closing banner (dark contrast card) ── */}
        <div className="fu3" style={{
          borderRadius: 16,
          background: 'linear-gradient(135deg, #2b2637 0%, #3d3850 100%)',
          border: 'none',
          display: 'flex', alignItems: 'center', gap: 18, padding: '18px 24px', flexWrap: 'wrap',
          boxShadow: '0 8px 32px rgba(43,38,55,0.2)',
        }}>
          {/* Real photo avatar */}
          <div style={{ width: 56, height: 56, borderRadius: 12, overflow: 'hidden', border: '2.5px solid rgba(255,109,41,0.6)', flexShrink: 0, boxShadow: '0 0 16px rgba(255,109,41,0.3)' }}>
            <img src="/images/IMG_3683.png" alt="Kay" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>

          {/* KoEX logo */}
          <div style={{ borderRadius: 8, background: 'rgba(255,255,255,0.1)', padding: '6px 12px', display: 'flex', alignItems: 'center', gap: 8, backdropFilter: 'blur(8px)' }}>
            <img src="/images/KoEX.png" alt="KoEX" style={{ height: 22, objectFit: 'contain', filter: 'brightness(0) invert(1)', opacity: 0.9 }} />
          </div>

          <div style={{ flex: 1 }}>
            <div style={{ fontSize: '1.05rem', fontWeight: 800, color: '#fff' }}>ขอบคุณที่รับฟัง 🙏</div>
            <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.55)', marginTop: 2 }}>
              Thirayut Boonin (Kay) · 654259005 · Research & UX/UI
            </div>
          </div>

          <div style={{ display: 'flex', gap: 7, flexWrap: 'wrap' }}>
            <span style={{ padding: '4px 11px', borderRadius: 7, fontSize: '0.74rem', fontWeight: 600, background: 'rgba(255,109,41,0.2)', color: '#ffb38a', border: '1px solid rgba(255,109,41,0.3)' }}>Human-Centric Design</span>
            <span style={{ padding: '4px 11px', borderRadius: 7, fontSize: '0.74rem', fontWeight: 600, background: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.7)', border: '1px solid rgba(255,255,255,0.14)' }}>10 Heuristics</span>
            <span style={{ padding: '4px 11px', borderRadius: 7, fontSize: '0.74rem', fontWeight: 600, background: 'rgba(108,92,231,0.2)', color: '#b8aff0', border: '1px solid rgba(108,92,231,0.3)' }}>Laws of UX</span>
          </div>
        </div>

      </div>
    </div>
  )
}

function ColHeader({ icon, label, color, bg }) {
  return (
    <div className="col-head">
      <div className="col-head-icon" style={{ background: bg, border: `1px solid ${color}25` }}>{icon}</div>
      <span style={{ fontWeight: 700, fontSize: '0.85rem', color, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{label}</span>
    </div>
  )
}
