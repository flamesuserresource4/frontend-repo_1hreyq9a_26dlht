import { useEffect, useState } from "react";
const API = import.meta.env.VITE_BACKEND_URL || "";

export default function Locations() {
  const [locations, setLocations] = useState([]);
  useEffect(() => { fetch(`${API}/locations`).then(r=>r.json()).then(setLocations).catch(()=>{}); }, []);

  return (
    <section id="locations" className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900">Standorte</h2>
        <p className="mt-2 text-slate-600">Besuchen Sie uns in Ihrer Nähe oder senden Sie Ihr Gerät per Post.</p>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {locations.map((l) => (
            <div key={l.name} className="rounded-xl border border-slate-200 p-6">
              <h3 className="font-semibold text-slate-900">{l.name}</h3>
              <p className="text-slate-700 text-sm mt-1">{l.address}, {l.postal_code} {l.city}</p>
              <a href={`tel:${l.phone}`} className="mt-3 inline-block text-slate-900 font-medium">{l.phone}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
