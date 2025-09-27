import { site } from '@data/content'

export default function Hero() {
  const c = site.brand
  return (
    <section id="top" className="hero">
      <div className="container">
        <span className="badge">Era delle Fondamenta</span>
        <h1 style={{marginTop:12}}>{c.heroTitle}</h1>
        <p className="lead" style={{maxWidth:860}}>{c.heroSubtitle}</p>
        <div style={{display:'flex', gap:12, marginTop: 20, flexWrap:'wrap'}}>
          {c.ctas.map((b, i) => (
            <a key={i} className={b.primary ? 'btn' : 'btn secondary'} href={b.href}>{b.label}</a>
          ))}
        </div>
      </div>
    </section>
  )
}
