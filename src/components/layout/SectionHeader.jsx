import { motion } from "framer-motion";

export default function SectionHeader({ eyebrow, title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="max-w-3xl"
    >
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-rose-600">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-neutral-900 md:text-4xl">
        {title}
      </h2>
      {description ? <p className="mt-4 text-neutral-600">{description}</p> : null}
    </motion.div>
  );
}