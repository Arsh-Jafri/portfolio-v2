'use client'

import { motion } from 'framer-motion'

const springConfig = {
  type: 'spring' as const,
  stiffness: 300,
  damping: 20,
}

// Location Pin Icon Component
const LocationPin = ({ filled = false }: { filled?: boolean }) => (
  <svg
    width="40"
    height="50"
    viewBox="0 0 40 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={filled ? "text-[#4A90E2]" : "text-white"}
  >
    <path
      d="M20 0C9 0 0 9 0 20C0 35 20 50 20 50C20 50 40 35 40 20C40 9 31 0 20 0Z"
      fill={filled ? "currentColor" : "currentColor"}
      stroke={filled ? "none" : "#d1d5db"}
      strokeWidth="2"
    />
    {filled && (
      <path
        d="M16 20L19 23L26 16"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    )}
  </svg>
)

// Tech Stack Icons
const TechIcons = () => (
  <div className="flex gap-2 items-center flex-wrap">
    {/* Sass */}
    <div className="w-10 h-10 rounded-lg bg-[#CF649A] flex items-center justify-center">
      <span className="text-white font-light text-lg">S</span>
    </div>
    
    {/* React */}
    <div className="w-10 h-10 rounded-lg bg-[#222] flex items-center justify-center">
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#61DAFB">
        <circle cx="12" cy="12" r="2.5" />
        <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="#61DAFB" strokeWidth="1" />
        <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="#61DAFB" strokeWidth="1" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="#61DAFB" strokeWidth="1" transform="rotate(120 12 12)" />
      </svg>
    </div>
    
    {/* JavaScript */}
    <div className="w-10 h-10 rounded-lg bg-[#F7DF1E] flex items-center justify-center">
      <span className="text-black font-light text-lg">JS</span>
    </div>
    
    {/* Figma */}
    <div className="w-10 h-10 rounded-lg bg-white border border-gray-200 flex items-center justify-center">
      <svg viewBox="0 0 24 24" className="w-6 h-6">
        <path fill="#F24E1E" d="M8 24c2.2 0 4-1.8 4-4v-4H8c-2.2 0-4 1.8-4 4s1.8 4 4 4z" />
        <path fill="#A259FF" d="M4 12c0-2.2 1.8-4 4-4h4v8H8c-2.2 0-4-1.8-4-4z" />
        <path fill="#F24E1E" d="M4 4c0-2.2 1.8-4 4-4h4v8H8C5.8 8 4 6.2 4 4z" />
        <path fill="#FF7262" d="M12 0h4c2.2 0 4 1.8 4 4s-1.8 4-4 4h-4V0z" />
        <path fill="#1ABCFE" d="M20 12c0 2.2-1.8 4-4 4s-4-1.8-4-4 1.8-4 4-4 4 1.8 4 4z" />
      </svg>
    </div>
    
    {/* 3D/Blender style */}
    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#7FD858] to-[#4CAF50] flex items-center justify-center">
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="white">
        <path d="M12 2L2 12l10 10 10-10L12 2zm0 3l7 7-7 7-7-7 7-7z" />
      </svg>
    </div>
    
    {/* Apple/Swift */}
    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#FF6B35] to-[#F7931E] flex items-center justify-center">
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="white">
        <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701" />
      </svg>
    </div>
    
    {/* Linear/Design Tool */}
    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#5E6AD2] to-[#8B5CF6] flex items-center justify-center">
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="white">
        <circle cx="12" cy="12" r="8" fill="none" stroke="white" strokeWidth="2" />
      </svg>
    </div>
  </div>
)

// Headphones Icon
const HeadphonesIcon = () => (
  <svg
    width="50"
    height="50"
    viewBox="0 0 50 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-gray-400"
  >
    <path
      d="M10 28C10 28 8 28 8 32V38C8 42 10 42 10 42C10 42 14 42 14 38V32C14 28 10 28 10 28Z"
      fill="currentColor"
    />
    <path
      d="M40 28C40 28 42 28 42 32V38C42 42 40 42 40 42C40 42 36 42 36 38V32C36 28 40 28 40 28Z"
      fill="currentColor"
    />
    <path
      d="M8 32V25C8 15 16 8 25 8C34 8 42 15 42 25V32"
      stroke="currentColor"
      strokeWidth="4"
      fill="none"
      strokeLinecap="round"
    />
  </svg>
)

// Code Window Component
const CodeWindow = () => (
  <div className="bg-[#f8f8f8] rounded-lg border border-gray-200 overflow-hidden shadow-sm">
    {/* Window controls */}
    <div className="flex gap-1.5 px-3 py-2 border-b border-gray-200">
      <div className="w-2.5 h-2.5 rounded-full bg-gray-400" />
      <div className="w-2.5 h-2.5 rounded-full bg-gray-300" />
      <div className="w-2.5 h-2.5 rounded-full bg-gray-300" />
    </div>
    
    {/* Code content */}
    <div className="p-4 font-light text-sm leading-relaxed">
      <div className="text-gray-600">&lt;!DOCTYPE html&gt;</div>
      <div className="text-gray-600">&lt;html lang=&quot;en&quot;&gt;</div>
      <div className="text-gray-600">&lt;head&gt;</div>
      <div className="text-gray-600 pl-4">&lt;meta charset=&quot;UTF-8&quot; /&gt;</div>
      <div className="text-gray-600 pl-4">&lt;title&gt;Hi, I&apos;m Arsh!&lt;/title&gt;</div>
      <div className="text-gray-600">&lt;/head&gt;</div>
      <div className="text-gray-600">&lt;body&gt;</div>
    </div>
  </div>
)

export default function AboutMe() {
  return (
    <section className="w-full bg-white py-24 px-6 md:px-12 lg:px-24">
      <div className="w-full max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl lg:text-6xl font-light text-text mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={springConfig}
        >
          About Me
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={springConfig}
        >
          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Card 1: Software Developer - spans 2 rows */}
            <div className="bg-[#f5f5f7] rounded-3xl p-8 flex items-center md:row-span-2">
              <h3 className="text-3xl md:text-4xl leading-tight">
                <span className="font-light text-text">Software developer</span>
                <span className="text-text/80"> with a love for <span className="font-serif italic font-normal">solving problems.</span></span>
              </h3>
            </div>

            {/* Card 2: Based In */}
            <div className="bg-[#f5f5f7] rounded-3xl p-8 flex flex-col gap-6">
              <div>
                <p className="text-sm text-gray-500 uppercase tracking-wide mb-1">Based In</p>
                <h3 className="text-2xl md:text-3xl font-light text-text">Vancouver, Canada</h3>
              </div>
              <div className="flex items-center justify-center gap-1 mt-auto">
                <LocationPin />
                <LocationPin />
                <LocationPin />
                <LocationPin />
                <LocationPin filled />
                <LocationPin />
                <LocationPin />
                <LocationPin />
              </div>
            </div>

            {/* Card 3: What Inspires Me */}
            <div className="bg-[#f5f5f7] rounded-3xl p-8 flex flex-col gap-4">
              <div>
                <p className="text-sm text-gray-500 uppercase tracking-wide mb-1">What Inspires Me?</p>
                <h3 className="text-2xl md:text-3xl font-light text-text">Bringing <span className="font-serif italic font-normal">ideas</span> to life.</h3>
              </div>
              <div className="mt-4">
                <CodeWindow />
              </div>
            </div>

            {/* Card 4: Tech Stack */}
            <div className="bg-[#f5f5f7] rounded-3xl p-8 flex flex-col gap-6">
              <TechIcons />
              <div className="mt-auto">
                <h3 className="text-2xl leading-snug">
                  <span className="text-[#4A90E2] font-light">Focused on clean code</span>
                  <span className="text-text/70"> and smart UI/UX designs</span>
                </h3>
              </div>
            </div>

            {/* Card 5: DJing */}
            <div className="bg-[#f5f5f7] rounded-3xl p-8 flex flex-col justify-center">
              <p className="text-2xl text-gray-400 font-serif italic font-normal mb-2">I also like...</p>
              <div className="flex items-center gap-3">
                <h3 className="text-4xl md:text-5xl font-light text-text">DJing</h3>
                <HeadphonesIcon />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
