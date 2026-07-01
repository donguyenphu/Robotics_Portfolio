"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  const [showCVPreview, setShowCVPreview] = useState(false);

  return (
    <div className="min-h-screen bg-[#02040b] text-white">
      <Header />

      <main className="relative isolate overflow-hidden pb-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(79,70,229,0.18),_transparent_28%),radial-gradient(circle_at_bottom,_rgba(56,189,248,0.12),_transparent_22%)]" />
        <div className="absolute inset-x-0 top-0 -z-10 h-96 bg-[radial-gradient(circle,_rgba(192,132,252,0.08),_transparent_42%)] blur-3xl" />

        <div className="mx-auto max-w-7xl px-10 py-20 sm:py-24 space-y-16">
          <section id="introduction" className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#08101f]/80 p-10 shadow-[0_25px_120px_rgba(79,70,229,0.15)] backdrop-blur-xl sm:p-12">

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(79,70,229,0.16),_transparent_26%),radial-gradient(circle_at_bottom_right,_rgba(56,189,248,0.12),_transparent_24%)]" />
            <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl animate-aurora-glow" />
            <div className="absolute right-0 top-20 h-80 w-80 rounded-full bg-fuchsia-500/10 blur-3xl animate-aurora-glow animation-delay-2000" />

            <div className="text-center grid gap-12">
              <div className="space-y-5">
                <div className="text-sm uppercase tracking-[0.35em] text-cyan-300">Hello, I'm</div>
                <h1 className="break-words text-3rem md:text-8xl lg: text-8xl font-semibold tracking-tight text-white sm:text-7xl">Michael Do</h1>
                <p className="text-2xl font-medium text-zinc-200">Aspiring Robotics Engineer</p>
                <p className="text-base leading-8 text-zinc-300">
                  I combine robotics, design, and engineering to build thoughtful systems that move ideas into real-world solutions.
                </p>
                <div className="justify-center flex flex-col gap-4 sm:flex-row">
                  <Link href="/skills" className="inline-flex shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-violet-400 px-8 py-3 text-sm font-semibold text-black shadow-[0_20px_80px_rgba(79,70,229,0.18)] transition hover:-translate-y-0.5">
                    View my skills
                  </Link>
                  <Link href="/contact" className="inline-flex shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/5 px-8 py-3 text-sm font-semibold text-white transition hover:border-cyan-300/40 hover:bg-white/10">
                    Get in touch
                  </Link>
                  <a href="/Michael Do CV.docx" download className="inline-flex shrink-0 items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-semibold text-black transition hover:-translate-y-0.5">
                    Download CV
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section id="about" className="rounded-[2rem] border border-white/10 bg-[#07101d]/80 p-10 shadow-[0_25px_120px_rgba(79,70,229,0.1)]">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="space-y-8">
                <div>
                  <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">About me</p>
                  <h2 className="mt-4 text-4xl font-semibold text-white">What I do</h2>
                  <p className="mt-4 text-lg leading-7 text-zinc-300">
                    I am passionate about analyzing real-world challenges and developing practical, technology-driven solutions to address them. Through robotics, software, and engineering, I seek to transform ideas into systems that create meaningful impact.
                  </p>
                  <p className="mt-4 text-lg leading-7 text-zinc-300">
                    My goal is not only to build innovative technologies, but also to apply them in ways that improve people's lives, strengthen communities, and contribute to a more sustainable and efficient society.
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-3">
                  {[
                    { title: "Hardware", description: "Embedded systems, sensors, and mechatronics." },
                    { title: "Software", description: "Control algorithms, automation, and robotics code." },
                    { title: "Tool/Platform", description: "CAD, ROS, Python, MATLAB, and simulation workflows." },
                  ].map((item) => (
                    <div key={item.title} className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 text-sm text-zinc-200 shadow-[0_18px_60px_rgba(15,23,42,0.25)]">
                      <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                      <p className="mt-3 leading-6 text-zinc-300">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6 flex flex-col items-center">
                <div className="overflow-hidden w-[90%] h-auto rounded-full border border-white/10 bg-white/5 p-4 shadow-xl shadow-cyan-500/10">
                  <img src="/Avatar Home.jpg" alt="Michael Do" className="aspect-square rounded-full object-cover" />
                </div>

                <div className="grid gap-5 sm:grid-cols-3">
                  {[
                    { value: "10", label: "Projects" },
                    { value: "10", label: "Skills" },
                    { value: "4.0", label: "GPA" },
                  ].map((stat) => (
                    <div key={stat.label} className="rounded-[1.75rem] border border-white/10 bg-[#08101f]/90 px-6 py-8 text-center shadow-[0_15px_60px_rgba(15,23,42,0.25)]">
                      <p className="text-5xl font-semibold text-white">{stat.value}</p>
                      <p className="mt-2 text-sm uppercase tracking-[0.25em] text-cyan-300">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section id="education" className="rounded-[2rem] border border-white/10 bg-[#08101f]/80 p-10 shadow-[0_25px_120px_rgba(79,70,229,0.1)]">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] items-center">
              <div className="space-y-4">
                <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Education</p>
                <h2 className="text-3xl font-semibold text-white">Undergraduate</h2>
                {/* <p className="max-w-xl text-md leading-7 text-zinc-300">
                  Building a strong foundation in computer science and engineering while preparing for robotics research and systems design.
                </p> */}
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-[#07131e]/90 p-8 shadow-xl shadow-cyan-500/10">
                <div className="flex items-center gap-4">
                  <div className="hidden md:block md:w-[15%]">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full border border-white/10 bg-white/5">
                      <img src="/Bucknell University Logo.png" alt="Bucknell University logo" className="w-full h-full rounded-full object-cover" />
                    </div>
                  </div>
                  <div className="w-[100%] md: w-[85%]">
                    <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Bucknell University</p>
                    <h3 className="mt-2 text-xl font-semibold text-white">Bachelor of Science in Computer Science & Engineering (CSEG)</h3>
                  </div>
                </div>

                <div className="mt-8 space-y-4 text-sm text-zinc-300">
                  <div className="rounded-2xl bg-white/5 px-4 py-4">
                    <p className="text-lg font-semibold text-white">Major: Bachelor of Science in Computer Science & Engineering (CSEG)</p>
                  </div>
                  <div className="rounded-2xl bg-white/5 px-4 py-4">
                    <p className="text-lg font-semibold text-white">Duration: 2026 - 2030</p>
                  </div>
                  <div className="rounded-2xl bg-white/5 px-4 py-4">
                    <p className="text-lg font-semibold text-white">GPA: 4.0</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
