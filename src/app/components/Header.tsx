import Image from "next/image";
import { SocialMedia } from "./SocialMeadia";

export function Header() {
  return (
    <div className="mt-9 sm:px-8">
      <div className="mx-auto max-w-7xl lg:px-8">
        <div className="relative px-4 sm:px-8 lg:px-12">
          <div className="mx-auto lg:px-28 px-0 max-w-2xl lg:max-w-5xl">
            <div className="mx-auto">
              <div className="flex gap-4 mx-auto items-center">
                <img src="https://serrexlabs.com/content/images/2023/01/SERrex-labs.--1--1.png" alt="SERrex Labs" className="w-10 h-10" />
                <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl">SERrex Labs</h1>
              </div>
              <p className="mt-6 text-base text-zinc-600">
                Your go-to source for practical content on Typescript, Rust, architecture, and software engineering. Our easy-to-understand articles, tutorials, and resources have helped thousands of developers improve their skills in the ever-evolving tech industry. Improve your skills today!
              </p>
                <SocialMedia />
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}
