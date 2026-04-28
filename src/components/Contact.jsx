import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaWhatsapp, FaEnvelope, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import SectionHeader from "./SectionHeader";
import { SOCIAL_LINKS } from "../constants";

const Contact = () => {
  const { t } = useTranslation();

  const contactItems = [
    { icon: FaMapMarkerAlt, label: t("contact.address"), href: null },
    { icon: FaWhatsapp,     label: t("contact.phone"),   href: SOCIAL_LINKS.whatsapp },
    { icon: FaEnvelope,     label: t("contact.email"),   href: SOCIAL_LINKS.email },
  ];

  const socialItems = [
    { icon: FaLinkedin,  href: SOCIAL_LINKS.linkedin,  label: "LinkedIn"  },
    { icon: FaGithub,    href: SOCIAL_LINKS.github,    label: "GitHub"    },
    { icon: FaInstagram, href: SOCIAL_LINKS.instagram, label: "Instagram" },
  ];

  return (
    <section id="contact" className="py-24 pb-32">
      <SectionHeader index={7} title={t("contact.title")} />

      <div className="flex flex-col items-center text-center gap-8">
        <motion.p
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="text-zinc-600 text-sm font-light max-w-md"
        >
          {t("contact.subtitle")}
        </motion.p>

        <div className="flex flex-col gap-2 w-full max-w-xs">
          {contactItems.map(({ icon: Icon, label, href }, i) => (
            <motion.div
              key={i}
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ duration: 0.35, delay: i * 0.07 }}
              viewport={{ once: true }}
            >
              {href ? (
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 px-5 py-3 bg-zinc-900/40 border border-zinc-800 rounded-lg hover:border-zinc-600 hover:text-zinc-200 transition-colors"
                >
                  <Icon className="text-zinc-600 flex-shrink-0" size={13} />
                  <span className="font-mono text-xs text-zinc-500">{label}</span>
                </a>
              ) : (
                <div className="flex items-center gap-3 px-5 py-3 bg-zinc-900/40 border border-zinc-800 rounded-lg">
                  <Icon className="text-zinc-600 flex-shrink-0" size={13} />
                  <span className="font-mono text-xs text-zinc-500">{label}</span>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 0.4, delay: 0.25 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 pt-2"
        >
          {socialItems.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="p-2.5 border border-zinc-800 rounded-lg text-zinc-600 hover:text-zinc-200 hover:border-zinc-600 transition-colors"
            >
              <Icon size={15} />
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
