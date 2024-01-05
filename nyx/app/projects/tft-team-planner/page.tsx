import StickyHighlightNav from "@/components/ui/sticky-highlight-nav";

export default function TeamPlanner() {
  return (
    <article className="flex gap-16 py-20 flex-col items-center">
      <section className="max-w-3xl pt-12 xl:pt-0 flex flex-col justify-center items-center">
        <h1 className="gradient-text">Teamfight Tactics Team Planner</h1>
        <p className=" text-neutral-400 mt-2 mb-6 max-w-2xl lg:text-lg text-center">
          Conceptualized features for the in-game Team Planner of Teamfight
          Tactics to help beginner players improve their game knowledge.
          Designed proof-of-concept mockups which received an overwhelmingly
          positive response from the playerbase.
        </p>
      </section>

      <StickyHighlightNav
        highlightItems={[
          { elementId: "test1", label: "Test 1" },
          { elementId: "test2", label: "Test 2" },
          { elementId: "test3", label: "Test 3" },
        ]}
        navbarHeight={60}
        gapHeight={80}
      />

      <section id="test1" className="scroll-m-16 max-w-3xl">
        <span className="uppercase block mb-4 font-mono text-sm text-neutral-400 px-4 py-2 rounded-full border w-fit">
          1 | Overview
        </span>

        <div className="grid grid-cols-2 gap-4 xl:gap-8 lg:grid-cols-4">
          <div>
            <p className="label-sm block mb-2">Role</p>
            <p className="text-neutral-300 xl:text-lg">
              UI Design, UX Design, Prototyping
            </p>
          </div>

          <div>
            <p className="label-sm block mb-2">Team</p>
            <p className="text-neutral-300 xl:text-lg">Solo Designer</p>
          </div>

          <div>
            <p className="label-sm block mb-2">Timeline</p>
            <p className="text-neutral-300 xl:text-lg">
              December 17–31, 2023 (2 weeks)
            </p>
          </div>

          <div>
            <p className="label-sm block mb-2">Tools</p>
            <p className="text-neutral-300 xl:text-lg">Figma</p>
          </div>
        </div>
      </section>

      <section id="test2" className="scroll-m-16 max-w-3xl">
        <span className="uppercase block mb-4 font-mono text-sm text-neutral-400 px-4 py-2 rounded-full border w-fit">
          2 | Summary
        </span>
        <h2 className="mb-4 article-title-1">
          As a passionate TFT player, I know that the new player experience is
          pretty rough. Could the Team Planner help improve it?
        </h2>
        <p className="text-neutral-400 xl:mb-4 xl:text-lg">
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

      <section id="test3" className="scroll-m-16 flex flex-col items-center">
        <div className="max-w-3xl w-full">
          <span className="label-sm block mb-4 px-4 py-2 rounded-full border w-fit">
            3 | Highlights
          </span>
        </div>

        <div className="mx-6 lg:mx-24">
          <img
            src="/projects/tft-team-planner/project.png"
            className="rounded-lg border"
          ></img>
        </div>
      </section>

      <section id="text4" className="scroll-m-16">
        <div className="max-w-3xl w-full">
          <span className="label-sm block mb-4 px-4 py-2 rounded-full border w-fit">
            4 | PROBLEM STATEMENT
          </span>
        </div>
      </section>
    </article>
  );
}
