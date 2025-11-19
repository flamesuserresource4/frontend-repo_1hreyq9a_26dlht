import { useEffect, useRef, useState } from "react";

// Simple client-side AI-like chatbot stub (no external dependencies)
// Includes WhatsApp quick action
export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "bot", text: "Hallo! Ich bin Ihr Assistent. Wobei kann ich helfen?" },
  ]);
  const [input, setInput] = useState("");
  const endRef = useRef(null);

  useEffect(() => { endRef.current?.scrollIntoView({ behavior: 'smooth' }); }, [messages]);

  const send = () => {
    if (!input.trim()) return;
    const userMsg = { role: "user", text: input.trim() };
    setMessages((m) => [...m, userMsg]);

    // very simple keyword-based reply
    const lower = input.toLowerCase();
    let reply = "Verstanden. Ein Experte meldet sich gleich.";
    if (lower.includes("display") || lower.includes("screen")) reply = "Displayschaden? Meist in 60 Min repariert. Nutzen Sie den Preisrechner für Ihr Modell.";
    if (lower.includes("akku") || lower.includes("battery")) reply = "Akkutausch dauert ca. 30–45 Min. Garantie 12 Monate.";
    if (lower.includes("preis") || lower.includes("cost")) reply = "Klicken Sie auf 'Preisrechner' und wählen Sie Marke/Modell/Bauteil.";
    if (lower.includes("standort") || lower.includes("wo")) reply = "Wir sind in mehreren Städten vertreten – siehe 'Standorte'.";

    setTimeout(() => setMessages((m) => [...m, { role: "bot", text: reply }]), 500);
    setInput("");
  };

  return (
    <div>
      {/* Button */}
      <button onClick={() => setOpen(!open)} className="fixed bottom-6 right-6 rounded-full bg-slate-900 text-white w-14 h-14 shadow-lg">💬</button>

      {/* Panel */}
      {open && (
        <div className="fixed bottom-24 right-6 w-80 rounded-xl border border-slate-200 bg-white shadow-2xl overflow-hidden">
          <div className="px-4 py-3 bg-slate-900 text-white font-semibold">AI Chat & WhatsApp</div>
          <div className="p-3 h-72 overflow-y-auto space-y-2 text-sm">
            {messages.map((m, i) => (
              <div key={i} className={`${m.role === 'bot' ? 'bg-slate-100' : 'bg-green-50'} p-2 rounded-md`}>{m.text}</div>
            ))}
            <div ref={endRef} />
          </div>
          <div className="p-3 border-t border-slate-200 flex items-center gap-2">
            <input value={input} onChange={e=>setInput(e.target.value)} onKeyDown={e=>e.key==='Enter' && send()} className="flex-1 rounded-md border border-slate-300 p-2 text-sm" placeholder="Ihre Frage..." />
            <button onClick={send} className="rounded-md bg-slate-900 text-white px-3 py-2 text-sm">Senden</button>
          </div>
          <a href="https://wa.me/491701234567" target="_blank" className="block text-center text-sm bg-green-600 text-white py-2">WhatsApp Chat öffnen</a>
        </div>
      )}
    </div>
  );
}
