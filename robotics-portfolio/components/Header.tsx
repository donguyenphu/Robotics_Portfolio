import Link from "next/link";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#04060f]/90 backdrop-blur-xl shadow-black/20">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4 text-sm text-zinc-200">
        <Link href="/" className="flex items-center gap-3 transition hover:-translate-y-0.5">
          <div className="flex h-11 w-11 items-center justify-center rounded-3xl bg-gradient-to-br from-cyan-400 via-fuchsia-500 to-violet-400 text-sm font-bold text-black shadow-lg shadow-fuchsia-500/20">
            A
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-lg font-semibold text-white">Aurora Labs</span>
            <span className="text-xs text-zinc-400">Northern lights portfolio</span>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition text-sm text-zinc-300 duration-200 hover:text-cyan-200"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
