export default function About() {
  return (
    <section className="w-full bg-[#e5d8c7]"> 
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-between py-24">

        {/* LEFT TEXT COLUMN */}
        <div className="lg:w-1/2 text-left">

          {/* Small Top Label */}
          <p
            className="text-sm tracking-widest mb-2 font-medium font-stretch-condensed"
            style={{ fontFamily: "var(--font-body)", color: "rgb(88 64 27 / 72%)" }}
          >
            HEYA!
          </p>

          {/* Big Heading */}
          <h1
            className="text-7xl md:text-8xl font-medium leading-[1.1] mb-6"
            style={{ fontFamily: '"Cormorant Garamond", serif' }}
          >
            I'M <br /> ISHITA.
          </h1>

          {/* Paragraph */}
          <p
            className="text-lg md:text-lm leading-relaxed mb-8 font-light"
            style={{ fontFamily: "var(--font-body)", color: "#1A1A1A" }}
          >
            My hunch is someone you trust mentioned my name, or you stumbled
            upon one of my projects, talks, or articles online. Whatever path
            you took, I’m really glad you’re here.
            <br /><br />
            This site is full of ideas, tools, and resources that can help you
            create meaningful change — in your life, your work, and the world.
            Here’s a quick lay of the land so you can find exactly what you're
            looking for and we can start something beautiful together.
          </p>

          {/* Button */}
          <button
            className="px-6 py-3 rounded-full text-white text-base"
            style={{
              backgroundColor: "#1A1A1A",
              fontFamily: "var(--font-body)",
            }}
          >
            Learn More
          </button>
        </div>

        {/* RIGHT IMAGE COLUMN */}
        <div className="lg:w-1/2 flex justify-center mt-12 lg:mt-0">
          <img
            src="/ishita-about.png"   // <-- Upload a transparent PNG of you
            alt="Ishita Kapoor"
            className="w-full max-w-md object-contain"
          />
        </div>

      </div>
    </section>
  );
}
