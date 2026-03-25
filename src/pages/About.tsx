import { Github, Mail } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WaveDivider from "@/components/WaveDivider";

const team = [
  { name: "Алексей Новиков", role: "CEO & Co-founder", emoji: "👨‍💼" },
  { name: "Марина Соколова", role: "CTO & Co-founder", emoji: "👩‍💻" },
  { name: "Денис Ларин", role: "Head of Security", emoji: "🔒" },
  { name: "Ольга Кузнецова", role: "Lead Designer", emoji: "🎨" },
  { name: "Иван Петров", role: "Backend Engineer", emoji: "⚙️" },
  { name: "Алина Борисова", role: "iOS Developer", emoji: "📱" },
];

const values = [
  { emoji: "🔒", title: "Приватность прежде всего", desc: "Ваша переписка — это только ваша переписка. Мы не читаем, не продаём, не анализируем." },
  { emoji: "💡", title: "Инновации", desc: "Мы постоянно совершенствуем Ripple, добавляя новые функции без ущерба для безопасности." },
  { emoji: "🌍", title: "Открытость", desc: "Открытый исходный код и прозрачная политика — основа доверия нашего сообщества." },
  { emoji: "🤝", title: "Доступность", desc: "Ripple бесплатен и будет оставаться бесплатным. Качественный мессенджер — для каждого." },
];

export default function About() {
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
          <h1 className="text-5xl md:text-6xl font-extrabold mb-5">
            О компании <span className="text-gradient">NovaTech Solutions</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Мы создаём инструменты для свободного и безопасного общения. Ripple — наш флагманский продукт, рождённый из веры в то, что приватность — базовое право каждого человека.
          </p>
        </div>
      </section>

      <WaveDivider fillClass="fill-light-surface" />

      {/* Mission */}
      <section className="bg-light-surface py-20">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">Миссия</span>
          <h2 className="text-4xl font-extrabold mt-2 mb-6">
            Сделать безопасное общение доступным для всех
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            NovaTech Solutions основана в 2024 году с единственной целью: создать мессенджер, которому можно доверять. Мы верим, что технологии должны служить людям — а не использовать их данные в коммерческих интересах.
          </p>
        </div>
      </section>

      <WaveDivider flip fillClass="fill-light-surface" />

      {/* Values */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-center mb-12">Наши ценности</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-card rounded-2xl p-6 border border-border shadow-card-ripple hover:shadow-ripple hover:-translate-y-1 transition-all text-center"
              >
                <span className="text-4xl mb-4 block">{v.emoji}</span>
                <h3 className="font-bold mb-2">{v.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-light-surface">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-center mb-12">Наша команда</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {team.map((member) => (
              <div
                key={member.name}
                className="bg-card rounded-2xl border border-border shadow-card-ripple p-6 flex items-center gap-4 hover:shadow-ripple transition-shadow"
              >
                <div className="w-14 h-14 rounded-full gradient-cta flex items-center justify-center text-2xl shrink-0">
                  {member.emoji}
                </div>
                <div>
                  <h3 className="font-bold">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WaveDivider flip fillClass="fill-light-surface" />

      {/* Contact */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold mb-4">Свяжитесь с нами</h2>
          <p className="text-muted-foreground mb-8">
            По вопросам партнёрства и деловых предложений:
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:novatech_solutions@gmail.com"
              className="ripple-btn inline-flex items-center gap-2 gradient-cta text-primary-foreground font-bold px-7 py-3.5 rounded-full shadow-ripple hover:scale-105 transition-transform"
            >
              <Mail size={16} />
              novatech_solutions@gmail.com
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="ripple-btn inline-flex items-center gap-2 border-2 border-primary text-primary font-bold px-7 py-3.5 rounded-full hover:bg-primary/8 transition-colors"
            >
              <Github size={16} />
              GitHub
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
