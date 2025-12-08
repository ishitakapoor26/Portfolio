"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  radius: number;
  speed: number;
  alpha: number;
}

interface ParticleBackgroundProps {
  count?: number; // number of particles
  color?: string; // particle color
}

export default function ParticleBackground({
  count = 40,
  color = "rgba(217, 204, 191, 0.15)",
}: ParticleBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = canvas.parentElement?.clientWidth || window.innerWidth;
    let height = canvas.parentElement?.clientHeight || window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    // Initialize particles
    particlesRef.current = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: 1 + Math.random() * 2,
      speed: 0.15 + Math.random() * 0.3,
      alpha: 0.1 + Math.random() * 0.15,
    }));

    const draw = () => {
      if (!ctx) return;

      ctx.clearRect(0, 0, width, height);

      particlesRef.current.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(217, 204, 191, ${p.alpha})`;
        ctx.fill();

        // Move upward
        p.y -= p.speed;

        // Reset to bottom if offscreen
        if (p.y < -p.radius) {
          p.y = height + p.radius;
          p.x = Math.random() * width;
        }
      });

      animationRef.current = requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      width = canvas.parentElement?.clientWidth || window.innerWidth;
      height = canvas.parentElement?.clientHeight || window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", handleResize);
    };
  }, [count]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
    />
  );
}
