"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import "@/styles/Testimonials.css";

interface Voice {
  name: string;
  role: string;
  quote: string;
  image: string;
}

export default function Testimonials({ data }: { data: Voice[] }) {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let animationId: number;
    let start = 0;

    const animate = () => {
      start -= 0.3; // speed
      track.style.transform = `translateX(${start}px)`;

      if (Math.abs(start) > track.scrollWidth / 2) {
        start = 0;
      }

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    const stop = () => cancelAnimationFrame(animationId);
    const resume = () => requestAnimationFrame(animate);

    track.addEventListener("mouseenter", stop);
    track.addEventListener("mouseleave", resume);

    return () => {
      cancelAnimationFrame(animationId);
      track.removeEventListener("mouseenter", stop);
      track.removeEventListener("mouseleave", resume);
    };
  }, []);

  return (
    <section className="voices-section">
      <div className="voices-inner">
        <h2 className="voices-title">In Their Words</h2>

        <div className="voices-track-wrapper">
          <div className="voices-track" ref={trackRef}>
            {[...data, ...data].map((voice, i) => (
              <div className="voice-item" key={i}>
                <p className="voice-quote">“{voice.quote}”</p>

                <div className="voice-meta">
                  <Image
                    src={voice.image}
                    alt={voice.name}
                    width={36}
                    height={36}
                    className="voice-img"
                  />
                  <div>
                    <span className="voice-name">{voice.name}</span>
                    <span className="voice-role">{voice.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
