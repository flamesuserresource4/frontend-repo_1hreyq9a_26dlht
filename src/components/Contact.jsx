import { useState } from "react";
const API = import.meta.env.VITE_BACKEND_URL || "";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    const res = await fetch(`${API}/inquiry`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) });
    if (res.ok) setSent(true);
  };

  return (
    <section id="contact" className="py-16 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900">Kontakt</h2>
        <p className="mt-2 text-slate-600">Fragen zur Reparatur? Schreiben Sie uns – wir melden uns schnell zurück.</p>
        <div className="mt-8 grid lg:grid-cols-2 gap-8">
          <form onSubmit={submit} className="rounded-xl border border-slate-200 bg-white p-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <input required className="rounded-md border border-slate-300 p-3" placeholder="Name" value={form.name} onChange={e=>setForm({ ...form, name: e.target.value })} />
              <input required type="email" className="rounded-md border border-slate-300 p-3" placeholder="E-Mail" value={form.email} onChange={e=>setForm({ ...form, email: e.target.value })} />
            </div>
            <input className="mt-4 w-full rounded-md border border-slate-300 p-3" placeholder="Telefon (optional)" value={form.phone} onChange={e=>setForm({ ...form, phone: e.target.value })} />
            <textarea required rows={5} className="mt-4 w-full rounded-md border border-slate-300 p-3" placeholder="Nachricht" value={form.message} onChange={e=>setForm({ ...form, message: e.target.value })} />
            <button className="mt-4 rounded-md bg-slate-900 text-white px-5 py-3">Senden</button>
            {sent && <div className="mt-3 text-green-700">Vielen Dank! Wir melden uns.</div>}
          </form>
          <div className="rounded-xl border border-slate-200 bg-white p-6">
            <div className="font-semibold text-slate-900">WhatsApp</div>
            <p className="text-slate-600 mt-2">Direkt per WhatsApp anfragen – schneller geht's nicht.</p>
            <a href="https://wa.me/491701234567" target="_blank" className="mt-4 inline-block rounded-md bg-green-600 text-white px-5 py-3">Auf WhatsApp chatten</a>
            <div className="mt-6 text-sm text-slate-500">Telefon: +49 170 1234567 • E-Mail: info@handyreparatur2go.de</div>
          </div>
        </div>
      </div>
    </section>
  );
}
