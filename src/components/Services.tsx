const services = [
  {
    title: "Architecture",
    desc: "Professional architectural planning and drawings for residential and commercial buildings.",
  },
  {
    title: "Interior Design",
    desc: "Modern interior design with smart layouts and premium finishing.",
  },
  {
    title: "Construction With Material",
    desc: "Complete construction service including material, labour and supervision.",
  },
  {
    title: "Sale & Purchase of Property",
    desc: "Assistance in buying and selling land, duplex, flats and houses.",
  },
  {
    title: "2D & 3D Designs",
    desc: "2D working drawings and realistic 3D design visualization before construction.",
  },
  {
    title: "Building Renovation",
    desc: "Repair, remodeling, waterproofing and renovation services.",
  },
];

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-4 py-16 md:py-24">
      <h2 className="text-3xl font-bold tracking-tight">Our Services</h2>
      <p className="mt-2 max-w-2xl text-zinc-300">
        Urban Builders & Enterprises provides complete construction and design solutions in Varanasi.
      </p>

      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {services.map((s) => (
          <div
            key={s.title}
            className="rounded-3xl border border-white/10 bg-white/5 p-6 hover:bg-white/10"
          >
            <p className="text-base font-semibold">{s.title}</p>
            <p className="mt-2 text-sm text-zinc-300">{s.desc}</p>

            <div className="mt-5 h-px bg-white/10" />

            <ul className="mt-4 space-y-2 text-sm text-zinc-400">
              <li>• Free site visit</li>
              <li>• Quality materials</li>
              <li>• On-time execution</li>
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
