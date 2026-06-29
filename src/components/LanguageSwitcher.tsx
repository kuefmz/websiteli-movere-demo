import { useEffect, useState } from "react";
import type { Language } from "../content/siteContent";
import { siteContent } from "../content/siteContent";

const languages: Language[] = ["en", "it"];

function getInitialLanguage(): Language {
  if (typeof window === "undefined") return "en";
  const params = new URLSearchParams(window.location.search);
  const queryLanguage = params.get("lang");
  const storedLanguage = window.localStorage.getItem("movere-language");
  if (queryLanguage === "it" || queryLanguage === "en") return queryLanguage;
  if (storedLanguage === "it" || storedLanguage === "en") return storedLanguage;
  return "en";
}

function applyLanguage(language: Language) {
  const seo = siteContent[language].seo;
  document.documentElement.lang = language;
  document.documentElement.dataset.lang = language;
  document.title = seo.title;
  document.querySelector('meta[name="description"]')?.setAttribute("content", seo.description);
  document.querySelector('meta[property="og:title"]')?.setAttribute("content", seo.ogTitle);
  document.querySelector('meta[property="og:description"]')?.setAttribute("content", seo.ogDescription);
  document.querySelector('meta[property="og:locale"]')?.setAttribute("content", seo.locale);
  window.localStorage.setItem("movere-language", language);
  window.dispatchEvent(new CustomEvent("movere:language", { detail: language }));
}

export default function LanguageSwitcher() {
  const [activeLanguage, setActiveLanguage] = useState<Language>("en");

  useEffect(() => {
    const initialLanguage = getInitialLanguage();
    setActiveLanguage(initialLanguage);
    applyLanguage(initialLanguage);
  }, []);

  return (
    <div className="language-switcher" aria-label={siteContent[activeLanguage].footer.language}>
      {languages.map((language) => (
        <button
          key={language}
          type="button"
          className={language === activeLanguage ? "is-active" : ""}
          aria-pressed={language === activeLanguage}
          onClick={() => {
            setActiveLanguage(language);
            applyLanguage(language);
          }}
        >
          {language.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
