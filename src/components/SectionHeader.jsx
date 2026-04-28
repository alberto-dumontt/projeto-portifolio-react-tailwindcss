import { motion } from "framer-motion";

const SectionHeader = ({ index, title }) => {
  return (
    <motion.div
      whileInView={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className="flex items-center gap-4 mb-14"
    >
      <span className="font-mono text-zinc-700 text-xs select-none">
        {String(index).padStart(2, "0")}.
      </span>
      <h2 className="text-lg font-medium text-zinc-200 tracking-tight">{title}</h2>
      <div className="h-px bg-zinc-800 flex-1" />
    </motion.div>
  );
};

export default SectionHeader;
