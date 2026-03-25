import { Link } from "react-router-dom";
import { Download, ShieldCheck, Zap, Lock, Star, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WaveDivider from "@/components/WaveDivider";
import phoneMockup from "@/assets/phone-mockup.png";

const features = [
  {
    icon: <ShieldCheck size={28} />,
    title: "Сквозное шифрование",
    desc: "Все сообщения защищены E2E-шифрованием. Никто — включая нас — не может прочитать вашу переписку.",
  },
  {
    icon: <Zap size={28} />,
    title: "Мгновенная доставка",
    desc: "Сообщения доставляются за миллисекунды благодаря оптимизированной инфраструктуре.",
  },
  {
    icon: <Lock size={28} />,
    title: "Нет рекламы",
    desc: "Ripple полностью бесплатен. Мы не продаём ваши данные и не показываем рекламу.",
  },
  {
    icon: <Star size={28} />,
    title: "Чистый дизайн",
    desc: "Минималистичный интерфейс без лишних элементов — только то, что нужно для общения.",
  },
];

const reviews = [
  { name: "Алексей М.", text: "Лучший мессенджер для тех, кто ценит приватность. Рекомендую всем!" },
  { name: "Анна К.", text: "Наконец-то мессенджер без рекламы и слежки. Дизайн просто шикарный." },
  { name: "Дмитрий В.", text: "Перевёл всю команду на Ripple. Быстро, удобно, безопасно." },
];

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* ===== HERO ===== */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
        {/* Animated gradient bg */}
        <div
          className="absolute inset-0 animate-gradient"
          style={{
            background: "linear-gradient(135deg, hsl(252 65% 48% / 0.10), hsl(207 82% 57% / 0.08), hsl(169 85% 58% / 0.12), hsl(252 65% 48% / 0.08))",
            backgroundSize: "300% 300%",
          }}
        />

        {/* Ripple rings decoration */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none hidden lg:block" aria-hidden>
          {[0, -0.8, -1.6, -2.4].map((delay, i) => (
            <div
              key={i}
              className="absolute inset-0 rounded-full border-2 border-primary/15"
              style={{
                animation: `ripple-ring 4s ease-out ${delay}s infinite`,
                transform: `scale(${0.4 + i * 0.2})`,
              }}
            />
          ))}
        </div>

        <div className="relative container mx-auto px-4 py-24 grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className="space-y-7 animate-fade-up">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-xs font-semibold px-3.5 py-1.5 rounded-full border border-primary/20">
              ✦ Безопасный мессенджер
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight">
              Пусть слова{" "}
              <span className="text-gradient">текут свободно</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
              Ripple — современный мессенджер со сквозным шифрованием, чистым дизайном и без рекламы. Общайтесь свободно, ваши сообщения защищены.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/download"
                className="ripple-btn inline-flex items-center gap-2 gradient-cta text-primary-foreground font-bold px-7 py-3.5 rounded-full text-base shadow-ripple-lg transition-transform hover:scale-105"
              >
                <Download size={18} />
                Скачать для Android
              </Link>
              <Link
                to="/download"
                className="ripple-btn inline-flex items-center gap-2 border-2 border-primary text-primary font-bold px-7 py-3.5 rounded-full text-base hover:bg-primary/8 transition-colors"
              >
                <Download size={18} />
                Скачать для iOS
              </Link>
            </div>
            <p className="text-xs text-muted-foreground">
              Доступно для Android, iOS, Windows, macOS, Linux
            </p>
          </div>

          {/* Phone mockup */}
          <div className="flex justify-center items-center">
            <img
              src={phoneMockup}
              alt="Интерфейс Ripple"
              className="animate-float max-h-[520px] w-auto drop-shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Wave */}
      <WaveDivider fillClass="fill-light-surface" />

      {/* ===== FEATURES CARDS ===== */}
      <section className="bg-light-surface py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-extrabold mb-4">Почему Ripple?</h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Создан с заботой о вашей приватности и удобстве общения
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="group bg-card rounded-2xl p-6 shadow-card-ripple border border-border hover:shadow-ripple hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl gradient-cta flex items-center justify-center text-primary-foreground mb-4 group-hover:scale-110 transition-transform">
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

      {/* ===== UI SHOWCASE ===== */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-primary font-semibold text-sm uppercase tracking-widest">Интерфейс</span>
              <h2 className="text-4xl font-extrabold mt-2 mb-5">Всё, что нужно для общения</h2>
              <div className="space-y-5">
                {[
                  { title: "Личные и групповые чаты", desc: "Чаты с гибкими настройками, роли участников, пины и упоминания." },
                  { title: "Голосовые и видеозвонки", desc: "HD-качество звука и видео с шифрованием в реальном времени." },
                  { title: "Обмен файлами и медиа", desc: "Отправляйте документы, фото, видео и голосовые сообщения." },
                  { title: "Самоуничтожающиеся сообщения", desc: "Установите таймер — сообщение удалится автоматически." },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4 items-start">
                    <div className="mt-0.5 w-6 h-6 rounded-full gradient-cta flex items-center justify-center shrink-0">
                      <div className="w-2 h-2 bg-primary-foreground rounded-full" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-0.5">{item.title}</h4>
                      <p className="text-muted-foreground text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link
                to="/features"
                className="inline-flex items-center gap-2 mt-8 text-primary font-semibold hover:gap-3 transition-all"
              >
                Все возможности <ArrowRight size={16} />
              </Link>
            </div>

            <div className="relative">
              <div className="absolute inset-0 rounded-3xl"
                style={{ background: "var(--gradient-hero)" }} />
              <img
                src={phoneMockup}
                alt="Демонстрация интерфейса"
                className="relative w-full max-w-xs mx-auto drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECURITY TEASER ===== */}
      <section className="relative py-24 bg-dark-section overflow-hidden">
        <div
          className="absolute inset-0 opacity-30"
          style={{ background: "radial-gradient(ellipse at 60% 50%, hsl(252 65% 48% / 0.4), transparent 70%)" }}
          aria-hidden
        />
        <div className="relative container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-dark-section-foreground space-y-6">
            <span className="inline-flex items-center gap-2 bg-accent/20 text-accent text-xs font-semibold px-3.5 py-1.5 rounded-full">
              <ShieldCheck size={13} /> Безопасность
            </span>
            <h2 className="text-4xl font-extrabold leading-tight">
              Приватность — не опция.{" "}
              <span className="text-gradient">Это право.</span>
            </h2>
            <p className="text-dark-section-foreground/70 leading-relaxed max-w-md">
              Ripple построен так, чтобы никто — включая нас — не мог читать ваши сообщения. Открытый исходный код, независимые аудиты, нулевое хранение метаданных.
            </p>
            <Link
              to="/security"
              className="ripple-btn inline-flex items-center gap-2 border-2 border-accent text-accent font-bold px-7 py-3 rounded-full hover:bg-accent/10 transition-colors"
            >
              Подробнее о безопасности <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "E2E-шифрование", icon: "🔒" },
              { label: "Нет хранения метаданных", icon: "🚫" },
              { label: "Открытый исходный код", icon: "🛠" },
              { label: "2FA защита", icon: "🔑" },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-dark-section-foreground/5 border border-dark-section-foreground/10 rounded-2xl p-5 flex flex-col gap-2 hover:bg-dark-section-foreground/10 transition-colors"
              >
                <span className="text-3xl">{item.icon}</span>
                <span className="text-sm font-semibold text-dark-section-foreground/80">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== REVIEWS ===== */}
      <section className="py-20 bg-light-surface">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold mb-3">Что говорят пользователи</h2>
            <p className="text-muted-foreground">Более 500 000 скачиваний по всему миру</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {reviews.map((r) => (
              <div
                key={r.name}
                className="bg-card rounded-2xl p-6 shadow-card-ripple border border-border"
              >
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-foreground/80 mb-4">"{r.text}"</p>
                <p className="text-xs font-semibold text-muted-foreground">{r.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-5xl font-extrabold mb-5">
              Начните общаться <span className="text-gradient">свободно</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Скачайте Ripple бесплатно для вашего устройства
            </p>

            {/* QR code placeholder */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-10">
              <div className="flex flex-col items-center gap-2">
                <div className="w-32 h-32 rounded-2xl border-2 border-border flex items-center justify-center bg-muted">
                  <div className="grid grid-cols-5 gap-0.5">
                    {[...Array(25)].map((_, i) => (
                      <div key={i} className={`w-4 h-4 rounded-sm ${Math.random() > 0.4 ? "bg-foreground" : "bg-transparent"}`} />
                    ))}
                  </div>
                </div>
                <p className="text-xs text-muted-foreground">Наведите камеру</p>
              </div>

              <div className="flex flex-col gap-3 min-w-[200px]">
                <Link
                  to="/download"
                  className="ripple-btn flex items-center gap-3 bg-foreground text-background font-semibold px-6 py-3.5 rounded-2xl hover:opacity-90 transition-opacity"
                >
                  <span className="text-xl">🍎</span>
                  <div className="text-left">
                    <div className="text-xs opacity-60">Скачать в</div>
                    <div className="text-sm font-bold">App Store</div>
                  </div>
                </Link>
                <Link
                  to="/download"
                  className="ripple-btn flex items-center gap-3 bg-foreground text-background font-semibold px-6 py-3.5 rounded-2xl hover:opacity-90 transition-opacity"
                >
                  <span className="text-xl">🤖</span>
                  <div className="text-left">
                    <div className="text-xs opacity-60">Получить в</div>
                    <div className="text-sm font-bold">Google Play</div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
