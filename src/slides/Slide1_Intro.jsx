export default function Slide1_Intro() {
  return (
    <div className="slide">
      <div style={{ maxWidth: 1100, margin: '0 auto', width: '100%', display: 'flex', flexDirection: 'column', gap: 16 }}>

        <div className="fu1">
          <span className="badge">01 — แนะนำตัว & สถานประกอบการ</span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }} className="fu2">

          {/* ── Student card ── */}
          <div className="card card-orange" style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {/* Orange accent strip */}
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, background: 'var(--gradient)', borderRadius: '14px 14px 0 0' }} />

            <div style={{ display: 'flex', gap: 16, alignItems: 'center', marginBottom: 18, marginTop: 8 }}>
              <div style={{
                width: 62, height: 62, borderRadius: '50%',
                background: 'var(--gradient)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.8rem', flexShrink: 0,
                boxShadow: '0 4px 20px rgba(255,109,41,0.35)',
              }}>👨‍💻</div>
              <div>
                <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text)', lineHeight: 1.15 }}>Thirayut Boonin</div>
                <div style={{ fontSize: '0.95rem', color: 'var(--primary-dark)', fontWeight: 600, marginTop: 2 }}>(Kay) — ธีรยุทธ บุญอินทร์</div>
              </div>
            </div>

            <div className="divider-shimmer" style={{ marginBottom: 12 }} />

            <InfoRow icon="🆔" label="รหัสนักศึกษา" value="654259005" />
            <InfoRow icon="🎓" label="สาขาวิชา" value="วิศวกรรมซอฟต์แวร์" />
            <InfoRow icon="🏛️" label="คณะ" value="วิทยาศาสตร์และเทคโนโลยี" />
            <InfoRow icon="📍" label="มหาวิทยาลัย" value="ราชภัฏนครปฐม" />
            <InfoRow icon="💼" label="ตำแหน่งงาน" value="Research & UX/UI" highlight />

            <div style={{ marginTop: 14, display: 'flex', gap: 7, flexWrap: 'wrap' }}>
              <span className="tag">UX Research</span>
              <span className="tag">UI Design</span>
              <span className="tag-dark tag">Figma</span>
            </div>
          </div>

          {/* ── Company column ── */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>

            {/* Company photo with KoEX logo overlay */}
            <div className="photo-frame" style={{ height: 172, flexShrink: 0 }}>
              <img src="/images/IMG_3296.png" alt="KO Experience" />
              <div className="photo-overlay-left" />
              {/* KoEX logo on photo */}
              <div style={{
                position: 'absolute', top: 12, left: 14,
                background: 'rgba(255,255,255,0.95)',
                borderRadius: 8, padding: '5px 10px',
                backdropFilter: 'blur(8px)',
                boxShadow: '0 2px 12px rgba(0,0,0,0.15)',
              }}>
                <img src="/images/KoEX.png" alt="KO Experience Logo" style={{ height: 24, objectFit: 'contain', display: 'block' }} />
              </div>
              <div style={{ position: 'absolute', bottom: 14, left: 16 }}>
                <div style={{ fontSize: '1rem', fontWeight: 700, color: '#fff' }}>บริษัท โค เอ็กซ์พีเรียนซ์ จำกัด</div>
                <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.75)', fontWeight: 500 }}>KO Experience Co., Ltd. · กรุงเทพฯ</div>
              </div>
            </div>

            {/* Company info card */}
            <div className="card" style={{ flex: 1 }}>
              <InfoRow icon="🎯" label="ธุรกิจ" value="UX Design & User Research" />
              <InfoRow icon="📌" label="ที่ตั้ง" value="วังทองหลาง กรุงเทพฯ" />
              <InfoRow icon="👨‍🏫" label="พี่เลี้ยง" value="คุณสุธัม ธรรมวงศ์" />
              <InfoRow icon="📅" label="ระยะเวลา" value="3 พ.ย. 2568 – 13 มี.ค. 2569" />
              <div style={{ marginTop: 12, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
                <StatBox value="87" unit="วัน" label="วันทำการ" />
                <StatBox value="4" unit="เดือน" label="ระยะเวลาฝึก" />
              </div>
            </div>
          </div>
        </div>

        {/* ── Bottom skill bar ── */}
        <div className="fu3" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 10 }}>
          {[
            { icon: '🔍', label: 'User Research', desc: 'วิจัยผู้ใช้งาน' },
            { icon: '🎨', label: 'UI/UX Design',  desc: 'ออกแบบ Interface' },
            { icon: '📐', label: 'Figma',          desc: 'เครื่องมือออกแบบ' },
            { icon: '🤝', label: 'Teamwork',       desc: 'ทำงานร่วมกัน' },
          ].map((item, i) => (
            <div key={i} style={{
              display: 'flex', alignItems: 'center', gap: 11,
              padding: '11px 16px', borderRadius: 10,
              background: 'var(--surface)', border: '1px solid var(--border)',
              boxShadow: 'var(--shadow)',
            }}>
              <span style={{ fontSize: '1.25rem' }}>{item.icon}</span>
              <div>
                <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text)' }}>{item.label}</div>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>{item.desc}</div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

function InfoRow({ icon, label, value, highlight }) {
  return (
    <div className="info-row">
      <div className="info-icon">{icon}</div>
      <div style={{ flex: 1 }}>
        <div className="info-label">{label}</div>
        <div className="info-value" style={highlight ? { color: 'var(--primary-dark)', fontWeight: 700 } : {}}>{value}</div>
      </div>
    </div>
  )
}

function StatBox({ value, unit, label }) {
  return (
    <div style={{
      padding: '12px', borderRadius: 10, textAlign: 'center',
      background: 'rgba(255,109,41,0.08)', border: '1px solid rgba(255,109,41,0.18)',
    }}>
      <div style={{ fontSize: '1.9rem', fontWeight: 800, color: 'var(--primary)', lineHeight: 1 }}>
        {value}<span style={{ fontSize: '0.82rem', fontWeight: 500, marginLeft: 2 }}>{unit}</span>
      </div>
      <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: 3 }}>{label}</div>
    </div>
  )
}
