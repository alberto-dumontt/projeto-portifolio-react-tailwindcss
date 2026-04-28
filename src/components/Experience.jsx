import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const Experience = () => {
  const { t } = useTranslation();
  const items = t("experience.items", { returnObjects: true });

  return (
    <section id="experience" className="py-24 border-b border-zinc-800/50">
      <SectionHeader index={3} title={t("experience.title")} />

      <div className="relative">
        <div className="absolute left-0 top-2 bottom-2 w-px bg-zinc-800" />

        {items.map((item, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 0.4, delay: index * 0.04 }}
            viewport={{ once: true }}
            className="relative pl-8 pb-12 last:pb-0"
          >
            <div className="absolute left-[-3px] top-1.5 w-1.5 h-1.5 rounded-full bg-zinc-700 ring-4 ring-zinc-950" />

            <div className="flex flex-col lg:flex-row lg:items-start gap-2 lg:gap-8">
              <span className="font-mono text-xs text-zinc-600 lg:w-40 flex-shrink-0 pt-0.5">
                {item.year}
              </span>

              <div className="flex-1">
                <h3 className="font-medium text-zinc-200 text-sm">
                  {item.role}
                  <span className="text-zinc-600 font-normal"> — {item.company}</span>
                </h3>
                <p className="mt-2 text-zinc-600 text-sm leading-relaxed font-light">{item.description}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-[11px] px-2 py-0.5 rounded bg-zinc-900 text-zinc-500 border border-zinc-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
