import StickyHighlightNav from "@/components/ui/sticky-highlight-nav";
import MediaTag from "@/components/media-tag";

export default function TeamPlanner() {
  return (
    <article className="flex gap-12 lg:gap-20 py-20 flex-col items-center">
      <section className="p-6 pt-12 lg:pt-20 xl:pt-28 flex flex-col justify-center items-center">
        <h1 className="gradient-text mb-2">Teamfight Tactics Team Planner</h1>
        <p className=" text-neutral-400 mt-2 mb-4 max-w-3xl lg:text-lg md:text-center">
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

      <section id="test1" className="px-6 scroll-m-16 max-w-2xl w-full">
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
            <p className="text-neutral-400  xl:text-lg">
              Figma, Adobe Illustrator
            </p>
          </div>
        </div>
      </section>

      <section id="test2" className="px-6 scroll-m-16 max-w-2xl">
        <span className="uppercase block mb-4 font-mono text-sm text-neutral-400 px-4 py-2 rounded-full border w-fit">
          2 | Summary
        </span>

        <p className="text-neutral-400 mb-4 xl:text-lg">
          Teamfight Tactics (TFT) is an auto battler game where players compete
          online against seven other opponents by building a team to be the last
          one standing. There&apos;s an in-game feature called Team Planner
          which has a lot of potential for improvement, but it might be a while
          before we get to see any changes.
        </p>

        <p className="text-neutral-400 xl:text-lg xl:mb-4">
          As an avid TFT player, I was excited to take on this project. After
          sifting through tons of player feedback, I designed what the future of
          the Team Planner might look like. I shared the prototypes I created in
          the Teamfight Tactics subreddit and received an{" "}
          <span className="text-neutral-200">
            overwhelmingly positive response
          </span>
          .
        </p>
      </section>

      <section id="disclaimer" className="px-6 scroll-m-16 max-w-2xl">
        <span className="uppercase block mb-4 font-mono text-sm text-neutral-400 px-4 py-2 rounded-full border w-fit">
          3 | Disclaimer
        </span>

        <p className="text-neutral-400 mb-4 xl:text-lg">
          This case study utilizes art from Teamfight Tactics and League of
          Legends and are for proof-of-concept purposes only. I do not claim
          ownership of any artwork or characters featured.
        </p>
      </section>

      <section
        id="test3"
        className="scroll-m-16 px-6 max-w-[96rem] flex flex-col items-center"
      >
        <div className="max-w-2xl w-full">
          <span className="label-sm block mb-4 px-4 py-2 rounded-full border w-fit">
            4 | Highlights
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
              src="/projects/tft-team-planner/highlight-3.png"
              className="rounded-lg border"
            ></img>
            <MediaTag mediaType="Image">
              Some of the positive feedback I received from the playerbase.
            </MediaTag>
          </div>

          <div className="grid gap-2">
            <img
              src="/projects/tft-team-planner/highlight-2.png"
              className="rounded-lg border"
            ></img>
            <MediaTag mediaType="Image">
              More positive feedback I received from the playerbase.
            </MediaTag>
          </div>
        </div>
      </section>

      <section id="text4" className="px-6 scroll-m-16">
        <div className="max-w-3xl w-full">
          <img
            src="/projects/tft-team-planner/does-not-computer.webp"
            className="w-28 relative lg:rotate-30 mb-4 lg:-mb-24 lg:translate-y-12 lg:-ml-32 lg:-translate-x-3"
          ></img>
          <span className="label-sm block mb-4 px-4 py-2 rounded-full border w-fit">
            5 | PROBLEM STATEMENT
          </span>
          <h2 className="mb-4 article-title-1">
            There&apos;s limited functionality in the Team Planner, and plenty
            of room for improvement.
          </h2>
          <p className="text-neutral-400 xl:mb-4 xl:text-lg">
            Currently, the only functionality that the Team Planner has is that
            it highlights champions you add to your planner when they appear in
            your shop. As a player myself, I already know there&apos;s a few
            functionalities I&apos;d personally like to see, but I wondered if
            the playerbase had any suggestions, so I searched for feedback on
            platforms like Twitter and Reddit.
          </p>

          <p className="text-neutral-400 xl:mb-4 xl:text-lg">
            I then considered features&apos; alignment with strategy, determine
            their technical feasibility, and redesign the interface while
            adhering to the existing visual language.
          </p>
        </div>
      </section>

      <section id="text5" className="px-6 scroll-m-16">
        <div className="max-w-3xl w-full">
          <img
            src="/projects/tft-team-planner/raise-your-dongers.webp"
            className="w-28 lg:w-32 relative lg:float-right mb-4 lg:-scale-x-100 lg:-rotate-30 lg:-mb-48 lg:translate-y-20 lg:translate-x-32"
          ></img>
          <span className="label-sm block mb-4 px-4 py-2 rounded-full border w-fit">
            6 | Design Challenge
          </span>
          <h2 className="mb-4 title-1 lg:text-3xl font-normal lg:leading-10 text-neutral-200">
            What QOL features can I propose for the Team Planner? How can I take
            into consideration these features&apos; feasibility and alignment
            with business strategy? How can I adhere to the visual language of
            Teamfight Tactics when designing the interface?
          </h2>
        </div>
      </section>

      <section
        id="text6"
        className="max-w-[96rem] px-6 scroll-m-16 flex items-center flex-col gap-2"
      >
        <div className="max-w-3xl w-full">
          <span className="label-sm block mb-4 px-4 py-2 rounded-full border w-fit">
            7 | Research
          </span>
          <p className="text-neutral-400 xl:text-lg">
            To identify which features players wanted to see in the Team
            Planner, I gathered feedback from the playerbase on Reddit and X
            (Twitter).
          </p>
        </div>

        <div className="grid">
          <img
            src="/projects/tft-team-planner/oh-teemo.webp"
            className="hidden 2xl:block lg:w-32 lg:relative float-right lg:-mt-40 lg:translate-x-[77rem] lg:translate-y-[29rem]"
          ></img>
          <img
            src="/projects/tft-team-planner/feedback.png"
            className="rounded-lg"
          ></img>
          <img
            src="/projects/tft-team-planner/oh-snap.webp"
            className="w-28 -mt-28 lg:w-40 relative lg:-mt-40 lg:-translate-x-4 -rotate-12"
          ></img>
          <MediaTag mediaType="Image">
            Some of the feedback I encountered. And there&apos;s definitely more
            where that came from...
          </MediaTag>
        </div>
      </section>

      <section
        id="7"
        className="px-6 max-w-[96rem] scroll-m-16 flex items-center flex-col gap-2"
      >
        <div className="max-w-3xl w-full">
          <span className="label-sm block mb-4 px-4 py-2 rounded-full border w-fit">
            8 | Solution
          </span>
        </div>

        <div className="grid gap-16">
          <div className="grid gap-4">
            <video
              height={1920}
              width={1080}
              loop
              muted
              autoPlay
              className="w-full rounded-lg"
              src="/projects/tft-team-planner/search.mp4"
            ></video>

            <div className="grid lg:grid-cols-2 gap-2">
              <div>
                <p className="label-sm mb-1.5">Suggestion #1</p>
                <h2 className="title-1">
                  Searching, filtering, and sorting champions
                </h2>
              </div>

              <p className="text-neutral-400 xl:text-lg">
                Players can search for a champion by name or by trait. They may
                also sort the champion results by trait, cost, and name. This
                functionality exists in the client in places such as the Shop or
                the Hextech Crafting sections, so I believe this feature is
                technically feasible.
              </p>
            </div>
          </div>

          <div className="grid gap-4">
            <video
              height={1920}
              width={1080}
              loop
              muted
              autoPlay
              className="w-full rounded-lg"
              src="/projects/tft-team-planner/save-teams.mp4"
            ></video>

            <div className="grid lg:grid-cols-2 gap-2">
              <div>
                <p className="label-sm mb-1.5">Suggestion #2</p>
                <h2 className="title-1">
                  Creating, naming, and saving preset teams
                </h2>
              </div>

              <p className="text-neutral-400 xl:text-lg">
                In the client, the player can create, name, and save preset
                teams. Once the player enters a TFT match, they can load these
                presets. This functionality exists for League of Legends in the
                form of item sets, so theoretically, this feature should be
                technically feasible.
              </p>
            </div>
          </div>

          <div className="grid gap-4">
            <video
              height={1920}
              width={1080}
              loop
              muted
              autoPlay
              className="w-full rounded-lg"
              src="/projects/tft-team-planner/import-teams-and-board.mp4"
            ></video>

            <div className="grid lg:grid-cols-2 gap-2">
              <div>
                <p className="label-sm mb-1.5">Suggestion #3</p>
                <h2 className="title-1">
                  Importing preset teams and your current board
                </h2>
              </div>

              <p className="text-neutral-400 xl:text-lg">
                While in-game, the player can import premade teams into their
                Team Planner, or they can import the champions from their
                current board.
              </p>
            </div>
          </div>

          <div className="grid gap-4">
            <video
              height={1920}
              width={1080}
              loop
              muted
              autoPlay
              className="w-full rounded-lg"
              src="/projects/tft-team-planner/hover-states.mp4"
            ></video>

            <div className="grid lg:grid-cols-2 gap-2">
              <div>
                <p className="label-sm mb-1.5">Suggestion #4</p>
                <h2 className="title-1">
                  Displaying additional information on hover
                </h2>
              </div>

              <p className="text-neutral-400 xl:text-lg">
                Players can hover over elements to display tooltips that provide
                additional information. Hovering over the attack range of the
                champion lights up the hexes which the champion can attack to
                depending on its placement, and hovering over the positioning
                button displays the champion&apos;s recommended placement.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="constraints"
        className="px-6 max-w-[96rem] scroll-m-16 flex items-center flex-col gap-2"
      >
        <div className="max-w-3xl w-full">
          <span className="label-sm block mb-4 px-4 py-2 rounded-full border w-fit">
            9 | Constraints
          </span>
        </div>

        <div className="max-w-3xl grid gap-4">
          <div className="border p-4 lg:p-6 rounded-lg flex flex-col sm:flex-row gap-4">
            <div className="aspect-square w-20 md:w-24">
              <img src="/projects/tft-team-planner/raise-your-dongers.webp"></img>
            </div>
            <div className="w-full">
              <h3 className="article-title-2 mb-2">Technical feasibility</h3>
              <p className="text-neutral-400 xl:text-lg">
                Would it be possible to implement this design? Are there
                functionalities that exist in-game or in the client?
              </p>
            </div>
          </div>

          <div className="border p-4 lg:p-6 rounded-lg flex flex-col sm:flex-row gap-4">
            <div className="aspect-square w-20 md:w-24">
              <img src="/projects/tft-team-planner/hextech.webp"></img>
            </div>
            <div className="w-full">
              <h3 className="article-title-2 mb-2">Visual design</h3>
              <p className="text-neutral-400 xl:text-lg">
                Do the features look seamlessly integrated with the existing UI
                of the Team Planner?
              </p>
            </div>
          </div>

          <div className="border p-4 lg:p-6 rounded-lg flex flex-col sm:flex-row gap-4">
            <div className="aspect-square w-20 md:w-24">
              <img src="/projects/tft-team-planner/does-not-computer.webp"></img>
            </div>
            <div className="w-full">
              <h3 className="article-title-2 mb-2">Availability of data</h3>
              <p className="text-neutral-400 xl:text-lg">
                Is the information available in the client or in-game? When is
                this information available?
              </p>
            </div>
          </div>

          <div className="border p-4 lg:p-6 rounded-lg flex flex-col sm:flex-row gap-4">
            <div className="aspect-square w-20 md:w-24">
              <img src="/projects/tft-team-planner/according-to-plan.webp"></img>
            </div>
            <div className="w-full">
              <h3 className="article-title-2 mb-2">Alignment with strategy</h3>
              <p className="text-neutral-400 xl:text-lg">
                Does this make sense for the team to build?
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="design-process"
        className="px-6 max-w-[96rem] scroll-m-16 flex items-center flex-col gap-2"
      >
        <div className="max-w-3xl w-full">
          <span className="label-sm block mb-4 px-4 py-2 rounded-full border w-fit">
            10 | Design process
          </span>
          <h2 className="mb-4 article-title-1">
            I began by deciding which features to design by assessing if they
            were possible to implement and if it made sense to do so.
          </h2>
          <p className="text-neutral-400 xl:mb-4 xl:text-lg">
            For example, there are many instances of searching and sorting in
            the client UI and doing so would allow players to be able to find
            the champions they are searching for much easily, so I decided to
            add it in the design.
          </p>
          <p className="text-neutral-400 mb-8 xl:text-lg">
            However, an example of a feature which, to me, didn&apos;t make
            sense to build was a Headliner toggle. While I think this would be a
            great QOL improvement, the key mechanic for next set may not be the
            Chosen or Headliner mechanic that was preset in Set 4: Fates and Set
            10: Remix Rumble, respectively.
          </p>
        </div>
        <h2 className="max-w-3xl w-full mb-4 article-title-1">
          I then sketched out what the layout of the design would look like
          based on the features chosen.
        </h2>
        <div className="w-full mb-12">
          <img
            src="/projects/tft-team-planner/sketches.png"
            className="rounded-lg border mb-2"
          ></img>
          <MediaTag mediaType="Image"> </MediaTag>
        </div>
        <div className="max-w-3xl w-full">
          <h2 className="max-w-3xl w-full mb-4 article-title-1">
            I carefully studied the Hextech brand and how the elements of metal
            and magic are applied into UI components.
          </h2>
          <p className="text-neutral-400 mb-4 xl:text-lg">
            This meant that I had to play a <i>lot</i> of games to be familiar
            with the in-game elements, but hey, I&apos;ve been having a blast
            playing Remix Rumble anyway.
          </p>
        </div>
        <div className="w-full mb-12">
          <img
            src="/projects/tft-team-planner/style-guide.png"
            className="rounded-lg border mb-2"
          ></img>
          <MediaTag mediaType="Image"> </MediaTag>
        </div>
        <div className="max-w-3xl w-full">
          <h2 className="mb-4 article-title-1">
            I then created interactive components on Figma based on the Hextech
            brand and existing UI elements in the client.
          </h2>
          <p className="text-neutral-400 mb-4 xl:text-lg">
            I replicated UI elements in the client and in-game into the
            prototyping tool Figma to create the proof-of-concept videos. Here
            are some of the components I made... but there&apos;s definitely a
            lot more where that came from!
          </p>
        </div>
        <div className="w-full mb-8">
          <img
            src="/projects/tft-team-planner/components.png"
            className="rounded-lg border mb-2"
          ></img>
          <MediaTag mediaType="Image"> </MediaTag>
        </div>
      </section>

      <section
        id="design-process"
        className="px-6 max-w-[96rem] scroll-m-16 flex items-center flex-col gap-2"
      >
        <div className="max-w-3xl w-full">
          <span className="label-sm block mb-4 px-4 py-2 rounded-full border w-fit">
            11 | Reflection
          </span>
          <div className="max-w-3xl grid gap-4">
            <div className="border p-4 lg:p-6 rounded-lg flex flex-col sm:flex-row gap-4">
              <div className="aspect-square w-20 md:w-24">
                <img src="/projects/tft-team-planner/towa.webp"></img>
              </div>
              <div className="w-full">
                <h3 className="article-title-2 mb-2">What I learned</h3>
                <p className="text-neutral-400 xl:text-lg">
                  Players will be expecting continuity between desktop and
                  mobile layouts. I also learned that while it&apos;s important
                  to listen to feedback, it&apos;s equally important to identify
                  what feedback is actionable.
                </p>
              </div>
            </div>

            <div className="border p-4 lg:p-6 rounded-lg flex flex-col sm:flex-row gap-4">
              <div className="aspect-square w-20 md:w-24">
                <img src="/projects/tft-team-planner/gonna-be-a-blast.webp"></img>
              </div>
              <div className="w-full">
                <h3 className="article-title-2 mb-2">What I did well</h3>
                <p className="text-neutral-400 xl:text-lg">
                  I was at first too intimidated to share my work online, so I’m
                  proud of the fact that I was able to gather the courage to
                  share it on Reddit. The original concept received almost
                  80,000 views in the first 48 hours of posting. It currently
                  has a 97% upvote rate, and it’s been shared 65 times! The
                  visual design and the UI was highly praised by the players.
                </p>
              </div>
            </div>

            <div className="border p-4 lg:p-6 rounded-lg flex flex-col sm:flex-row gap-4">
              <div className="aspect-square w-20 md:w-24">
                <img src="/projects/tft-team-planner/come-at-me.webp"></img>
              </div>
              <div className="w-full">
                <h3 className="article-title-2 mb-2">
                  What I could have improved on
                </h3>
                <p className="text-neutral-400 xl:text-lg">
                  Iconography is not my strong suit, and unfortunately, I
                  wasn&apos;t able to find high-quality icons of some UI
                  elements. I recreated some using Adobe Illustrator, but my
                  vector skills and iconography still need improvement.
                </p>
              </div>
            </div>

            <div className="border p-4 lg:p-6 rounded-lg flex flex-col sm:flex-row gap-4">
              <div className="aspect-square w-20 md:w-24">
                <img src="/projects/tft-team-planner/so-sweet.webp"></img>
              </div>
              <div className="w-full">
                <h3 className="article-title-2 mb-2">
                  What I&apos;d do differently
                </h3>
                <p className="text-neutral-400 xl:text-lg">
                  I should have considered the mobile implementation. I also
                  should have designed an empty state for the Team Planner
                  that&apos;s more closely aligned with what the UI looks like
                  if there&apos;s content there.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
