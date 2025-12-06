export default function About() {
  return (
    <section className="w-full bg-[#F7F3EE] py-24">
      
      {/* ---- ABOUT SECTION ---- */}
      <div className="max-w-6xl mx-auto px-6 lg:px-0 grid lg:grid-cols-2 gap-16 items-center mb-24">
        
        {/* LEFT: TEXT */}
        <div>
          <h2
            className="text-5xl md:text-6xl font-bold leading-tight mb-6"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Heya, I’m Ishita —
          </h2>

          <p
            className="text-xl text-gray-800 leading-relaxed mb-6"
            style={{ fontFamily: "var(--font-body)" }}
          >
            A strategist, builder, and emerging leader who believes in clarity,
            kindness, and the power of turning bold ideas into real-world impact.
          </p>

          <p
            className="text-lg text-gray-700 leading-relaxed"
            style={{ fontFamily: "var(--font-body)" }}
          >
            My work sits at the intersection of entrepreneurship, technology, and
            human-centered leadership — helping founders, teams, and organizations
            build with intention, adopt smart strategies, and scale purposefully.
          </p>
        </div>

        {/* RIGHT: IMAGE */}
        <div className="flex justify-center lg:justify-end">
          <img
            src="/about-photo.jpg"
            alt="Ishita Kapoor"
            className="w-full max-w-md rounded-xl shadow-lg object-cover"
          />
        </div>
      </div>

      {/* ---- BRANDS / SEEN ON SECTION ---- */}
      <div className="w-full bg-gray-900 py-20 text-center">
        
        <h3
          className="text-4xl font-normal text-white mb-4"
          style={{ fontFamily: '"Cormorant Garamond", serif' }}
        >
          Brands Collaborated With
        </h3>

        <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10 items-center">
          
          {[
            { src: "/logos/forbes.png", alt: "Forbes" },
            { src: "/logos/microsoft.png", alt: "Microsoft" },
            { src: "/logos/google.png", alt: "Google" },
            { src: "/logos/unicef.png", alt: "UNICEF" },
            { src: "/logos/yourstory.png", alt: "YourStory" },
          ].map((logo) => (
            <img
              key={logo.alt}
              src={logo.src}
              alt={logo.alt}
              className="mx-auto h-10 opacity-70 hover:opacity-100 transition"
            />
          ))}

        </div>
      </div>
    </section>
  );
}
