"use client";

import Image from "next/image";
import { MagicCard } from "./ui/magic-card";
import Link from "next/link";
import ShimmerButton from "./ui/shimmer-button";

const Intro = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6 justify-center items-center p-4 responsive-container">
      <MagicCard className="cursor-pointer flex flex-col md:flex-row gap-6 items-center justify-center text-4xl shadow-xl p-4 md:p-6"
        gradientColor={"#D9D9D955"}>
        <div className="flex flex-col md:flex-row gap-6 md:gap-16 items-center justify-center w-full">
          <div className="w-full md:w-3/12 flex justify-center items-center max-w-[250px] min-w-[250px] responsive-image">
            <Image 
              src="/images/fotoandrei.png"
              alt="Andrei"
              layout="responsive"
              width={1000}
              height={1000}
              className="rounded-full border-gray-300 shadow-xl object-cover"
            />
          </div>
          <div className="flex flex-col gap-4 w-full md:w-7/12 text-center md:text-left responsive-text">
            <div>
              <h1 className="text-4xl font-bold">Hey, I&#39;m Andrei!</h1>
              <div className="flex flex-col gap-4">
              <p className="text-base text-gray-700 text-justify mt-2">
                A tech enthusiast blending knowledge with communication, I specialize in front-end development, UI/UX design, and cybersecurity. Awarded for my communication skills, I thrive on turning complex ideas into clear solutions. Join me on my journey of innovation and excellence!
              </p>
              <div className="w-full flex justify-center md:justify-start">
              <Link href="https://docs.google.com/document/d/15K3beUX_9pYAFTG_Ojf8DieYJF8L-9iS2XBkgSA-gdQ/edit?usp=sharing">
                <ShimmerButton className="shadow-2xl">
                  <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                    My Resume
                  </span>
                </ShimmerButton>
              </Link>
              </div>
              </div>
            </div>
          </div>
        </div>
      </MagicCard>
    </div>
  );
};

export default Intro;
