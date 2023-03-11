import Image from "next/image";
import { HomePage } from "../services/types";
import { SocialMedia } from "./SocialMeadia";

interface Props {
  homePage: HomePage;
}

export function Header({homePage}: Props) {
  return (
    <div className="mt-9 sm:px-8">
      <div className="mx-auto max-w-7xl lg:px-8">
        <div className="relative px-4 sm:px-8 lg:px-12">
          <div className="mx-auto lg:px-28 px-0 max-w-2xl lg:max-w-5xl">
            <div className="mx-auto">
              <div className="flex gap-4 mx-auto items-center">
                <Image src="/logo.svg" width={500} height={500} alt="SERrex Labs" className="w-10 h-10" />
                <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl">{homePage.name}</h1>
              </div>
              <p className="mt-6 text-base text-zinc-600">
                Your go-to source for practical content on Typescript, Rust, architecture, and software engineering. Our easy-to-understand articles, tutorials, and resources have helped thousands of developers improve their skills in the ever-evolving tech industry. Improve your skills today!
              </p>
                <SocialMedia github={homePage.github} youtube={homePage.youtube} twitter={homePage.twitter}/>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}
