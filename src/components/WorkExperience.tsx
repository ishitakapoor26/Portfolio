"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

/* ----------- TUNABLE CONSTANTS ----------- */
const VISIBLE_COUNT = 3;
const CARD_HEIGHT = 260; // larger card height
const CARD_GAP = 16; // bigger spacing
const SLOT_SIZE = CARD_HEIGHT + CARD_GAP;

const SENSITIVITY = 0.0009; // wheel sensitivity (reduced)
const FRICTION = 0.90; // friction per frame
const SNAP_EASE = 0.18; // lerp factor when snapping
const BUFFER = 1; // render buffer above/below visible window
const DOT_SIZE = 0; // timeline dot size

export default function WorkExperienceRoller({ data = [] }) {
  if (!data || data.length === 0) return null;

  const n = data.length;
  const [offset, setOffset] = useState(0); // fractional index offset (top-most)
  const velRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const [isPointerOver, setIsPointerOver] = useState(false);

  const [modalItem, setModalItem] = useState(null);

  // RAF loop - applies velocity + friction + snap easing when near zero
  useEffect(() => {
    const step = () => {
      // apply velocity
      if (Math.abs(velRef.current) > 1e-6) {
        setOffset((prev) => prev + velRef.current);
        velRef.current *= FRICTION;
      } else {
        velRef.current = 0;
      }

      // When velocity is near zero, gently lerp offset towards nearest integer (snap)
      if (Math.abs(velRef.current) < 1e-4) {
        setOffset((prev) => {
          const snapped = Math.round(prev);
          if (Math.abs(snapped - prev) < 0.0001) return prev;
          return prev + (snapped - prev) * SNAP_EASE;
        });
      }

      rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  // wheel handler only while pointer over viewport
  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;

    const onEnter = () => setIsPointerOver(true);
    const onLeave = () => setIsPointerOver(false);

    const onWheel = (e: WheelEvent) => {
      if (!isPointerOver) return;
      e.preventDefault();
      // transform deltaY into offset units
      // smaller sensitivity so single scroll doesn't jump many cards
      const deltaIdx = e.deltaY * SENSITIVITY;
      velRef.current += deltaIdx;
    };

    el.addEventListener("pointerenter", onEnter);
    el.addEventListener("pointerleave", onLeave);
    el.addEventListener("wheel", onWheel, { passive: false });

    return () => {
      el.removeEventListener("pointerenter", onEnter);
      el.removeEventListener("pointerleave", onLeave);
      el.removeEventListener("wheel", onWheel as EventListener);
    };
  }, [isPointerOver]);

  // helpers
  const mod = (i) => {
    const m = i % n;
    return m < 0 ? m + n : m;
  };

  // programmatic arrow controls (move one item)
  const moveBy = (delta) => {
    velRef.current = 0; // kill momentum so arrow is precise
    setOffset((prev) => prev + delta);
  };

  // render range
  const startFloat = offset;
  const renderCount = VISIBLE_COUNT + BUFFER * 2;

  // compute viewport height for left timeline markers
  const viewportHeight = (VISIBLE_COUNT * SLOT_SIZE - CARD_GAP)*0.7;

  return (
    <section className="py-20 px-6 md:px-20 bg-[#F7F3EE]" style={{
    backgroundImage: `
      linear-gradient(rgba(247,243,238,0.7), rgba(247,243,238,0.7)),
      url('/bg-texture.jpg')
    `,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  }}>
      <div className="max-w-6xl mx-auto relative">
        <h2 className="text-4xl md:text-5xl font-bold mb-10" style={{ fontFamily: '"Cormorant Garamond", serif'  }}>
          The Roles That Built Me....
        </h2>

        <div className="relative grid grid-cols-1 md:grid-cols-[72px_1fr] gap-6 items-start">
          {/* LEFT: timeline column with fixed vertical line + markers aligned to slots */}
          <div className="hidden md:block relative">
            {/* vertical line */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[3px] bg-[#E8DED3] rounded-full" />
            {/* markers for VISIBLE_COUNT slots */}
            <div
              className="absolute left-1/2 -translate-x-1/2 top-0"
              style={{
                height: `${viewportHeight}px`,
                width: 0,
              }}
            >
              {Array.from({ length: VISIBLE_COUNT }).map((_, i) => {
                const topPx = i * SLOT_SIZE + (CARD_HEIGHT / 2);
                return (
                  <div
                    key={i}
                    style={{
                      position: "absolute",
                      left: `-${DOT_SIZE / 2}px`,
                      top: `${topPx - DOT_SIZE / 2}px`,
                      width: DOT_SIZE,
                      height: DOT_SIZE,
                      borderRadius: DOT_SIZE,
                      background: "#fff",
                      border: "2px solid #F7F3EE",
                      boxShadow: "0 6px 18px rgba(0,0,0,0.06)",
                    }}
                    aria-hidden
                  />
                );
              })}
            </div>
          </div>

          {/* RIGHT: roller viewport */}
          <div>
            <div
              ref={viewportRef}
              className="relative mx-auto overflow-hidden"
              style={{
                height: `${viewportHeight}px`,
              }}
            >
              <div style={{ position: "absolute", inset: 0 }}>
                {Array.from({ length: renderCount }).map((_, i) => {
                  const virtualIndex = Math.floor(startFloat) - BUFFER + i;
                  const wrappedIndex = mod(virtualIndex);
                  const item = data[wrappedIndex];

                  // vertical position of the slot relative to top of viewport
                  const y = (virtualIndex - startFloat) * SLOT_SIZE;

                  // center math
                  const centerSlot = (VISIBLE_COUNT - 1) / 2; // e.g., for 3 -> 1
                  const distanceToCenter = Math.abs((virtualIndex - startFloat) - centerSlot + 0.5);

                  const isCenter = distanceToCenter < 0.6;

                  const scale = isCenter ? 1.03 : Math.max(0.86, 1 - distanceToCenter * 0.12);
                  const blur = isCenter ? 0 : Math.min(10, distanceToCenter * 5);
                  const opacity = Math.max(0.25, isCenter ? 1 : 1 - distanceToCenter * 0.35);

                  return (
                    <motion.div
                      key={`slot-${i}-${wrappedIndex}`}
                      initial={false}
                      animate={{
                        y,
                        scale,
                        opacity,
                        filter: `blur(${blur}px)`,
                      }}
                      transition={{ type: "spring", stiffness: 160, damping: 24 }}
                      style={{
                        position: "absolute",
                        left: 0,
                        width: "100%",
                        height: `${CARD_HEIGHT}px`,
                        padding: `${CARD_GAP / 2}px 0`,
                        boxSizing: "border-box",
                      }}
                    >
                      <Card
                        item={item}
                        isCenter={isCenter}
                        onOpen={() => setModalItem(item)}
                      />
                    </motion.div>
                  );
                })}
              </div>
            </div>

            <div className="mt-4 text-xs text-gray-600">Scroll inside to browse experiences — click to view details</div>

            {/* ARROW BUTTONS bottom-right */}
            <div className="absolute right-0 -bottom-14 flex gap-3">
              <button
                onClick={() => moveBy(-1)}
                className="w-12 h-12 flex items-center justify-center rounded-full border bg-white shadow-md hover:shadow-lg transition"
                style={{ borderColor: "#E8DED3", color: "#C1AFA0" }}
                aria-label="Previous"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={() => moveBy(1)}
                className="w-12 h-12 flex items-center justify-center rounded-full border bg-white shadow-md hover:shadow-lg transition"
                style={{ borderColor: "#E8DED3", color: "#C1AFA0" }}
                aria-label="Next"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {modalItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center"
          >
            <div className="absolute inset-0 bg-black/50" onClick={() => setModalItem(null)} />
            <motion.div
              initial={{ scale: 0.98, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.98, y: 20 }}
              transition={{ duration: 0.22 }}
              className="relative bg-white rounded-2xl shadow-xl max-w-3xl w-full mx-4 p-8"
            >
              <button onClick={() => setModalItem(null)} className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100">
                <X className="w-5 h-5" />
              </button>

              <h3 className="text-2xl font-semibold mb-1" style={{ fontFamily: "var(--font-heading)" }}>
                {modalItem.title}
              </h3>
              <p className="text-sm text-gray-600 mb-4" style={{ fontFamily: "var(--font-body)" }}>
                {modalItem.company} • {modalItem.duration}
              </p>

              <div className="space-y-3 text-gray-800" style={{ fontFamily: "var(--font-body)" }}>
                {modalItem.description.split("•").map((s, i) => {
                  const t = s.trim();
                  if (!t) return null;
                  return (
                    <div key={i} className="flex gap-3">
                      <div className="text-lg">•</div>
                      <div>{t}</div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

/* ---------------- Card ---------------- */
function Card({ item, isCenter, onOpen }) {
  return (
    <div className="px-3 md:px-6">
      <div
        onClick={onOpen}
        role="button"
        tabIndex={0}
        className={`
          rounded-3xl p-6 md:p-8 cursor-pointer transition-all duration-200
          ${isCenter ? "bg-white scale-[1.01] shadow-[0_10px_40px_rgba(0,0,0,0.08)]" : "bg-white/85"}
          border
        `}
        style={{
          borderColor: "#E9E0D6",
        }}
      >
        <h4 className="text-xl md:text-2xl font-semibold" style={{ fontFamily: "var(--font-heading)" }}>
          {item.title}
        </h4>
        <p className="text-gray-600 text-sm mt-2" style={{ fontFamily: "var(--font-body)" }}>
          {item.company} • {item.duration}
        </p>

        <p className="text-gray-700 text-sm mt-4 line-clamp-3" style={{ fontFamily: "var(--font-body)" }}>
          {item.description.split("•").map(s => s.trim()).filter(Boolean)[0] || ""}
        </p>

        <div className="mt-4 flex items-center justify-between">
          <div className="text-xs px-3 py-1 rounded-full bg-[#E8DED3] text-sm">Active</div>
          <div className="text-xs text-gray-500">Click to expand</div>
        </div>
      </div>
    </div>
  );
}
