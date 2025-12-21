"use client";

import Image from "next/image";
import "@/styles/HonoredBy.css";

interface Brand {
  name: string;
  logo: string;
}

interface Props {
  data: Brand[];
}

export default function HonoredBy({ data }: Props) {
  if (!data || data.length === 0) return null;

  return (
    <section className="honored-section">
      <div className="honored-inner">
        <span className="honored-eyebrow">Honored & Recognized By</span>

        <div className="honored-logos">
          {data.map((brand, i) => (
            <div key={i} className="logo-wrap">
              <Image
                src={brand.logo}
                alt={brand.name}
                width={140}
                height={60}
                className="logo-img"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
