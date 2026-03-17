import { useState, useEffect, useCallback } from 'react'
import './App.css'
import Slide1_Intro from './slides/Slide1_Intro'
import Slide2_Project from './slides/Slide2_Project'
import Slide3_Process from './slides/Slide3_Process'
import Slide4_Outcomes from './slides/Slide4_Outcomes'

const slides = [
  { component: Slide1_Intro,   label: 'แนะนำตัว' },
  { component: Slide2_Project, label: 'งาน & โปรเจค' },
  { component: Slide3_Process, label: 'UX Process' },
  { component: Slide4_Outcomes,label: 'บทสรุป' },
]

export default function App() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState('right')
  const [animKey, setAnimKey] = useState(0)

  const goTo = useCallback((index) => {
    if (index < 0 || index >= slides.length) return
    setDirection(index > current ? 'right' : 'left')
    setCurrent(index)
    setAnimKey(k => k + 1)
  }, [current])

  const next = useCallback(() => goTo(current + 1), [current, goTo])
  const prev = useCallback(() => goTo(current - 1), [current, goTo])

  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ') { e.preventDefault(); next() }
      if (e.key === 'ArrowLeft') { e.preventDefault(); prev() }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [next, prev])

  const CurrentSlide = slides[current].component
  const progress = ((current + 1) / slides.length) * 100

  return (
    <div className="app-shell">
      {/* Soft ambient orbs — light tones */}
      <div className="orb" style={{ width:500, height:500, background:'rgba(255,109,41,0.08)', top:'-130px', right:'-100px', animationDelay:'0s' }} />
      <div className="orb" style={{ width:380, height:380, background:'rgba(108,92,231,0.05)', bottom:'-90px', left:'-80px', animationDelay:'4s' }} />
      <div className="orb" style={{ width:260, height:260, background:'rgba(255,109,41,0.05)', top:'40%', left:'35%', animationDelay:'2s' }} />

      {/* Top progress bar */}
      <div style={{ position:'absolute', top:0, left:0, right:0, height:3, background:'rgba(0,0,0,0.05)', zIndex:100 }}>
        <div className="progress-bar" style={{ height:'100%', width:`${progress}%` }} />
      </div>

      {/* ── Header ── */}
      <header className="pres-header">
        {/* KoEX logo as real image */}
        <div className="header-brand">
          <img
            src="/images/KoEX.png"
            alt="KO Experience"
            style={{ height: 28, objectFit: 'contain' }}
          />
          <div style={{ width: 1, height: 18, background: 'rgba(0,0,0,0.12)', margin: '0 4px' }} />
          <span className="brand-label">สหกิจศึกษา · 2568</span>
        </div>

        {/* Step dots */}
        <div style={{ display:'flex', gap:6, alignItems:'center' }}>
          {slides.map((s, i) => (
            <div key={i} style={{ display:'flex', alignItems:'center', gap:5 }}>
              <button
                onClick={() => goTo(i)}
                style={{
                  width: i === current ? 24 : 8,
                  height: 8, borderRadius: 4,
                  background: i === current ? 'var(--primary)' : (i < current ? 'rgba(255,109,41,0.4)' : 'rgba(0,0,0,0.15)'),
                  border: 'none', cursor: 'pointer',
                  transition: 'all 0.35s cubic-bezier(.22,1,.36,1)',
                  boxShadow: i === current ? '0 0 8px rgba(255,109,41,0.5)' : 'none',
                }}
              />
            </div>
          ))}
        </div>

        {/* Slide counter */}
        <div style={{ display:'flex', alignItems:'baseline', gap:3 }}>
          <span style={{ fontSize:'1.05rem', fontWeight:800, color:'var(--primary)' }}>{current + 1}</span>
          <span style={{ fontSize:'0.82rem', color:'var(--text-muted)' }}>/ {slides.length}</span>
        </div>
      </header>

      {/* ── Slide area ── */}
      <main className="slide-area">
        <div key={animKey} className={direction === 'right' ? 'slide-enter' : 'slide-exit-left'} style={{ width:'100%', height:'100%' }}>
          <CurrentSlide />
        </div>
      </main>

      {/* ── Nav ── */}
      <nav className="pres-nav">
        <div className="dot-nav">
          {slides.map((s, i) => (
            <button key={i} onClick={() => goTo(i)} className={`dot-btn${i === current ? ' dot-active' : ''}`}>
              {s.label}
            </button>
          ))}
        </div>



        <div className="arrow-nav">
          {current > 0 && (
            <button onClick={prev} className="arrow-btn" aria-label="ก่อนหน้า">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
            </button>
          )}
          {current < slides.length - 1 && (
            <button onClick={next} className="arrow-btn arrow-btn-primary" aria-label="ถัดไป">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
            </button>
          )}
        </div>
      </nav>
    </div>
  )
}
