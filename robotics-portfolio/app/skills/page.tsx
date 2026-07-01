"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { allPosts } from "@/data/posts";

export default function SkillsPage() {
  const [query, setQuery] = useState("");

  const normalizedQuery = query.trim().toLowerCase();
  const filteredPosts = useMemo(() => {
    if (!normalizedQuery) {
      return allPosts;
    }

    return allPosts.filter((post) =>
      post.skills.some((skill) => skill.toLowerCase().includes(normalizedQuery))
    );
  }, [normalizedQuery]);

  return (
    <div className="min-h-screen bg-[#02040b] text-white">
      <Header />
      <main className="mx-auto max-w-7xl px-6 py-14">
        <section className="mb-12 rounded-[2rem] border border-white/10 bg-[#07101d]/80 p-10 shadow-[0_25px_120px_rgba(79,70,229,0.15)] backdrop-blur-xl">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Skills</p>
          <h1 className="mt-4 text-5xl font-semibold text-white">Search related projects and competitions</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-zinc-300">
            Type one of the attached skills below to find matching posts from the projects and competitions index.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:max-w-xl">
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Try ROS, Python, MATLAB, Control Systems..."
              className="w-full rounded-3xl border border-white/10 bg-[#0b1626]/90 px-5 py-4 text-lg text-white outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
            />
            <p className="text-sm text-zinc-400">
              {normalizedQuery.length > 0
                ? `Showing ${filteredPosts.length} post${filteredPosts.length === 1 ? "" : "s"} matching "${query}".`
                : "Showing all posts. Search by skill to filter."}
            </p>
          </div>
        </section>

        <div className="grid gap-8 xl:grid-cols-2">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <Link
                key={post.id}
                href={post.href}
                className="group overflow-hidden rounded-[2rem] border border-white/10 bg-[#08101f]/80 shadow-[0_20px_80px_rgba(79,70,229,0.12)] transition hover:-translate-y-1 hover:border-cyan-300/20"
              >
                <div className="relative h-60 overflow-hidden bg-slate-900">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#02040b]/90 via-transparent to-transparent" />
                </div>
                <div className="space-y-4 p-8">
                  <div className="flex items-center justify-between gap-4">
                    <span
                      className={`inline-flex rounded-full px-4 py-2 text-sm font-medium ${
                        post.category === "project"
                          ? "bg-cyan-400/10 text-cyan-200"
                          : "bg-fuchsia-500/10 text-fuchsia-200"
                      }`}
                    >
                      {post.category === "project" ? "Project" : "Competition"}
                    </span>
                    <span className="text-sm text-zinc-400">{post.date}</span>
                  </div>
                  <h2 className="text-3xl font-semibold text-white">{post.title}</h2>
                  <p className="text-base leading-7 text-zinc-300">{post.summary}</p>
                  <div className="flex flex-wrap gap-3 pt-2">
                    {post.skills.map((skill) => (
                      <span key={skill} className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-zinc-300">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <div className="rounded-[2rem] border border-white/10 bg-[#08101f]/80 p-10 text-center text-zinc-300 shadow-[0_20px_80px_rgba(79,70,229,0.12)]">
              <p className="text-xl font-semibold text-white">No posts matched that skill.</p>
              <p className="mt-4 text-sm leading-7">Try a different keyword like ROS, Python, MATLAB, or Computer Vision.</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
