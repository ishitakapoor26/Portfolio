"use client";
import { motion } from "framer-motion";

export default function SuccessStories({ data }) {
  return (
    <section className="py-16 px-4 md:px-16 bg-gray-50">
      <h2 className="text-3xl font-bold mb-10">Success Stories</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {data.map((story, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="relative rounded-lg overflow-hidden cursor-pointer group"
          >
            <img
              src={story.image}
              alt={story.title}
              className="w-full h-64 object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center text-center p-4">
              <div className="text-white">
                <h3 className="text-xl font-semibold">{story.title}</h3>
                <p className="mt-2">{story.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
