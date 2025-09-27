import Logo from '@assets/logo.svg?url'
import { nav } from '@data/content'

export default function Footer() {
  return (
    <footer role="contentinfo">
      <div className="container" style={{display:'grid', gap:16, gridTemplateColumns:'1fr 1fr 1fr'}}>
        <div style={{display:'flex', gap:10, alignItems:'center'}}>
          <img src={Logo} width="120" height="24" alt="Templio" />
          <span className="small">© {new Date().getFullYear()} Templio</span>
        </div>
        <nav aria-label="Footer">
          <h4 style={{margin:0}}>Navigazione</h4>
          <div className="pills" style={{marginTop:8}}>
            {nav.map(n => <a key={n.id} className="pill" href={`#${n.id}`}>{n.label}</a>)}
          </div>
        </nav>
        <div>
          <h4 style={{margin:0}}>Parliamone</h4>
          <p style={{marginTop:8}}>Primo scambio veloce, senza impegno. <a className="pill" href="#contatti">Cominciamo!</a></p>
        </div>
      </div>
    </footer>
  )
}
