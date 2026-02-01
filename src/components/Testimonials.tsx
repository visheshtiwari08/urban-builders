const testimonials = [
  { name: "Client Review 1", role: "Construction", text: "Good quality work and timely delivery. Professional team." },
  { name: "Client Review 2", role: "Interiors", text: "Finishing and design were excellent. Smooth coordination." },
  { name: "Client Review 3", role: "Renovation", text: "Very responsive and transparent estimate. Great result." },
];

export default function Testimonials() {
  return (
    <section id="reviews" className="border-y border-white/10 bg-zinc-950">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <h2 className="text-3xl font-bold tracking-tight">Client Reviews</h2>
        <p className="mt-2 max-w-2xl text-zinc-300">
          Replace these with real reviews later (Google reviews recommended).
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <p className="text-sm text-zinc-300">“{t.text}”</p>
              <div className="mt-5 flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-zinc-400">{t.role}</p>
                </div>
                <p className="text-xs text-amber-200">★★★★★</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
