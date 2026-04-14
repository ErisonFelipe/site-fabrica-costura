import { BadgeCheck, Mail, MapPin, Phone } from "lucide-react";
import SectionHeader from "../layout/SectionHeader";

export default function ContactInfo() {
  return (
    <div>
      <SectionHeader
        eyebrow="Contato"
        title="Página pronta para captar pedidos com mais presença visual"
        description="Agora esse formulário já pode conversar com sua API no Render e gravar tudo no banco. Finalmente o site ficou bonito e útil ao mesmo tempo. Conceito avançado para a internet."
      />

      <div className="mt-8 rounded-[2rem] bg-gradient-to-br from-neutral-900 to-neutral-800 p-8 text-white shadow-xl">
        <h3 className="text-2xl font-semibold">Canais de atendimento</h3>
        <div className="mt-5 space-y-4 text-sm text-neutral-300">
          <div className="flex items-center gap-3">
            <Phone size={16} />
            <p>WhatsApp: (11) 99999-9999</p>
          </div>
          <div className="flex items-center gap-3">
            <Mail size={16} />
            <p>E-mail: contato@ateliecostura.com</p>
          </div>
          <div className="flex items-center gap-3">
            <BadgeCheck size={16} />
            <p>Horário: Segunda a Sexta, das 8h às 18h</p>
          </div>
          <div className="flex items-center gap-3">
            <MapPin size={16} />
            <p>São Paulo - SP</p>
          </div>
        </div>
      </div>
    </div>
  );
}