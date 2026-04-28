import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import profilePic from "../assets/albertoDumontt.jpg";
import { CV_LINKS } from "../constants";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="min-h-[90vh] flex items-center py-16 border-b border-zinc-800/50">
      <div className="flex flex-col-reverse lg:flex-row items-center gap-16 w-full">
        <div className="flex-1 flex flex-col gap-6">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-mono text-indigo-400 text-xs tracking-widest uppercase"
          >
            {t("hero.greeting")}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-5xl lg:text-6xl font-semibold text-zinc-100 tracking-tight leading-none"
          >
            Alberto Dumontt
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="flex items-center gap-3"
          >
            <span className="w-5 h-px bg-zinc-700" />
            <span className="font-mono text-zinc-500 text-sm tracking-wide">
              {t("hero.role")}
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-zinc-500 text-sm leading-relaxed max-w-lg font-light"
          >
            {t("hero.description")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.65 }}
            className="flex flex-wrap gap-3 pt-2"
          >
            <a
              href={CV_LINKS.en}
              target="_blank"
              rel="noreferrer"
              className="font-mono text-xs px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded transition-colors"
            >
              {t("hero.cv_en")}
            </a>
            <a
              href={CV_LINKS.ptBr}
              target="_blank"
              rel="noreferrer"
              className="font-mono text-xs px-5 py-2.5 border border-zinc-700 hover:border-zinc-500 text-zinc-400 hover:text-zinc-200 rounded transition-colors"
            >
              {t("hero.cv_pt")}
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex-shrink-0"
        >
          <img
            src={profilePic}
            alt="Alberto Dumontt"
            width={280}
            height={280}
            className="rounded-lg object-cover border border-zinc-800 grayscale-[20%]"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
