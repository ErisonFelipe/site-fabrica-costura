import { motion } from "framer-motion";
import SectionHeader from "../components/layout/SectionHeader";
import { gallery } from "../data/siteContent";

export default function GalleryPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <SectionHeader
        eyebrow="Galeria"
        title="Espaço visual mais bonito para mostrar a produção"
        description="Fotos boas ajudam demais nesse tipo de negócio. Acabamento, tecido, padrão e organização comunicam valor antes mesmo da primeira mensagem."
      />

      <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {gallery.map((item, index) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: index * 0.05 }}
            whileHover={{ y: -6 }}
            className="overflow-hidden rounded-[2rem] bg-white shadow-lg ring-1 ring-neutral-200"
          >
            <div className="flex h-72 items-center justify-center bg-gradient-to-br from-neutral-200 via-rose-100 to-orange-100 text-sm text-neutral-500">
              Espaço para foto real
            </div>
            <div className="p-5">
              <p className="font-medium">{item}</p>
              <p className="mt-1 text-sm text-neutral-500">
                Exemplo de produção e acabamento
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}