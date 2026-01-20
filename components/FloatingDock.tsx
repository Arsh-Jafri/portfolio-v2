'use client'

import { useEffect, useState } from 'react'
import { Home, User, Folder, CodeXml, Cross } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Dock, DockIcon } from './ui/dock'

const sections = ['hero', 'about', 'projects', 'tech', 'activities']

export default function FloatingDock() {
  const [mounted, setMounted] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const [isScrolling, setIsScrolling] = useState(false)
  const [isFooterVisible, setIsFooterVisible] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined') return

    const mediaQuery = window.matchMedia('(max-width: 639px)')

    const handleChange = (event: MediaQueryListEvent | MediaQueryList) => {
      setIsMobile(event.matches)
    }

    // Set initial value
    handleChange(mediaQuery)

    // Listen for changes
    mediaQuery.addEventListener('change', handleChange as (event: MediaQueryListEvent) => void)

    return () => {
      mediaQuery.removeEventListener('change', handleChange as (event: MediaQueryListEvent) => void)
    }
  }, [])

  useEffect(() => {
    if (!mounted) return

    const handleScroll = () => {
      // Don't update active section during programmatic scrolling
      if (isScrolling) return

      const scrollPosition = window.scrollY + window.innerHeight / 2

      // Check if footer is visible
      const footerElement = document.getElementById('footer')
      if (footerElement) {
        const footerTop = footerElement.offsetTop
        const viewportBottom = window.scrollY + window.innerHeight
        // Hide dock when footer is within 200px of viewport bottom
        setIsFooterVisible(viewportBottom >= footerTop - 200)
      }

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check on mount

    return () => window.removeEventListener('scroll', handleScroll)
  }, [mounted, isScrolling])

  const scrollToSection = (sectionId: string) => {
    if (typeof window === 'undefined') return
    
    // Immediately update active section
    setActiveSection(sectionId)
    
    // Temporarily disable scroll tracking during animation
    setIsScrolling(true)
    
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      
      // Re-enable scroll tracking after animation completes
      // Smooth scroll typically takes ~500-1000ms, using 1000ms to be safe
      setTimeout(() => {
        setIsScrolling(false)
      }, 1000)
    }
  }

  if (!mounted) {
    return null
  }

  const hideOnMobileHero = isMobile && activeSection === 'hero' && !isFooterVisible

  return (
    <div
      className={cn(
        "fixed bottom-1 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-50 pointer-events-none transition-transform duration-300 ease-in-out",
        isFooterVisible ? "translate-y-[200px] pointer-events-none" : "translate-y-0",
        hideOnMobileHero
          ? "opacity-0 translate-y-4 pointer-events-none"
          : "opacity-100 translate-y-0"
      )}
    >
      <Dock 
        className="pointer-events-auto bg-[#0B0C10]/20 backdrop-blur-xl border-[#30363D]/50 shadow-none sm:shadow-2xl"
        iconSize={56}
        iconMagnification={80}
        iconDistance={180}
      >
        <DockIcon 
          onClick={() => scrollToSection('hero')}
          isActive={activeSection === 'hero'}
        >
          <Home className={cn(
            "w-8 h-8",
            activeSection === 'hero' ? "text-white" : "text-white/70"
          )} />
        </DockIcon>
        <DockIcon 
          onClick={() => scrollToSection('about')}
          isActive={activeSection === 'about'}
        >
          <User className={cn(
            "w-8 h-8",
            activeSection === 'about' ? "text-white" : "text-white/70"
          )} />
        </DockIcon>
        <DockIcon 
          onClick={() => scrollToSection('projects')}
          isActive={activeSection === 'projects'}
        >
          <Folder className={cn(
            "w-8 h-8",
            activeSection === 'projects' ? "text-white" : "text-white/70"
          )} />
        </DockIcon>
        <DockIcon 
          onClick={() => scrollToSection('tech')}
          isActive={activeSection === 'tech'}
        >
          <CodeXml className={cn(
            "w-8 h-8",
            activeSection === 'tech' ? "text-white" : "text-white/70"
          )} />
        </DockIcon>
        <DockIcon 
          onClick={() => scrollToSection('activities')}
          isActive={activeSection === 'activities'}
        >
          <Cross className={cn(
            "w-8 h-8",
            activeSection === 'activities' ? "text-white" : "text-white/70"
          )} />
        </DockIcon>
      </Dock>
    </div>
  )
}

