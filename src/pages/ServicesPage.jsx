import { motion } from "framer-motion";
import { Scissors } from "lucide-react";
import SectionHeader from "../components/layout/SectionHeader";
import { services } from "../data/siteContent";

export default function ServicesPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <SectionHeader
        eyebrow="Serviços"
        title="Soluções apresentadas de forma mais bonita e valorizada"
        description="Aqui os serviços ficam mais elegantes visualmente, com mais respiro, mais hierarquia e uma leitura bem mais agradável no celular. Como deveria ser desde o começo, francamente."
      />

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {services.map((service, index) => (
          <motion.article
            key={service.title}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: index * 0.05 }}
            whileHover={{ y: -6 }}
            className="rounded-[2rem] bg-white p-6 shadow-lg ring-1 ring-neutral-200"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-2xl font-semibold tracking-tight">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-neutral-600">
                  {service.description}
                </p>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-100 to-orange-100 text-rose-600">
                <Scissors size={20} />
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {service.details.map((detail) => (
                <span
                  key={detail}
                  className="rounded-full border border-rose-200 bg-rose-50 px-3 py-1 text-xs font-medium text-rose-700"
                >
                  {detail}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}