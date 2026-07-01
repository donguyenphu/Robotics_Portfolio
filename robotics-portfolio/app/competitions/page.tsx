import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { getCompetitionPosts } from "@/data/posts";

export default function CompetitionsPage() {
  const posts = getCompetitionPosts();

  return (
    <div className="min-h-screen bg-[#02040b] text-white">
      <Header />
      <main className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-8 xl:grid-cols-2">
          {posts.map((post) => (
            <Link
              key={post.id}
              href={post.href}
              className="group overflow-hidden rounded-[2rem] border border-white/10 bg-[#08101f]/80 shadow-[0_20px_80px_rgba(79,70,229,0.12)] transition hover:-translate-y-1 hover:border-fuchsia-300/20"
            >
              <div className="relative h-64 overflow-hidden bg-slate-900">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#02040b]/90 via-transparent to-transparent" />
              </div>
              <div className="space-y-4 p-8">
                <div className="flex items-center justify-between gap-4">
                  <span className="inline-flex rounded-full bg-fuchsia-500/10 px-4 py-2 text-sm font-medium text-fuchsia-200">
                    Competition
                  </span>
                  <span className="text-sm text-zinc-400">{post.date}</span>
                </div>
                <h2 className="text-3xl font-semibold text-white">{post.title}</h2>
                <p dangerouslySetInnerHTML={{ __html: post.summary }} ></p>
                <div className="flex flex-wrap gap-3 pt-2">
                  {post.skills.map((skill) => (
                    <span key={skill} className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-zinc-300">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
