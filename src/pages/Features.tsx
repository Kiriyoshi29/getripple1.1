import { Link } from "react-router-dom";
import { MessageSquare, Phone, Users, FileText, Mic, Clock, Smile, Globe, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WaveDivider from "@/components/WaveDivider";

const features = [
  {
    icon: <MessageSquare size={32} />,
    title: "Мгновенные сообщения",
    desc: "Текст, форматирование (жирный, курсив, код), ответы на сообщения, реакции и пины. Всё что нужно для продуктивного общения.",
    color: "from-primary to-blue-bell",
  },
  {
    icon: <Phone size={32} />,
    title: "Голосовые и видеозвонки",
    desc: "HD-качество звука и видео с сквозным шифрованием в реальном времени. Групповые звонки до 50 участников.",
    color: "from-blue-bell to-accent",
  },
  {
    icon: <Users size={32} />,
    title: "Групповые чаты",
    desc: "Создавайте группы с гибкими настройками: роли и права, список участников, упоминания, медиагалерея.",
    color: "from-accent to-primary",
  },
  {
    icon: <FileText size={32} />,
    title: "Обмен файлами и медиа",
    desc: "Отправляйте документы до 2 ГБ, фото в оригинальном качестве, видео и GIF-анимации прямо в чате.",
    color: "from-primary to-accent",
  },
  {
    icon: <Mic size={32} />,
    title: "Голосовые сообщения",
    desc: "Записывайте и отправляйте голосовые сообщения с визуализацией волны. Слушайте в любом темпе.",
    color: "from-blue-bell to-primary",
  },
  {
    icon: <Clock size={32} />,
    title: "Самоуничтожающиеся сообщения",
    desc: "Установите таймер на сообщение или весь чат — оно автоматически исчезнет через заданное время.",
    color: "from-accent to-blue-bell",
  },
  {
    icon: <Smile size={32} />,
    title: "Стикеры и реакции",
    desc: "Богатая библиотека стикеров и эмодзи-реакций. Создавайте собственные наборы для вашего сообщества.",
    color: "from-primary to-blue-bell",
  },
  {
    icon: <Globe size={32} />,
    title: "Мультиплатформенность",
    desc: "iOS, Android, Windows, macOS, Linux — все устройства синхронизированы. История сообщений всегда доступна.",
    color: "from-blue-bell to-accent",
  },
];

export default function Features() {
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
          <span className="inline-flex items-center gap-2 bg-primary/10 text-primary text-xs font-semibold px-3.5 py-1.5 rounded-full border border-primary/20 mb-6">
            ✦ Возможности
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-5">
            Всё для{" "}
            <span className="text-gradient">идеального общения</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto leading-relaxed">
            Ripple объединяет все необходимые инструменты коммуникации в одном минималистичном приложении без рекламы.
          </p>
        </div>
      </section>

      <WaveDivider fillClass="fill-light-surface" />

      {/* Features grid */}
      <section className="bg-light-surface py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="group bg-card rounded-2xl p-6 shadow-card-ripple border border-border hover:shadow-ripple hover:-translate-y-1 transition-all duration-300"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${f.color} flex items-center justify-center text-primary-foreground mb-5 group-hover:scale-110 transition-transform`}>
                  {f.icon}
                </div>
                <h3 className="font-bold text-lg mb-2">{f.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WaveDivider flip fillClass="fill-light-surface" />

      {/* CTA */}
      <section className="py-20 bg-background text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-extrabold mb-5">Готовы попробовать?</h2>
          <p className="text-muted-foreground mb-8">Скачайте Ripple бесплатно прямо сейчас</p>
          <Link
            to="/download"
            className="ripple-btn inline-flex items-center gap-2 gradient-cta text-primary-foreground font-bold px-8 py-4 rounded-full text-base shadow-ripple-lg hover:scale-105 transition-transform"
          >
            Скачать Ripple <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
