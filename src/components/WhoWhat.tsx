import Section from './Section'
import { site, who, what } from '../data/content'

export default function WhoWhat() {
  return (
    <Section id="chi-siamo" title={site.about.title} lead={`${site.about.text} ${site.services.text}`}>
      <div className="grid cols-2">
        <article className="card" style={{padding:16}}>
          <h3>WHO</h3>
          <div className="pills" style={{marginTop:8}}>
            {who.map(w => <span key={w} className="pill" aria-hidden>{w}</span>)}
          </div>
        </article>
        <article className="card" style={{padding:16}}>
          <h3>WHAT</h3>
          <div className="pills" style={{marginTop:8}}>
            {what.map(w => <span key={w} className="pill" aria-hidden>{w}</span>)}
          </div>
        </article>
      </div>
    </Section>
  )
}
