"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import "@/styles/Latest.css";

export default function LatestSection({ data = [] }) {
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <section className="latest-section">
      <div className="latest-inner">
        {/* LEFT — IMAGE ONLY */}
        <div className="latest-left">
          <Image
            src="/images/latest-portrait.jpg" // YOUR image
            alt="Ishita Kapoor"
            fill
            priority
            className="latest-image"
          />
        </div>

        {/* RIGHT — CONTENT */}
        <div className="latest-right">
          <h2 className="latest-title">The Latest</h2>

          <div className="latest-list">
            {data.slice(0, 5).map((item) => {
              const isOpen = openId === item.id;

              return (
                <div key={item.id} className="latest-item">
                  <button
                    className="latest-header"
                    onClick={() =>
                      setOpenId(isOpen ? null : item.id)
                    }
                  >
                    <h3>{item.title}</h3>
                    <span className={`plus ${isOpen ? "open" : ""}`}>+</span>
                  </button>

                  {isOpen && (
                    <div className="latest-body">
                      <p>{item.description}</p>
                      <Link href={item.link}>Read more →</Link>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <Link href="/latest" className="latest-cta">
            Explore all updates →
          </Link>
        </div>
      </div>
    </section>
  );
}
