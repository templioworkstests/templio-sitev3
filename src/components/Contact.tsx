import Section from './Section'
import { site } from '../data/content'

export default function Contact() {
  const c = site.contact
  return (
    <Section id="contatti" title={c.title} lead="Scrivi due righe oppure manda una mail. Ti rispondiamo in fretta.">
      <div className="grid cols-2">
        <div className="card" style={{padding:16}}>
          <form onSubmit={(e)=>{e.preventDefault(); alert('Grazie! Ti contattiamo presto.')}}>
            <div className="grid cols-2">
              <div>
                <label className="small" htmlFor="name">Nome</label><br/>
                <input id="name" name="name" required placeholder="Nome e Cognome" style={{padding:'12px', borderRadius:10, border:'1px solid var(--border)', width:'100%', background:'var(--bg)', color:'var(--text)'}} />
              </div>
              <div>
                <label className="small" htmlFor="email">Email</label><br/>
                <input id="email" name="email" type="email" required placeholder="tu@azienda.com" style={{padding:'12px', borderRadius:10, border:'1px solid var(--border)', width:'100%', background:'var(--bg)', color:'var(--text)'}} />
              </div>
            </div>
            <div style={{marginTop:12}}>
              <label className="small" htmlFor="msg">La tua sfida</label><br/>
              <textarea id="msg" name="msg" required rows={5} placeholder="Raccontaci cosa vuoi ottenere." style={{padding:'12px', borderRadius:10, border:'1px solid var(--border)', width:'100%', background:'var(--bg)', color:'var(--text)'}}></textarea>
            </div>
            <div style={{marginTop:14}}>
              <button className="btn" type="submit">Invia</button>
            </div>
          </form>
        </div>
        <div className="card" style={{padding:16}}>
          <h3>Contatti</h3>
          <p><strong>Email</strong> · <a className="pill" href={`mailto:${c.email}`}>{c.email}</a></p>
          <p style={{marginTop:8}}><strong>Telefono</strong> · {c.phone}</p>
          <p style={{marginTop:8}}><strong>Dove</strong> · {c.address}</p>
        </div>
      </div>
    </Section>
  )
}
