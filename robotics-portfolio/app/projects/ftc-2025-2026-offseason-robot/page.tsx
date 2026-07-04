import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { projectPosts } from "@/data/posts";
import Carousel from "@/components/Carousel";

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
          <div className="mt-2 flex gap-2 px-6 py-6 justify-center items-center">
            <div className="w-[65%]">
              <table className="mt-6 w-[90%] border-collapse border border-white/10 text-left text-lg text-zinc-300 m-auto">
                <thead>
                  <tr className="border-b border-white/10 bg-white/5">
                    <th className="px-4 py-2 text-left text-lg font-semibold text-white w-[20%]">Design Aspect</th>
                    <th className="px-4 py-2 text-left text-lg font-semibold text-white w-[55%]">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-white/10">
                    <td className="px-4 py-3 font-medium text-white">Chassis & Drivetrain</td>
                    <td className="px-4 py-3">Built-in Gobilda Strafer Chassis 104mm for <strong className="text-cyan-300">fast and simple set up</strong> and many <strong className="text-cyan-300">convenient mounting holes</strong></td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="px-4 py-3 font-medium text-white">Intake System</td>
                    <td className="px-4 py-3">Rubber-band intake with <strong className="text-cyan-300">5mm compression</strong> using Ultraplanetary Motor with one <strong className="text-cyan-300">3:1 gearbox</strong> for ensuring enough <strong className="text-cyan-300">torque (force) and speed (smoothness)</strong></td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="px-4 py-3 font-medium text-white">Sensors & Navigation</td>
                    <td className="px-4 py-3">Color sensor V3 for <strong className="text-cyan-300">detecting artifact’s color</strong>, supporting the inner spindex to <strong className="text-cyan-300">store artifact in right match’s motif</strong>, which is detected using a C270 camera</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-white">Tracking & Scoring</td>
                    <td className="px-4 py-3">1:3 ratio Turret for <strong className="text-cyan-300">tracking the Goal’s April Tag</strong>, locking the shooter position to the goal and Hood-angle style shooter using <strong className="text-cyan-300">1:10 angle ratio</strong>, 1 motor to control velocity, and <strong className="text-cyan-300">7mm artifact compression</strong> for <strong className="text-cyan-300">balancing output velocity and motor load</strong></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="w-[35%]">
              <Carousel autoPlayInterval={5000} />
            </div>
          </div>

          <p className="mt-4 text-lg leading-8 text-zinc-300">However, after testing, there were several problems:</p>
          <p className="text-lg leading-8 text-zinc-300">1. Intake</p>
          <p className="text-lg leading-8 text-zinc-300">● With a high <strong className="text-cyan-300">76mm offset</strong> from ground of base plate, the motor intake has to output roughly <strong className="text-cyan-300">1950 - 2200 RPM</strong> to successfully grab the artifact, thereby causing <strong className="text-cyan-300">wobbling and instability</strong> of intake</p>
          <p className="text-lg leading-8 text-zinc-300">2. Spindexer</p>
          <p className="text-lg leading-8 text-zinc-300">● Even though the latency of color sensor is <strong className="text-cyan-300">not considerable (25ms compared to 60ms-170ms of intaking)</strong>, the <strong className="text-cyan-300">unstable structure</strong> of intake and <strong className="text-cyan-300">slipping in contact</strong> of base plate (aluminium) and artifact (EVA - like foam composite)</p>
          <p className="text-lg leading-8 text-zinc-300">3. Tracking & Scoring</p>
          <p className="text-lg leading-8 text-zinc-300">
            ● Using 1 motor cause <strong className="text-cyan-300">unequal force diffusing</strong> and also <strong className="text-cyan-300">slow recovery speed</strong>, increasing time each scoring cycle
            <br></br>
            The gear ratio 1:10 cause <strong className="text-cyan-300">limited available angle</strong> ([0-180] for angle Servo to [0,18] for shooter)  and also <strong className="text-cyan-300">slow state changing</strong> each loop
          </p>
          {/* III */}
          <h2 className="mt-2 text-2xl font-bold text-white">III. Detailed Engineering</h2>
          <p className="mt-4 text-lg leading-8 text-zinc-300">1. Chassis</p>
          <div className="flex gap-4 items-center">
            <div className="w-[70%]">
              <p className="text-lg leading-8 text-zinc-300">Realizing the problem of having a big chassis led to <strong className="text-cyan-300">shortage of intaking space</strong> and <strong className="text-cyan-300">high intaking ramp</strong>,
                I decided to make a custom drivetrain to fix these disadvantages with the <strong className="text-cyan-300">width</strong> and <strong className="text-cyan-300">length</strong> optimized by
                <strong className="text-cyan-300">38.3%</strong> and <strong className="text-cyan-300">1.36%</strong>. I also use FeatureScript Vent to <strong className="text-cyan-300">lighten</strong> the aluminum but still ensure the <strong className="text-cyan-300">structural integrity</strong>, reducing <strong className="text-cyan-300">56%</strong> of chassis’s weight

              </p>
            </div>
            <div className="w-[30%]">
              <img src="/p1/Chassis.png" className="w-full h-auto object-cover" />
            </div>
          </div>
          <p className="mt-4 text-lg leading-8 text-zinc-300">2. Intake</p>
          <div className="flex gap-8 items-center">
            <div className="w-[60%]">
              <p className="text-lg leading-8 text-zinc-300">● The only disadvantages of rubberband and fully TPU intake is cannot grabbing artifact in <strong className="text-cyan-300">multi direction</strong>, increasing intake time. I moved to the combination of <strong className="text-cyan-300">vectored and TPU wheels</strong>, which will be explained more clearly in the <strong className="text-cyan-300">IV. Validation & Versions</strong></p>
              <p className="text-lg leading-8 text-zinc-300">● For both versions, I use flexible intake for <strong className="text-cyan-300">deforming around the ball</strong>, effectively increasing the <strong className="text-cyan-300">capture area</strong> using <strong className="text-cyan-300">Linkage Mechanism</strong></p>
            </div>
            <div className="w-[40%]">
              <video
                className="h-[80%] w-auto rounded-xl shadow-lg"
                controls
              >
                <source src="/p1/Linkage.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          <p className="mt-4 text-lg leading-8 text-zinc-300">3. Ramp && Transfer system</p>
          <div className="flex gap-8 items-center">
            <div className="w-[30%]">
              <p className="text-lg leading-8 text-zinc-300">With the the problem of the indexer size and also time - point strategy (<strong className="text-cyan-300">balance</strong> speed and score instead off <strong className="text-cyan-300">all-in</strong> a perfect score),
                I decided to remove the trefoil indexer and switched to a <strong className="text-cyan-300">ramp</strong> to the shooter to  <strong className="text-cyan-300">transfer the artifact</strong> using intake motor and GT3 belts, which connects layer of transferring the artifact and a gate launcher to <strong className="text-cyan-300">block/release the artifacts</strong> to the shooter</p>
            </div>
            <div className="flex gap-4 space-y-3 w-[70%] items-center">
              <div>
                <img src="/p1/Ramp.PNG" className="w-full h-auto object-cover" />
              </div>
              <div>
                <img src="/p1/Gate.png" className="w-full h-auto object-cover" />
              </div>
            </div>
          </div>
          <p className="mt-4 text-lg leading-8 text-zinc-300">4. Turret & Tracking</p>
          <div className="flex gap-4 items-center">
            <div className="w-[75%]">
              <p className="text-lg leading-8 text-zinc-300">
                ● Utilizing the very low <strong className="text-cyan-300">latency</strong> of Pinpoint, the robot’s <strong className="text-cyan-300">localizer</strong>, with the speed of updating delta angle <strong className="text-cyan-300">5 - 10</strong> times faster than vision cameras, can continuously track the goal without <strong className="text-cyan-300">jerking or lagging</strong>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                ● Due to rotational inertia that require <strong className="text-cyan-300">high resisting torque</strong> and <strong className="text-cyan-300">continuous tracking speed</strong>, which is much higher than any servo, I changed to a REV Ultraplanetary Motor for <strong className="text-cyan-300">flexible torque using removable gearboxes</strong>
              </p>
            </div>
            <div className="w-[25%] space-y-2">
              <div className="w-full h-[80%]">
                <img src="/p1/Pinpoint.png" className="w-full h-full object-cover" />
              </div>
              <div className="w-full h-[20%]">
                <img src="/p1/Turret.png" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
          <p className="mt-4 text-lg leading-8 text-zinc-300">5. Shooter</p>
          <div className="flex gap-4 items-center">
            <div className="w-[50%]">
              <p className="text-lg leading-8 text-zinc-300">
                ● To reduce the <strong className="text-cyan-300">state changing time</strong> of hood angle, I decided to use directly the <strong className="text-cyan-300">Servo Horn</strong> as the angle changer instead of through hood gear like  1 : 10 or 1 : 5 ratio shooter as previous version and use the 180 Degree Servo for <strong className="text-cyan-300">locking and preventing angle loss</strong>
              </p>
              <p className="text-lg leading-8 text-zinc-300">
                ● I used GT3 belt for 2 shooter motors for <strong className="text-cyan-300">better torque</strong> instead of GT2 for precise movement of modules like drivetrain.
              </p>
              <p className="text-lg leading-8 text-zinc-300">
                ● I changed from 1 to 2 motor shooters for <strong className="text-cyan-300">reduce recovery time</strong>, <strong className="text-cyan-300">increase torque</strong>, and <strong className="text-cyan-300">minimize the velocity drop</strong>
              </p>
            </div>
            <div className="flex gap-4 w-[50%] space-y-2 items-center">
              <div className="w-full h-[80%]">
                <img src="/p1/Angle.png" className="w-full h-full object-cover" />
              </div>
              <div className="w-full h-[20%]">
                <img src="/p1/ShooterMotor.png" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
          <p className="mt-4 text-lg leading-8 text-zinc-300">6. Half-parking</p>
          <div className="flex gap-4 items-center">
            <div className="w-[60%]">
              <p className="mt-4 text-lg leading-8 text-zinc-300">
                ● According to this season’s game manual, the robot’s full parking at the <strong className="text-cyan-300">end game period</strong> is legal if none of the robot’s part exceeds the <strong className="text-cyan-300">18x18 inches</strong> parking area
                <br></br>
                -&gt; The robot need a parking mechanism to <strong className="text-cyan-300">lift it up partially</strong> to safely have a full parking in short time. I use <strong className="text-cyan-300">Rotary Leg</strong> mechanism using 2 Servos for double the torque and equally force distributing
              </p>
            </div>
            <div className="w-[40%]">
              <video
                className="h-[80%] w-auto rounded-xl shadow-lg"
                controls
              >
                <source src="/p1/Rotary_Leg.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          {/* IV */}
          <h2 className="mt-2 text-2xl font-bold text-white">IV. Validation & Versions</h2>
          <p className="mt-2 text-lg leading-8 text-zinc-300">On the process of building the final version, I made some iterations:</p>
          <p className="mt-2 text-lg leading-8 text-zinc-300">1. Intake</p>
          <div className="flex gap-4 items-center">
            <div className="w-[75%]">
              <p className="mt-2 text-lg leading-8 text-zinc-300">
                ● <strong>V2:</strong> After the rubber-band intake that is ineffective in a high intake ramp of V1, I switched to TPU, which is <strong className="text-cyan-300">easy to make, flexible, and suitable</strong> to the material of the ball (EVA’s foam), thereby grabbing the artifact at high speed
              </p>
            </div>
            <div className="w-[25%]">
              <img src="/p1/TPU.PNG" className="w-full aspect-[3/2] object-cover" />
            </div>
          </div>
          <div className="flex gap-4 mt-4 items-center">
            <div className="w-[60%]">
              <p className="mt-2 text-lg leading-8 text-zinc-300">
                However, The fully TPU intake wheel’s force direction is <strong className="text-cyan-300">centralized marginally</strong>, making the movement not optimal
              </p>
            </div>
            <div className="w-[40%]">
              <img src="/p1/TPU_Direction.png" className="w-full h-auto object-cover" />
            </div>
          </div>
          <div className="flex gap-4 mt-4 items-center">
            <div className="w-[70%]">
              <p className="mt-2 text-lg leading-8 text-zinc-300">
                ● <strong>V3:</strong> Inspired by the <strong className="text-cyan-300">flexible and multi-directional</strong> movement of the mecanum wheel, I replaced the TPU wheel on the funnel exposing area with <strong className="text-cyan-300">vectored wheel</strong>, which is also customizable and easy to make using 3D print to make it the
                <strong className="text-cyan-300"> ball's direction centralized</strong>, <strong className="text-cyan-300">faster</strong>, and <strong className="text-cyan-300">smoother</strong>
              </p>
            </div>
            <div className="w-[30%]">
              <img src="/p1/Vectored.png" className="w-full h-auto object-cover" />
            </div>
          </div>
          <p className="mt-2 text-lg leading-8 text-zinc-300">2. Transfer</p>
          <p className="text-lg leading-8 text-zinc-300">● Layer 1</p>
          <div className="flex gap-4 mt-4 items-center">
            <div className="w-[70%]">
              <p className="text-lg leading-8 text-zinc-300">I decided to make a tassels transfering layer because of the <strong className="text-cyan-300">flexibility</strong> and <strong className="text-cyan-300">passively gripping</strong> of 3 rubber stick each tassel</p>
            </div>
            <div className="w-[30%]">
              <img src="/p1/Tassels.png" className="w-full h-auto aspect-[40/21] object-cover" />
            </div>
          </div>
          <p className="text-lg leading-8 text-zinc-300">● Layer 2</p>
          <div className="flex gap-4 mt-4 items-center">
            <div className="w-[70%]">
              <p className="text-lg leading-8 text-zinc-300">With the same structure as the vectored + TPU wheel intake, I make side transfer as helical gear to <strong className="text-cyan-300">redirect</strong> the ball to the center and spur gear to <strong className="text-cyan-300">directly transfer</strong> to the shooter</p>
            </div>
            <div className="w-[30%]">
              <img src="/p1/Helical.png" className="w-full h-auto object-cover" />
            </div>
          </div>
          <p className="mt-2 text-lg leading-8 text-zinc-300">3. Turret</p>
          <p className="mt-2 text-lg leading-8 text-zinc-300">● Using mass properties and data from external part’s store, The total weight is: <strong className="text-cyan-300">P<sub>shooter</sub> &asymp; 31.5(N)</strong>
            <br></br>
            ● With 1 : 3 gear ratio for <strong className="text-cyan-300">space-saving</strong> and <strong className="text-cyan-300">torque-reducing</strong>, the actual needed force is: <strong className="text-cyan-300">P<sub>actual</sub> &asymp; 10.5 (N)</strong>
            <br></br>
            ● With center of mass to pivot point distance: <strong className="text-cyan-300">r<sub>pivot</sub> &asymp; 0.202 (m)</strong>
            <br></br>
            &rarr; <strong className="text-cyan-300">T<sub>needed</sub> = r<sub>pivot</sub> * P<sub>actual</sub> &asymp; 2.121 (N.m)</strong>
          </p>
          <p className="mt-2 text-lg leading-8 text-zinc-300">
            ● <strong>Option 1: REV Smart Robot Servo</strong>
            <br></br>
            Although the stall torque is <strong className="text-cyan-300">3.4 (N.m)</strong>, its speed can’t meet the requirement
          </p>
          <p className="mt-2 text-lg leading-8 text-zinc-300">
            ● <strong>Option 2: REV Ultraplanetary Motor</strong>
            <br></br>
            With the beginning torque of <strong className="text-cyan-300">0.105 (N.m)</strong> adding <strong className="text-cyan-300">two 5:1 cartridge gearboxes</strong>, the output torque is safe and also meet the speed requirement
          </p>
          <p className="mt-2 text-lg leading-8 text-zinc-300">4. Shooter</p>
          <strong><p className="text-lg leading-8 text-zinc-300">Version 2: We optimized the version from V1 disadvantages to:</p></strong>
          <div className="flex gap-4 items-center">
            <div className="w-[70%]">
              <ul>
                <li>
                  <p className="mt-2 text-lg leading-8 text-zinc-300">● 1 shooter: 2 shooter for equally force distributing and increasing recovery by doubling the torque</p>
                </li>
                <li>
                  <p className="mt-2 text-lg leading-8 text-zinc-300">● High latency of C270: Replace with Limelight 3A with only ⅓ the latency <strong className="text-cyan-300">(33ms reduced to 11ms)</strong> and <strong className="text-cyan-300">better resolution</strong></p>
                </li>
                <li>
                  <p className="mt-2 text-lg leading-8 text-zinc-300">● Hood Angle: Reduced from <strong className="text-cyan-300">1:10 &rarr; 1:5</strong> ratio with AXON MAX servo (achieved <strong className="text-cyan-300">94% velocity</strong> in worst case screnario)</p>
                </li>
              </ul>
              <p className="mt-2 text-lg leading-8 text-zinc-300">However, with <strong className="text-cyan-300">limited angle</strong> and <strong className="text-cyan-300">angle loss</strong> from ball colliding without remodifying, I switched to a new version</p>
            </div>
            <div className="w-[30%] flex justify-center">
              <img src="/p1/Shooter_V2.png" className="w-[90%]" />
            </div>
          </div>
          <strong><p className="mt-4 text-lg leading-8 text-zinc-300">Version 3: We optimized the version from V2 disadvantages to:</p></strong>
          <div className="flex gap-4 items-center">
            <div className="w-[70%]">
              <ul>
                <li>
                  <p className="mt-2 text-lg leading-8 text-zinc-300">● Limelight 3A latency: With aligning the shooter to <strong className="text-cyan-300">center the goal's AprilTag at the beginning</strong></p>
                  <p className="mt-2 text-lg leading-8 text-zinc-300">&rarr; <strong className="text-cyan-300">shooter's angular error = &Delta; <sub>robot's heading</sub></strong></p>
                  <p className="mt-2 text-lg leading-8 text-zinc-300">&rarr; We can use Pinpoint with about <strong className="text-cyan-300">⅕ latency</strong> of Limelight 3A to track robot’s heading</p>
                </li>
                <li>
                  <p className="mt-2 text-lg leading-8 text-zinc-300">● Hood angle: Changed to 1:1. With 1.3 m/s of robot’s speed and 0.14s/60 deg of the servo, it is completely possible to <strong className="text-cyan-300">“catch</strong>” the continuously tracking speed but still <strong className="text-cyan-300">preventing angle loss</strong></p>
                </li>
              </ul>
            </div>
            <div className="w-[30%] flex justify-center">
              <img src="/p1/Shooter_V3.png" className="w-[80%]" />
            </div>
          </div>
          <p className="mt-2 text-lg leading-8 text-zinc-300">5. Half-parking</p>
          <p className="mt-2 text-lg leading-8 text-zinc-300"><strong>Option 1: Gobilda Dual Mode Servo</strong></p>
          <div className="flex gap-2 items-center">
            <div className="w-[80%]">
              <p className="mt-2 text-lg leading-8 text-zinc-300">● Using mass properties in Onshape and searching supplier stores, I estimate the total mass of the robot is:</p>
              <p className="text-lg leading-8 text-zinc-300"><strong className="text-cyan-300">m<sub>robot</sub> = 13.4 (kg)</strong> &rarr; <strong className="text-cyan-300">P<sub>robot</sub> &asymp; 130.5 (N)</strong></p>
              <p className="mt-2 text-lg leading-8 text-zinc-300">● With <strong className="text-cyan-300">&alpha; &asymp; 50&deg;</strong> and <strong className="text-cyan-300">r <sub>kickstand</sub> = 0.1 (m)</strong>, we have the format:</p>
              <p className="mt-2 text-lg leading-8 text-zinc-300">&rarr; <strong className="text-cyan-300">T<sub>needed</sub> = r<sub>arm</sub> * P<sub>robot</sub> * sine(&alpha;) &asymp; 10 (N.m)</strong></p>
              <p className="mt-2 text-lg leading-8 text-zinc-300">With maximum stall torque of <strong className="text-cyan-300">2.47 (N.m)</strong> at 7.4 (V) &rarr; this choice is not possible</p>
            </div>
            <div className="w-[20%]">
              <img src="/p1/V1_Servo.png" className="w-full h-auto object-cover" />
            </div>
          </div>
          <p className="mt-2 text-lg leading-8 text-zinc-300"><strong>Option 2: Shark-2 Servo</strong></p>
          <div className="flex gap-2 items-center">
            <div className="w-[80%]">
              <p className="text-lg leading-8 text-zinc-300">● Recalculated mass: <strong className="text-cyan-300">m<sub>robot</sub> &asymp; 14.17 (kg)</strong> &rarr; <strong className="text-cyan-300">P<sub>robot</sub> &asymp; 139 (N)</strong></p>
              <p className="mt-2 text-lg leading-8 text-zinc-300">● With <strong className="text-cyan-300">&alpha; &asymp; 34.124887&deg;</strong> and <strong className="text-cyan-300">r <sub>kickstand</sub> = 0.12 (m)</strong></p>
              <p className="mt-2 text-lg leading-8 text-zinc-300">&rarr; <strong className="text-cyan-300">T<sub>needed</sub> = r<sub>arm</sub> * P<sub>robot</sub> * sine(&alpha;) &asymp; 9.36 (N.m)</strong></p>
              <p className="mt-2 text-lg leading-8 text-zinc-300">With minimum stall torque of <strong className="text-cyan-300">6.67 (N.m)</strong> at 6.0-7.4 (v) &rarr; this choice is accepted</p>
            </div>
            <div className="w-[20%]">
              <img src="/p1/V2_Servo.png" className="w-full h-auto object-cover" />
            </div>
          </div>
          {/* V */}
          <h2 className="mt-2 text-2xl font-bold text-white">V. Reflection</h2>
          <p className="mt-2 text-lg leading-8 text-zinc-300">5.1. Disadvantages</p>
          <ul>
            <li><p className="mt-2 text-lg leading-8 text-zinc-300">● The project is only in the process of finishing the <strong className="text-cyan-300">modeling and calculating</strong>. <strong className="text-cyan-300">Durability</strong> and <strong className="text-cyan-300">actual usage time</strong> need to be tested in real life to see the efficiency</p></li>
            <li><p className="mt-2 text-lg leading-8 text-zinc-300">● The mate features’ list is <strong className="text-cyan-300">chaotic</strong> because of <strong className="text-cyan-300">updating robot and making mates simultaneously</strong></p></li>
          </ul>
          <p className="mt-2 text-lg leading-8 text-zinc-300">5.2. Learned lessons</p>
          <ul>
            <li><p className="mt-2 text-lg leading-8 text-zinc-300">● A good robot <strong className="text-cyan-300">isn’t perfectly functioned</strong>, it was made by choosing the best <strong className="text-cyan-300">trade-off scenarios</strong></p></li>
            <li><p className="mt-2 text-lg leading-8 text-zinc-300">● Researching and choosing materials carefully to avoid <strong className="text-cyan-300">unintended errors</strong></p></li>
          </ul>
          <Link
            href="https://cad.onshape.com/documents/fe5105f48423e926dd579898/w/0ae7f5483803afc4b0b003a2/e/1f1ed5a7e08ff12544eb2cd2?renderMode=0&uiState=6a473af9d811ae4b0a525515"
            className="text-blue-600 hover:text-blue-800 hover:underline"
          >
            <h3 className="mt-2 text-lg leading-8 text-red-500"><strong className="text-2xl">View my full work here!</strong></h3>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
