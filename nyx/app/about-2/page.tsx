import Link from "@/components/link";
import Award from "@/components/award";
import Experience from "@/components/experience";

export default function About2() {
  return (
    <main className="p-6 py-12 flex flex-col justify-center items-center gap-12 lg:gap-16">
      <section className="max-w-[96rem] w-full grid lg:grid-cols-2 gap-8">
        <div>
          <span className="label-sm block mb-6 px-4 py-2 rounded-full border w-fit">
            Experience
          </span>

          <div className="flex flex-col gap-5">
            <div className="flex flex-row gap-5 w-full">
              <div className="flex flex-col gap-2 items-center w-6 pt-1.5">
                <div className="aspect-square">
                  <div className="bg-green-500 w-2 h-2 rounded-full outline outline-offset-4 outline-1 outline-green-500/30 "></div>
                </div>
                <div className="w-[1px] h-full bg-border"></div>
              </div>

              <div>
                <span className="text-sm text-neutral-400 mb-1.5 block">
                  Sep 2022–Present
                </span>
                <span className="block xl:text-lg text-neutral-200 font-medium mb-2">
                  UX Designer at Felix Payment Systems
                </span>

                <p className="text-neutral-400 max-w-lg">
                  Writing design system documentation and guidelines to be used
                  across product, development, and QA teams.
                </p>
              </div>
            </div>
            <Experience
              role="UX Design Intern"
              company="Felix Payment Systems"
              date="May 2022–Sep 2022"
            >
              Redesigned Felix.Portal and Felix.Terminal. Established the design
              system for Felix Payment Systems.
            </Experience>
            <Experience
              role="UI Engineer"
              company="Karma Well Health Technologies"
              date="Aug 2021–May 2022"
            >
              Established user interface guidelines and wrote frontend code
              using Next.js and SASS.
            </Experience>
            <Experience
              role="QA Tester"
              company="Keywords Studios"
              date="May 2020–Sep 2020"
            >
              Performed stability testing for FIFA 21 Pro Clubs. Identified
              gameplay issues and wrote bug reports.
            </Experience>
          </div>
        </div>
        <div>
          <span className="label-sm block mb-6 px-4 py-2 rounded-full border w-fit">
            Awards
          </span>

          <div className="ml-2 flex gap-5">
            <div className="flex flex-row gap-8 w-full">
              <div className="flex flex-col gap-1 items-center w-6 pb-2">
                <span className="text-sm text-neutral-400 mb-1 block">
                  2023
                </span>
                <div className="w-[1px] h-full bg-border"></div>
              </div>

              <div>
                <Award
                  award="Nancy Morrison and Fraser Green Special Abilities Award"
                  awardee="Simon Fraser University"
                ></Award>
                <Award
                  award="Undergraduate Open Scholarship"
                  awardee="Simon Fraser University"
                ></Award>
                <Award award="2nd Place" awardee="Stormhacks"></Award>
                <Award award="Best UI/UX Design" awardee="Stormhacks"></Award>
                <Award award="1st Place" awardee="Eunoia UX Hackathon"></Award>
                <Award award="1st Place" awardee="cmd-f"></Award>
                <Award award="Best Design" awardee="cmd-f"></Award>
                <Award award="Judges' Choice Award" awardee="RootHacks"></Award>
                <Award award="2nd Place" awardee="HackED"></Award>
              </div>
            </div>
          </div>

          <div className="ml-2 mt-2 flex gap-5">
            <div className="flex flex-row gap-8 w-full">
              <div className="flex flex-col gap-1 items-center w-6 pb-2">
                <span className="text-sm text-neutral-400 mb-1 block">
                  2021
                </span>
                <div className="w-[1px] h-full bg-border"></div>
              </div>

              <div>
                <Award
                  award="Computer Systems Award in Tech Entrepreneurship"
                  awardee="British Columbia Institute of Technology"
                ></Award>
              </div>
            </div>
          </div>
          <div className="ml-2 mt-2 flex gap-5">
            <div className="flex flex-row gap-8 w-full">
              <div className="flex flex-col gap-1 items-center w-6 pb-2">
                <span className="text-sm text-neutral-400 mb-1 block">
                  2019
                </span>
                <div className="w-[1px] h-full bg-border"></div>
              </div>

              <div>
                <Award
                  award="President's Entrance Award"
                  awardee="British Columbia Institute of Technology"
                ></Award>
                <span className="block text-neutral-200 font-medium mb-2">
                  BC Excellence Award
                </span>
                <span className="block text-neutral-200 font-medium mb-2">
                  District Authority Award
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="pt-20 max-w-xl">
        <img
          src="/cmdf-win.jpg"
          className="w-80 rounded-lg grayscale absolute -translate-x-[28rem] -rotate-6"
        ></img>
        <img
          src="/cmdf-win-2.jpg"
          className="w-64 rounded-lg grayscale absolute translate-x-[40rem] translate-y-[24rem] rotate-3"
        ></img>
        <img
          src="/eunoia-win.jpg"
          className="w-72 rounded-lg grayscale absolute translate-x-[48rem] translate-y-[4rem] rotate-12"
        ></img>
        <div>
          <span className="label-sm block mb-5 px-4 py-2 rounded-full border w-fit">
            About me
          </span>
          <h1 className="gradient-text mb-2 text-3xl w-fit">
            Hi, Christina here.
          </h1>
          <p className="xl:text-lg mb-4 text-neutral-400">
            I fell in love with design in the lecture halls of my computer
            science classes at{" "}
            <Link link="https://www.bcit.ca/programs/computer-systems-technology-diploma-full-time-5500dipma/">
              BCIT
            </Link>
            . I initially dreamt of being a software developer so that I can
            build things that&apos;ll make the world a better place, but it
            turns out, I wanted to design them too.
          </p>
          <p className="xl:text-lg mb-4 text-neutral-400">
            After graduating with my diploma in Computer Systems Technology, I
            enrolled into the Interactive Arts and Technology program at{" "}
            <Link link="https://www.sfu.ca/siat.html">
              Simon Fraser University
            </Link>
            , where I am currently honing my craft as a designer and leading the
            design team at <Link link="https://sfusurge.com/">SFU Surge</Link>.
          </p>
          <p className="xl:text-lg mb-1 text-neutral-400">
            When I am not tinkering away on Figma, you can usually find me...
          </p>
          <ul className="list-disc list-inside ml-3 xl:text-lg text-neutral-400">
            <li>Eating pizza at hackathons all over the Lower Mainland</li>
            <li>Losing all my League of Legends games</li>
            <li>Jamming to my favorite blink-182 songs, and</li>
            <li>Reading stories about magic and dragons</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
