"use client";
import { useState } from "react";
import "../../styles/SuccessStories.css";

export default function SuccessStories({ data }) {
  const [active, setActive] = useState(data[0]);

  return (
    <section className="success-section">
      {/* VIDEO BACKDROP */}
      <div className="success-video-wrapper">
        <video
          className="success-video"
          src="/videos/hero-loop.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="video-gradient" />
      </div>

      {/* CARD LAYER */}
      <div className="success-cards">
        {/* LEFT CARD */}
        <div className="success-left">
          <div className="success-summary">
            <span className="summary-number">35+</span>
            <span className="summary-text">
              Global recognitions across technology, research, and impact
            </span>
          </div>

          {/* SCROLLABLE LIST */}
          <div className="success-list">
            {data.map((item) => (
              <button
                key={item.id}
                className={`success-item ${
                  active.id === item.id ? "active" : ""
                }`}
                onClick={() => setActive(item)}
              >
                <div className="item-label">{item.title}</div>
                <div className="item-meta">
                  {item.issuer} · {item.date || item.year}
                </div>
              </button>
            ))}
          </div>

          {/* CTA */}
          <button className="explore-cta">
            Explore all stories →
          </button>
        </div>

        {/* RIGHT CARD */}
        <div className="success-right">
          <span className="right-eyebrow">{active.issuer}</span>
          <h3 className="right-headline">{active.title}</h3>
          <p className="right-description">{active.description}</p>
        </div>
      </div>
    </section>
  );
}
