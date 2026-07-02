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
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Project</p>
          <h1 className="mt-4 text-5xl font-semibold text-white">{post.title}</h1>
          {/* I */}
          <h2 className="mt-8 text-2xl font-bold text-white">I. Project Overview</h2>
          <p className="mt-2 text-lg leading-8 text-zinc-300">The robot functions based on a seasonal robotics competition called: <strong className="text-cyan-300">FIRST Tech Challenge</strong>.
            DECODE™ presented by RTX is the archaeology-themed 2025–2026 game for the FIRST Tech Challenge,
            requiring two-robot alliances to <strong className="text-cyan-300">rapidly collect, sort, and score 36 purple and green sphere "artifacts" into corner goals</strong>.
            Robots navigate the playing field using <strong className="text-cyan-300">AprilTags</strong> to complete <strong className="text-cyan-300">precise sorting</strong> tasks across autonomous, tele-operated, and strategic end-game phases.
            Take a look at the FTC 2025-2026 game overview:</p>
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
          {/* II */}
          <h2 className="mt-2 text-2xl font-bold text-white">II. Ideation & Concept Selection </h2>
          <p className="mt-2 text-lg leading-8 text-zinc-300">Throughout the preparation for the season, after analysing the game and optimizing scoring tactics, our team ,<strong className="text-cyan-300"> 32360 </strong>, came up with the final design (V1)</p>
          <table className="mt-6 w-[90%] border-collapse border border-white/10 text-left text-lg text-zinc-300 m-auto">
            <thead>
              <tr className="border-b border-white/10 bg-white/5">
                <th className="px-4 py-2 text-left text-lg font-semibold text-white w-[20%]">Design Aspect</th>
                <th className="px-4 py-2 text-left text-lg font-semibold text-white w-[63%]">Description</th>
                <th className="px-4 py-2 text-left text-lg font-semibold text-white w-[17%]">Image</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-white/10">
                <td className="px-4 py-1 font-medium text-white">Chassis & Drivetrain</td>
                <td className="px-4 py-1">Built-in Gobilda Strafer Chassis 104mm for <strong className="text-cyan-300">fast and simple set up</strong> and many <strong className="text-cyan-300">convenient mounting holes</strong></td>
                <td className="px-4 py-1">
                  <img src="/Bucknell University Logo.png" alt="Chassis & Drivetrain" className="w-50% h-auto" />
                </td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="px-4 py-1 font-medium text-white">Intake System</td>
                <td className="px-4 py-1">Rubber-band intake with <strong className="text-cyan-300">5mm compression</strong> using Ultraplanetary Motor with one <strong className="text-cyan-300">3:1 gearbox</strong> for ensuring enough <strong className="text-cyan-300">torque (force) and speed (smoothness)</strong></td>
                <td className="px-4 py-1">
                  <img src="/Bucknell University Logo.png" alt="Intake System" className="w-50% h-auto" />
                </td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="px-4 py-1 font-medium text-white">Sensors & Navigation</td>
                <td className="px-4 py-1">Color sensor V3 for <strong className="text-cyan-300">detecting artifact’s color</strong>, supporting the inner spindex to <strong className="text-cyan-300">store artifact in right match’s motif</strong>, which is detected using a C270 camera</td>
                <td className="px-4 py-1">
                  <img src="/Bucknell University Logo.png" alt="Sensors & Navigation" className="w-50% h-auto" />
                </td>
              </tr>
              <tr>
                <td className="px-4 py-1 font-medium text-white">Tracking & Scoring</td>
                <td className="px-4 py-1">1:3 ratio Turret for <strong className="text-cyan-300">tracking the Goal’s April Tag</strong>, locking the shooter position to the goal and Hood-angle style shooter using <strong className="text-cyan-300">1:10 angle ratio</strong>, 1 motor to control velocity, and <strong className="text-cyan-300">7mm artifact compression</strong> for <strong className="text-cyan-300">balancing output velocity and motor load</strong></td>
                <td className="px-4 py-1">
                  <img src="/Bucknell University Logo.png" alt="Scoring Mechanism" className="w-50% h-auto" />
                </td>
              </tr>
            </tbody>
          </table>
          <p className="mt-4 text-lg leading-8 text-zinc-300">However, after testing, there were several problems:</p>
          <p className="text-lg leading-8 text-zinc-300">1. Intake</p>
          <p className="text-lg leading-8 text-zinc-300">With a high <strong className="text-cyan-300">76mm offset</strong> from ground of base plate, the motor intake has to output roughly <strong className="text-cyan-300">1950 - 2200 RPM</strong> to successfully grab the artifact, thereby causing <strong className="text-cyan-300">wobbling and instability</strong> of intake</p>
          <p className="text-lg leading-8 text-zinc-300">2. Spindexer</p>
          <p className="text-lg leading-8 text-zinc-300">Even though the latency of color sensor is <strong className="text-cyan-300">not considerable (25ms compared to 60ms-170ms of intaking)</strong>, the <strong className="text-cyan-300">unstable structure</strong> of intake and <strong className="text-cyan-300">slipping in contact</strong> of base plate (aluminium) and artifact (EVA - like foam composite)</p>
          <p className="text-lg leading-8 text-zinc-300">3. Tracking & Scoring</p>
          <p className="text-lg leading-8 text-zinc-300">
            Using 1 motor cause <strong className="text-cyan-300">unequal force diffusing</strong> and also <strong className="text-cyan-300">slow recovery speed</strong>, increasing time each scoring cycle
            <br></br>
            The gear ratio 1:10 cause <strong className="text-cyan-300">limited available angle</strong> ([0-180] for angle Servo to [0,18] for shooter)  and also <strong className="text-cyan-300">slow state changing</strong> each loop
          </p>
          {/* III */}
          <h2 className="mt-2 text-2xl font-bold text-white">III. Detailed Engineering</h2>
          <p className="text-lg leading-8 text-zinc-300">1. Chassis</p>
          <div className="flex gap-4 items-center">
            <div className="w-[80%]">
              <p className="text-lg leading-8 text-zinc-300">Realizing the problem of having a big chassis led to <strong className="text-cyan-300">shortage of intaking space</strong> and <strong className="text-cyan-300">high intaking ramp</strong>,
                I decided to make a custom drivetrain to fix these disadvantages with the <strong className="text-cyan-300">width</strong> and <strong className="text-cyan-300">length</strong> optimized by <strong className="text-cyan-300">38.3%</strong> and <strong className="text-cyan-300">1.36%</strong></p>
            </div>
            <div className="w-[20%]">
              <img src="/Bucknell University Logo.png" className="w-full h-auto object-cover" />
            </div>
          </div>
          <p className="text-lg leading-8 text-zinc-300">2. Intake</p>
          <p className="text-lg leading-8 text-zinc-300">The only disadvantages of rubberband and fully TPU intake is cannot grabbing artifact in <strong className="text-cyan-300">multi direction</strong>, increasing intake time. I moved to the combination of <strong className="text-cyan-300">vectored and TPU wheels</strong>, which will be explained more clearly in the <strong className="text-cyan-300">IV. Validation & Versions</strong></p>
          <p className="text-lg leading-8 text-zinc-300">3. Ramp && Transfer system</p>
          <div className="flex gap-4 items-center">
            <div className="w-[80%]">
              <p className="text-lg leading-8 text-zinc-300">With the the problem of the indexer size and also time - point strategy (<strong className="text-cyan-300">balance</strong> speed and score instead off <strong className="text-cyan-300">all-in</strong> a perfect score),
                I decided to remove the trefoil indexer and switched to a <strong className="text-cyan-300">ramp</strong> to the shooter to  <strong className="text-cyan-300">transfer the artifact</strong> using intake motor and GT3 belts, which connects layer of transferring the artifact and a gate launcher to <strong className="text-cyan-300">block/release the artifacts</strong> to the shooter</p>
            </div>
            <div className="space-y-3 w-[20%]">
              <img src="/Bucknell University Logo.png" className="w-full h-50% object-cover" />
              <img src="/Bucknell University Logo.png" className="w-full h-50% object-cover" />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
