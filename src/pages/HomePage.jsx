import { motion } from "framer-motion";
import { ArrowRight, Shirt, Sparkles } from "lucide-react";
import SectionHeader from "../components/layout/SectionHeader";
import { highlights, metrics } from "../data/siteContent";

export default function HomePage({ goToPage }) {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(244,63,94,0.10),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(249,115,22,0.10),_transparent_30%)]" />

        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-2 md:items-center md:py-24">
          <motion.div
            initial={{ opacity: 0, x: -18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-rose-200 bg-white/80 px-4 py-2 text-sm text-rose-600 shadow-sm backdrop-blur">
              <Sparkles size={16} />
              Produção de costura profissional
            </span>

            <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-neutral-900 md:text-6xl">
              Sua fábrica de costura com presença digital elegante e profissional.
            </h1>

            <p className="mt-5 max-w-xl text-base leading-7 text-neutral-600 md:text-lg">
              Um site pensado para transmitir confiança, destacar serviços e
              transformar visitas em pedidos de orçamento. Porque visual sem
              cuidado passa amadorismo em dois segundos. O cliente julga mesmo, e
              nem está errado.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
                onClick={() => goToPage("contato")}
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-neutral-900 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-neutral-300 transition hover:-translate-y-0.5"
              >
                Solicitar orçamento
                <ArrowRight size={16} />
              </button>
              <button
                onClick={() => goToPage("servicos")}
                className="rounded-2xl border border-neutral-300 bg-white/90 px-6 py-3 text-sm font-medium text-neutral-900 shadow-sm backdrop-blur transition hover:-translate-y-0.5"
              >
                Ver serviços
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative grid gap-4"
          >
            <div className="rounded-[2rem] bg-white/85 p-6 shadow-xl ring-1 ring-white/70 backdrop-blur">
              <div className="grid gap-4 sm:grid-cols-2">
                {metrics.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl bg-gradient-to-br from-neutral-50 to-rose-50 p-4 ring-1 ring-neutral-200"
                  >
                    <p className="text-2xl font-bold">{item.value}</p>
                    <p className="mt-1 text-sm text-neutral-600">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-[1.15fr_0.85fr]">
              <div className="rounded-[2rem] bg-neutral-900 p-8 text-white shadow-xl">
                <p className="text-sm uppercase tracking-[0.2em] text-neutral-300">
                  Destaque
                </p>
                <h2 className="mt-3 text-2xl font-semibold">
                  Confiança, clareza e organização
                </h2>
                <p className="mt-3 text-sm leading-6 text-neutral-300">
                  Estrutura ideal para uma fábrica que quer parecer séria, vender
                  melhor e abrir espaço para crescer com processos mais
                  inteligentes.
                </p>
              </div>

              <div className="rounded-[2rem] bg-gradient-to-br from-rose-500 via-fuchsia-500 to-orange-400 p-8 text-white shadow-xl">
                <Shirt size={28} />
                <h3 className="mt-6 text-xl font-semibold">Visual moderno</h3>
                <p className="mt-3 text-sm leading-6 text-white/90">
                  Um design com mais valor percebido, mais presença e menos cara
                  de protótipo abandonado num domingo à noite.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <SectionHeader
          eyebrow="Diferenciais"
          title="Por que um site bonito ajuda a fábrica a vender melhor"
          description="Além de passar confiança, um visual bem cuidado valoriza o serviço, melhora a percepção de qualidade e deixa a marca mais memorável. Sim, aparência importa. A internet é superficial desse jeito."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {highlights.map((item) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                whileHover={{ y: -6 }}
                className="rounded-[2rem] bg-white p-6 shadow-lg ring-1 ring-neutral-200"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-100 to-orange-100 text-rose-600">
                  <Icon size={22} />
                </div>
                <p className="mt-5 text-lg font-semibold tracking-tight">
                  {item.title}
                </p>
                <p className="mt-2 text-sm leading-6 text-neutral-600">
                  {item.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>
    </>
  );
}