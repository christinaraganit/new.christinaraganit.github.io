import Image from "next/image";
import { Button } from "@/components/ui/button";
import Footer from "@/components/footer";
import { ArrowLongRightIcon } from "@heroicons/react/20/solid";
import { Badge } from "@/components/ui/badge";
import Nav from "@/components/nav";
import StickyHighlightNav from "@/components/ui/sticky-highlight-nav";
import Link from "next/link";
import Testimonial from "@/components/testimonial";
import Process from "@/components/process";
import Experience from "@/components/experience";
import Award from "@/components/award";

export default function Home() {
  return (
    <div>
      <main className="p-6 py-12 flex flex-col justify-center items-center gap-16 lg:gap-24">
        <section className="pt-20 lg:pt-24 flex flex-col md:justify-center md:items-center">
          <img
            src="headshot.png"
            className="w-16 h-16 grayscale rounded-full mb-6"
          ></img>
          <h1 className="gradient-text text-left md:text-center max-w-2xl">
            I&apos;m Christina, a UX Designer who writes code.
          </h1>
          <p className=" text-neutral-400 mt-2 mb-6 max-w-2xl lg:text-lg text-left md:text-center">
            Pursuing my BSc in Interactive Arts and Technology at Simon Fraser
            University. Computer Systems graduate from British Columbia
            Institute of Technology.
          </p>
          <div className="flex flex-row gap-2">
            <Button asChild variant="default">
              <Link href="mailto:christinaraganit@gmail.com">Email me</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="https://drive.google.com/file/d/1f5lIKN6n2vMnfDtx9ACCAwFTCYjXsajK/view">
                View resume
              </Link>
            </Button>
          </div>
        </section>
        {/* <StickyHighlightNav
          highlightItems={[
            { elementId: "test1", label: "Test 1" },
            { elementId: "test2", label: "Test 2" },
            { elementId: "test3", label: "Test 3" },
          ]}
          navbarHeight={60}
          gapHeight={80}
        /> */}

        <div className="max-w-[88rem] grid gap-16">
          <a
            href="/projects/tft-team-planner"
            className="max-w-[88rem] group/link scroll-mt-20"
            id="test1"
          >
            <div className="aspect-video py-[5%] bg-[url('/projects/tft-team-planner/project.png')] bg-cover w-full rounded-lg object-fit mb-4 lg:mb-5 bg-center transition-all flex items-center justify-center">
              <img
                src="/projects/tft-team-planner/ui.png"
                className="w-[80%] rounded-xl group-hover/link:scale-105 transition-transform shadow-2xl"
              ></img>
            </div>

            <div className="grid xl:grid-cols-2 gap-2.5 lg:gap-4">
              <div>
                <p className="text-sm uppercase font-mono text-neutral-400 mb-1 lg:mb-1.5">
                  Solo passion project
                </p>
                <h2 className="title-1">Teamfight Tactics Team Planner</h2>
              </div>

              <p className="text-neutral-400 xl:text-lg">
                Conceptualized and designed features for the in-game Team
                Planner and shared proof-of-concept videos with the community,
                receiving an overwhelmingly positive response from the
                playerbase.
              </p>
            </div>
          </a>

          <div className="max-w-[88rem] group/link scroll-mt-20" id="cheekys">
            <div className="aspect-video py-[5%] bg-[url('/projects/cheekys/cheekys-bg.png')] bg-cover w-full rounded-lg object-fit mb-4 lg:mb-5 bg-center transition-all flex items-center justify-center">
              <img
                src="/projects/cheekys/cheekys-ui-chat.png"
                className="w-[70%] rounded-xl transition-transform shadow-2xl"
              ></img>
            </div>

            <div className="grid xl:grid-cols-2 gap-2.5 lg:gap-4">
              <div>
                <p className="text-sm uppercase font-mono text-neutral-400 mb-1 lg:mb-1.5">
                  Academic team project - Coming soon
                </p>
                <h2 className="title-1">Cheeky&apos;s Cannabis Merchants</h2>
              </div>

              <p className="text-neutral-400 xl:text-lg">
                Ideated and designed an intervention to digitize the in-store
                experience of a local dispensary, assisting novice cannabis
                consumers preferring to shop online who feel as if they lack the
                knowledge to safely get high.
              </p>
            </div>
          </div>
        </div>

        <section className="max-w-[76rem] w-full grid lg:grid-cols-2 gap-16">
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
                    Writing design system documentation and guidelines to be
                    used across product, development, and QA teams.
                  </p>
                </div>
              </div>
              <Experience
                role="UX Design Intern"
                company="Felix Payment Systems"
                date="May 2022–Sep 2022"
              >
                Redesigned Felix.Portal and Felix.Terminal. Established the
                design system for Felix Payment Systems.
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
                  <Award
                    award="1st Place"
                    awardee="Eunoia UX Hackathon"
                  ></Award>
                  <Award award="1st Place" awardee="cmd-f"></Award>
                  <Award award="Best Design" awardee="cmd-f"></Award>
                  <Award
                    award="Judges' Choice Award"
                    awardee="RootHacks"
                  ></Award>
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

        <section className="bg-neutral-900/60 w-full max-w-[80rem] flex md:justify-center p-6 lg:p-12 rounded-lg">
          <div className="max-w-xl md:text-center flex flex-col md:items-center">
            <p className="font-serif text-5xl text-secondary">❝</p>
            <p className="text-lg xl:text-xl text-neutral-300 mb-6">
              Christina is an excellent communicator and collaborator. She has a
              proven track record of effectively communicating design concepts
              to both the technical development team and non-technical
              stakeholders, fostering a culture of collaboration within the
              team.
            </p>

            <img src="/kurt-milan.jpg" className="w-10 rounded-full"></img>
            <div className="mt-4">
              <span className="block font-medium mb-0.5">Kurt Milan</span>
              <span className="text-neutral-400">
                Team Lead at Felix Payment Systems
              </span>
            </div>
          </div>
        </section>

        <section className="mb-4 max-w-[80rem] w-full flex flex-col md:items-center md:justify-center">
          <div className="mb-8 flex flex-col md:items-center">
            <span className="label-sm block mb-4 px-4 py-2 rounded-full border w-fit">
              More Testimonials
            </span>
            <h2 className="large-title gradient-text md:text-center md:max-w-xl mb-2">
              I excel in collaborating with teams and working together to
              achieve success.
            </h2>
            <p className="text-neutral-400 xl:text-lg md:text-center">
              Here&apos;s what former teammates are saying about me.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-4 xl:gap-6">
            <div className="xl:order-first flex flex-col gap-4 lg:gap-6">
              <Testimonial
                imgLink="/simon-wong-chung.jpg"
                name="Simon Wong Chung"
                title="Student at Simon Fraser University"
              >
                One of Christina&apos;s standout qualities is her attention to
                detail. Every element of her designs, from layout and typography
                to interactions and microinteractions, is meticulously crafted.
              </Testimonial>
              <Testimonial
                imgLink="/michael-dresler.jpeg"
                name="Michael Dresler"
                title="Student at Simon Fraser University"
              >
                When working with Christina she consistently went above and
                beyond. She is dependable, productive, passionate, and does not
                cut corners when it comes to her work ethic.
              </Testimonial>
            </div>

            <div className="order-first flex flex-col gap-4 xl:gap-6">
              <div className="border p-6 lg:p-8 rounded-lg">
                <div>
                  <p className="mb-6 text-xl">
                    Christina always brings new perspective to the product team
                    with her designs. She has always gone out of her way to
                    research new ways to accomodate both the developers and the
                    stakeholder requirements.
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 aspect-square">
                    <img src="/jason-lee.jpg" className="rounded-full"></img>
                  </div>
                  <div>
                    <span className="block mb-0.5">Jason Lee</span>
                    <span className="text-sm text-neutral-300">
                      Team Lead at Felix Payment Systems
                    </span>
                  </div>
                </div>
              </div>
              <Testimonial
                imgLink="/eric-dam.jpg"
                name="Eric Dam"
                title="Software Developer at Harris Computers"
              >
                Christina is a designer-developer powerhouse. She designed and
                developed my portfolio website, and I can attest to her endless
                creativity and technical skills.
              </Testimonial>
            </div>

            <div className="flex flex-col gap-4 xl:gap-6">
              <Testimonial
                imgLink="/devon-friend.jpg"
                name="Devon Friend"
                title="Student at University of British Columbia"
              >
                What does it take to bring your platform to the next level by
                leveraging exceptional UI/UX design? Whatever the answer might
                be, Christina will certainly have one for you.
              </Testimonial>
              <Testimonial
                imgLink="/ray-gong.png"
                name="Ray Gong"
                title="Software Developer Intern at Blackberry"
              >
                Christina is a very talented designer with a vast skillset. She
                excels at rapidly producing prototypes to present her ideas,
                both in design platforms such as Figma or in code. I am
                confident that Christina will be a valuable member to any team.
              </Testimonial>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
