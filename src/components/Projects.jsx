import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import SectionHeader from "./SectionHeader";
import { PROJECT_IMAGES, PROJECT_REFS } from "../constants";

const isGithub = (url) => url.includes("github.com");

const Projects = () => {
  const { t } = useTranslation();
  const items = t("projects.items", { returnObjects: true });

  return (
    <section id="projects" className="py-24 border-b border-zinc-800/50">
      <SectionHeader index={4} title={t("projects.title")} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {items.map((project, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.35, delay: index * 0.08 }}
            viewport={{ once: true }}
            className="group flex flex-col bg-zinc-900/30 border border-zinc-800 rounded-lg overflow-hidden hover:border-zinc-600 transition-colors duration-300"
          >
            <div className="relative overflow-hidden h-40">
              {PROJECT_IMAGES[index] ? (
                <img
                  src={PROJECT_IMAGES[index]}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03] grayscale-[40%] group-hover:grayscale-0"
                />
              ) : (
                <div className="w-full h-full bg-zinc-900 flex items-center justify-center">
                  <span className="font-mono text-xs text-zinc-700 tracking-widest uppercase">live project</span>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/70 to-transparent" />
            </div>

            <div className="flex flex-col flex-1 p-5 gap-3">
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-medium text-zinc-200 text-sm leading-snug">{project.title}</h3>
                <a
                  href={PROJECT_REFS[index]}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-shrink-0 text-zinc-600 hover:text-zinc-300 transition-colors"
                  aria-label={isGithub(PROJECT_REFS[index]) ? "View on GitHub" : "Visit site"}
                >
                  {isGithub(PROJECT_REFS[index]) ? <FaGithub size={15} /> : <FaExternalLinkAlt size={13} />}
                </a>
              </div>

              <p className="text-zinc-600 text-sm leading-relaxed flex-1 font-light">{project.description}</p>

              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-[11px] px-2 py-0.5 rounded bg-zinc-900 text-zinc-500 border border-zinc-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={PROJECT_REFS[index]}
                target="_blank"
                rel="noreferrer"
                className="font-mono text-xs text-zinc-600 hover:text-zinc-400 transition-colors flex items-center gap-1.5 w-fit pt-1"
              >
                <FaExternalLinkAlt size={9} />
                {isGithub(PROJECT_REFS[index]) ? t("projects.view_code") : t("projects.view_site")}
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
