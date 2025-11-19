import { useEffect, useState } from "react";
const API = import.meta.env.VITE_BACKEND_URL || "";

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  useEffect(() => { fetch(`${API}/reviews`).then(r=>r.json()).then(setReviews).catch(()=>{}); }, []);

  return (
    <section id="reviews" className="py-16 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900">Kundenbewertungen</h2>
        <p className="mt-2 text-slate-600">Echte Stimmen von Google & zufriedenen Kundinnen und Kunden.</p>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r, idx) => (
            <div key={idx} className="rounded-xl border border-slate-200 bg-white p-6">
              <div className="font-semibold text-slate-900">{r.author}</div>
              <div className="text-amber-500">{"★★★★★".slice(0, r.rating)}</div>
              <p className="text-slate-700 text-sm mt-2">{r.text}</p>
              <div className="text-xs text-slate-500 mt-3">Quelle: {r.source}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
