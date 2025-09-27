import { useEffect, useState } from 'react'
export function useScrollSpy(ids: string[], offset = 120) {
  const [active, setActive] = useState(ids[0] ?? '')
  useEffect(() => {
    const secs = ids.map(id => document.getElementById(id)).filter(Boolean) as HTMLElement[]
    const on = () => {
      const y = window.scrollY + offset; let cur = secs[0]?.id || ''
      for (const s of secs) { if (s.offsetTop <= y) cur = s.id }
      setActive(cur)
    }
    on(); window.addEventListener('scroll', on, { passive: true }); return () => window.removeEventListener('scroll', on)
  }, [ids, offset])
  return active
}
