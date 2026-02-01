"use client";

import { SITE } from "@/components/site";

export default function FloatingCTA() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
      <a
        href={`tel:${SITE.phonePrimary.replace(/\s/g, "")}`}
        className="flex items-center justify-center rounded-2xl border border-white/10 bg-white px-4 py-3 text-sm font-semibold text-zinc-950 shadow-lg hover:opacity-90"
      >
        📞 Call Now
      </a>

      <a
        href={`https://wa.me/${SITE.whatsapp}`}
        target="_blank"
        className="flex items-center justify-center rounded-2xl bg-emerald-500 px-4 py-3 text-sm font-semibold text-zinc-950 shadow-lg hover:opacity-90"
      >
        💬 WhatsApp
      </a>
    </div>
  );
}
