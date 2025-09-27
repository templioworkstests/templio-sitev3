import { useEffect, useState } from 'react'

export default function ScrollTop() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const on = () => setShow(window.scrollY > 300)
    window.addEventListener('scroll', on, { passive: true })
    on()
    return () => window.removeEventListener('scroll', on)
  }, [])
  if (!show) return null
  return (
    <a href="#top" className="btn" style={{position:'fixed', right:18, bottom:18, borderRadius:'50%', width:44, height:44, display:'grid', placeItems:'center'}} aria-label="Torna su">↑</a>
  )
}
