import Link from "next/link";

const navItems = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "Skills", href: "/skills" },
    { name: "Competitions", href: "/competitions" },
    { name: "Contact", href: "/contact" },
];

const socialMedia = [
    { name: "GitHub", href: "https://github.com/donguyenphu", icon: `<i class="fa-brands fa-square-github text-4xl"></i>` },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/nguy%C3%AAn-ph%C3%BA-%C4%91%E1%BB%97-47986330b/?skipRedirect=true", icon: `<i class="fa-brands fa-square-linkedin text-4xl"></i>` },
    { name: "X", href: "https://x.com/justmichaeldo", icon: `<i class="fa-brands fa-square-x-twitter text-4xl"></i>` },
    { name: "Instagram", href: "https://www.instagram.com/priviet_man/", icon: `<i class="fa-brands fa-square-instagram text-4xl"></i>` },
    { name: "Email", href: "domichael15022008@gmail.com", icon: `<i class="fa-solid fa-square-envelope text-4xl"></i>` },
    { name: "Facebook", href: "https://web.facebook.com/phucusoncaria/", icon: `<i class="fa-brands fa-square-facebook text-4xl"></i>` },
];

export default function Footer() {
    return (
        <footer className="border-t border-white/10 bg-[#04060f]/90 py-6 text-zinc-400">
            <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 sm:flex-row sm:items-center sm:justify-between py-8">
                <div className="grid md:grid-cols-3 gap-10 w-full">
                    <div>
                        <Link href="/" className="flex items-center gap-3 transition hover:-translate-y-0.5">
                            <div className="flex h-11 w-11 items-center justify-center rounded-3xl bg-gradient-to-br from-cyan-400 via-fuchsia-500 to-violet-400 text-lg font-bold text-black shadow-lg shadow-fuchsia-500/20">
                                MD
                            </div>
                            <div className="flex flex-col leading-tight">
                                <span className="text-2xl font-semibold text-white">Portfolio</span>
                            </div>
                        </Link>
                        <div>
                            <p className="mt-4 text-lg text-zinc-300">
                                A showcase of my robotics projects, skills, and achievements. Explore my journey in the world of robotics and engineering.
                            </p>
                        </div>
                    </div>
                    {/* Middle */}
                    <div>
                        <h3 className="text-2xl font-bold mb-4 text-white">Quick Links</h3>
                        <ul className="space-y-2">
                            {navItems.map((item) => (
                                <li key={item.href}>
                                    <Link href={item.href} className="transition text-zinc-300 duration-200 hover:text-cyan-200 text-lg">
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* Right */}
                    <div>
                        <h3 className="text-2xl font-bold mb-4 text-white">Connect with me</h3>
                        <div className="grid grid-rows-5 gap-4">
                            {socialMedia.map((item) => (
                                <Link key={item.name} href={item.href} target="_blank" rel="noopener noreferrer" className="transition text-zinc-300 duration-200 hover:text-cyan-200 text-2xl flex items-center gap-2">
                                    <span className="flex items-center gap-2">
                                        <span dangerouslySetInnerHTML={{ __html: item.icon }} className="f" />
                                        <span className="text-lg font-semibold text-white">{item.name}</span>
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="mx-auto h-[1px] w-[90%] bg-white rounded-[20px]" />
            <div className="mx-auto mt-6 max-w-7xl px-6">
                <p className="text-md text-white text-center font-bold">© {new Date().getFullYear()} Michael Do. All rights reserved.</p>
            </div>
        </footer>
    );
}
