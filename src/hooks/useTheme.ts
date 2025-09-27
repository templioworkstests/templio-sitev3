import { useEffect, useState } from 'react'
export function useTheme() {
  const [dark, setDark] = useState(false)
  useEffect(() => {
    const prefers = window.matchMedia('(prefers-color-scheme: dark)').matches
    setDark(prefers); document.documentElement.classList.toggle('dark', prefers)
  }, [])
  const toggle = () => setDark(d => { const next = !d; document.documentElement.classList.toggle('dark', next); return next })
  return { dark, toggle }
}
