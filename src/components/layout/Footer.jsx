import { Clock3, Mail, MapPin, MessageCircle, Phone, Scissors } from "lucide-react";
import { navItems, services } from "../../data/siteContent";

export default function Footer({ goToPage }) {
  const whatsappUrl =
    "https://wa.me/5511999999999?text=Olá! Gostaria de solicitar um orçamento para serviços de costura.";

  return (
    <footer className="mt-10 border-t border-white/60 bg-neutral-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-4">
          <div>
            <p className="bg-gradient-to-r from-rose-400 via-fuchsia-400 to-orange-300 bg-clip-text text-xl font-semibold tracking-tight text-transparent">
              Ateliê Costura & Produção
            </p>
            <p className="mt-4 max-w-sm text-sm leading-6 text-neutral-400">
              Soluções em costura com foco em qualidade, organização e atendimento
              profissional para marcas, empresas e pedidos sob medida.
            </p>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-green-500 px-5 py-3 text-sm font-medium text-white shadow-lg transition hover:scale-[1.02] hover:bg-green-600"
            >
              <MessageCircle size={18} />
              Falar no WhatsApp
            </a>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-400">
              Navegação
            </p>
            <div className="mt-5 flex flex-col gap-3 text-sm text-neutral-300">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => goToPage(item.id)}
                  className="text-left transition hover:text-white"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-400">
              Serviços
            </p>
            <div className="mt-5 flex flex-col gap-3 text-sm text-neutral-300">
              {services.slice(0, 4).map((service) => (
                <div key={service.title} className="flex items-start gap-2">
                  <Scissors size={15} className="mt-0.5 text-rose-400" />
                  <span>{service.title}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-400">
              Contato
            </p>

            <div className="mt-5 space-y-4 text-sm text-neutral-300">
              <div className="flex items-start gap-3">
                <Phone size={16} className="mt-0.5 text-rose-400" />
                <span>(11) 99999-9999</span>
              </div>

              <div className="flex items-start gap-3">
                <Mail size={16} className="mt-0.5 text-rose-400" />
                <span>contato@ateliecostura.com</span>
              </div>

              <div className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 text-rose-400" />
                <span>São Paulo - SP</span>
              </div>

              <div className="flex items-start gap-3">
                <Clock3 size={16} className="mt-0.5 text-rose-400" />
                <span>Segunda a Sexta, das 8h às 18h</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6">
          <div className="flex flex-col gap-3 text-sm text-neutral-500 md:flex-row md:items-center md:justify-between">
            <p>© 2026 Ateliê Costura & Produção. Todos os direitos reservados.</p>
            <p>Desenvolvido com foco em presença digital, pedidos e crescimento do negócio.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}