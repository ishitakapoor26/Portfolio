"use client";

import { useState } from "react";
import "@/styles/Services.css"

interface Service {
  id: number;
  title: string;
  shortDescription: string;
  longDescription: string;
  icon: string;
}

interface Props {
  services?: Service[];
}

export default function ServicesContact({ services = [] }: Props) {
  const [selectedService, setSelectedService] = useState(
    services[0]?.title || ""
  );

  if (!services.length) {
    return null; // prevents runtime crash
  }

  return (
    <section className="services-contact-section">
      <div className="services-contact-inner">
        {/* LEFT */}
        <div className="services-list">
          <span className="services-eyebrow">How I can help</span>

          {services.map((service) => (
            <div
              key={service.id}
              className="service-card"
              onClick={() => setSelectedService(service.title)}
            >
              <h3>{service.title}</h3>
              <p>{service.shortDescription}</p>
            </div>
          ))}
        </div>

        {/* RIGHT */}
        <div className="contact-form-card">
          <h3>Start a conversation</h3>
          <p className="form-subtext">
            Share a bit about what you’re looking for and I’ll get back to you.
          </p>

          <form className="contact-form">
            <div className="form-group">
              <label>Name</label>
              <input type="text" required />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input type="email" required />
            </div>

            <div className="form-group">
              <label>Service</label>
              <select
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
              >
                {services.map((service) => (
                  <option key={service.id} value={service.title}>
                    {service.title}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea rows={4} />
            </div>

            <button className="form-submit">Submit inquiry</button>
          </form>
        </div>
      </div>
    </section>
  );
}
