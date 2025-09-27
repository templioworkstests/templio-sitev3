import { useEffect, useState } from 'react'
export function useScrollDirection(threshold = 8) {
  const [dir, setDir] = useState<'up'|'down'>('up')
  useEffect(() => {
    let last = window.scrollY
    const on = () => {
      const y = window.scrollY; const diff = Math.abs(y-last)
      if (diff>threshold) { setDir(y>last?'down':'up'); last=y }
    }
    window.addEventListener('scroll', on, { passive: true }); return () => window.removeEventListener('scroll', on)
  }, [threshold])
  return dir
}
