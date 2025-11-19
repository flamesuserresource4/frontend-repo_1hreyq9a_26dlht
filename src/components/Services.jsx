import { Wrench, Smartphone, ShieldCheck, Clock } from "lucide-react";

export default function Services() {
  const items = [
    { icon: Smartphone, title: "Display & Akku", text: "Originalqualität für iPhone, Samsung, Xiaomi, Google & mehr." },
    { icon: Wrench, title: "Board & Kamera", text: "Mikrolötung, Kamera, Ladebuchse, Lautsprecher, Wasser- & Sturzschäden." },
    { icon: ShieldCheck, title: "Garantie", text: "Bis zu 12 Monate Garantie. Transparente Preise ohne Überraschungen." },
    { icon: Clock, title: "Express-Service", text: "Viele Reparaturen in 30–60 Minuten mit Termin oder spontan." },
  ];

  return (
    <section id="services" className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900">Unsere Leistungen</h2>
        <p className="mt-2 text-slate-600">Alles rund um Smartphone & Tablet Reparaturen – schnell, sicher, fair.</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((i) => (
            <div key={i.title} className="rounded-xl border border-slate-200 p-6 hover:shadow-md transition">
              <i.icon className="text-slate-900" />
              <h3 className="mt-3 font-semibold text-slate-900">{i.title}</h3>
              <p className="mt-2 text-slate-600 text-sm">{i.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
