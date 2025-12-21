"use client";

import "@/styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer-root">
      <div className="footer-inner">
        {/* LEFT — BRAND + SIGNUP */}
        <div className="footer-col footer-brand">
          <h2 className="footer-logo">ISHITA KAPOOR</h2>

          <p className="footer-subtext">
            Join the inner circle for insights on leadership, startups, and
            building work that matters.
          </p>

          <form className="footer-form">
            <input type="text" placeholder="First Name" />
            <input type="email" placeholder="Enter Your Email" />
            <button type="submit">LET’S DO IT</button>
          </form>

          <p className="footer-privacy">
            By signing up, you agree to receive emails. Unsubscribe anytime.
          </p>
        </div>

        {/* COMPANY */}
        <div className="footer-col">
          <h4>Company</h4>
          <ul>
            <li><a href="/about">About</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/media">Press & Media</a></li>
            <li><a href="/speaking">Speaking</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* WORK */}
        <div className="footer-col">
          <h4>Work</h4>
          <ul>
            <li><a href="/services">Advisory</a></li>
            <li><a href="/services">Workshops</a></li>
            <li><a href="/services">Mentorship</a></li>
            <li><a href="/projects">Case Studies</a></li>
          </ul>
        </div>

        {/* RESOURCES */}
        <div className="footer-col">
          <h4>Resources</h4>
          <ul>
            <li><a href="/blog">Articles</a></li>
            <li><a href="/events">Events</a></li>
            <li><a href="/media">Gallery</a></li>
            <li><a href="/faq">FAQ</a></li>
          </ul>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="footer-bottom">
        <div className="footer-bottom-inner">
          <span>© {new Date().getFullYear()} Ishita Kapoor</span>

          <div className="footer-legal">
            <a href="/terms">Terms</a>
            <a href="/privacy">Privacy</a>
            <a href="/cookies">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
