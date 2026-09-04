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
          <div className="mt-2 flex gap-4 px-6 py-6 justify-center items-center">
            <div className="w-[70%]">
              <p className="mt-2 text-lg leading-8 text-zinc-300">
                My team is 32360 - RedFlame HaiPhong Robotics Team, a rookie team of 14 people with <strong className="text-fuchsia-300">3 in Electronic/Programming, 6 in Design/Assembly, 5 in Outreach/Media</strong>.
                During 4-month preparation before Scrimmage and 5-month preparation before the National Championship, we had many iterations. Ending up 2 events,
                We had <strong className="text-fuchsia-300">1 Innovate Award and FIRST Leadership Award in National Championship</strong> and <strong className="text-fuchsia-300">Winning Alliance 1st Pick + First Prize (Product Presentation) in the Scrimmage</strong>. However,
                with a limited budget and continuous exams, we ended up having many mistakes. Let’s take a look at our Statistics in  the National Championship
              </p>
            </div>
            <div className="w-[30%]">
              <img className="w-full h-full object-cover rounded-[15px]" src="/c1/RedflameTeam.png" alt="Team Image" />
            </div>
          </div>
          <div className="p-3">
            <img className="w-full h-full object-cover rounded-[15px]" src="/c1/Birdwatch.png" alt="Team Image" />
          </div>
          <h6 className="text-md font-bold text-center">
            Data from
            <Link
              href="https://ftcbirdwatch.com/"
              className="text-fuchsia-600"
            >
              <strong>FTC Birdwatch</strong>
            </Link>
          </h6>
          {/* II */}
          <h2 className="mt-4 text-2xl font-bold text-white">II. The Competition Robot: Subsystem Deep-Dives</h2>
          <p className="mt-2 text-lg leading-8 text-zinc-300">
            For more information of our Engineering Notebook, please view <Link href="https://www.canva.com/design/DAHHjE0Alb0/wUdVJnNj3pj1GR4oE_7Khw/edit">
              <strong className="text-fuchsia-600">Here!</strong>
            </Link>
          </p>
          <p className="mt-2 text-lg leading-8 text-zinc-300">After the season, here’s our stats:</p>
          <div className="m-auto grid gap-4 sm:grid-cols-1 lg:grid-cols-4">
            {[
              { value: "2", label: "Competitions" },
              { value: "4", label: "Awards Received" },
              { value: "6/8", label: "wins in Scrimmage" },
              { value: "3/6", label: "wins in National Championship" },
            ].map((stat) => (
              <div key={stat.label} className="w-full m-auto rounded-[1.75rem] border border-white/10 bg-[#08101f]/90 px-8 py-8 text-center shadow-[0_15px_60px_rgba(15,23,42,0.25)]">
                <p className="text-5xl font-semibold text-white">{stat.value}</p>
                <p className="mt-2 text-sm uppercase tracking-[0.25em] text-cyan-300">{stat.label}</p>
              </div>
            ))}
          </div>
          {/* III */}
          <h2 className="mt-4 text-2xl font-bold text-white">III. Failure Analysis</h2>
          <p className="mt-2 text-xl leading-8 text-white">1. Scope creep </p>
          <p className="mt-2 text-lg leading-8 text-zinc-300">
            As a rookie, we analyzed the robot’s mechanisms and overlooked the <strong className="text-fuchsia-300">point analysis</strong> and <strong className="text-fuchsia-300">scope definition</strong>.
          </p>
          <p className="mt-2 text-lg leading-8 text-zinc-300">
            At the start of implementing and manufacturing the robot, we built it with <strong className="text-fuchsia-300">all the required functions</strong> to <strong className="text-fuchsia-300">score all points criteria</strong> of the season,
            which <strong className="text-fuchsia-300">nearly all teams didn’t do</strong>. Here are some popular <strong className="text-fuchsia-300">trade-offs</strong>:
          </p>
          <div className="mt-2 space-y-6 text-sm text-zinc-300">
            <div className="rounded-2xl bg-white/5 px-4 py-4">
              <p className="text-lg font-semibold text-white leading-8">
                According to this season, If the ball (artifact)’s color <strong className="text-fuchsia-600">matches the motif, it would be 5 points</strong>. Otherwise, it would be <strong className="text-fuchsia-600">3 points</strong>.
              </p>
              <p className="text-lg font-semibold text-white leading-8 mt-6">
                For a spindexer (sorted) robot <strong className="text-fuchsia-600">(cycle: 5 - 7 seconds)</strong>:
                <br/>
                • 3 for leaving
                <br/>
                • 5 + 5 + 3 for pre-loaded artifacts
                <br/>
                • 5 + 5 + 5 for first motif
                <br/>
                • 5 + 5 + 5 for second motif
                <br/>
                • 5 + 5 + 5 for third motif
                <br/>
                •{'>'} Total of <strong className="text-fuchsia-600">61 points</strong>
                <br/>
                For a ramp (no sorted) robot <strong className="text-fuchsia-600">(cycle: 3 - 6 seconds)</strong>:
                <br/>
                • 3 for leaving
                <br/>
                • 5 + 5 + 3 for pre-loaded artifacts
                <br/>
                • 5 + 3 + 3 for first motif
                <br/>
                • 5 + 3 + 3 for second motif
                <br/>
                • 5 + 5 + 5 for third motif (matched)
                <br/>
                + The scored motif doesn’t match the required (for example: GGP instead of PPG): 3 + 3 + 3 for fourth motif (open gate to take the artifact)
                <br/>
                + The scored motif matches all the required: 5 + 5 + 5 for fourth motif (open gate to take the artifact)
                <br/>
                -{'>'} Total of <strong className="text-fuchsia-600">62 points (worst case)</strong> and <strong className="text-fuchsia-600">68 points (best case)</strong>
              </p>
              <p className="text-lg font-semibold text-white leading-8 mt-6">
                Not counting many other factors <strong className="text-fuchsia-600">(the alliance can score together during teleop so the chance of matching motifs is very low, getting blocked while scoring,
                more complicated code and needing more time for trial and error,...)</strong>, removing the sorted strategy is one of the best trade-offs for this season
              </p>
            </div>
            <div className="rounded-2xl bg-white/5 px-4 py-4">
              <p className="text-lg font-semibold text-white">
                Instead of using Limelight 3A or Camera to track the goals, they use robot’s heading from Pinpoint or Control Hub to track the goals and manually align the robot’s turret to the goal (there could be an error of 4-8 degrees throughout the match, but the efficiency is considerable with 5 times less in latency, less wiring, saving battery, and simplifying the code)
              </p>
            </div>
          </div>
          <p className="mt-8 text-xl leading-8 text-white-300">2. Lack of material experience </p>
          <p className="mt-2 text-lg leading-8 text-zinc-300">
            <strong className="text-fuchsia-300">The shooter holder</strong> should be <strong className="text-fuchsia-300">rigid and durable</strong> to avoid wobbling during scoring time, when the shelf is hugely impacted by high motor velocity.
            Instead of using lightweight metal (<strong className="text-fuchsia-300">typically 3-4mm Aluminum alloy</strong>), we used <strong className="text-fuchsia-300">PLA</strong> and later found the holder <strong className="text-fuchsia-300">sagged down</strong> even though <strong className="text-fuchsia-300">being strengthened by a 3mm Aluminum sheet.</strong>
          </p>
          <p className="mt-8 text-xl leading-8 text-white">3. Limited budget </p>
          <p className="mt-2 text-lg leading-8 text-zinc-300">
            As a rookie team with no prizes, we <strong className="text-fuchsia-300">didn’t get any sponsorships</strong> this season. Most of our team budget came from monthly contributions of team members. This led to <strong className="text-fuchsia-300">many mistakes</strong> we made during the building period.
          </p>
          <p className="mt-8 text-xl leading-8 text-white">4. Lack of contribution from members </p>
          <p className="mt-2 text-lg leading-8 text-zinc-300">
            This is the most brutal part. <strong className="text-fuchsia-300">9 out of 14 members</strong> (<strong className="text-fuchsia-300">7 out of 10 members</strong> in the Technical Department) are seniors.
            <strong className="text-fuchsia-300">Consecutive exams</strong> and <strong className="text-fuchsia-300">college applications</strong> considerably impacted the time for building processes. Most of the time is only <strong className="text-fuchsia-300">2-3 hours after classes each day</strong>,
            leading to insufficient time for brainstorming and building.
          </p>
          <p className="mt-8 text-xl leading-8 text-white">5. Did not use any simulation platform </p>
          <p className="mt-2 text-lg leading-8 text-zinc-300">
            For FTC, we have 2 popular simulation platforms for testing both Teleoperate and Autonomous code:
            <Link
              href="https://sim.vrobotsim.online/programpage.html"
              className="text-fuchsia-600 hover:text-blue-600"
            >
              <strong> VRS: Programming</strong>
            </Link>
            <strong className="text-fuchsia-300"> (Doesn’t support the Roadrunner library but has IMU for Odometry support)</strong> and
            <Link
              href="https://ftcsim.org/"
              className="text-fuchsia-600 hover:text-blue-600"
            >
              <strong> FTCSIM</strong>
            </Link><strong className="text-fuchsia-300"> (Supports Gamepad Teleoperate)</strong>.
            However, we didn’t know that; therefore, the programming team has <strong className="text-fuchsia-300">nothing to work on when they are not with the robot.</strong>
          </p>
          <p className="mt-10 text-xl leading-8 text-zinc-300">After <strong className="text-fuchsia-600">FTC 2025-2026: DECODE</strong>, the two most valuable lessons I have learned are:</p>
          <div className="mt-2 space-y-6 text-sm text-zinc-300">
            <div className="rounded-2xl bg-white/5 px-4 py-4">
              <p className="text-lg font-semibold text-white leading-8">A machine <strong className="text-fuchsia-600">may lack some functions</strong>, but if <strong className="text-fuchsia-600">the functions it has run stably</strong>,
                it is still much better than <strong className="text-fuchsia-600">an over-engineered product</strong> with <strong className="text-fuchsia-600">none of its functions working well</strong>.
              </p>
            </div>
            <div className="rounded-2xl bg-white/5 px-4 py-4">
              <p className="text-lg font-semibold text-white">No matter how skilled you are,
                you <strong className="text-fuchsia-600">alone cannot achieve the success</strong> of a team that <strong className="text-fuchsia-600">lacks cooperation and cohesion</strong>.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
