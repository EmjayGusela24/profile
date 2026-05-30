import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'

const animateOnScroll = () => {
  const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches

  const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-animate='enter']"))
  if (!elements.length) return

  if (reduceMotion) {
    elements.forEach((el) => el.classList.add('is-visible'))
    return
  }

  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          ;(entry.target as HTMLElement).classList.add('is-visible')
        }
      }
    },
    { threshold: 0.15 },
  )

  elements.forEach((el) => io.observe(el))
}

animateOnScroll()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)


