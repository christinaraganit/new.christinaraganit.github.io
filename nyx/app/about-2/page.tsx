import Link from "@/components/link";

export default function About2() {
  return (
    <main className="p-6 py-12 flex flex-col justify-center items-center gap-12 lg:gap-16">
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
