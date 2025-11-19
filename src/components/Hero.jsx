export default function Hero() {
  return (
    <section id="home" className="relative pt-28 pb-16 bg-gradient-to-b from-slate-50 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Handy Reparatur 2GO in ganz Deutschland
          </h1>
          <p className="mt-4 text-lg text-slate-700">
            Schnelle, professionelle Reparaturen für iPhone, iPad, Samsung, Xiaomi, Google & mehr. Faire Preise, transparente Garantie, sofort vor Ort.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#prices" className="inline-flex items-center justify-center rounded-md bg-slate-900 px-5 py-3 text-white font-medium hover:bg-slate-800 transition">Jetzt Preis berechnen</a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-white px-5 py-3 text-slate-900 font-medium border border-slate-300 hover:bg-slate-50 transition">Kontakt aufnehmen</a>
          </div>
          <div className="mt-6 text-sm text-slate-600">Eigentümer der Marke: Tech Repair Partners GmbH</div>
        </div>
        <div className="relative">
          <img src="/hero-phones.png" alt="Smartphone Reparatur" className="w-full max-w-md mx-auto drop-shadow-2xl" />
        </div>
      </div>
    </section>
  );
}
