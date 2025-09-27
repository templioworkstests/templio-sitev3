import { ReactNode } from 'react'
export default function Section({ id, title, lead, children }:{ id:string, title:string, lead?:string, children:ReactNode }) {
  return (
    <section id={id} aria-labelledby={`${id}-title`}>
      <div className="container">
        <header style={{maxWidth:920}}>
          <h2 id={`${id}-title`}>{title}</h2>
          {lead && <p className="lead">{lead}</p>}
        </header>
        <div style={{marginTop:24}}>{children}</div>
      </div>
    </section>
  )
}
