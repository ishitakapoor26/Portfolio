"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function BlogSection({ data }) {
  return (
    <section className="py-24 px-6 md:px-20 bg-white">
      <h2 className="text-3xl md:text-4xl font-bold mb-12">Blog</h2>

      <div className="flex overflow-x-auto gap-8 pb-6 no-scrollbar">
        {data.map((post, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ rotate: -1.5 }}
            transition={{ duration: 0.4 }}
            className="min-w-[320px] max-w-[350px] bg-white/40 backdrop-blur-lg 
              border border-white/60 p-6 rounded-3xl shadow-sm hover:shadow-xl 
              transition-all"
          >
            {post.image && (
              <img
                src={post.image}
                className="rounded-xl mb-4 h-40 w-full object-cover"
              />
            )}

            <h3 className="text-xl font-semibold">{post.title}</h3>
            <p className="text-gray-600 mt-2 line-clamp-3">{post.excerpt}</p>

            <Link href={`/blog/${post.slug}`}>
              <span
                className="mt-4 inline-block text-sm font-medium"
                style={{ color: "lab(52 24.92 44.65)" }}
              >
                Explore More →
              </span>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
