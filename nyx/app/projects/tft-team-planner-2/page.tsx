export default function TeamPlanner2() {
  return (
    <article className="flex gap-12 lg:gap-20 py-20 flex-col items-center">
      <section className="p-6 pt-12 lg:pt-20 xl:pt-28 flex flex-col max-w-[88rem]">
        <div className="grid lg:grid-cols-3 lg:gap-20">
          <div className="col-span-2">
            <h1 className="gradient-text mb-4">
              Teamfight Tactics Team Planner
            </h1>
            <p className=" text-neutral-400 mt-2 mb-4 max-w-3xl text-xl leading-8">
              I conceptualized features that the Teamfight Tactics playerbase
              wanted to see in the in-game Team Planner and designed
              proof-of-concept mockups which received an overwhelmingly positive
              response from the community.
            </p>
          </div>
          <div></div>
        </div>

        <div className="max-w-[88rem]">
          <img src="/projects/tft-team-planner/ui-header.png"></img>
        </div>
      </section>
    </article>
  );
}
