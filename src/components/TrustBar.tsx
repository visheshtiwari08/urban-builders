export default function TrustBar() {
  const items = [
    ["Site Visit & Estimate", "Clear scope & transparent pricing"],
    ["Construction With Material", "End-to-end execution"],
    ["2D / 3D Designs", "Plan before you build"],
    ["Renovation Experts", "Upgrade, repair & finishing"],
  ];

  return (
    <section className="border-y border-white/10 bg-zinc-950">
      <div className="mx-auto grid max-w-6xl gap-4 px-4 py-10 md:grid-cols-4">
        {items.map(([title, sub]) => (
          <div
            key={title}
            className="rounded-2xl border border-white/10 bg-white/5 p-5"
          >
            <p className="text-sm font-semibold">{title}</p>
            <p className="mt-1 text-xs text-zinc-400">{sub}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
