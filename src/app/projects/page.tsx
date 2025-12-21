"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import "@/styles/Project.css";

export default function ProjectsSection({ projects = [] }) {
  if (!projects.length) return null;

  const featured = projects[0];
  const rest = projects.slice(1);
  const rowRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!rowRef.current) return;
    rowRef.current.scrollBy({
      left: dir === "left" ? -300 : 300,
      behavior: "smooth",
    });
  };

  return (
    <section className="project-root">
      {/* HERO VIDEO */}
      <div className="project-hero">
        <video
          src="/videos/projects-loop.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="project-hero-video"
        />
      </div>

      {/* FEATURED */}
      <div className="project-featured-wrapper">
        <div className="project-mockup">
          <Image
            src={featured.image}
            alt={featured.title}
            fill
            className="project-mockup-img"
          />
        </div>

        <div className="project-featured-card">
          <span className="project-eyebrow">Featured Project</span>
          <h2 className="project-title">{featured.title}</h2>
          <p className="project-description">{featured.description}</p>
          <Link href={featured.link} className="project-link">
            View project →
          </Link>
        </div>
      </div>

      {/* OTHER PROJECTS */}
      {rest.length > 0 && (
        <div className="project-other">
          <div className="project-other-inner">
            <div className="project-other-header">
              <span className="project-other-eyebrow">Other Projects</span>

              <div className="project-arrows">
                <button onClick={() => scroll("left")}>←</button>
                <button onClick={() => scroll("right")}>→</button>
              </div>
            </div>

            <div className="project-other-row" ref={rowRef}>
              {rest.map((project, i) => (
                <Link key={i} href={project.link} className="project-mini">
                  <div className="project-mini-img">
                    <Image src={project.image} alt={project.title} fill />
                  </div>
                  <h4>{project.title}</h4>
                  <p>{project.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
