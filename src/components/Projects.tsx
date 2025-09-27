import Section from '@components/Section'
import { what, who } from '@data/content'
import { projects as data, type Project } from '@data/projects'
import { useMemo, useState } from 'react'

function Pills({ items, value, onChange }:{ items: string[], value: string, onChange: (v:string)=>void }) {
  return (
    <div className="pills" role="tablist">
      {['Tutti', ...items].map((it) => (
        <button key={it} className={`pill ${value===it ? 'active' : ''}`} onClick={()=>onChange(it)} role="tab" aria-selected={value===it}>
          {it}
        </button>
      ))}
    </div>
  )
}

export default function Projects() {
  const [whoF, setWho] = useState('Tutti')
  const [whatF, setWhat] = useState('Tutti')
  const list = useMemo(() => data.filter(p => (whoF==='Tutti'||p.who.includes(whoF)) && (whatF==='Tutti'||p.what.includes(whatF))), [whoF, whatF])

  return (
    <Section id="progetti" title="Progetti" lead="Qualche esempio che rende chiaro cosa intendiamo per 'fare sul serio'.">
      <div className="grid cols-2" style={{alignItems:'flex-start'}}>
        <article className="card" style={{padding:16}}>
          <h3>Filtri</h3>
          <h4 style={{margin:'12px 0 6px'}}>WHO</h4>
          <Pills items={who} value={whoF} onChange={setWho} />
          <h4 style={{margin:'16px 0 6px'}}>WHAT</h4>
          <Pills items={what} value={whatF} onChange={setWhat} />
        </article>
        <div>
          <div className="projects-grid">
            {list.map(p => <ProjectCard key={p.id} p={p} />)}
          </div>
          {list.length===0 && <p style={{marginTop:12}}>Nessun risultato con questi filtri.</p>}
        </div>
      </div>
    </Section>
  )
}

function ProjectCard({ p }: { p: Project }) {
  const [open, setOpen] = useState(false)
  return (
    <article className="project-card card" style={{padding:16}}>
      <header>
        <strong>{p.title}</strong>
        <button className="pill" onClick={()=>setOpen(true)}>Scopri</button>
      </header>
      <img src={p.cover} alt="" />
      <p style={{marginTop:8}}>{p.summary}</p>
      <div style={{display:'flex', gap:8, flexWrap:'wrap', marginTop:8}}>
        {p.who.map(t => <span key={t} className="pill" aria-hidden>{t}</span>)}
        {p.what.map(t => <span key={t} className="pill" aria-hidden>{t}</span>)}
      </div>
      {open && (
        <div className="modal" role="dialog" aria-modal="true" aria-label={`Dettagli progetto ${p.title}`} onClick={()=>setOpen(false)}>
          <div className="dialog" onClick={(e)=>e.stopPropagation()}>
            <header style={{display:'flex', justifyContent:'space-between', alignItems:'center', gap:12}}>
              <h3 style={{margin:0}}>{p.title}</h3>
              <button className="pill" onClick={()=>setOpen(false)}>Chiudi</button>
            </header>
            <img src={p.cover} alt="" style={{marginTop:12}} />
            <p style={{marginTop:12}}>{p.summary}</p>
            {p.kpi && <p style={{marginTop:8}}><strong>{p.kpi}</strong></p>}
          </div>
        </div>
      )}
    </article>
  )
}
