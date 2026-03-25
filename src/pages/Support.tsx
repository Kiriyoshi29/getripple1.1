import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, MessageCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WaveDivider from "@/components/WaveDivider";

const categories = [
  {
    name: "Начало работы",
    icon: "🚀",
    faqs: [
      { q: "Как скачать Ripple?", a: "Ripple доступен в App Store (iOS), Google Play (Android) и на нашем сайте в разделе «Скачать» для десктопных систем (Windows, macOS, Linux)." },
      { q: "Нужна ли регистрация?", a: "Для работы с Ripple необходим номер телефона для верификации. Регистрация занимает меньше минуты." },
      { q: "Ripple бесплатный?", a: "Да, Ripple полностью бесплатен. Мы не взимаем плату и не показываем рекламу. Приложение монетизируется за счёт добровольных пожертвований." },
    ],
  },
  {
    name: "Учётная запись",
    icon: "👤",
    faqs: [
      { q: "Как сменить номер телефона?", a: "Перейдите в Настройки → Аккаунт → Сменить номер. Все ваши чаты, контакты и медиафайлы сохранятся." },
      { q: "Как удалить аккаунт?", a: "Настройки → Аккаунт → Удалить аккаунт. Все данные будут удалены с наших серверов безвозвратно." },
      { q: "Могу ли я использовать один аккаунт на нескольких устройствах?", a: "Да. Ripple поддерживает несколько устройств одновременно. Все сообщения синхронизируются в реальном времени." },
    ],
  },
  {
    name: "Конфиденциальность",
    icon: "🔒",
    faqs: [
      { q: "Читает ли Ripple мои сообщения?", a: "Нет. Все сообщения защищены сквозным шифрованием (E2E). Никто, включая сотрудников Ripple, не может прочитать вашу переписку." },
      { q: "Хранит ли Ripple мои данные?", a: "Ripple хранит минимально необходимый набор данных: номер телефона, публичный ключ, время последней активности. Содержимое сообщений не хранится на серверах." },
      { q: "Что такое самоуничтожающиеся сообщения?", a: "Это сообщения с таймером — от 1 секунды до 1 недели. По истечении времени они удаляются у обоих участников чата." },
    ],
  },
  {
    name: "Устранение неполадок",
    icon: "🛠",
    faqs: [
      { q: "Сообщения не доставляются", a: "Проверьте подключение к интернету. Если проблема сохраняется — попробуйте перезапустить приложение или переустановить его." },
      { q: "Не могу войти в аккаунт", a: "Убедитесь, что вы вводите правильный номер и код из SMS. Если SMS не приходит — запросите звонок для подтверждения." },
      { q: "Как сообщить об ошибке?", a: "Используйте раздел «Обратная связь» на нашем сайте или отправьте письмо на support@getripple.app. Мы отвечаем в течение 24 часов." },
    ],
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-border rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen((p) => !p)}
        className="w-full flex items-center justify-between px-5 py-4 text-left font-semibold text-sm hover:bg-muted transition-colors gap-3"
      >
        <span>{q}</span>
        <ChevronDown
          size={18}
          className={`text-muted-foreground shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="px-5 pb-4 text-sm text-muted-foreground leading-relaxed">
          {a}
        </div>
      )}
    </div>
  );
}

export default function Support() {
  const [active, setActive] = useState(0);
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
            Центр <span className="text-gradient">поддержки</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-lg mx-auto">
            Найдите ответы на часто задаваемые вопросы или свяжитесь с нами напрямую
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link
              to="/support"
              className="ripple-btn gradient-cta text-primary-foreground font-bold px-6 py-2.5 rounded-full shadow-ripple text-sm"
            >
              FAQ
            </Link>
            <Link
              to="/support/contact"
              className="ripple-btn border-2 border-primary text-primary font-bold px-6 py-2.5 rounded-full hover:bg-primary/8 text-sm transition-colors"
            >
              Обратная связь
            </Link>
          </div>
        </div>
      </section>

      <WaveDivider fillClass="fill-light-surface" />

      {/* FAQ */}
      <section className="bg-light-surface py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Category tabs */}
          <div className="flex flex-wrap gap-2 mb-10 justify-center">
            {categories.map((cat, i) => (
              <button
                key={cat.name}
                onClick={() => setActive(i)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                  active === i
                    ? "gradient-cta text-primary-foreground shadow-ripple"
                    : "bg-card border border-border text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat.icon} {cat.name}
              </button>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            {categories[active].faqs.map((item) => (
              <FaqItem key={item.q} q={item.q} a={item.a} />
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">Не нашли ответа?</p>
            <Link
              to="/support/contact"
              className="ripple-btn inline-flex items-center gap-2 gradient-cta text-primary-foreground font-bold px-7 py-3 rounded-full shadow-ripple hover:scale-105 transition-transform"
            >
              <MessageCircle size={16} />
              Написать нам
            </Link>
          </div>
        </div>
      </section>

      <WaveDivider flip fillClass="fill-light-surface" />

      <Footer />
    </div>
  );
}
