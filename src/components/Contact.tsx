"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { SITE } from "@/components/site";

export default function Contact() {
  const services = useMemo(
    () => [
      "Architecture",
      "Interior Design",
      "Construction With Material",
      "2D & 3D Designs",
      "Building Renovation",
      "Sale & Purchase of Property",
    ],
    []
  );

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: services[0],
    message: "",
  });

  function set<K extends keyof typeof form>(k: K, v: (typeof form)[K]) {
    setForm((p) => ({ ...p, [k]: v }));
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setStatus(null);
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (!res.ok || !data?.ok) throw new Error(data?.error || "Submit failed");

      // Open WhatsApp after successful email
      const text =
        `Hello ${SITE.name}, I want a quote.\n\n` +
        `Name: ${form.name}\n` +
        `Phone: ${form.phone}\n` +
        (form.email ? `Email: ${form.email}\n` : "") +
        `Service: ${form.service}\n` +
        `Message: ${form.message}`;

      window.open(`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`, "_blank");

      setStatus("✅ Submitted successfully! We will contact you soon.");
      setForm({ name: "", phone: "", email: "", service: services[0], message: "" });
    } catch (err: any) {
      setStatus(`❌ ${err?.message || "Something went wrong"}`);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.45 }}
        className="grid gap-6 md:grid-cols-2"
      >
        <div className="rounded-3xl border border-white/10 bg-white/5 p-7">
          <h2 className="text-3xl font-bold tracking-tight">Get a Free Quote</h2>
          <p className="mt-2 text-zinc-300">
            Send details and get estimation quickly.
          </p>

          <div className="mt-6 space-y-2 text-sm text-zinc-200">
            <p>📍 {SITE.address}</p>
            <p>📞 {SITE.phonePrimary} / {SITE.phoneSecondary}</p>
            <p>✉️ {SITE.email}</p>
            <p className="text-zinc-400">🕒 {SITE.hours}</p>
          </div>

          <a
            href={`https://wa.me/${SITE.whatsapp}`}
            target="_blank"
            className="mt-7 inline-flex rounded-xl bg-emerald-500 px-4 py-2 text-sm font-semibold text-zinc-950 hover:opacity-90"
          >
            WhatsApp Now
          </a>
        </div>

        <div className="rounded-3xl border border-white/10 bg-zinc-950 p-7">
          <form onSubmit={submit} className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <input
                value={form.name}
                onChange={(e) => set("name", e.target.value)}
                placeholder="Name *"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none focus:border-white/20"
                required
              />
              <input
                value={form.phone}
                onChange={(e) => set("phone", e.target.value)}
                placeholder="Phone *"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none focus:border-white/20"
                required
              />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <input
                value={form.email}
                onChange={(e) => set("email", e.target.value)}
                placeholder="Email (optional)"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none focus:border-white/20"
              />
              <select
                value={form.service}
                onChange={(e) => set("service", e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none focus:border-white/20"
              >
                {services.map((s) => (
                  <option key={s} value={s} className="bg-zinc-950">
                    {s}
                  </option>
                ))}
              </select>
            </div>

            <textarea
              value={form.message}
              onChange={(e) => set("message", e.target.value)}
              placeholder="Project details *"
              className="min-h-[130px] w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none focus:border-white/20"
              required
            />

            <button
              disabled={loading}
              className="w-full rounded-xl bg-white px-5 py-3 text-sm font-semibold text-zinc-950 hover:opacity-90 disabled:opacity-60"
            >
              {loading ? "Submitting..." : "Submit & WhatsApp"}
            </button>

            {status && <p className="text-sm text-zinc-300">{status}</p>}
          </form>
        </div>
      </motion.div>
    </section>
  );
}
