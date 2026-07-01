import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { competitionPosts } from "@/data/posts";

const post = competitionPosts.find((item) => item.id === "first-tech-challenge-25-26");

export default function FirstTechChallenge2526() {
  if (!post) {
    return null;
  }

  return (
    <div className="min-h-screen bg-[#02040b] text-white">
      <Header />
      <main className="mx-auto max-w-6xl px-6 py-14">
        <section className="mb-10 rounded-[2rem] border border-white/10 bg-[#07101d]/80 p-10 shadow-[0_25px_120px_rgba(79,70,229,0.15)] backdrop-blur-xl">
          <Link href="/competitions" className="mb-6 inline-flex text-sm font-medium text-fuchsia-300 transition hover:text-fuchsia-100">
            ← Back to competitions
          </Link>
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-start">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-fuchsia-300">Competition</p>
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
            <div className="rounded-[2rem] border border-white/10 bg-[#08101f]/90 p-6 shadow-xl shadow-fuchsia-500/10">
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
        </section>
      </main>
      <Footer />
    </div>
  );
}
