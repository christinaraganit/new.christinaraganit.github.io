import Link from "@/components/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function About() {
  return (
    <main className="p-6 py-12 flex flex-col justify-center items-center gap-12 lg:gap-16">
      <div className="max-w-[88rem] w-full pt-24 grid lg:grid-cols-2 gap-8 lg:gap-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
          <div className="w-full h-0 shadow-lg aspect-w-1 aspect-h-1 rounded-3xl bg-secondary/[30%]">
            <div>
              <img
                src="/photos-app.png"
                className="absolute w-12 h-12 top-8 right-8 z-[2]"
              ></img>{" "}
              <Carousel className="h-full rounded-3xl">
                <CarouselContent>
                  <CarouselItem className="rounded-3xl">
                    <div className="w-full h-0 aspect-w-1 aspect-h-1 rounded-3xl">
                      <img
                        src="rome.jpg"
                        className="object-cover rounded-3xl"
                      ></img>
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="w-full h-0 aspect-w-1 aspect-h-1 rounded-3xl">
                      <img
                        src="positano.jpg"
                        className="object-cover rounded-3xl"
                      ></img>
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="w-full h-0 aspect-w-1 aspect-h-1 rounded-3xl">
                      <img
                        src="happy.jpg"
                        className="object-cover rounded-3xl"
                      ></img>
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="w-full h-0 aspect-w-1 aspect-h-1 rounded-3xl">
                      <img
                        src="pho.jpg"
                        className="object-cover rounded-3xl"
                      ></img>
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="w-full h-0 aspect-w-1 aspect-h-1 rounded-3xl">
                      <img
                        src="udon.jpg"
                        className="object-cover rounded-3xl"
                      ></img>
                    </div>
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className="translate-x-16 backdrop-blur-3xl bg-secondary/[60%] border-none" />
                <CarouselNext className="-translate-x-16 backdrop-blur-3xl bg-secondary/[60%] border-none" />
              </Carousel>
            </div>
          </div>

          <div className="w-full h-0 shadow-lg aspect-w-1 aspect-h-1 rounded-3xl bg-secondary/[30%]">
            <div className="p-4 lg:p-8 flex flex-col">
              <img src="/books-app.png" className="absolute w-12 right-8"></img>{" "}
              <img
                src="/solving.png"
                className="h-0 w-fit mb-4 shadow-2xl block grow"
              ></img>
              <div className="flex-none">
                <span className="text-neutral-400 text-xs mb-1.5 block">
                  Reading Now
                </span>
                <p className="text-lg mb-1">Solving Product Design Exercises</p>
                <span className="text-sm text-neutral-400 block">22%</span>
              </div>
            </div>
          </div>

          <div className="w-full col-span-2 h-0 shadow-lg aspect-w-2 aspect-h-1 rounded-3xl bg-secondary/[30%]">
            <div className="p-4 lg:p-8 flex flex-col">
              <img src="/spotify.png" className="absolute w-12 right-8"></img>{" "}
              <div className="h-0 w-fit mb-6 flex gap-6 grow rounded-2xl">
                <img
                  src="/speak-now-tv.jpg"
                  className="h-full w-fit rounded-2xl"
                ></img>
                <div>
                  <span className="text-neutral-400 text-xs mb-1.5 block">
                    Listening To
                  </span>
                  <p className="text-lg mb-1">
                    Back to December (Taylor&apos;s Version)
                  </p>
                  <span className="text-sm text-neutral-400 block">
                    Taylor Swift
                  </span>
                </div>
              </div>
              <div className="flex-none">
                <div className="w-full h-2 bg-border rounded-lg">
                  <div className="w-1/2 h-full bg-neutral-600 rounded-lg"></div>
                  <div className="flex mt-2 justify-between">
                    <span className="text-sm text-neutral-400">2:01</span>
                    <span className="text-sm text-neutral-400">5:17</span>
                  </div>
                </div>
                <div className="pt-8 items-center justify-center flex w-full gap-4 space-between">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-white"
                  >
                    <path d="m21.002 4.75-.002 14a.75.75 0 0 1-1.21.592l-7.29-5.67v5.078a.75.75 0 0 1-1.21.592l-9-7a.75.75 0 0 1 0-1.184l9.001-7a.75.75 0 0 1 1.21.592L12.5 9.827l7.291-5.67a.75.75 0 0 1 1.21.593Z" />
                  </svg>
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-white"
                  >
                    <path d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm8.856-3.845A1.25 1.25 0 0 0 9 9.248v5.504a1.25 1.25 0 0 0 1.856 1.093l5.757-3.189a.75.75 0 0 0 0-1.312l-5.757-3.189Z" />
                  </svg>

                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-white"
                  >
                    <path d="m12.71 4.158 9 7a.75.75 0 0 1 0 1.184l-9.001 7a.75.75 0 0 1-1.21-.592v-5.077l-7.29 5.67a.75.75 0 0 1-1.21-.593L3 4.75a.75.75 0 0 1 1.21-.592l7.288 5.669.002-5.077a.75.75 0 0 1 1.21-.592Z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col max-w-xl">
          <div>
            <span className="label-sm block mb-5 px-4 py-2 rounded-full border w-fit">
              About me
            </span>
            <h1 className="gradient-text mb-2 text-3xl w-fit">
              Hi, Christina here.<br></br>Enchanted to meet you.
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
              , where I am currently honing my craft as a designer and leading
              the design team at{" "}
              <Link link="https://sfusurge.com/">SFU Surge</Link>.
            </p>
            <p className="xl:text-lg mb-1.5 text-neutral-400">
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
      </div>
    </main>
  );
}
