import { SITE } from "@/components/site";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.14),transparent_55%)]" />

      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
        
        {/* LEFT SIDE */}
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Trusted Construction in Varanasi
          </p>

          <h1 className="mt-5 text-4xl font-extrabold tracking-tight md:text-5xl">
            Build Smart.
            <span className="block text-white/70">Build with Professionals.</span>
          </h1>

          <p className="mt-4 max-w-xl text-zinc-300">
            {SITE.name} provides Architecture, Interior Design, Construction with Material, 
            2D/3D Designs and Building Renovation with complete supervision and quality work.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-zinc-950 hover:opacity-90"
            >
              Get Free Quote
            </a>

            <a
              href={`https://wa.me/${SITE.whatsapp}`}
              className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-5 py-3 text-sm font-semibold text-emerald-200 hover:bg-emerald-500/15"
              target="_blank"
            >
              WhatsApp Now
            </a>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-3 text-center">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-xl font-bold">Quality</p>
              <p className="text-xs text-zinc-400">Material & Finish</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-xl font-bold">Design</p>
              <p className="text-xs text-zinc-400">2D & 3D</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-xl font-bold">Trust</p>
              <p className="text-xs text-zinc-400">Clear Process</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative">
          <div className="absolute -inset-8 rounded-[40px] bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.22),transparent_50%)] blur-2xl" />

          <div className="relative rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-glow">
            <div className="rounded-2xl border border-white/10 bg-zinc-950 p-5 space-y-3">

              <p className="text-sm font-semibold">Contact Details</p>

              <p className="text-sm text-zinc-300">
                📞 {SITE.phonePrimary}
              </p>

              <p className="text-sm text-zinc-300">
                📞 {SITE.phoneSecondary}
              </p>

              <p className="text-sm text-zinc-300">
                ✉️ {SITE.email}
              </p>

              <p className="text-xs text-zinc-400 mt-2">
                📍 {SITE.address}
              </p>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
