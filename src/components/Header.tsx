import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Download } from "lucide-react";
import rippleLogo from "@/assets/ripple-logo.png";

const navLinks = [
  { label: "Возможности", href: "/features" },
  { label: "Безопасность", href: "/security" },
  { label: "Поддержка", href: "/support" },
  { label: "Блог", href: "/blog" },
  { label: "О компании", href: "/about" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Проверяем, находится ли пользователь на странице "Безопасность"
  const isSecurityPage = location.pathname === "/security";

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  // Определяем цвет текста в зависимости от прокрутки и текущей страницы
  const getTextColorClass = () => {
    if (scrolled) return "text-foreground"; // Темный текст на светлой подложке при скролле
    if (isSecurityPage) return "text-white"; // Белый текст на темном фоне страницы Security
    return "text-foreground"; // Стандартный темный текст
  };

  const getNavLinkClass = (href: string) => {
    const isActive = location.pathname === href;
    if (isActive) return "text-primary bg-primary/8";
    
    if (scrolled) return "text-muted-foreground hover:text-foreground hover:bg-muted";
    if (isSecurityPage) return "text-white/70 hover:text-white hover:bg-white/10";
    
    return "text-muted-foreground hover:text-foreground hover:bg-muted";
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md shadow-ripple border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 shrink-0">
          <img src={rippleLogo} alt="Ripple" className="h-9 w-9 object-contain" />
          <span className={`font-extrabold text-xl tracking-tight transition-colors duration-300 ${getTextColorClass()}`}>
            Ripple
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`px-3.5 py-1.5 rounded-lg text-sm font-medium transition-colors ${getNavLinkClass(link.href)}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA + language */}
        <div className="hidden md:flex items-center gap-3">
          
          {/*Not working yet*/}
          
          {/*
          <span className={`text-xs border rounded-md px-2 py-1 cursor-default select-none transition-colors ${
            scrolled || !isSecurityPage ? "text-muted-foreground border-border" : "text-white/50 border-white/20"
          }`}>
            RU / EN
          </span>
          */}


          <Link
            to="/download"
            className="ripple-btn inline-flex items-center gap-1.5 gradient-cta text-primary-foreground text-sm font-semibold px-5 py-2 rounded-full shadow-ripple transition-transform hover:scale-105"
          >
            <Download size={15} />
            Скачать
          </Link>
        </div>

        {/* Burger */}
        <button
          onClick={() => setOpen((p) => !p)}
          className={`md:hidden p-2 rounded-lg transition-colors ${
            scrolled || !isSecurityPage 
              ? "text-muted-foreground hover:text-foreground hover:bg-muted" 
              : "text-white hover:bg-white/10"
          }`}
          aria-label="Меню"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-border px-4 pb-5 pt-2 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                location.pathname === link.href
                  ? "text-primary bg-primary/8"
                  : "text-foreground hover:bg-muted"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/download"
            className="ripple-btn mt-3 inline-flex items-center justify-center gap-2 gradient-cta text-primary-foreground text-sm font-semibold px-5 py-2.5 rounded-full shadow-ripple"
          >
            <Download size={15} />
            Скачать
          </Link>
        </div>
      )}
    </header>
  );
}