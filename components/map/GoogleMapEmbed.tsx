import { siteConfig } from "@/config/site.config";
import { MapPin } from "lucide-react";

export function GoogleMapEmbed({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
        <iframe
          title={`${siteConfig.name} location on Google Maps`}
          src={siteConfig.map.embedUrl}
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full"
        />
      </div>
      <a
        href={siteConfig.map.directionsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-purple-700 hover:text-purple-800"
      >
        <MapPin className="h-4 w-4" />
        Open in Google Maps for directions
      </a>
    </div>
  );
}
