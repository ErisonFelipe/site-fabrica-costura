import { motion } from "framer-motion";
import SectionHeader from "../components/layout/SectionHeader";
import { testimonials } from "../data/siteContent";

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <SectionHeader
        eyebrow="Sobre"
        title="Uma apresentação mais humana e profissional da fábrica"
        description="Essa página reforça confiança, mostra os valores do negócio e ajuda a marca a parecer mais premium. Porque cliente gosta de sentir que está contratando alguém organizado e não um chute coletivo."
      />

      <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[2rem] bg-white p-8 shadow-lg ring-1 ring-neutral-200">
          <h3 className="text-2xl font-semibold">Quem somos</h3>
          <p className="mt-4 leading-7 text-neutral-600">
            Somos uma fábrica de costura focada em qualidade, compromisso com
            prazos e atenção aos detalhes em cada etapa da produção. Atendemos
            pedidos sob demanda, produção em lote, uniformes e desenvolvimento de
            peças piloto para diferentes tipos de cliente.
          </p>
          <p className="mt-4 leading-7 text-neutral-600">
            Nosso objetivo é entregar peças com acabamento profissional,
            comunicação clara e um processo organizado do início ao fim.
          </p>
        </div>

        <div className="grid gap-6">
          <div className="rounded-[2rem] bg-neutral-900 p-8 text-white shadow-xl">
            <h3 className="text-2xl font-semibold">Valores</h3>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-neutral-300">
              <li>• Qualidade em cada peça</li>
              <li>• Transparência no atendimento</li>
              <li>• Compromisso com prazo</li>
              <li>• Organização na produção</li>
            </ul>
          </div>

          <div className="rounded-[2rem] bg-white p-8 shadow-lg ring-1 ring-neutral-200">
            <h3 className="text-2xl font-semibold">Para quem atendemos</h3>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-neutral-600">
              <li>• Pequenas marcas de roupa</li>
              <li>• Empresas e equipes</li>
              <li>• Escolas e eventos</li>
              <li>• Clientes com produção personalizada</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {testimonials.map((item) => (
          <motion.article
            key={item.name}
            whileHover={{ y: -6 }}
            className="rounded-[2rem] bg-white p-6 shadow-lg ring-1 ring-neutral-200"
          >
            <p className="text-sm leading-6 text-neutral-600">“{item.text}”</p>
            <p className="mt-4 font-semibold">{item.name}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}