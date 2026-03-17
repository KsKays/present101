export default function Slide3_Process() {
  const steps = [
    { emoji: '🔍', label: 'Research', desc: 'สัมภาษณ์ผู้ใช้\nวิเคราะห์พฤติกรรม' },
    { emoji: '🎯', label: 'Define',   desc: 'กำหนด Pain Points\n& User Needs' },
    { emoji: '💡', label: 'Ideate',   desc: 'ระดมความคิด\nหาแนวทางแก้ไข' },
    { emoji: '🎨', label: 'Design',   desc: 'Wireframe\n& UI Design' },
    { emoji: '🧪', label: 'Test',     desc: 'Usability Test\n& Iterate' },
  ]
  const deliverables = [
    { icon: '👤', title: 'User Persona',             desc: 'Employee & Manager จาก interview จริง', color: '#ff6d29' },
    { icon: '🏗️', title: 'Information Architecture', desc: '4 โมดูล: Account, Create, Assessment, Results', color: '#6c5ce7' },
    { icon: '🖥️', title: 'High-Fidelity UI',          desc: 'Auth, Dashboard, Assessment Flow, Status Tracking', color: '#00b894' },
    { icon: '📊', title: 'Competitor Analysis',       desc: 'วิเคราะห์ระบบคล้ายกัน สรุป Best Practices', color: '#e17055' },
  ]
  const personas = [
    { role:'Employee', icon:'🧑‍💼', color:'#ff6d29',
      needs:['ทราบระดับทักษะตนเอง','คำแนะนำพัฒนาทักษะ','ระบบใช้งานง่าย'],
      pain:['ไม่เข้าใจเกณฑ์ประเมิน','ไม่เห็นภาพรวมพัฒนาการ'] },
    { role:'Manager', icon:'👔', color:'#6c5ce7',
      needs:['เห็นภาพรวมทักษะทีม','ข้อมูลสนับสนุนการตัดสินใจ'],
      pain:['ไม่มีข้อมูลรวมศูนย์','วิเคราะห์ทีมได้ยาก'] },
  ]

  return (
    <div className="slide">
      <div style={{ maxWidth: 1100, margin: '0 auto', width: '100%', display: 'flex', flexDirection: 'column', gap: 14 }}>

        <div className="fu1">
          <span className="badge">03 — กระบวนการ UX & ผลงาน</span>
        </div>

        {/* UX Process timeline */}
        <div className="fu2 card" style={{ padding: '16px 22px' }}>
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, background: 'var(--gradient)', borderRadius: '14px 14px 0 0' }} />
          <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: 14, marginTop: 4 }}>
            UX Design Process — 5 ขั้นตอน
          </div>
          <div style={{ display: 'flex' }}>
            {steps.map((s, i) => (
              <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
                {i < steps.length - 1 && (
                  <div style={{ position: 'absolute', top: 22, left: '50%', width: '100%', height: 2, background: `linear-gradient(90deg, var(--primary) 0%, rgba(255,109,41,0.15) 100%)`, zIndex: 0 }} />
                )}
                <div className="step-node">{s.emoji}</div>
                <div style={{ marginTop: 7, fontWeight: 700, color: 'var(--primary-dark)', fontSize: '0.84rem', textAlign: 'center' }}>{s.label}</div>
                <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)', textAlign: 'center', marginTop: 3, whiteSpace: 'pre-line', lineHeight: 1.4 }}>{s.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom 3-col */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 14 }}>

          {/* Col 1: Persona + photo */}
          <div className="fu3" style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <div className="photo-frame" style={{ height: 110 }}>
              <img src="/images/IMG_0213.png" alt="UX Work" />
              <div className="photo-overlay-bottom" />
              {/* KoEX badge */}
              <div style={{ position: 'absolute', top: 8, right: 8, background: 'rgba(255,255,255,0.92)', borderRadius: 6, padding: '3px 7px', boxShadow: '0 1px 6px rgba(0,0,0,0.12)' }}>
                <img src="/images/KoEX.png" alt="KoEX" style={{ height: 14, objectFit: 'contain', display: 'block' }} />
              </div>
              <div style={{ position: 'absolute', bottom: 8, left: 10, fontSize: '0.68rem', color: 'rgba(255,255,255,0.9)', fontWeight: 600 }}>Research Session</div>
            </div>

            <div style={{ fontSize: '0.73rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>User Persona</div>
            {personas.map((p, i) => (
              <div key={i} className="card" style={{ padding: '12px 13px', borderTop: `3px solid ${p.color}` }}>
                <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 7 }}>
                  <div style={{ width: 28, height: 28, borderRadius: 7, background: `${p.color}14`, border: `1px solid ${p.color}25`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.9rem', flexShrink: 0 }}>{p.icon}</div>
                  <div style={{ fontWeight: 700, color: p.color, fontSize: '0.88rem' }}>{p.role}</div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6 }}>
                  <div>
                    <div style={{ fontSize: '0.63rem', color: 'var(--text-muted)', fontWeight: 700, marginBottom: 3 }}>✅ Needs</div>
                    {p.needs.map((n, j) => <div key={j} style={{ fontSize: '0.7rem', color: 'var(--text-soft)', paddingLeft: 6, borderLeft: `2px solid ${p.color}40`, marginBottom: 2, lineHeight: 1.4 }}>{n}</div>)}
                  </div>
                  <div>
                    <div style={{ fontSize: '0.63rem', color: 'var(--text-muted)', fontWeight: 700, marginBottom: 3 }}>❗ Pain</div>
                    {p.pain.map((n, j) => <div key={j} style={{ fontSize: '0.7rem', color: 'var(--text-soft)', paddingLeft: 6, borderLeft: '2px solid rgba(255,109,41,0.35)', marginBottom: 2, lineHeight: 1.4 }}>{n}</div>)}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Col 2-3: Deliverables + photo + insights */}
          <div className="fu4" style={{ gridColumn: 'span 2', display: 'flex', flexDirection: 'column', gap: 10 }}>
            <div style={{ fontSize: '0.73rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>ผลงานที่ส่งมอบ (Deliverables)</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
              {deliverables.map((d, i) => (
                <div key={i} className="card" style={{ display: 'flex', gap: 11, padding: '12px 14px', borderLeft: `3px solid ${d.color}` }}>
                  <div style={{ width: 34, height: 34, borderRadius: 9, background: `${d.color}12`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem', flexShrink: 0 }}>{d.icon}</div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '0.85rem', color: d.color }}>{d.title}</div>
                    <div style={{ fontSize: '0.71rem', color: 'var(--text-muted)', marginTop: 3, lineHeight: 1.5 }}>{d.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Photo + insights */}
            <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: 10 }}>
              <div className="photo-frame">
                <img src="/images/IMG_0195.png" alt="Design work" />
                <div className="photo-overlay-bottom" />
              </div>
              <div className="card" style={{ background: 'linear-gradient(135deg,#fff8f5 0%,#fff 80%)', borderColor: 'rgba(255,109,41,0.18)', padding: '13px 16px' }}>
                <div style={{ fontSize: '0.77rem', fontWeight: 700, color: 'var(--primary-dark)', marginBottom: 9 }}>💡 Key Insights</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
                  {['แสดงข้อมูลให้กระชับ เข้าใจง่าย','ข้อมูลสำคัญต้องเห็นได้ทันที','ลดขั้นตอนเข้าถึงฟีเจอร์หลัก','ออกแบบให้ตรง Mental Model ผู้ใช้'].map((ins, i) => (
                    <div key={i} style={{ display: 'flex', gap: 7, alignItems: 'flex-start', fontSize: '0.78rem', color: 'var(--text-soft)', lineHeight: 1.5 }}>
                      <span className="insight-arrow">▸</span>{ins}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
