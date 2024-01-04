import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "./ui/button";
import Link from "next/link";
import { Separator } from "./ui/separator";

export default function Footer() {
  return (
    <footer className="mb-6">
      <div className="px-6 lg:py-2 flex flex-col items-center text-center border-t">
        <div className="p-2 mt-2 flex flex-wrap items-center justify-center">
          <Button asChild variant="link">
            <Link href="/">Home</Link>
          </Button>
          <Button asChild variant="link">
            <Link href="/projects">Projects</Link>
          </Button>
          <Button asChild variant="link">
            <Link href="/about">About</Link>
          </Button>
          <Button asChild variant="link">
            <Link href="/awards">Awards</Link>
          </Button>
          <Button asChild variant="link">
            <Link href="https://drive.google.com/file/u/1/d/1XdjiOlwxWced9ZCvzwyLcPiZANGwptAV/view">
              Resume
            </Link>
          </Button>
        </div>

        <div className="flex gap-4 pt-2">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <a href="">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="stroke-neutral-200 hover:stroke-neutral-400"
                  >
                    <path
                      d="M10 14.9993C9.34732 15.6987 8.98919 16.6227 9 17.5793V20.9993M14 14.9993C14.6527 15.6987 15.0108 16.6227 15 17.5793V20.9993M9 19.0493C8.10549 19.4055 7.13532 19.5294 6.18 19.4093C4.66 18.8893 5.06 17.5093 4.28 16.9393C3.90518 16.6713 3.46037 16.5184 3 16.4993M19 9.74927C19 12.7493 17.05 14.9993 12 14.9993C6.95 14.9993 5 12.7493 5 9.74927C4.9753 8.70844 5.20893 7.67772 5.68 6.74927C5.34 5.27927 5.47 3.46927 6.2 3.10927C6.93 2.74927 8.47 3.40927 9.74 4.25927C10.486 4.12615 11.2422 4.05922 12 4.05927C12.7572 4.05262 13.5134 4.11285 14.26 4.23927C15.53 3.38927 17.14 2.75927 17.8 3.08927C18.46 3.41927 18.66 5.25927 18.32 6.72927C18.7943 7.66371 19.028 8.70171 19 9.74927Z"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </a>
              </TooltipTrigger>
              <TooltipContent>
                <p>GitHub</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <a href="">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="stroke-neutral-200 hover:stroke-neutral-400"
                  >
                    <path
                      d="M8 11V16M11 10V12M11 16V12.2297C11 11.5147 11.5047 10.8991 12.2058 10.7588L13.6078 10.4784C14.8454 10.2309 16 11.1775 16 12.4396V16M8 8H8.01M3 12C3 9.48639 3 8.22958 3.35354 7.21924C3.98676 5.40959 5.40959 3.98676 7.21924 3.35354C8.22958 3 9.48639 3 12 3C14.5136 3 15.7704 3 16.7808 3.35354C18.5904 3.98676 20.0132 5.40959 20.6465 7.21924C21 8.22958 21 9.48639 21 12C21 14.5136 21 15.7704 20.6465 16.7808C20.0132 18.5904 18.5904 20.0132 16.7808 20.6465C15.7704 21 14.5136 21 12 21C9.48639 21 8.22958 21 7.21924 20.6465C5.40959 20.0132 3.98676 18.5904 3.35354 16.7808C3 15.7704 3 14.5136 3 12Z"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </a>
              </TooltipTrigger>
              <TooltipContent>
                <p>LinkedIn</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <a href="">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="stroke-neutral-200 hover:stroke-neutral-400"
                  >
                    <path
                      d="M20.4098 7.20903L17.3974 9.55205C15.4711 11.0503 14.5079 11.7994 13.4398 12.0867C12.4976 12.3401 11.5024 12.3401 10.5602 12.0867C9.49205 11.7994 8.52891 11.0503 6.60263 9.55205L3.59018 7.20903M20.4098 7.20903C19.9756 6.46813 19.3272 5.86533 18.543 5.47685C17.5804 5 16.3202 5 13.8 5H10.2C7.67976 5 6.41965 5 5.45704 5.47685C4.67282 5.86533 4.02441 6.46813 3.59018 7.20903M20.4098 7.20903C20.4444 7.26809 20.4777 7.32802 20.5095 7.38879C21 8.32466 21 9.54977 21 12C21 14.4502 21 15.6753 20.5095 16.6112C20.0781 17.4344 19.3897 18.1037 18.543 18.5232C17.5804 19 16.3202 19 13.8 19H10.2C7.67976 19 6.41965 19 5.45704 18.5232C4.61031 18.1037 3.9219 17.4344 3.49047 16.6112C3 15.6753 3 14.4502 3 12C3 9.54977 3 8.32466 3.49047 7.38879C3.52232 7.32802 3.55557 7.26809 3.59018 7.20903"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </a>
              </TooltipTrigger>
              <TooltipContent>
                <p>Email</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>

        <p className="text-sm text-neutral-400 pt-5">
          Created with Tailwind, Next.js, and ShadCN UI by Christina Raganit.
        </p>
      </div>
    </footer>
  );
}
