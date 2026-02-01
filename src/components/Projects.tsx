"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

type Tag = "Construction" | "Interiors" | "Renovation" | "Design";

type ProjectItem = {
  src: string;
  title: string;
  tag: Tag;
  location: string;
};

export default function Projects() {
  const items: ProjectItem[] = useMemo(
    () => [
      { src: "/projects/ub1.jpeg", title: "Residential Construction", tag: "Construction", location: "Varanasi" },
      { src: "/projects/ub2.jpeg", title: "Interior Work", tag: "Interiors", location: "Varanasi" },
      { src: "/projects/ub5.jpeg", title: "Building Elevation", tag: "Design", location: "Varanasi" },
      { src: "/projects/ub6.jpeg", title: "Renovation Project", tag: "Renovation", location: "Varanasi" },
      { src: "/projects/ub7.jpeg", title: "Civil Work", tag: "Construction", location: "Varanasi" },
      { src: "/projects/ub8.jpeg", title: "Interior Finishing", tag: "Interiors", location: "Varanasi" },
      { src: "/projects/ub10.jpeg", title: "Structural Work", tag: "Construction", location: "Varanasi" },
      { src: "/projects/ub12.jpeg", title: "Renovation Detailing", tag: "Renovation", location: "Varanasi" },
      { src: "/projects/ub13.jpeg", title: "Interior Design", tag: "Interiors", location: "Varanasi" },
    ],
    []
  );

  const tags = ["All", "Construction", "Interiors", "Renovation", "Design"] as const;
  const [activeTag, setActiveTag] = useState<(typeof tags)[number]>("All");

  const filtered = useMemo(() => {
    if (activeTag === "All") return items;
    return items.filter((x) => x.tag === activeTag);
  }, [activeTag, items]);

  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const slides = useMemo(() => filtered.map((x) => ({ src: x.src })), [filtered]);

  return (
    <section id="projects" className="border-y border-white/10 bg-white/5">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Project Gallery</h2>
            <p className="mt-2 max-w-2xl text-zinc-300">
              Real construction & interior projects by Urban Builders & Enterprises.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {tags.map((t) => (
              <button
                key={t}
                onClick={() => setActiveTag(t)}
                className={`rounded-full px-4 py-2 text-xs font-semibold border transition ${
                  activeTag === t
                    ? "border-white/20 bg-white text-zinc-950"
                    : "border-white/10 bg-zinc-950/40 text-zinc-200 hover:bg-zinc-950"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {filtered.map((p, i) => (
            <button
              key={p.src}
              onClick={() => {
                setIndex(i);
                setOpen(true);
              }}
              className="group rounded-3xl border border-white/10 bg-zinc-950 p-3 hover:bg-zinc-900/40"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10">
                <Image
                  src={p.src}
                  alt={p.title}
                  fill
                  className="object-cover transition group-hover:scale-105"
                />
              </div>

              <p className="mt-3 text-sm font-semibold">{p.title}</p>
              <p className="text-xs text-zinc-400">{p.location}</p>
            </button>
          ))}
        </div>

        <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={slides}
          index={index}
          on={{ view: ({ index }) => setIndex(index) }}
        />
      </div>
    </section>
  );
}
