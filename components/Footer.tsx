`use client`

import { motion } from 'framer-motion'
import { Linkedin, Mail, FileText, Github, ArrowUpRight, ArrowUp } from 'lucide-react'
import SpotlightCard from './SpotlightCard'
import { TextAnimate } from './ui/text-animate'

const springConfig = {
  type: 'spring' as const,
  stiffness: 300,
  damping: 20,
}

const TITLE_CHAR_DURATION = 0.03
const FOOTER_PREFIX = "Let's"
const FOOTER_MAIN = 'Connect'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <footer 
      id="footer" 
      className="w-full bg-[#0B0C10]"
    >
      <div className="w-full max-w-6xl mx-auto px-8 md:px-16 lg:px-32 pt-12 md:pt-20 pb-12 md:pb-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={springConfig}
          className="mb-8 md:mb-12"
        >
          <p className="text-sm font-light tracking-wider text-[#8B949E] uppercase mb-2">
            Get in touch
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-[#F0F6FC]">
            {(() => {
              const baseDelay = 0.1
              const prefixDuration = FOOTER_PREFIX.length * TITLE_CHAR_DURATION
              const mainDuration = FOOTER_MAIN.length * TITLE_CHAR_DURATION
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
                    {FOOTER_PREFIX}
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
                    {FOOTER_MAIN}
                  </TextAnimate>
                </>
              )
            })()}
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ...springConfig, delay: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-8 md:mb-12"
        >
          {/* Email Card - Large */}
          <SpotlightCard 
            className="custom-spotlight-card sm:col-span-2 md:col-span-2 min-h-[140px] md:min-h-[160px] group cursor-pointer" 
            spotlightColor="rgba(255, 255, 255, 0.08)"
          >
            <a 
              href="mailto:jafri.ar@northeastern.edu"
              className="h-full flex flex-col p-5 md:p-6"
            >
              <div className="flex items-start justify-between mb-auto">
                <div className="w-11 h-11 md:w-12 md:h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                  <Mail className="w-5 h-5 md:w-6 md:h-6 text-accent" />
                </div>
                <ArrowUpRight className="w-5 h-5 text-[#8B949E] group-hover:text-[#F0F6FC] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>
              <div className="mt-4 md:mt-5">
                <h3 className="text-base md:text-lg font-light text-[#F0F6FC] mb-1">Email Me</h3>
                <p className="text-xs md:text-sm text-[#8B949E] break-all">jafri.ar@northeastern.edu</p>
              </div>
            </a>
          </SpotlightCard>

          {/* LinkedIn Card */}
          <SpotlightCard 
            className="custom-spotlight-card col-span-1 min-h-[140px] md:min-h-[160px] group cursor-pointer" 
            spotlightColor="rgba(255, 255, 255, 0.08)"
          >
            <a 
              href="https://linkedin.com/in/arshjafri"
              target="_blank"
              rel="noopener noreferrer"
              className="h-full flex flex-col p-5 md:p-6"
            >
              <div className="flex items-start justify-between mb-auto">
                <div className="w-11 h-11 md:w-12 md:h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                  <Linkedin className="w-5 h-5 md:w-6 md:h-6 text-accent" />
                </div>
                <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 text-[#8B949E] group-hover:text-[#F0F6FC] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>
              <div className="mt-4 md:mt-5">
                <h3 className="text-base md:text-lg font-light text-[#F0F6FC] mb-1">LinkedIn</h3>
                <p className="text-xs md:text-sm text-[#8B949E]">@arshjafri</p>
              </div>
            </a>
          </SpotlightCard>

          {/* GitHub Card */}
          <SpotlightCard 
            className="custom-spotlight-card col-span-1 min-h-[140px] md:min-h-[160px] group cursor-pointer" 
            spotlightColor="rgba(255, 255, 255, 0.08)"
          >
            <a 
              href="https://github.com/arsh-jafri"
              target="_blank"
              rel="noopener noreferrer"
              className="h-full flex flex-col p-5 md:p-6"
            >
              <div className="flex items-start justify-between mb-auto">
                <div className="w-11 h-11 md:w-12 md:h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                  <Github className="w-5 h-5 md:w-6 md:h-6 text-accent" />
                </div>
                <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 text-[#8B949E] group-hover:text-[#F0F6FC] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>
              <div className="mt-4 md:mt-5">
                <h3 className="text-base md:text-lg font-light text-[#F0F6FC] mb-1">GitHub</h3>
                <p className="text-xs md:text-sm text-[#8B949E]">@arsh-jafri</p>
              </div>
            </a>
          </SpotlightCard>

          {/* Resume Card - Full width */}
          <SpotlightCard 
            className="custom-spotlight-card sm:col-span-2 md:col-span-4 min-h-[100px] md:min-h-[100px] group cursor-pointer" 
            spotlightColor="rgba(255, 255, 255, 0.08)"
          >
            <a 
              href="/Arsh%20Jafri%20-%20Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="h-full flex items-center justify-between p-5 md:p-6"
            >
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 md:w-12 md:h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                  <FileText className="w-5 h-5 md:w-6 md:h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-base md:text-lg font-light text-[#F0F6FC] mb-0.5">Download Resume</h3>
                  <p className="text-xs md:text-sm text-[#8B949E]">View my full experience and skills</p>
                </div>
              </div>
              <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6 text-[#8B949E] group-hover:text-[#F0F6FC] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-shrink-0" />
            </a>
          </SpotlightCard>
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ ...springConfig, delay: 0.2 }}
          className="text-center pt-6 md:pt-8 border-t border-[#30363D]/50"
        >
          <p className="text-xs md:text-sm text-[#8B949E] font-light">
            © {new Date().getFullYear()} Arsh Jafri. All rights reserved.
          </p>
        </motion.div>

        {/* Back to Top Button */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ...springConfig, delay: 0.3 }}
          className="flex justify-center mt-6 md:mt-8"
        >
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 px-4 py-2 rounded-lg border border-[#30363D] bg-[#161B22] hover:bg-[#21262D] hover:border-[#8B949E] transition-all duration-200 text-[#8B949E] hover:text-[#F0F6FC]"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
            <span className="text-xs md:text-sm font-light">Back to Top</span>
          </button>
        </motion.div>
      </div>
    </footer>
  )
}
