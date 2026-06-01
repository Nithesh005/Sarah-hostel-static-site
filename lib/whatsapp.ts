import { siteConfig } from "@/config/site.config";

export function getWhatsAppUrl(message?: string): string {
  const defaultMessage = `Hi, I'm interested in staying at ${siteConfig.name}. Please share availability and room options.`;
  const text = encodeURIComponent(message ?? defaultMessage);
  return `https://wa.me/${siteConfig.whatsapp}?text=${text}`;
}
