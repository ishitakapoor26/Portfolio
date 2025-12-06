"use client";

import React from "react";

export default function Hero() {
  return (
    <section className="relative w-full h-[95vh] overflow-hidden flex items-center justify-center">

      {/* --- Background Video --- */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* --- Grey Overlay --- */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* --- Content --- */}
      <div className="relative z-10 text-center px-6 max-w-3xl">
        
        {/* Belief statement */}
        <h2
          className="text-white text-lg tracking-wide uppercase mb-6"
          style={{ fontFamily: "var(--font-body)" }}
        >
          I believe in building meaningful products, empowering people, and leading with clarity.
        </h2>

        {/* Main headline (serif like Marie Forleo) */}
        <h1
          className="text-white text-5xl md:text-6xl font-bold leading-[1.15] mb-8"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Creating Impact Through Innovation, Leadership & Vision
        </h1>

        {/* Button */}
        <a
          href="#services"
          className="inline-block bg-white text-black px-8 py-4 text-sm font-medium tracking-wide uppercase shadow-md hover:bg-gray-100 transition"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Explore My Work
        </a>
      </div>
    </section>
  );
}
