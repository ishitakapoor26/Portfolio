"use client";
import { useRef, useEffect, useState } from "react";
import { motion, useAnimation, useInView, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

interface WorkItem {
  title: string;
  company: string;
  duration: string;
  description: string;
}

interface WorkExperienceProps {
  data: WorkItem[];
}

export default function WorkExperience({ data }: WorkExperienceProps) {
  return (
    <section className="py-24 px-4 md:px-20 bg-white relative">
      <h2 className="text-3xl md:text-4xl font-bold mb-20">Work Experience</h2>

      <div className="relative">

        {/* Vertical Line */}
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[3px]
          bg-gradient-to-b from-gray-300 via-gray-200 to-gray-300
          h-full rounded-full z-0" />

        <div className="flex flex-col gap-32">
          {data.map((job, idx) => (
            <TimelineItem key={idx} job={job} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* -----------------------------------------------------
   TIMELINE ITEM
----------------------------------------------------- */
function TimelineItem({ job, idx }) {
  const isLeft = idx % 2 === 0;

  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    controls.start(inView ? "visible" : "hidden");
  }, [inView]);

  return (
    <div ref={ref} className="relative w-full min-h-[120px]">

      {/* Dot */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
        <motion.div
          animate={controls}
          variants={{
            hidden: { scale: 0.3, opacity: 0 },
            visible: { scale: 1, opacity: 1 },
          }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <div
            style={{ backgroundColor: "lab(52 24.92 44.65)" }}
            className="w-6 h-6 rounded-full border-2 border-white shadow-xl"
          />
          <div
            style={{ backgroundColor: "lab(52 24.92 44.65 / 0.35)" }}
            className="w-14 h-14 absolute -top-4 -left-4 rounded-full blur-2xl opacity-80"
          />
        </motion.div>
      </div>

      <div className="md:grid md:grid-cols-2">
        {/* LEFT CARD */}
        <div className={`hidden md:flex ${isLeft ? "justify-end pr-14" : ""}`}>
          {isLeft && <TimelineCard job={job} controls={controls} isLeft={isLeft} />}
        </div>

        {/* RIGHT CARD */}
        <div className={`hidden md:flex ${!isLeft ? "justify-start pl-14" : ""}`}>
          {!isLeft && <TimelineCard job={job} controls={controls} isLeft={isLeft} />}
        </div>

        {/* MOBILE */}
        <div className="md:hidden mt-16">
          <TimelineCard job={job} controls={controls} isLeft={isLeft} />
        </div>
      </div>
    </div>
  );
}

/* -----------------------------------------------------
   CARD COMPONENT — EXPANDABLE + GLASS + MOTION
----------------------------------------------------- */
function TimelineCard({ job, controls, isLeft }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, x: isLeft ? -70 : 70, y: 30, filter: "blur(8px)" },
        visible: { opacity: 1, x: 0, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
      }}
      animate={controls}
      initial="hidden"
      className="
        backdrop-blur-xl bg-white/40 
        border border-white/60 shadow-lg
        rounded-3xl p-8 
        w-full max-w-xl cursor-pointer
        transition-all duration-300
        hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)]
        hover:bg-white/60
      "
      style={{ borderLeft: "6px solid lab(52 24.92 44.65)" }}
      onClick={() => setExpanded(!expanded)}
    >
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-xl font-semibold">{job.title}</h3>
          <p className="text-sm text-gray-600 mt-1">
            {job.company} • {job.duration}
          </p>
        </div>

        <motion.div
          animate={{ rotate: expanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="w-6 h-6 text-gray-600" />
        </motion.div>
      </div>

      {/* EXPANDING CONTENT */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -10 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -10 }}
            transition={{ duration: 0.35 }}
            className="overflow-hidden"
          >
            <p className="text-gray-700 mt-5 leading-relaxed whitespace-pre-line">
              {job.description}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
