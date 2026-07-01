import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { projectPosts } from "@/data/posts";

const post = projectPosts.find((item) => item.id === "ftc-2025-2026-offseason-robot");

export default function FirstTechChallenge2526OffseasonRobot() {
  if (!post) {
    return null;
  }

  return (
    <div className="min-h-screen bg-[#02040b] text-white">
      <Header />
      <main className="mx-auto max-w-6xl py-14">
          <Link href="/projects" className="mb-6 inline-flex text-sm font-medium text-cyan-300 transition hover:text-cyan-100">
            ← Back to projects
          </Link>
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-start">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Project</p>
              <h1 className="mt-4 text-5xl font-semibold text-white">{post.title}</h1>
              <p className="mt-6 text-lg leading-8 text-zinc-300">{post.description}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                {post.skills.map((skill) => (
                  <span key={skill} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-[#08101f]/90 p-6 shadow-xl shadow-cyan-500/10">
              <img src={post.image} alt={post.title} className="h-72 w-full rounded-[1.75rem] object-cover" />
              <div className="mt-6 space-y-4 text-sm text-zinc-300">
                <div className="rounded-2xl bg-white/5 px-4 py-4">
                  <p className="font-semibold text-white">Status</p>
                  <p className="mt-2">{post.status}</p>
                </div>
                <div className="rounded-2xl bg-white/5 px-4 py-4">
                  <p className="font-semibold text-white">Year</p>
                  <p className="mt-2">{post.date}</p>
                </div>
              </div>
            </div>
          </div>
      </main>
      <Footer />
    </div>
  );
}
