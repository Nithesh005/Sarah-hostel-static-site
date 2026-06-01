import { Phone, MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site.config";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export function StickyCta() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 flex border-t border-slate-200 bg-white p-2 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] md:hidden">
      <a
        href={`tel:${siteConfig.phone}`}
        className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-slate-900 py-3 text-sm font-semibold text-white"
      >
        <Phone className="h-4 w-4" />
        Call
      </a>
      <a
        href={getWhatsAppUrl()}
        className="ml-2 flex flex-1 items-center justify-center gap-2 rounded-lg bg-[#25D366] py-3 text-sm font-semibold text-white"
      >
        <MessageCircle className="h-4 w-4" />
        WhatsApp
      </a>
    </div>
  );
}
