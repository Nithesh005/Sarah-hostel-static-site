"use client";

import Image from "next/image";
import { useState } from "react";
import { X } from "lucide-react";
import { siteConfig } from "@/config/site.config";

export function GalleryGrid({ limit }: { limit?: number }) {
  const images = limit
    ? siteConfig.gallery.slice(0, limit)
    : siteConfig.gallery;
  const [activeSrc, setActiveSrc] = useState<string | null>(null);

  const categories = [...new Set(siteConfig.gallery.map((g) => g.category))];
  const [filter, setFilter] = useState<string>("All");

  const filtered =
    filter === "All"
      ? images
      : images.filter((img) => img.category === filter);

  return (
    <>
      {!limit && (
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {["All", ...categories].map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setFilter(cat)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                filter === cat
                  ? "bg-teal-700 text-white"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((img) => (
          <button
            key={img.src}
            type="button"
            className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-slate-100 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-teal-600"
            onClick={() => setActiveSrc(img.src)}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <span className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 text-sm font-medium text-white">
              {img.category}
            </span>
          </button>
        ))}
      </div>

      {activeSrc !== null && (() => {
        const active = filtered.find((i) => i.src === activeSrc);
        if (!active) return null;
        return (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
          role="dialog"
          aria-modal
          onClick={() => setActiveSrc(null)}
          onKeyDown={(e) => e.key === "Escape" && setActiveSrc(null)}
        >
          <button
            type="button"
            className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
            aria-label="Close"
            onClick={() => setActiveSrc(null)}
          >
            <X className="h-6 w-6" />
          </button>
          <div
            className="relative h-[70vh] w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={active.src}
              alt={active.alt}
              fill
              className="object-contain"
              sizes="100vw"
            />
            <p className="mt-4 text-center text-sm text-slate-300">
              {active.alt}
            </p>
          </div>
        </div>
        );
      })()}
    </>
  );
}
