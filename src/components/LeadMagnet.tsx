"use client";

import Image from "next/image";
import "@/styles/LeadMagnet.css";

export default function LeadMagnet() {
  return (
    <section className="lead-root">
      <div className="lead-inner">
        {/* LEFT CONTENT */}
        <div className="lead-content">
          <h2 className="lead-title">
            Learn How to Get <em>Anything</em> You Want
          </h2>

          <p className="lead-subtitle">
            Get a FREE resource and learn the key steps that will help you
            build clarity, confidence, and momentum — faster.
          </p>

          <form className="lead-form">
            <input type="text" placeholder="First Name" />
            <input type="email" placeholder="Enter Your Email" />

            <button type="submit">GET INSTANT ACCESS</button>
          </form>

          <p className="lead-disclaimer">
            By entering your info, you’ll receive emails from Ishita Kapoor.
            You can unsubscribe anytime. View our{" "}
            <a href="/privacy">Privacy Policy</a>.
          </p>
        </div>

        {/* RIGHT VISUAL */}
        <div className="lead-visual">
          <Image
            src="/images/lead-magnet.png" // replace with your asset
            alt="Free resource preview"
            width={360}
            height={420}
            priority
          />
        </div>
      </div>
    </section>
  );
}
