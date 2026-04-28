import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { FaAws } from "react-icons/fa";
import { SiOracle, SiClaude, SiDatadog } from "react-icons/si";
import { TbBrandAzure } from "react-icons/tb";
import { HiOutlineBadgeCheck } from "react-icons/hi";
import SectionHeader from "./SectionHeader";

const PROVIDER_ICONS = {
  aws:       { icon: FaAws,        color: "text-orange-400" },
  oracle:    { icon: SiOracle,     color: "text-red-500"    },
  anthropic: { icon: SiClaude,     color: "text-amber-400"  },
  datadog:   { icon: SiDatadog,    color: "text-purple-400" },
  azure:     { icon: TbBrandAzure, color: "text-blue-400"   },
};

const getProviderFromIssuer = (issuer) => {
  const lower = issuer.toLowerCase();
  if (lower.includes("amazon") || lower.includes("aws")) return "aws";
  if (lower.includes("oracle"))                           return "oracle";
  if (lower.includes("anthropic"))                        return "anthropic";
  if (lower.includes("datadog"))                          return "datadog";
  if (lower.includes("azure") || lower.includes("microsoft")) return "azure";
  return null;
};

const Certifications = () => {
  const { t } = useTranslation();
  const items = t("certifications.items", { returnObjects: true });

  return (
    <section id="certifications" className="py-24 border-b border-zinc-800/50">
      <SectionHeader index={5} title={t("certifications.title")} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {items.map((cert, index) => {
          const providerKey = getProviderFromIssuer(cert.issuer);
          const ProviderIcon = providerKey ? PROVIDER_ICONS[providerKey].icon : null;
          const iconColor = providerKey ? PROVIDER_ICONS[providerKey].color : "text-zinc-500";

          return (
            <motion.div
              key={index}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.35, delay: index * 0.04 }}
              viewport={{ once: true }}
              className="flex flex-col bg-zinc-900/30 border border-zinc-800 rounded-lg p-5 hover:border-zinc-600 transition-colors duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-2 bg-zinc-800/60 rounded">
                  {ProviderIcon ? (
                    <ProviderIcon className={`text-lg ${iconColor}`} />
                  ) : (
                    <HiOutlineBadgeCheck className="text-lg text-zinc-500" />
                  )}
                </div>
                <span className="font-mono text-[11px] text-zinc-700">{cert.date}</span>
              </div>

              <h3 className="font-medium text-zinc-300 text-sm leading-snug mb-1">
                {cert.name}
              </h3>
              <p className="font-mono text-[11px] text-zinc-600 mb-4">{cert.issuer}</p>

              {cert.credentialUrl && cert.credentialUrl !== "#" && (
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono text-xs text-zinc-600 hover:text-zinc-300 transition-colors mt-auto w-fit"
                >
                  {t("certifications.view_credential")}
                </a>
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Certifications;
