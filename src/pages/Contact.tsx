import { useState } from "react";
import { Mail, Clock, Send } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WaveDivider from "@/components/WaveDivider";

const topics = [
  "Техническая проблема",
  "Вопрос по аккаунту",
  "Конфиденциальность и безопасность",
  "Предложение по улучшению",
  "Партнёрство",
  "Другое",
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", topic: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-32 pb-12 relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{ background: "var(--gradient-hero)" }}
          aria-hidden
        />
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-5xl font-extrabold mb-4">
            Обратная <span className="text-gradient">связь</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-lg mx-auto">
            Мы ответим в течение 24 часов в рабочие дни
          </p>
        </div>
      </section>

      <WaveDivider fillClass="fill-light-surface" />

      <section className="bg-light-surface py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Info sidebar */}
            <div className="flex flex-col gap-6">
              <div className="bg-card rounded-2xl p-6 border border-border shadow-card-ripple">
                <Mail size={24} className="text-primary mb-3" />
                <h3 className="font-bold mb-1">Email поддержки</h3>
                <a href="mailto:support@getripple.app" className="text-sm text-primary">
                  support@getripple.app
                </a>
              </div>
              <div className="bg-card rounded-2xl p-6 border border-border shadow-card-ripple">
                <Clock size={24} className="text-primary mb-3" />
                <h3 className="font-bold mb-1">Время ответа</h3>
                <p className="text-sm text-muted-foreground">
                  Пн–Пт, 09:00–18:00 МСК.<br />Обычно отвечаем до 24 ч.
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="md:col-span-2">
              {sent ? (
                <div className="bg-card rounded-2xl p-10 border border-border shadow-card-ripple text-center">
                  <div className="text-4xl mb-4">✅</div>
                  <h3 className="text-2xl font-bold mb-2">Сообщение отправлено!</h3>
                  <p className="text-muted-foreground">Мы свяжемся с вами в течение 24 часов.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 border border-border shadow-card-ripple flex flex-col gap-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-semibold mb-1.5 block">Имя *</label>
                      <input
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Ваше имя"
                        className="w-full border border-input rounded-xl px-4 py-2.5 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary/40 transition"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-semibold mb-1.5 block">Email *</label>
                      <input
                        required
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="your@email.com"
                        className="w-full border border-input rounded-xl px-4 py-2.5 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary/40 transition"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-semibold mb-1.5 block">Тема обращения *</label>
                    <select
                      required
                      value={form.topic}
                      onChange={(e) => setForm({ ...form, topic: e.target.value })}
                      className="w-full border border-input rounded-xl px-4 py-2.5 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary/40 transition"
                    >
                      <option value="">Выберите тему</option>
                      {topics.map((t) => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-semibold mb-1.5 block">Сообщение *</label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Опишите ваш вопрос подробно..."
                      className="w-full border border-input rounded-xl px-4 py-2.5 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary/40 transition resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="ripple-btn inline-flex items-center justify-center gap-2 gradient-cta text-primary-foreground font-bold px-8 py-3.5 rounded-full shadow-ripple hover:scale-105 transition-transform self-start"
                  >
                    <Send size={16} />
                    Отправить
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <WaveDivider flip fillClass="fill-light-surface" />
      <Footer />
    </div>
  );
}
