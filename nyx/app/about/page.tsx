export default function About() {
  return (
    <main className="p-6 py-12 flex flex-col justify-center items-center gap-12 lg:gap-16">
      <div className="grid lg:grid-cols-3 pt-24 max-w-[96rem]">
        <div>
          <span className="label-sm block mb-4 px-4 py-2 rounded-full border w-fit">
            About me
          </span>
          <h1 className="gradient-text mb-1 text-4xl w-fit">
            Hi, Christina here.
          </h1>
          <p className="xl:text-lg text-neutral-400">
            I'm a designer-developer powerhouse currently calling rainy
            Vancouver my home. I've lived in the sprawling urban city of Manila
            (where I was born) and the sunny deserts of Dubai, so I guess you
            can say I'm adaptable to any weather. Or any challenge.
          </p>
        </div>
      </div>
    </main>
  );
}
