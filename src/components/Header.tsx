import Logo from '@assets/logo.svg?url'
import { nav } from '@data/content'
import { useTheme } from '@hooks/useTheme'
import { useScrollDirection } from '@hooks/useScrollDirection'
import { useScrollSpy } from '@hooks/useScrollSpy'
import { useState } from 'react'

export default function Header() {
  const { toggle } = useTheme()
  const [open, setOpen] = useState(false)
  const dir = useScrollDirection()
  const active = useScrollSpy(nav.map(n => n.id))

  return (
    <header className={`header ${dir==='down'?'hide':''}`}>
      <div className="container nav-inner">
        <a href="#top" aria-label="Home" style={{display:'flex', alignItems:'center', gap:12}}>
          <img src={Logo} alt="Templio" width="140" height="28" />
        </a>
        <nav className={`nav-links ${open?'open':''}`} aria-label="Principale">
          {nav.map(item => (
            <a key={item.id} href={`#${item.id}`} className={active===item.id?'active':''} onClick={()=>setOpen(false)}>{item.label}</a>
          ))}
          <button className="btn small" onClick={toggle}>Tema</button>
        </nav>
        <button className="btn small menu-btn" onClick={()=>setOpen(s=>!s)}>Menu</button>
      </div>
    </header>
  )
}
