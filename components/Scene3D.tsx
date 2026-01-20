'use client'

import { useEffect, useRef } from 'react'

export default function Scene3D() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.3
      videoRef.current.play().catch((error) => {
        console.log('Video autoplay prevented:', error)
      })
    }
  }, [])

  return (
    <div className="w-full h-full relative flex items-center justify-center">
      <video
        ref={videoRef}
        src="/blob.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-contain"
        style={{
          filter: 'brightness(1.15) contrast(1.1) saturate(0.9)',
          mixBlendMode: 'multiply',
        }}
      />
    </div>
  )
}

