'use client'

import { useEffect, useRef } from 'react'

interface MetaBallsProps {
  width?: number
  height?: number
  color?: string
  ballCount?: number
  speed?: number
}

export default function MetaBalls({
  width = 600,
  height = 600,
  color = '#1E6EF4',
  ballCount = 5,
  speed = 0.5,
}: MetaBallsProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Track current dimensions
    let actualWidth = width
    let actualHeight = height

    // Get actual container size
    const updateSize = () => {
      const rect = container.getBoundingClientRect()
      const dpr = window.devicePixelRatio || 1
      actualWidth = rect.width || width
      actualHeight = rect.height || height

      canvas.width = actualWidth * dpr
      canvas.height = actualHeight * dpr
      canvas.style.width = `${actualWidth}px`
      canvas.style.height = `${actualHeight}px`

      ctx.scale(dpr, dpr)
    }

    updateSize()

    // Handle resize
    const resizeObserver = new ResizeObserver(() => {
      updateSize()
    })
    resizeObserver.observe(container)

    // Parse color to RGB
    const hexToRgb = (hex: string) => {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
      return result
        ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16),
          }
        : { r: 30, g: 110, b: 244 }
    }

    const rgb = hexToRgb(color)

    // Create balls
    const balls = Array.from({ length: ballCount }, () => ({
      x: Math.random() * actualWidth,
      y: Math.random() * actualHeight,
      vx: (Math.random() - 0.5) * speed * 2,
      vy: (Math.random() - 0.5) * speed * 2,
      radius: Math.min(actualWidth, actualHeight) * 0.08 + Math.random() * Math.min(actualWidth, actualHeight) * 0.08,
    }))

    // Meta balls effect using smooth blending
    const drawMetaBalls = () => {
      ctx.clearRect(0, 0, actualWidth, actualHeight)

      // Use composite operation for blending
      ctx.globalCompositeOperation = 'lighter'

      // Draw each ball with radial gradient that creates the meta effect
      for (const ball of balls) {
        const ballGradient = ctx.createRadialGradient(
          ball.x,
          ball.y,
          0,
          ball.x,
          ball.y,
          ball.radius * 1.5
        )
        ballGradient.addColorStop(0, `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.8)`)
        ballGradient.addColorStop(0.3, `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.5)`)
        ballGradient.addColorStop(0.6, `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.2)`)
        ballGradient.addColorStop(1, `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0)`)

        ctx.fillStyle = ballGradient
        ctx.beginPath()
        ctx.arc(ball.x, ball.y, ball.radius * 1.5, 0, Math.PI * 2)
        ctx.fill()
      }

      // Reset composite operation
      ctx.globalCompositeOperation = 'source-over'

      // Draw core of each ball for more definition
      for (const ball of balls) {
        const coreGradient = ctx.createRadialGradient(
          ball.x,
          ball.y,
          0,
          ball.x,
          ball.y,
          ball.radius * 0.4
        )
        coreGradient.addColorStop(0, `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 1)`)
        coreGradient.addColorStop(1, `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.6)`)

        ctx.fillStyle = coreGradient
        ctx.beginPath()
        ctx.arc(ball.x, ball.y, ball.radius * 0.4, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    // Animation loop
    let animationFrameId: number
    const animate = () => {
      // Update ball positions
      for (const ball of balls) {
        ball.x += ball.vx
        ball.y += ball.vy

        // Bounce off walls
        if (ball.x < ball.radius || ball.x > actualWidth - ball.radius) {
          ball.vx *= -1
        }
        if (ball.y < ball.radius || ball.y > actualHeight - ball.radius) {
          ball.vy *= -1
        }

        // Keep balls in bounds
        ball.x = Math.max(ball.radius, Math.min(actualWidth - ball.radius, ball.x))
        ball.y = Math.max(ball.radius, Math.min(actualHeight - ball.radius, ball.y))
      }

      drawMetaBalls()
      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animationFrameId)
      resizeObserver.disconnect()
    }
  }, [color, ballCount, speed])

  return (
    <div ref={containerRef} className="w-full h-full">
      <canvas
        ref={canvasRef}
        className="w-full h-full"
      />
    </div>
  )
}

