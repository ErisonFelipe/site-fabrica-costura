import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const phone = "5511999999999";
  const message =
    "Olá! Gostaria de solicitar um orçamento para serviços de costura.";
  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-3 rounded-full bg-green-500 px-5 py-3 text-white shadow-2xl transition hover:scale-105 hover:bg-green-600"
    >
      <MessageCircle size={22} />
      <span className="hidden text-sm font-medium sm:inline">
        Falar no WhatsApp
      </span>
    </a>
  );
}