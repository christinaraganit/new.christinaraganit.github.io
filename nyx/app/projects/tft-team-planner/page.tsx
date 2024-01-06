import StickyHighlightNav from "@/components/ui/sticky-highlight-nav";
import MediaTag from "@/components/media-tag";

export default function TeamPlanner() {
  return (
    <article className="flex gap-20 py-20 flex-col items-center">
      <section className="pt-20 flex flex-col justify-center items-center">
        <h1 className="gradient-text mb-2">Teamfight Tactics Team Planner</h1>
        <p className=" text-neutral-400 mt-2 mb-4 max-w-3xl lg:text-lg text-center">
          Conceptualized features for the in-game Team Planner of Teamfight
          Tactics to help beginner players improve their game knowledge.
          Designed proof-of-concept mockups which received an overwhelmingly
          positive response from the playerbase.
        </p>

        <div className="max-w-[96rem]">
          <img src="/projects/tft-team-planner/ui-header.png"></img>
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

      <section id="test1" className="scroll-m-16 max-w-2xl w-full">
        <div>
          <span className="uppercase block mb-4 font-mono text-sm text-neutral-400 px-4 py-2 rounded-full border w-fit">
            1 | Overview
          </span>
        </div>

        <div className="grid grid-cols-2 gap-4 xl:gap-6">
          <div>
            <p className="label-sm block mb-1">Roles</p>
            <p className="text-neutral-400 xl:text-lg">
              UI Design, UX Design, Prototyping
            </p>
          </div>

          <div>
            <p className="label-sm block mb-1">Timeline</p>
            <p className="text-neutral-400  xl:text-lg">
              December 17—31, 2023 (2 weeks)
            </p>
          </div>

          <div>
            <p className="label-sm block mb-1">Team</p>
            <p className="text-neutral-400  xl:text-lg">Solo Designer</p>
          </div>
          <div>
            <p className="label-sm block mb-1">Tools</p>
            <p className="text-neutral-400  xl:text-lg">Figma</p>
          </div>
        </div>
      </section>

      <section id="test2" className="scroll-m-16 max-w-2xl">
        <span className="uppercase block mb-4 font-mono text-sm text-neutral-400 px-4 py-2 rounded-full border w-fit">
          2 | Summary
        </span>

        <p className="text-neutral-400 mb-4 xl:text-lg">
          Teamfight Tactics (TFT) is an auto battler game where players compete
          online against seven other opponents by building a team to be the last
          one standing. The new player experience of TFT can be daunting, and
          the desktop version doesn't have a tutorial that can teach players
          before getting into the game.
        </p>

        <p className="text-neutral-400 xl:text-lg">
          There's a tool in the game called Team Planner, and, as an avid TFT
          player, I thought the tool had potential. I wondered if I could
          augment this tool with more features to help new players learn basic
          game knowledge.
        </p>
      </section>

      <section
        id="test3"
        className="scroll-m-16 max-w-[96rem] flex flex-col items-center"
      >
        <div className="max-w-2xl">
          <span className="label-sm block mb-4 px-4 py-2 rounded-full border w-fit">
            3 | Highlights
          </span>
        </div>

        <div className="grid gap-8">
          <div className="grid gap-2">
            <div className="aspect-video border bg-[url('/projects/tft-team-planner/project.png')] bg-cover w-full rounded-lg object-fit bg-center transition-all flex items-center justify-center">
              <img
                src="/projects/tft-team-planner/ui.png"
                className="w-[80%] rounded-lg group-hover/link:scale-105 transition-transform shadow-2xl"
              ></img>
            </div>
            <MediaTag mediaType="Image">
              Creating a preset team in the Team Planner from the client.
            </MediaTag>
          </div>

          <div className="grid gap-2">
            <img
              src="/projects/tft-team-planner/in-game.png"
              className="rounded-lg border"
            ></img>
            <MediaTag mediaType="Image">
              Hovering over the recommended positioning for the champion Annie
              from the Team Planner in-game.
            </MediaTag>
          </div>

          <div className="grid gap-2">
            <img
              src="/projects/tft-team-planner/highlight-2.png"
              className="rounded-lg border"
            ></img>
            <MediaTag mediaType="Image">
              Some of the positive feedback I received from the playerbase.
            </MediaTag>
          </div>
        </div>
      </section>

      <section id="text4" className="scroll-m-16">
        <div className="max-w-3xl w-full">
          <img
            src="/projects/tft-team-planner/does-not-computer.webp"
            className="w-28 relative lg:rotate-30 mb-4 lg:-mb-24 lg:translate-y-12 lg:-ml-32 lg:-translate-x-3"
          ></img>
          <span className="label-sm block mb-4 px-4 py-2 rounded-full border w-fit">
            4 | PROBLEM STATEMENT
          </span>
        </div>
      </section>
    </article>
  );
}
