"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

const Particle = function (x, y, dx, dy) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = Math.random() * 1.5 + 1; // Slightly smaller particles
};

export function Hero() {
  const canvasRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const particles = useRef([]);
  const animationRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();
        setDimensions({ width, height });
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);

    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  useEffect(() => {
    if (dimensions.width === 0 || dimensions.height === 0) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Initialize more particles for better connection density
    particles.current = [];
    for (let i = 0; i < 100; i++) {
      const x = Math.random() * dimensions.width;
      const y = Math.random() * dimensions.height;
      const dx = (Math.random() - 0.5) * 3; // Slower movement
      const dy = (Math.random() - 0.5) * 3; // Slower movement
      particles.current.push(new Particle(x, y, dx, dy));
    }

    const animate = () => {
      ctx.clearRect(0, 0, dimensions.width, dimensions.height);

      // First draw all connections
      for (let i = 0; i < particles.current.length; i++) {
        const particle = particles.current[i];

        // Check connections with all other particles
        for (let j = i + 1; j < particles.current.length; j++) {
          const otherParticle = particles.current[j];
          const distance = Math.sqrt(
            Math.pow(particle.x - otherParticle.x, 2) +
              Math.pow(particle.y - otherParticle.y, 2)
          );

          // Increased connection distance and adjusted opacity
          if (distance < 150) {
            ctx.beginPath();
            const opacity = 0.5 * (1 - distance / 150); // Increased base opacity
            ctx.strokeStyle = `rgba(79, 70, 229, ${opacity})`;
            ctx.lineWidth = 0.6; // Slightly thicker lines
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
          }
        }
      }

      // Then draw all particles on top
      particles.current.forEach((particle) => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = "#4f46e5";
        ctx.fill();

        // Update position
        particle.x += particle.dx;
        particle.y += particle.dy;

        // Wrap around screen
        if (particle.x > dimensions.width) particle.x = 0;
        if (particle.x < 0) particle.x = dimensions.width;
        if (particle.y > dimensions.height) particle.y = 0;
        if (particle.y < 0) particle.y = dimensions.height;
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [dimensions]);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-white to-indigo-50">
      <div ref={containerRef} className="relative min-h-[600px]">
        <canvas
          ref={canvasRef}
          width={dimensions.width}
          height={dimensions.height}
          className="absolute inset-0"
        />
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 sm:pb-12 md:pb-16 lg:pb-20 xl:pb-24">
            <main className="mt-8 mx-auto max-w-7xl px-4 sm:mt-10 sm:px-6 lg:mt-12 lg:px-8 xl:mt-16">
              <div className="sm:text-center lg:text-left">
                <div className="flex items-center">
                  <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                    <span className="block">Reward Contributors</span>
                    <span className="block text-indigo-600">
                      Fairly and Transparently
                    </span>
                  </h1>
                  <Image
                    src="/pullperksl.png"
                    alt="Reward Contributors"
                    width={500}
                    height={700}
                    className="ml-4"
                  />
                </div>
                <p className="mt-2 text-base text-gray-500 sm:mt-3 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-3 md:text-xl lg:mx-0">
                  Distribute hackathon prizes and bounties based on actual
                  GitHub contributions. Automate reward distribution with smart
                  contracts and blockchain technology.
                </p>
                <div className="mt-3 sm:mt-5 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <Link
                      href="/dashboard"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                    >
                      Get started
                    </Link>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <Link
                      href="/learn-more"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                    >
                      Learn more
                    </Link>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
