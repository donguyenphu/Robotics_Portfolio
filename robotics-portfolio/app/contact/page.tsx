"use client";

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { FormEvent, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";

const SERVICE_ID = "service_me2xbf8";
const TEMPLATE_ID = "template_7c6ggrk";
const PUBLIC_KEY = "hgY247kPRrvN-oSXX";

const socialMedia = [
    { name: "GitHub", href: "https://github.com/donguyenphu", icon: `<i class="fa-brands fa-square-github text-4xl"></i>` },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/nguy%C3%AAn-ph%C3%BA-%C4%91%E1%BB%97-47986330b/?skipRedirect=true", icon: `<i class="fa-brands fa-square-linkedin text-4xl"></i>` },
    { name: "X", href: "https://x.com/justmichaeldo", icon: `<i class="fa-brands fa-square-x-twitter text-4xl"></i>` },
    { name: "Instagram", href: "https://www.instagram.com/priviet_man/", icon: `<i class="fa-brands fa-square-instagram text-4xl"></i>` },
    { name: "Facebook", href: "https://web.facebook.com/phucusoncaria/", icon: `<i class="fa-brands fa-square-facebook text-4xl"></i>` },
];

export default function Contact() {
    const [status, setStatus] = useState<string | null>(null);
    const [sending, setSending] = useState(false);
    const formRef = useRef<HTMLFormElement | null>(null);

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        if (!formRef.current) return;
        setSending(true);
        setStatus(null);

        try {
            await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY);
            toast.success("Message sent successfully. I will get back to you soon.");
            // setStatus("Message sent successfully. I will get back to you soon.");
            formRef.current.reset();
        } catch (error) {
            toast.error("Failed to send message. Please try again later.");
            // setStatus("Failed to send message. Please try again later.");
            console.error("EmailJS error:", error);
        } finally {
            setSending(false);
        }
    }

    return (
        <div className="min-h-screen bg-[#02040b] text-white">
            <Header />
            <div className="mx-auto max-w-7xl py-16">
                <div className="mb-10 text-center">
                    <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Get In Touch</h1>
                    <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-zinc-300">
                        Let's collaborate on your next robotics project or discuss opportunities.
                    </p>
                </div>

                <div className="grid gap-8 rounded-[2rem] border border-white/10 bg-[#07101d]/80 p-8 shadow-[0_25px_120px_rgba(79,70,229,0.12)] backdrop-blur-xl lg:grid-cols-[1.4fr_0.9fr]">
                    <section className="space-y-6">

                        <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                            <label className="block text-sm text-zinc-200">
                                <span className="mb-2 block font-medium text-white text-xl">Name</span>
                                <input
                                    name="name"
                                    required
                                    type="text"
                                    placeholder="Your name"
                                    className="w-full rounded-3xl border border-white/10 bg-[#0b1626]/90 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                                />
                            </label>

                            <label className="block text-sm text-zinc-200">
                                <span className="mb-2 block font-medium text-white text-xl">Email</span>
                                <input
                                    name="email"
                                    required
                                    type="email"
                                    placeholder="you@example.com"
                                    className="w-full rounded-3xl border border-white/10 bg-[#0b1626]/90 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                                />
                            </label>

                            <label className="block text-sm text-zinc-200">
                                <span className="mb-2 block font-medium text-white text-xl">Message</span>
                                <textarea
                                    name="message"
                                    required
                                    rows={6}
                                    placeholder="Tell me about your project or opportunity..."
                                    className="w-full rounded-[1.5rem] border border-white/10 bg-[#0b1626]/90 px-4 py-4 text-sm text-white outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                                />
                            </label>

                            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                                <button
                                    type="submit"
                                    disabled={sending}
                                    className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-violet-400 px-7 py-3 text-sm font-semibold text-black transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-50"
                                >
                                    {sending ? "Sending..." : "Send message"}
                                </button>
                            </div>

                            {status ? (
                                <p className="mt-2 rounded-2xl border border-cyan-400/20 bg-cyan-400/10 px-4 py-3 text-sm text-cyan-100">
                                    {status}
                                </p>
                            ) : null}
                        </form>
                    </section>

                    <aside className="space-y-6 rounded-[1.75rem] border border-white/10 bg-[#05111d]/90 p-6 text-zinc-300 shadow-lg shadow-slate-950/20">
                        <div>
                            <p className="text-md uppercase tracking-[0.35em] text-cyan-300">Let’s connect</p>
                            <h2 className="mt-3 text-2xl font-semibold text-white">Reach out directly</h2>
                            <p className="mt-3 text-md leading-7 text-zinc-400">
                                Prefer to connect on social media? Use any of the platforms below and I’ll reply as soon as possible.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <div className="rounded-3xl border border-white/10 bg-[#0a1728]/80 p-5">
                                <p className="text-lg text-zinc-400 mb-1.5">Email</p>
                                <Link href="domichael15022008@gmail.com" target="_blank" rel="noopener noreferrer" className="transition text-zinc-300 duration-200 hover:text-cyan-200 text-2xl flex items-center">
                                    <div className="flex items-center gap-1">
                                        <span dangerouslySetInnerHTML={{ __html: `<i class="fa-solid fa-square-envelope text-4xl"></i>` }} className="f" />
                                        <span className="text-lg">: domichael15022008@gmail.com</span>
                                    </div>
                                </Link>
                            </div>
                            <div className="rounded-3xl border border-white/10 bg-[#0a1728]/80 p-5">
                                <p className="text-lg text-zinc-400 mb-1.5">Phone</p>
                                <Link href="+1234567890" target="_blank" rel="noopener noreferrer" className="transition text-zinc-300 duration-200 hover:text-cyan-200 text-2xl flex items-center">
                                    <div className="flex items-center gap-1">
                                        <span dangerouslySetInnerHTML={{ __html: `<i class="fa-solid fa-square-phone text-4xl"></i>` }} className="f" />
                                        <span className="text-lg">: +1 (234) 567-890</span>
                                    </div>
                                </Link>
                            </div>

                            <div className="rounded-3xl border border-white/10 bg-[#0a1728]/80 p-5">
                                <p className="text-lg text-zinc-400">Follow Me</p>
                                <div className="mt-2 flex space-x-4">
                                    <div className="grid grid-cols-5 gap-2">
                                        {socialMedia.map((item) => (
                                            <Link key={item.name} href={item.href} target="_blank" rel="noopener noreferrer" className="transition text-zinc-300 duration-200 hover:text-cyan-200 text-2xl flex items-center gap-2">
                                                <span className="flex items-center gap-2">
                                                    <span dangerouslySetInnerHTML={{ __html: item.icon }} className="f" />
                                                </span>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
            <Footer />
        </div>
    );
}
