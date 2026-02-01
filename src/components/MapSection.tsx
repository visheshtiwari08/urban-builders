"use client";

import { motion } from "framer-motion";
import { SITE } from "@/components/site";

export default function MapSection() {
  return (
    <section id="location" className="border-y border-white/10 bg-white/5">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
          className="grid gap-6 md:grid-cols-2"
        >
          <div className="rounded-3xl border border-white/10 bg-zinc-950 p-7">
            <h2 className="text-3xl font-bold tracking-tight">Visit Our Office</h2>
            <p className="mt-2 text-zinc-300">
              Come meet us for site discussion, design planning, and quotation.
            </p>

            <div className="mt-6 space-y-2 text-sm text-zinc-200">
              <p className="text-zinc-400">Address</p>
              <p className="font-medium">{SITE.address}</p>

              <p className="mt-4 text-zinc-400">Hours</p>
              <p className="font-medium">{SITE.hours}</p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    SITE.address
                  )}`}
                  target="_blank"
                  className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-zinc-950 hover:opacity-90"
                >
                  Open in Google Maps
                </a>

                <a
                  href={`https://wa.me/${SITE.whatsapp}`}
                  target="_blank"
                  className="rounded-xl bg-emerald-500 px-4 py-2 text-sm font-semibold text-zinc-950 hover:opacity-90"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-zinc-950">
            <iframe
              title="Urban Builders Location"
              className="h-[360px] w-full md:h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://www.google.com/maps?q=${encodeURIComponent(
                SITE.address
              )}&output=embed`}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
