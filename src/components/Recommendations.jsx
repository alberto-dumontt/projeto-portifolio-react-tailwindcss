import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { FaLinkedin, FaQuoteLeft } from "react-icons/fa";
import SectionHeader from "./SectionHeader";

const Recommendations = () => {
  const { t } = useTranslation();
  const items = t("recommendations.items", { returnObjects: true });

  return (
    <section id="recommendations" className="py-24 border-b border-zinc-800/50">
      <SectionHeader index={6} title={t("recommendations.title")} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {items.map((rec, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.35, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col bg-zinc-900/30 border border-zinc-800 rounded-lg p-6 hover:border-zinc-600 transition-colors duration-300"
          >
            <FaQuoteLeft className="text-zinc-800 text-xl mb-4" />

            <p className="text-zinc-500 text-sm leading-relaxed font-light flex-1">
              {rec.text}
            </p>

            <div className="flex items-center gap-3 mt-6 pt-4 border-t border-zinc-800/60">
              <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center flex-shrink-0">
                <span className="text-zinc-400 font-medium text-xs">{rec.name[0]}</span>
              </div>
              <div>
                <p className="text-zinc-300 text-sm font-medium leading-none mb-1">{rec.name}</p>
                <p className="font-mono text-[11px] text-zinc-500">{rec.role}</p>
                <p className="font-mono text-[11px] text-zinc-700 mt-0.5">{rec.date}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Recommendations;
