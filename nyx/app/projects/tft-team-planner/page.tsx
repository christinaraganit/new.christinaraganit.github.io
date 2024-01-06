import StickyHighlightNav from "@/components/ui/sticky-highlight-nav";
import MediaTag from "@/components/media-tag";

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

      <section id="test1" className="scroll-m-16 max-w-2xl w-full ">
        <span className="uppercase block mb-4 font-mono text-sm text-neutral-400 px-4 py-2 rounded-full border w-fit">
          1 | Overview
        </span>

        <div className="grid grid-cols-2 gap-4 xl:gap-6">
          <div>
            <p className="label-sm block mb-2">Role</p>
            <p className="text-neutral-300 xl:text-lg">
              UI Design, UX Research, UX Design, Prototyping
            </p>
          </div>

          <div>
            <p className="label-sm block mb-2">Timeline</p>
            <p className="text-neutral-300 xl:text-lg">
              December 17–31, 2023 (2 weeks)
            </p>
          </div>

          <div>
            <p className="label-sm block mb-2">Team</p>
            <p className="text-neutral-300 xl:text-lg">Solo Designer</p>
          </div>
          <div>
            <p className="label-sm block mb-2">Tools</p>
            <p className="text-neutral-300 xl:text-lg">
              Figma, Adobe Illustrator
            </p>
          </div>
        </div>
      </section>

      <section id="test2" className="scroll-m-16 max-w-2xl">
        <span className="uppercase block mb-4 font-mono text-sm text-neutral-400 px-4 py-2 rounded-full border w-fit">
          2 | Summary
        </span>

        <p className="text-neutral-400 xl:mb-4 xl:text-lg">
          Teamfight Tactics (TFT) is an auto battler game where players compete
          online against seven other opponents by building a team to be the last
          one standing. There's an in-game feature called Team Planner which has
          a lot of potential for improvement, but it might be a while before we
          get to see any changes.
        </p>

        <p className="text-neutral-400 xl:text-lg xl:mb-4">
          As an avid TFT player, I was excited to take on this passion project.
          After sifting through tons of player feedback, I designed what the
          future of the Team Planner might look like for desktop. I shared the
          prototypes I created in the Teamfight Tactics subreddit and received
          an{" "}
          <span className="text-neutral-200">
            overwhelmingly positive response
          </span>{" "}
          from the playerbase.
        </p>
      </section>

      <section id="test3" className="scroll-m-16 flex flex-col items-center">
        <div className="max-w-2xl w-full">
          <span className="label-sm block mb-4 px-4 py-2 rounded-full border w-fit">
            3 | Highlights
          </span>
        </div>

        <div className="mx-6 lg:mx-24 grid gap-8">
          <div className="grid gap-2">
            <img
              src="/projects/tft-team-planner/from-client.png"
              className="rounded-2xl border"
            ></img>
            <MediaTag mediaType="Image">
              Creating a preset team in the Team Planner from the client.
            </MediaTag>
          </div>

          <div className="grid gap-2">
            <img
              src="/projects/tft-team-planner/in-game.png"
              className="rounded-2xl border"
            ></img>
            <MediaTag mediaType="Image">
              Hovering over the recommended positioning for the champion Annie
              from the Team Planner in-game.
            </MediaTag>
          </div>

          <div className="grid gap-2">
            <img
              src="/projects/tft-team-planner/highlight-2.png"
              className="rounded-2xl border"
            ></img>
            <MediaTag mediaType="Image">
              Some of the positive feedback I received from the playerbase.
            </MediaTag>
          </div>
        </div>
      </section>

      <section id="text4" className="scroll-m-16">
        <div className="max-w-3xl w-full">
          <span className="label-sm block mb-4 px-4 py-2 rounded-full border w-fit">
            4 | PROBLEM STATEMENT
          </span>
          <h2 className="mb-4 article-title-1">
            The community's asking for QOL improvements in the Team Planner, but
            it might be a while before we see anything new...
          </h2>
          <p className="text-neutral-400 xl:mb-4 xl:text-lg">
            Teamfight Tactics (TFT) is an auto battler game where players
            compete online against seven other opponents by building a team to
            be the last one standing. There's an in-game feature called Team
            Planner which has a lot of potential for improvement, but it might
            be a while before we get to see any changes.
          </p>
        </div>
      </section>
    </article>
  );
}
