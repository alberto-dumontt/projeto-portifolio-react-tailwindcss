import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import aboutImg from "../assets/about.jpg";
import SectionHeader from "./SectionHeader";

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-24 border-b border-zinc-800/50">
      <SectionHeader index={1} title={`${t("about.title")} ${t("about.highlight")}`} />

      <div className="flex flex-col lg:flex-row gap-12 items-start">
        <motion.div
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex-shrink-0"
        >
          <img
            src={aboutImg}
            alt="About"
            width={240}
            height={240}
            className="rounded-lg object-cover border border-zinc-800 grayscale-[25%]"
          />
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-col gap-4"
        >
          {t("about.text")
            .split("\n\n")
            .map((paragraph, i) => (
              <p key={i} className="text-zinc-500 text-sm leading-relaxed font-light">
                {paragraph}
              </p>
            ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
