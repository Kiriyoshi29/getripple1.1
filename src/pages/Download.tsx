import { Download as DownloadIcon, Monitor, Apple, SmartphoneIcon } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WaveDivider from "@/components/WaveDivider";

const platforms = [
  {
    group: "Мобильные",
    icon: <SmartphoneIcon size={22} />,
    items: [
      { name: "iOS (App Store)", icon: "🍎", req: "iOS 14.0+", size: "42 МБ", badge: "Популярно" },
      { name: "Android (Google Play)", icon: "🤖", req: "Android 8.0+", size: "38 МБ", badge: "Популярно" },
      { name: "Android APK", icon: "📦", req: "Android 8.0+", size: "38 МБ", badge: null },
    ],
  },
  {
    group: "Десктоп",
    icon: <Monitor size={22} />,
    items: [
      { name: "Windows", icon: "🪟", req: "Windows 10+", size: "86 МБ", badge: null },
      { name: "macOS", icon: "🍎", req: "macOS 12+", size: "78 МБ", badge: null },
      { name: "Linux (AppImage)", icon: "🐧", req: "Ubuntu 20.04+", size: "90 МБ", badge: null },
    ],
  },
];

export default function DownloadPage() {
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
          <DownloadIcon size={48} className="text-primary mx-auto mb-5" />
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
            Скачайте <span className="text-gradient">Ripple</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-md mx-auto">
            Доступен на всех ваших устройствах. Бесплатно. Всегда.
          </p>
        </div>
      </section>

      <WaveDivider fillClass="fill-light-surface" />

      {/* QR + quick download */}
      <section className="bg-light-surface py-16">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-2xl font-bold mb-2">Быстрое скачивание</h2>
          <p className="text-muted-foreground mb-10">Наведите камеру смартфона — он сам определит платформу</p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-10">
            {/* QR */}
            <div className="flex flex-col items-center gap-3">
              <div className="w-40 h-40 rounded-2xl border-4 border-primary/20 bg-card flex items-center justify-center shadow-ripple">
                <div className="grid grid-cols-7 gap-0.5 p-1">
                  {[...Array(49)].map((_, i) => {
                    const pattern = [
                      1,1,1,1,1,1,1,
                      1,0,0,0,0,0,1,
                      1,0,1,0,1,0,1,
                      1,0,0,0,0,0,1,
                      1,0,1,0,1,0,1,
                      1,0,0,0,0,0,1,
                      1,1,1,1,1,1,1,
                    ];
                    return (
                      <div
                        key={i}
                        className={`w-3.5 h-3.5 rounded-sm ${pattern[i] ? "bg-foreground" : "bg-transparent"}`}
                      />
                    );
                  })}
                </div>
              </div>
              <p className="text-xs text-muted-foreground">getripple.app</p>
            </div>

            {/* Store buttons */}
            <div className="flex flex-col gap-3">
              <a
                href="#"
                className="ripple-btn flex items-center gap-4 bg-foreground text-background px-6 py-4 rounded-2xl hover:opacity-90 transition-opacity min-w-[200px]"
              >
                <span className="text-2xl">🍎</span>
                <div className="text-left">
                  <div className="text-xs opacity-60">Загрузить из</div>
                  <div className="font-bold">App Store</div>
                </div>
              </a>
              <a
                href="#"
                className="ripple-btn flex items-center gap-4 bg-foreground text-background px-6 py-4 rounded-2xl hover:opacity-90 transition-opacity min-w-[200px]"
              >
                <span className="text-2xl">🤖</span>
                <div className="text-left">
                  <div className="text-xs opacity-60">Доступно в</div>
                  <div className="font-bold">Google Play</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <WaveDivider flip fillClass="fill-light-surface" />

      {/* All platforms */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-center mb-14">Все платформы</h2>
          <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            {platforms.map((group) => (
              <div key={group.group}>
                <div className="flex items-center gap-2 mb-5 text-primary font-bold">
                  {group.icon}
                  <span>{group.group}</span>
                </div>
                <div className="flex flex-col gap-3">
                  {group.items.map((item) => (
                    <div
                      key={item.name}
                      className="bg-card rounded-2xl border border-border p-5 flex items-center justify-between shadow-card-ripple hover:shadow-ripple transition-shadow"
                    >
                      <div className="flex items-center gap-4">
                        <span className="text-2xl">{item.icon}</span>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-semibold text-sm">{item.name}</span>
                            {item.badge && (
                              <span className="text-[10px] bg-accent/20 text-accent font-semibold px-2 py-0.5 rounded-full">
                                {item.badge}
                              </span>
                            )}
                          </div>
                          <div className="text-xs text-muted-foreground mt-0.5">
                            {item.req} · {item.size}
                          </div>
                        </div>
                      </div>
                      <a
                        href="#"
                        className="ripple-btn gradient-cta text-primary-foreground text-xs font-bold px-4 py-2 rounded-full shadow-ripple hover:scale-105 transition-transform"
                      >
                        Скачать
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
