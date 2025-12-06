"use client";

import { motion } from "framer-motion";

export default function Testimonials({ data }) {
  return (
    <section className="py-24 px-6 md:px-20 bg-white">
      <h2 className="text-3xl md:text-4xl font-bold mb-14">
        What People Say
      </h2>

      <div className="flex overflow-x-auto gap-8 no-scrollbar pb-8">
        {data.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="
              bg-white/40 backdrop-blur-xl border
              border-white/40 shadow-md
              p-8 rounded-3xl min-w-[350px]
            "
          >
            <p className="text-gray-700 leading-relaxed">“{t.quote}”</p>

            <div className="mt-4 font-semibold">{t.name}</div>
            <div className="text-sm text-gray-500">{t.role}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
