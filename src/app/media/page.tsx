"use client";

import { motion } from "framer-motion";

export default function Media({ images }) {
  return (
    <section className="py-24 px-6 md:px-20 bg-white">
      <h2 className="text-3xl md:text-4xl font-bold mb-16">Media</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {images.map((img, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden rounded-2xl shadow-md"
          >
            <img
              src={img}
              className="w-full h-72 object-cover hover:scale-110 transition-all duration-500"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
