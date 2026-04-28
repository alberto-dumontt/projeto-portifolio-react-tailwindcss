import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const NAV_SECTIONS = ["about", "technologies", "experience", "projects", "certifications", "recommendations", "contact"];

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800/60" : ""
      }`}
    >
      <div className="container mx-auto max-w-5xl px-6 py-4 flex items-center justify-between">
        <a href="#" className="font-mono text-lg font-medium tracking-tight">
          <span className="text-indigo-400">AD</span>
          <span className="text-zinc-700">;</span>
        </a>

        <div className="hidden lg:flex items-center gap-5">
          {NAV_SECTIONS.map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className="font-mono text-xs text-zinc-500 hover:text-zinc-200 transition-colors"
            >
              {t(`nav.${section}`)}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://www.linkedin.com/in/alberto-sdumontt/"
            target="_blank"
            rel="noreferrer"
            className="text-zinc-500 hover:text-zinc-200 transition-colors"
          >
            <FaLinkedin size={17} />
          </a>
          <a
            href="https://github.com/alberto-dumontt"
            target="_blank"
            rel="noreferrer"
            className="text-zinc-500 hover:text-zinc-200 transition-colors"
          >
            <FaGithub size={17} />
          </a>

          <div className="flex items-center gap-1 font-mono text-xs border border-zinc-800 rounded px-2 py-1">
            <button
              onClick={() => i18n.changeLanguage("en")}
              className={`transition-colors ${
                i18n.language === "en" ? "text-indigo-400" : "text-zinc-600 hover:text-zinc-400"
              }`}
            >
              EN
            </button>
            <span className="text-zinc-800">|</span>
            <button
              onClick={() => i18n.changeLanguage("pt-BR")}
              className={`transition-colors ${
                i18n.language === "pt-BR" ? "text-indigo-400" : "text-zinc-600 hover:text-zinc-400"
              }`}
            >
              PT
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
