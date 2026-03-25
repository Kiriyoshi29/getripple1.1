import { Link } from "react-router-dom";
import { ShieldCheck, Code2, Eye, Key, ArrowRight, Lock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WaveDivider from "@/components/WaveDivider";

const measures = [
  { icon: "🔒", title: "Отсутствие метаданных", desc: "Мы не храним информацию о том, кому и когда вы пишете." },
  { icon: "💻", title: "Открытый исходный код", desc: "Весь код Ripple доступен на GitHub — любой может проверить его безопасность." },
  { icon: "⏱️", title: "Таймер сообщений", desc: "Сообщения исчезают через заданное время. Без следов." },
  { icon: "🔐", title: "Двухфакторная аутентификация", desc: "Дополнительный уровень защиты вашего аккаунта." },
  { icon: "📱", title: "Биометрическая блокировка", desc: "Откройте приложение отпечатком пальца или сканом лица." },
  { icon: "🛡️", title: "Независимые аудиты", desc: "Безопасность Ripple регулярно проверяется сторонними экспертами." },
];

export default function Security() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Dark hero */}
      <section className="relative pt-32 pb-20 bg-dark-section overflow-hidden">
        <div
          className="absolute inset-0 opacity-40"
          style={{ background: "radial-gradient(ellipse at 40% 60%, hsl(252 65% 48% / 0.5), transparent 65%)" }}
          aria-hidden
        />
        <div className="relative container mx-auto px-4 text-center text-dark-section-foreground">
          <div className="inline-flex items-center gap-2 bg-accent/20 text-accent text-xs font-semibold px-3.5 py-1.5 rounded-full mb-6">
            <ShieldCheck size={13} /> Безопасность
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
            Приватность —{" "}
            <span className="text-gradient">не опция, а право</span>
          </h1>
          <p className="text-dark-section-foreground/70 text-lg max-w-2xl mx-auto leading-relaxed">
            Мы верим, что каждый человек заслуживает полной конфиденциальности своих сообщений. Ripple построен так, чтобы никто — включая нас — не мог прочитать вашу переписку.
          </p>
        </div>
      </section>

      <WaveDivider fillClass="fill-background" />

      {/* E2E Encryption block */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-primary font-semibold text-sm uppercase tracking-widest">Ключевая технология</span>
              <h2 className="text-4xl font-extrabold mt-2 mb-5">
                Сквозное шифрование (E2E)
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Каждое сообщение шифруется на вашем устройстве перед отправкой и расшифровывается только на устройстве получателя. Ключи хранятся исключительно у вас — сервер передаёт зашифрованные данные, но не может их прочесть.
              </p>

              {/* E2E diagram */}
              <div className="bg-muted rounded-2xl p-6 flex items-center gap-4 text-center">
                <div className="flex-1">
                  <div className="w-12 h-12 gradient-cta rounded-full flex items-center justify-center text-primary-foreground mx-auto mb-2">
                    <span className="text-lg">👤</span>
                  </div>
                  <p className="text-xs font-semibold">Отправитель</p>
                  <p className="text-xs text-muted-foreground">Шифрует</p>
                </div>
                <div className="flex-1 flex flex-col items-center">
                  <div className="flex gap-1 items-center">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-2 h-2 rounded-full bg-primary/40" />
                    ))}
                  </div>
                  <div className="mt-2 bg-card rounded-lg px-3 py-1.5 border border-border">
                    <Lock size={14} className="text-primary mx-auto" />
                    <p className="text-[10px] text-muted-foreground mt-0.5">Сервер Ripple</p>
                    <p className="text-[10px] font-bold text-primary">не видит</p>
                  </div>
                  <div className="flex gap-1 items-center mt-1">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-2 h-2 rounded-full bg-primary/40" />
                    ))}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="w-12 h-12 gradient-cta rounded-full flex items-center justify-center text-primary-foreground mx-auto mb-2">
                    <span className="text-lg">👤</span>
                  </div>
                  <p className="text-xs font-semibold">Получатель</p>
                  <p className="text-xs text-muted-foreground">Расшифровывает</p>
                </div>
              </div>
            </div>

            {/* Measures */}
            <div className="grid grid-cols-2 gap-4">
              {measures.map((m) => (
                <div
                  key={m.title}
                  className="bg-card rounded-2xl p-5 shadow-card-ripple border border-border hover:shadow-ripple hover:-translate-y-0.5 transition-all"
                >
                  <span className="text-2xl mb-3 block">{m.icon}</span>
                  <h4 className="font-bold text-sm mb-1">{m.title}</h4>
                  <p className="text-muted-foreground text-xs leading-relaxed">{m.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Open source */}
      <section className="py-16 bg-light-surface">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <Code2 size={40} className="text-primary mx-auto mb-4" />
          <h2 className="text-3xl font-extrabold mb-4">Открытый исходный код</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Весь код Ripple публично доступен. Независимые специалисты по безопасности могут изучить, проверить и подтвердить, что приложение работает именно так, как заявлено.
          </p>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="ripple-btn inline-flex items-center gap-2 gradient-cta text-primary-foreground font-bold px-8 py-3.5 rounded-full shadow-ripple hover:scale-105 transition-transform"
          >
            Посмотреть на GitHub <ArrowRight size={16} />
          </a>
        </div>
      </section>

      <WaveDivider flip fillClass="fill-light-surface" />

      <Footer />
    </div>
  );
}
