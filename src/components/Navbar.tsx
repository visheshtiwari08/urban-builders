import { SITE } from "@/components/site";

const links = [
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Process", href: "#process" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="#" className="group flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-white/10 shadow-glow">
            <span className="text-sm font-black tracking-tight">UB</span>
          </span>
          <div className="leading-tight">
            <p className="text-sm font-semibold text-zinc-100">{SITE.name}</p>
            <p className="text-xs text-zinc-400">{SITE.citySEO}</p>
          </div>
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-zinc-300 hover:text-white">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            className="hidden rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-200 hover:bg-white/10 md:inline-flex"
            href={`tel:${SITE.phonePrimary}`}
          >
            Call
          </a>
          <a className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-zinc-950 hover:opacity-90" href="#contact">
            Get Quote
          </a>
        </div>
      </div>
    </header>
  );
}
