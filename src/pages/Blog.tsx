import { Link } from "react-router-dom";
import { Calendar, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WaveDivider from "@/components/WaveDivider";

const posts = [
  {
    id: 1,
    title: "Ripple 1.0: Что нового в первом стабильном релизе",
    date: "10 марта 2026",
    category: "Обновления",
    lead: "Мы рады представить первый стабильный релиз Ripple. В этой версии мы сосредоточились на стабильности, скорости и безопасности.",
    readTime: "4 мин",
  },
  {
    id: 2,
    title: "Как работает сквозное шифрование в Ripple",
    date: "1 марта 2026",
    category: "Безопасность",
    lead: "Разбираем технологию E2E-шифрования простым языком: от обмена ключами до расшифровки сообщений на устройстве получателя.",
    readTime: "7 мин",
  },
  {
    id: 3,
    title: "Почему мы выбрали открытый исходный код",
    date: "20 февраля 2026",
    category: "О компании",
    lead: "Прозрачность — основа доверия. Рассказываем, почему открытый код важен для мессенджера и что это даёт нашим пользователям.",
    readTime: "5 мин",
  },
  {
    id: 4,
    title: "10 советов по безопасному общению в 2026 году",
    date: "14 февраля 2026",
    category: "Советы",
    lead: "Практические рекомендации по защите вашей цифровой переписки: от выбора мессенджера до настройки двухфакторной аутентификации.",
    readTime: "6 мин",
  },
  {
    id: 5,
    title: "Ripple на Linux: полное руководство по установке",
    date: "5 февраля 2026",
    category: "Гайды",
    lead: "Пошаговая инструкция по установке Ripple на популярных дистрибутивах Linux: Ubuntu, Fedora, Arch Linux и других.",
    readTime: "8 мин",
  },
  {
    id: 6,
    title: "Групповые звонки в Ripple: как они работают",
    date: "28 января 2026",
    category: "Возможности",
    lead: "Подробный разбор архитектуры групповых звонков: как Ripple обеспечивает шифрование при звонках с несколькими участниками.",
    readTime: "5 мин",
  },
];

const categoryColors: Record<string, string> = {
  "Обновления": "bg-primary/10 text-primary",
  "Безопасность": "bg-accent/15 text-accent",
  "О компании": "bg-blue-bell/10 text-blue-bell",
  "Советы": "bg-primary/10 text-primary",
  "Гайды": "bg-accent/15 text-accent",
  "Возможности": "bg-blue-bell/10 text-blue-bell",
};

export default function Blog() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{ background: "var(--gradient-hero)" }}
          aria-hidden
        />
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-5xl font-extrabold mb-4">
            Блог <span className="text-gradient">Ripple</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-lg mx-auto">
            Новости, обновления продукта и статьи о безопасной коммуникации
          </p>
        </div>
      </section>

      <WaveDivider fillClass="fill-light-surface" />

      {/* Posts */}
      <section className="bg-light-surface py-20">
        <div className="container mx-auto px-4">
          {/* Featured */}
          <div className="bg-card rounded-3xl border border-border shadow-ripple overflow-hidden mb-10">
            <div
              className="h-52"
              style={{ background: "var(--gradient-cta)", opacity: 0.8 }}
            />
            <div className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className={`text-xs font-semibold px-3 py-1 rounded-full ${categoryColors[posts[0].category]}`}>
                  {posts[0].category}
                </span>
                <span className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Calendar size={12} /> {posts[0].date}
                </span>
                <span className="text-xs text-muted-foreground">{posts[0].readTime} чтения</span>
              </div>
              <h2 className="text-2xl font-extrabold mb-3">{posts[0].title}</h2>
              <p className="text-muted-foreground leading-relaxed mb-5">{posts[0].lead}</p>
              <a href="#" className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all">
                Читать статью <ArrowRight size={15} />
              </a>
            </div>
          </div>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.slice(1).map((post) => (
              <div
                key={post.id}
                className="bg-card rounded-2xl border border-border shadow-card-ripple hover:shadow-ripple hover:-translate-y-1 transition-all duration-300 flex flex-col overflow-hidden"
              >
                <div
                  className="h-28"
                  style={{ background: "var(--gradient-hero)" }}
                />
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${categoryColors[post.category]}`}>
                      {post.category}
                    </span>
                    <span className="text-xs text-muted-foreground">{post.readTime} чтения</span>
                  </div>
                  <h3 className="font-bold text-base mb-2 leading-tight">{post.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1">{post.lead}</p>
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar size={11} /> {post.date}
                    </span>
                    <a href="#" className="text-primary text-xs font-semibold hover:underline">
                      Читать →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WaveDivider flip fillClass="fill-light-surface" />

      {/* Subscribe */}
      <section className="py-20 bg-background text-center">
        <div className="container mx-auto px-4 max-w-lg">
          <h2 className="text-3xl font-extrabold mb-3">Подпишитесь на новости</h2>
          <p className="text-muted-foreground mb-7">
            Получайте уведомления о важных обновлениях и новых статьях
          </p>
          <form className="flex gap-3 max-w-sm mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 border border-input rounded-full px-5 py-3 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary/40"
            />
            <button
              type="submit"
              className="ripple-btn gradient-cta text-primary-foreground font-bold px-6 py-3 rounded-full shadow-ripple hover:scale-105 transition-transform"
            >
              Подписаться
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}
