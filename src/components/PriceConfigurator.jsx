import { useEffect, useMemo, useState } from "react";

const API = import.meta.env.VITE_BACKEND_URL || "";

export default function PriceConfigurator() {
  const [brands, setBrands] = useState([]);
  const [models, setModels] = useState([]);
  const [parts, setParts] = useState([]);
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [part, setPart] = useState("");
  const [price, setPrice] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`${API}/brands`).then(r => r.json()).then(setBrands).catch(() => {});
  }, []);

  useEffect(() => {
    if (!brand) return;
    setModels([]);
    setModel("");
    fetch(`${API}/models?brand=${brand}`).then(r => r.json()).then(setModels).catch(() => {});
  }, [brand]);

  useEffect(() => {
    if (!brand && !model) return;
    const url = new URL(`${API}/parts`);
    if (brand) url.searchParams.set("brand", brand);
    if (model) url.searchParams.set("model", model);
    fetch(url.toString()).then(r => r.json()).then(setParts).catch(() => {});
  }, [brand, model]);

  const canCalc = useMemo(() => brand && model && part, [brand, model, part]);

  const calc = async () => {
    if (!canCalc) return;
    setLoading(true);
    setError("");
    try {
      const url = new URL(`${API}/price`);
      url.searchParams.set("brand", brand);
      url.searchParams.set("model", model);
      url.searchParams.set("part", part);
      const res = await fetch(url.toString());
      if (!res.ok) throw new Error("Preis nicht gefunden");
      const data = await res.json();
      setPrice(data);
    } catch (e) {
      setError(e.message || "Fehler beim Abrufen");
      setPrice(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="prices" className="py-16 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900">Preisrechner</h2>
        <p className="mt-2 text-slate-600">Wählen Sie Marke, Modell und Bauteil – sofort Preis & Dauer erhalten.</p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <select className="w-full rounded-md border border-slate-300 p-3" value={brand} onChange={e=>setBrand(e.target.value)}>
            <option value="">Marke wählen</option>
            {brands.map(b => <option key={b.slug} value={b.slug}>{b.name}</option>)}
          </select>

          <select className="w-full rounded-md border border-slate-300 p-3" value={model} onChange={e=>setModel(e.target.value)} disabled={!brand}>
            <option value="">Modell wählen</option>
            {models.map(m => <option key={m.code} value={m.code}>{m.name}</option>)}
          </select>

          <select className="w-full rounded-md border border-slate-300 p-3" value={part} onChange={e=>setPart(e.target.value)} disabled={!model}>
            <option value="">Bauteil wählen</option>
            {parts.map(p => <option key={p} value={p}>{p}</option>)}
          </select>

          <button onClick={calc} disabled={!canCalc || loading} className="rounded-md bg-slate-900 text-white px-4 py-3 disabled:opacity-50">{loading? 'Berechne...' : 'Preis anzeigen'}</button>
        </div>

        {error && <div className="mt-4 text-red-600">{error}</div>}
        {price && (
          <div className="mt-6 rounded-xl border border-slate-200 bg-white p-6">
            <div className="text-lg font-semibold text-slate-900">{brand.toUpperCase()} • {model} • {price.part}</div>
            <div className="mt-2 text-slate-700">Preis: <span className="font-bold">{price.price_eur.toFixed(2)} €</span></div>
            <div className="text-slate-700">Dauer: ca. {price.duration_min} Min</div>
            <div className="text-slate-700">Garantie: {price.warranty_months} Monate</div>
          </div>
        )}
      </div>
    </section>
  );
}
