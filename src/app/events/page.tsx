"use client";

import { motion } from "framer-motion";

export default function Events({ data }) {
  return (
    <section className="py-24 px-6 md:px-20 bg-white">
      <h2 className="text-3xl md:text-4xl font-bold mb-16">Events</h2>

      <div className="flex flex-col gap-14 relative">

        {data.map((ev, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="
              p-10 rounded-3xl 
              bg-white/50 backdrop-blur-xl
              border border-white/60 shadow-md 
              hover:shadow-2xl transition-all
              hover:-translate-y-1 relative
            "
          >
            <span
              className="text-sm font-semibold uppercase tracking-wide"
              style={{ color: "lab(52 24.92 44.65)" }}
            >
              {ev.date}
            </span>

            <h3 className="text-2xl font-semibold mt-2">{ev.title}</h3>
            <p className="text-gray-700 mt-4">{ev.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
