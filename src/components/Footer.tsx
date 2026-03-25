import { Link } from "react-router-dom";
import { Twitter, Github, Instagram } from "lucide-react";
import rippleLogo from "@/assets/ripple-logo.png";

const sections = [
  {
    title: "Продукт",
    links: [
      { label: "Возможности", href: "/features" },
      { label: "Безопасность", href: "/security" },
      { label: "Скачать", href: "/download" },
    ],
  },
  {
    title: "Компания",
    links: [
      { label: "О компании", href: "/about" },
      { label: "Блог", href: "/blog" },
    ],
  },
  {
    title: "Поддержка",
    links: [
      { label: "FAQ", href: "/support" },
      { label: "Обратная связь", href: "/support/contact" },
    ],
  },
  {
    title: "Правовые",
    links: [
      { label: "Политика конфиденциальности", href: "#" },
      { label: "Условия использования", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-dark-section text-dark-section-foreground">
      <div className="container mx-auto px-4 pt-14 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img src={rippleLogo} alt="Ripple" className="h-8 w-8 object-contain" />
              <span className="font-extrabold text-lg tracking-tight">Ripple</span>
            </Link>
            <p className="text-sm text-dark-section-foreground/60 leading-relaxed mb-5">
              Безопасный мессенджер нового поколения от NovaTech Solutions
            </p>
            {/* Social */}
            <div className="flex gap-3">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-dark-section-foreground/10 hover:bg-primary/30 flex items-center justify-center transition-colors">
                <Twitter size={16} />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-dark-section-foreground/10 hover:bg-primary/30 flex items-center justify-center transition-colors">
                <Github size={16} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-dark-section-foreground/10 hover:bg-primary/30 flex items-center justify-center transition-colors">
                <Instagram size={16} />
              </a>
            </div>
          </div>

          {/* Nav columns */}
          {sections.map((s) => (
            <div key={s.title}>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-dark-section-foreground/40 mb-4">
                {s.title}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {s.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      to={l.href}
                      className="text-sm text-dark-section-foreground/70 hover:text-dark-section-foreground transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-dark-section-foreground/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-dark-section-foreground/40">
          <p>© 2026 NovaTech Solutions. Все права защищены.</p>
          <p className="font-mono text-xs">getripple.app</p>
          
          {/*Not working yet*/}
          {/* <span className="text-xs border border-dark-section-foreground/20 rounded px-2 py-0.5">RU / EN</span> */}
        
        </div>
      </div>
    </footer>
  );
}
