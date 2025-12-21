"use client";

import Image from "next/image";
import Link from "next/link";
import "@/styles/Media.css";

interface MediaItem {
  id: number;
  type: "image" | "video";
  src: string;
  caption: string;
  link?: string; // OPTIONAL
}

export default function MediaSection({ data }: { data: MediaItem[] }) {
  if (!data?.length) return null;

  return (
    <section className="media-section">
      <div className="media-inner">
        <span className="media-eyebrow">Media & Features</span>

        <div className="media-grid">
          {data.map((item) => {
            const Content = (
              <>
                <Image
                  src={item.src}
                  alt={item.caption}
                  fill
                  className="media-img"
                />
                <div className="media-overlay">
                  <span>{item.caption}</span>
                </div>
              </>
            );

            return item.link ? (
              <Link
                href={item.link}
                key={item.id}
                className="media-tile"
              >
                {Content}
              </Link>
            ) : (
              <div key={item.id} className="media-tile">
                {Content}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
