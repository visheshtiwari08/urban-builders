const faqs = [
  {
    q: "Do you provide construction with material?",
    a: "Yes. We provide construction with material along with supervision and planned execution.",
  },
  {
    q: "Do you make 2D & 3D designs?",
    a: "Yes. We provide 2D working drawings and 3D visualization for better clarity before work starts.",
  },
  {
    q: "Do you do renovation work?",
    a: "Yes. Building renovation including repairs, remodeling, and finishing upgrades is available.",
  },
  {
    q: "Where do you provide services?",
    a: "Mainly in Varanasi and nearby areas. Contact us with your location for confirmation.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="mx-auto max-w-6xl px-4 py-16 md:py-24">
      <h2 className="text-3xl font-bold tracking-tight">FAQ</h2>
      <p className="mt-2 max-w-2xl text-zinc-300">Answers to common questions.</p>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {faqs.map((f) => (
          <details
            key={f.q}
            className="group rounded-3xl border border-white/10 bg-white/5 p-6 open:bg-white/10"
          >
            <summary className="cursor-pointer list-none text-sm font-semibold">
              <span>{f.q}</span>
              <span className="float-right text-zinc-400 group-open:hidden">+</span>
              <span className="float-right text-zinc-400 hidden group-open:inline">−</span>
            </summary>
            <p className="mt-3 text-sm text-zinc-300">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
