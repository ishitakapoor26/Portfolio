"use client";
import { motion } from "framer-motion";

export default function Card({ title, description, image, link }) {
  const Wrapper = link ? motion.a : motion.div;
  return (
    <Wrapper
      href={link}
      target={link ? "_blank" : undefined}
      className="group relative rounded-lg overflow-hidden cursor-pointer shadow-sm hover:shadow-lg transition"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover transition-transform group-hover:scale-105"
        />
      )}
      <div className={`absolute inset-0 ${image ? "bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition flex items-center justify-center p-4" : ""}`}>
        <div className={image ? "text-white text-center" : ""}>
          <h3 className="text-xl font-semibold">{title}</h3>
          {description && <p className="mt-2">{description}</p>}
        </div>
      </div>
    </Wrapper>
  );
}
