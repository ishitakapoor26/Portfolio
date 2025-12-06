"use client";
import { motion } from "framer-motion";

export default function Services({ data }) {
  return (
    <section className="py-24 px-6 md:px-20 bg-white">
      <h2 className="text-3xl md:text-4xl font-bold mb-16">Services</h2>

      <div className="grid md:grid-cols-3 gap-10">
        {data.map((srv, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="
              p-8 rounded-3xl 
              bg-white/40 backdrop-blur-xl
              border border-white/60
              shadow-md hover:shadow-xl
              transition-all duration-300
              hover:-translate-y-2
            "
          >
            <div
              className="text-4xl mb-4"
              style={{ color: "lab(52 24.92 44.65)" }}
            >
              {srv.icon}
            </div>

            <h3 className="text-xl font-semibold">{srv.title}</h3>
            <p className="mt-3 text-gray-700 leading-relaxed">
              {srv.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
