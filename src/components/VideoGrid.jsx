export default function VideoGrid() {
  // Placeholder sample videos - replace src with your own TikTok-hosted or local MP4 URLs
  const videos = [
    "/sample-1.mp4",
    "/sample-2.mp4",
    "/sample-3.mp4",
    "/sample-4.mp4",
  ];
  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900">Einblick in unsere Arbeit</h2>
        <p className="mt-2 text-slate-600">Kurzvideos direkt aus der Werkstatt – Qualität zum Anschauen.</p>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {videos.map((src, i) => (
            <video key={i} controls playsInline className="w-full rounded-lg border border-slate-200" src={src} />
          ))}
        </div>
      </div>
    </section>
  );
}
