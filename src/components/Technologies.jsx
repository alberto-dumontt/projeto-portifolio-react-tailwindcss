import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { RiReactjsLine, RiNextjsLine } from "react-icons/ri";
import { FaJava, FaVuejs, FaNodeJs, FaPhp, FaPython, FaDocker, FaAws } from "react-icons/fa";
import { SiMysql, SiPostgresql, SiSpringboot, SiKubernetes, SiGrafana, SiDatadog, SiGitlab, SiGithubactions, SiClaude } from "react-icons/si";
import { TbBrandMongodb } from "react-icons/tb";
import SectionHeader from "./SectionHeader";

const CATEGORIES = [
  {
    label: "Backend & Languages",
    items: [
      { icon: FaJava,       color: "text-orange-500", label: "Java"        },
      { icon: SiSpringboot, color: "text-green-500",  label: "Spring Boot" },
      { icon: FaNodeJs,     color: "text-green-400",  label: "Node.js"     },
      { icon: FaPhp,        color: "text-indigo-400", label: "PHP"         },
      { icon: FaPython,     color: "text-yellow-400", label: "Python"      },
    ],
  },
  {
    label: "Frontend",
    items: [
      { icon: RiReactjsLine, color: "text-cyan-400",  label: "React"   },
      { icon: RiNextjsLine,  color: "text-zinc-200",  label: "Next.js" },
      { icon: FaVuejs,       color: "text-green-400", label: "Vue.js"  },
    ],
  },
  {
    label: "DevOps & Cloud",
    items: [
      { icon: FaDocker,        color: "text-cyan-500",  label: "Docker"         },
      { icon: SiKubernetes,    color: "text-blue-400",  label: "Kubernetes"     },
      { icon: FaAws,           color: "text-orange-400",label: "AWS"            },
      { icon: SiGitlab,        color: "text-orange-500",label: "GitLab"         },
      { icon: SiGithubactions, color: "text-zinc-300",  label: "GitHub Actions" },
    ],
  },
  {
    label: "Observability",
    items: [
      { icon: SiGrafana, color: "text-orange-400", label: "Grafana" },
      { icon: SiDatadog, color: "text-purple-400", label: "Datadog" },
    ],
  },
  {
    label: "Databases",
    items: [
      { icon: SiPostgresql,   color: "text-blue-400",  label: "PostgreSQL" },
      { icon: SiMysql,        color: "text-blue-400",  label: "MySQL"      },
      { icon: TbBrandMongodb, color: "text-green-600", label: "MongoDB"    },
    ],
  },
  {
    label: "AI",
    items: [
      { icon: SiClaude, color: "text-amber-400", label: "Claude Code" },
    ],
  },
];

const Technologies = () => {
  const { t } = useTranslation();

  return (
    <section id="technologies" className="py-24 border-b border-zinc-800/50">
      <SectionHeader index={2} title={t("technologies.title")} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {CATEGORIES.map((category, i) => (
          <motion.div
            key={category.label}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.35, delay: i * 0.05 }}
            viewport={{ once: true }}
            className="border border-zinc-800 rounded-lg p-5 bg-zinc-900/20"
          >
            <p className="font-mono text-[10px] text-zinc-600 uppercase tracking-widest mb-4">
              {category.label}
            </p>
            <div className="flex flex-col gap-3">
              {category.items.map(({ icon: Icon, color, label }) => (
                <div key={label} className="flex items-center gap-3 text-zinc-500">
                  <Icon className={`text-base flex-shrink-0 ${color}`} />
                  <span className="text-sm font-light">{label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Technologies;
