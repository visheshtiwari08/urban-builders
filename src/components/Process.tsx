const steps = [
  ["1. Requirement & Site Visit", "We understand the scope, location, and expected finish."],
  ["2. Estimate & Design", "2D/3D designs + material planning + transparent quote."],
  ["3. Execution", "Supervision, timeline, and quality checks at milestones."],
  ["4. Handover", "Final finishing, cleanup, and project handover."],
];

export default function Process() {
  return (
    <section id="process" className="mx-auto max-w-6xl px-4 py-16 md:py-24">
      <h2 className="text-3xl font-bold tracking-tight">Our Process</h2>
      <p className="mt-2 max-w-2xl text-zinc-300">
        Simple process, professional delivery.
      </p>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {steps.map(([t, d]) => (
          <div key={t} className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <p className="text-base font-semibold">{t}</p>
            <p className="mt-2 text-sm text-zinc-300">{d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
