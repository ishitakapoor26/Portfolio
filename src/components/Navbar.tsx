"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Success Stories", href: "/media" },
    { label: "Services", href: "/events" },
    { label: "Blog", href: "/events" },
  ];

  const ctaButtons = [
    {
      label: "Contact",
      href: "/contact",
      className:
        "px-5 py-2 font-semibold text-sm rounded-full border border-black text-black hover:bg-black hover:text-white transition",
    },
    {
      label: "Book a Call",
      href: "/contact",
      className:
        "px-5 py-2 font-semibold text-sm rounded-full bg-black text-white hover:bg-gray-800 transition",
    },
  ];

  return (
    <header className="bg-white border-b w-full">
      <div className="flex items-center justify-between py-3 px-3 md:px-8">

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <span
            className="text-3xl font-bold text-black uppercase"
            style={{ fontFamily: '"Cormorant Garamond", serif' }}
          >
            Ishita Kapoor
          </span>
        </Link>

        {/* RIGHT SIDE */}
        <div className="flex items-center font-medium gap-6 font-serif">

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-sans">
            {navItems.map((item) => (
              <Link
  key={item.href}
  href={item.href}
  className="
    text-base relative transition 
    hover:text-[lab(52_24.92_44.65)]
    after:content-[''] after:absolute after:left-0 after:top-[-6px]
    after:w-full after:h-[2px]
    after:bg-[lab(52_24.92_44.65)]
    after:scale-x-0 hover:after:scale-x-100 
    after:transition after:origin-left
  "
>
  {item.label}
</Link>

            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-4">
            {ctaButtons.map((btn) => (
              <Link key={btn.label} href={btn.href} className={btn.className}>
                {btn.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-black text-2xl"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav className="md:hidden bg-white border-t py-4">
          <div className="flex flex-col gap-4 text-sm font-sans px-4">

            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            {/* Mobile CTAs */}
            {ctaButtons.map((btn) => (
              <Link
                key={btn.label}
                href={btn.href}
                className={btn.className + " mt-2"}
                onClick={() => setMobileOpen(false)}
              >
                {btn.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
