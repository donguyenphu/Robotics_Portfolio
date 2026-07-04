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
        <Link href="/competitions" className="mb-6 inline-flex text-sm font-medium text-fuchsia-300 transition hover:text-fuchsia-100">
          ← Back to competitions
        </Link>
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-fuchsia-300">Competition</p>
          <h1 className="mt-4 text-5xl font-semibold text-white">{post.title}</h1>
          <p className="mt-4 text-lg leading-8 text-white"><strong>Role:</strong> Lead Programmer</p>
          <p className="mt-2 text-lg leading-8 text-white"><strong>Scope:</strong> National</p>
          <p className="mt-2 text-lg leading-8 text-white"><strong>Timeline:</strong> 05/09/2025 - 30/01/2026</p>
          {/* I */}
          <h2 className="mt-4 text-2xl font-bold text-white">I. Competition Overview</h2>
          <p className="mt-2 text-lg leading-8 text-zinc-300">
            FIRST Tech Challenge (FTC) is an international robotics competition where students aged from 12 to 18 <strong className="text-fuchsia-300">design, build, program, and operate</strong> robots to compete in a dynamic, head-to-head alliance format . 
            DECODE™ presented by RTX is the archaeology-themed 2025–2026 game for the FIRST Tech Challenge, requiring <strong className="text-fuchsia-300">two-robot alliances</strong> to <strong className="text-fuchsia-300">rapidly collect, 
            sort, and score</strong> 36 purple and green sphere "artifacts" into <strong className="text-fuchsia-300">corner goals</strong>. 
            Robots navigate the playing field using <strong className="text-fuchsia-300">AprilTags of motifs</strong> to complete precise <strong className="text-fuchsia-300">sorting tasks</strong> across autonomous, tele-operated, and strategic end-game phases. 
            Take a look for more information at the FTC 2025-2026 game overview:
          </p>
          <div className="mt-2 flex gap-4 px-6 py-6 justify-center items-center">
            <iframe
              width="80%"
              height="600"
              src="https://www.youtube.com/embed/LCqWA6gSCXA"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen>
            </iframe>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
