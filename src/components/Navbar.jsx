import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 font-bold text-slate-900 text-lg">
          <img src="/logo.svg" alt="Handy Reparatur 2GO" className="h-8 w-8" />
          <span>Handy Reparatur 2GO</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-slate-700">
          <a href="#services" className="hover:text-slate-900">Leistungen</a>
          <a href="#prices" className="hover:text-slate-900">Preisrechner</a>
          <a href="#locations" className="hover:text-slate-900">Standorte</a>
          <a href="#reviews" className="hover:text-slate-900">Bewertungen</a>
          <a href="#contact" className="hover:text-slate-900">Kontakt</a>
        </nav>
        <button className="md:hidden p-2 text-slate-700" aria-label="Menu">
          <Menu />
        </button>
      </div>
    </header>
  );
}
