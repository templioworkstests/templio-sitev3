import Section from './Section'
import { site } from '../data/content'

export default function Manifesto() {
  return (
    <Section id="manifesto" title={site.manifesto.title}>
      <ul className="grid cols-2" style={{padding:0, margin:0}}>
        {site.manifesto.lines.map((l, i) => (
          <li key={i} className="card" style={{listStyle:'none', padding:16}}>{l}</li>
        ))}
      </ul>
    </Section>
  )
}
