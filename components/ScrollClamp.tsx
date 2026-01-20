'use client'

import { useEffect } from 'react'

export default function ScrollClamp() {
  useEffect(() => {
    const clampScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      const scrollHeight = document.documentElement.scrollHeight
      const clientHeight = document.documentElement.clientHeight
      const maxScroll = scrollHeight - clientHeight

      // Clamp scroll position to valid range
      if (scrollTop < 0) {
        window.scrollTo(0, 0)
      } else if (scrollTop > maxScroll) {
        window.scrollTo(0, maxScroll)
      }
    }

    // Clamp on scroll
    window.addEventListener('scroll', clampScroll, { passive: false })
    
    // Clamp on resize (in case content height changes)
    window.addEventListener('resize', clampScroll)
    
    // Initial clamp
    clampScroll()

    return () => {
      window.removeEventListener('scroll', clampScroll)
      window.removeEventListener('resize', clampScroll)
    }
  }, [])

  return null
}
