export default function Hero(){
  return (
    <section className="bg-[url('/hero-bg.jpg')] bg-cover bg-center py-36">
      <div className="container text-center">
        <h1 className="h1 text-5xl md:text-6xl font-extrabold leading-tight mb-6">Ishita Kapoor</h1>
        <p className="text-xl max-w-3xl mx-auto mb-8">Emerging leader · Founder · Strategic advisor helping early-stage founders and organizations scale impact through leadership, inclusive design, and product strategy.</p>
        <div className="flex justify-center gap-4">
          <a href="/contact" className="btn btn-primary">Book a Call</a>
          <a href="/media" className="btn btn-outline">View Media</a>
        </div>

        <div className="mt-10 flex items-center justify-center gap-6 text-sm text-gray-600">
          <span>As seen in</span>
          <img src="/logos/microsoft.svg" alt="Microsoft" className="h-6"/>
          <img src="/logos/unicef.svg" alt="UNICEF" className="h-6"/>
          <img src="/logos/google.svg" alt="Google" className="h-6"/>
        </div>
      </div>
    </section>
  )
}