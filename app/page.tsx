'use client'

import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import TechStack from '@/components/TechStack'
import OtherActivities from '@/components/OtherActivities'
import BentoGrid from '@/components/BentoGrid'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import { TextAnimate } from '@/components/ui/text-animate'

const springConfig = {
  type: 'spring' as const,
  stiffness: 300,
  damping: 20,
}

const TITLE_CHAR_DURATION = 0.03
const ABOUT_PREFIX = 'Get to'
const ABOUT_MAIN = 'Know Me'

export default function Home() {
  return (
    <main className="px-4 md:px-16 lg:px-32">
      <section id="hero" className="-mx-4 md:-mx-16 lg:-mx-32">
        <Hero />
      </section>
      <section id="about" className="py-16 md:py-24 bg-[#0B0C10]">
        <div className="w-full max-w-6xl mx-auto px-4 md:px-12 lg:px-24">
          {/* Header */}
          <div className="mb-10 md:mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-150px' }}
              transition={{ ...springConfig, delay: 0.1 }}
            >
              <p className="text-sm font-light tracking-wider text-[#8B949E] uppercase mb-2">
                About me
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-150px' }}
              transition={{ ...springConfig, delay: 0.2 }}
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-[#F0F6FC]">
                {(() => {
                  const baseDelay = 0.15
                  const prefixDuration = ABOUT_PREFIX.length * TITLE_CHAR_DURATION
                  const mainDuration = ABOUT_MAIN.length * TITLE_CHAR_DURATION
                  const mainDelay = baseDelay + prefixDuration

                  return (
                    <>
                      <TextAnimate
                        animation="blurInUp"
                        by="character"
                        once
                        delay={baseDelay}
                        duration={prefixDuration}
                        as="span"
                        className="inline"
                      >
                        {ABOUT_PREFIX}
                      </TextAnimate>{' '}
                      <TextAnimate
                        animation="blurInUp"
                        by="character"
                        once
                        delay={mainDelay}
                        duration={mainDuration}
                        as="span"
                        className="inline font-serif italic font-normal"
                      >
                        {ABOUT_MAIN}
                      </TextAnimate>
                    </>
                  )
                })()}
              </h2>
            </motion.div>
          </div>
          <BentoGrid />
        </div>
      </section>
      <section id="projects" className="-mx-4 md:-mx-16 lg:-mx-32">
        <Projects />
      </section>
      <section id="tech">
        <TechStack />
      </section>
      <section id="activities">
        <OtherActivities />
      </section>
      <div className="-mx-4 md:-mx-16 lg:-mx-32">
        <Footer />
      </div>
    </main>
  )
}

