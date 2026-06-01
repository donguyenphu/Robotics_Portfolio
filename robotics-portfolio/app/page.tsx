import Header from "../components/Header";
import Footer from "../components/Footer";

const featureCards = [
  {
    title: "Aurora Motion",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi sit amet lectus viverra.",
  },
  {
    title: "Dark Theme",
    description:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
  },
  {
    title: "Brand Story",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#02040b] text-white">
      <Header />

      <main className="relative isolate overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(79,70,229,0.2),_transparent_30%),radial-gradient(circle_at_bottom,_rgba(56,189,248,0.14),_transparent_22%)]" />
        <div className="absolute inset-x-0 top-0 -z-10 h-96 bg-[radial-gradient(circle,_rgba(192,132,252,0.08),_transparent_42%)] blur-3xl" />
        <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24">
          <section
            id="home"
            className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#08101f]/80 p-8 shadow-[0_25px_120px_rgba(79,70,229,0.15)] backdrop-blur-xl sm:p-12"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(79,70,229,0.16),_transparent_26%),radial-gradient(circle_at_bottom_right,_rgba(56,189,248,0.12),_transparent_24%)]" />
            <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl animate-aurora-glow" />
            <div className="absolute right-0 top-20 h-80 w-80 rounded-full bg-fuchsia-500/10 blur-3xl animate-aurora-glow animation-delay-2000" />
            <div className="relative grid gap-10 lg:grid-cols-[1.4fr_0.9fr]">
              <div className="space-y-8">
                <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200 backdrop-blur-sm">
                  <span className="h-2 w-2 rounded-full bg-cyan-300" />
                  Aurora-inspired dark portfolio
                </div>
                <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-white sm:text-6xl">
                  Experience the northern lights in every interaction.
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-zinc-300">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ullamcorper, orci quis
                  egestas ullamcorper, dolor lectus vestibulum tellus, et vehicula elit nisl a nisi.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <a
                    href="#projects"
                    className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-violet-400 px-8 py-3 text-sm font-semibold text-black shadow-[0_20px_80px_rgba(79,70,229,0.18)] transition hover:-translate-y-0.5"
                  >
                    View highlights
                  </a>
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-8 py-3 text-sm font-semibold text-white transition hover:border-cyan-300/40 hover:bg-white/10"
                  >
                    Contact me
                  </a>
                </div>
              </div>

              <div className="relative flex items-center justify-center">
                <div className="relative h-[360px] w-full max-w-md overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-cyan-500/10">
                  <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(125,211,252,0.18),_transparent_48%)] opacity-80 blur-3xl" />
                  <div className="relative flex h-full flex-col justify-between rounded-[1.75rem] border border-white/10 bg-[#07101c]/90 p-6 text-sm text-zinc-200 backdrop-blur-xl">
                    <div className="space-y-4">
                      <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">
                        Motion + mood
                      </p>
                      <h2 className="text-2xl font-semibold text-white">Glowing ideas, refined interactions.</h2>
                      <p className="text-zinc-300">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in risus sit amet justo elementum
                        euismod.
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {[
                        "Visual design",
                        "Motion systems",
                        "Digital storytelling",
                        "Dark UX",
                      ].map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-200"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="projects" className="mt-16 grid gap-6 lg:grid-cols-3">
            {featureCards.map((card) => (
              <article
                key={card.title}
                className="rounded-[1.75rem] border border-white/10 bg-[#06101d]/80 p-6 shadow-[0_15px_60px_rgba(15,23,42,0.25)] transition hover:-translate-y-1"
              >
                <h3 className="text-xl font-semibold text-white">{card.title}</h3>
                <p className="mt-4 text-sm leading-7 text-zinc-300">{card.description}</p>
              </article>
            ))}
          </section>

          <section id="about" className="mt-16 rounded-[2rem] border border-white/10 bg-[#07101d]/80 p-8 shadow-[0_25px_120px_rgba(79,70,229,0.1)]">
            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
              <div>
                <h2 className="text-3xl font-semibold text-white">A portfolio shaped by aurora motion.</h2>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-300">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus
                  ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.
                </p>
              </div>
              <div className="space-y-4 rounded-[1.75rem] border border-white/10 bg-white/5 p-6 text-sm text-zinc-300">
                <p>
                  Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra,
                  per inceptos himenaeos.
                </p>
                <p>
                  Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
