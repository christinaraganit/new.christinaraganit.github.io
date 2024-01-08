import Image from "next/image";
import { Button } from "@/components/ui/button";
import Footer from "@/components/footer";
import { ArrowLongRightIcon } from "@heroicons/react/20/solid";
import { Badge } from "@/components/ui/badge";
import Nav from "@/components/nav";
import StickyHighlightNav from "@/components/ui/sticky-highlight-nav";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <main className="p-6 py-12 flex flex-col justify-center items-center gap-12 lg:gap-16">
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
            University. Graduate from Computer Systems Technology at BCIT. UX
            Designer at Felix Payment Systems and Director of Visual Design at
            SFU Surge.
          </p>
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
        <a
          href="/projects/tft-team-planner"
          className="max-w-[96rem] group/link scroll-mt-20"
          id="test1"
        >
          <div className="aspect-video bg-[url('/projects/tft-team-planner/project.png')] bg-cover w-full rounded-lg object-fit mb-4 lg:mb-5 bg-center transition-all flex items-center justify-center">
            <img
              src="/projects/tft-team-planner/ui.png"
              className="w-[85%] rounded-xl group-hover/link:scale-105 transition-transform shadow-2xl"
            ></img>
          </div>

          <div className="grid xl:grid-cols-2 gap-2.5 lg:gap-4 mb-5">
            <div>
              <p className="text-sm uppercase font-mono text-neutral-400 mb-1 lg:mb-1.5">
                Passion project
              </p>
              <h2 className="title-1">Teamfight Tactics Team Planner</h2>
            </div>

            <p className="text-neutral-400 xl:text-lg">
              As a solo designer, I conceptualized and designed features for the
              in-game Team Planner of Teamfight Tactics and shared
              proof-of-concept prototypes with the community, receiving an
              overwhelmingly positive response from the playerbase.
            </p>
          </div>
        </a>
      </main>
    </div>
  );
}
