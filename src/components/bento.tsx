"use client";

import React, { useState } from "react";
import { Sword, BriefcaseBusiness, Trophy, Lightbulb } from "lucide-react";
import { cn } from "@/lib/utils";
import IconCloudDemo from "@/components/bento-backgrounds/icloud";
import AnimatedListDemo from "@/components/bento-backgrounds/animlist";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import Marquee from "@/components/ui/marquee";
import { SafariDemo } from "./bento-backgrounds/safari";
import WorkExperience from "./bento-pages/WorkExperience";
import MyTools from "./bento-pages/MyTools";
import MyHonors from "./bento-pages/MyHonors";
import MyProjects from "./bento-pages/MyProjects";
import InteractiveHoverButton from "./ui/interactive-hover-button";
import { useView } from "@/context/ViewContext";

const files = [
  {
    name: "Web Developer Intern @ Luarsekolah",
    body: "Revamped the front-end of Luarsekolah using HTML, CSS, JavaScript, and PHP, enhancing user experience while earning recognition for collaborative contributions.",
  },
  {
    name: "Chief Technology Officer @ SocialSoles",
    body: "Led the website project by coordinating with vendors, designing the UI in Adobe XD, managing product migration to WooCommerce, and overseeing the technical team for data maintenance and promotions.",
  },
  {
    name: "Data Entry Specialist @ CV Perdana Raya",
    body: "Streamlined data entry and reconfiguration by creating a centralized product database in Google Sheets, implementing automation to enhance efficiency and reduce workload.",
  },
  {
    name: "Expert HRD Ministry Staff @ Eksekutif Mahasiswa Universitas Brawijaya",
    body: "As Vice Coordinator for the Brawijaya Leadership Bootcamp, I rebranded the program to boost registrations, fostered team collaboration, and ensured successful event execution alongside cross-functional departments.",
  },
  {
    name: "Operational Manager @ SocialSoles",
    body: "Oversaw supply chain operations in the dropship business, handling customer interactions, order fulfillment, and post-sales support while addressing complaints effectively.",
  },
];

const features = [
  {
    Icon: BriefcaseBusiness,
    name: "Work Experience & Education",
    slug: <WorkExperience />,
    description: "Dive deeper into my professional background.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
    background: (
      <Marquee
        pauseOnHover
        className="absolute top-10 [--duration:20s] [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] "
      >
        {files.map((f, idx) => (
          <figure
            key={idx}
            className={cn(
              "relative w-32 cursor-pointer overflow-hidden rounded-xl border p-4",
              "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
              "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
              "transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none",
            )}
          >
            <div className="flex flex-row items-center gap-2">
              <div className="flex flex-col">
                <figcaption className="text-sm font-medium dark:text-white ">
                  {f.name}
                </figcaption>
              </div>
            </div>
            <blockquote className="mt-2 text-xs">{f.body}</blockquote>
          </figure>
        ))}
      </Marquee>
    ),
  },
  {
    Icon: Sword,
    name: "Skills, Tools & Technologies",
    slug: <MyTools />,
    description: "A selection of essential blades in my arsenal that enhance my productivity and drive innovation.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: (
      <div className="absolute right-2 top-4 h-full w-full scale-130 border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-150">
        <IconCloudDemo />
      </div>
    ),
  },
  {
    Icon: Trophy,
    name: "Honors, Awards & Certifications",
    slug: <MyHonors />,
    description: "Recognized achievements and certifications that reflect my commitment to excellence and professional growth.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: (
      <AnimatedListDemo className="absolute right-2 top-4 h-[300px] w-full border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
    ),
  },
  {
    Icon: Lightbulb,
    name: "Projects",
    slug: <MyProjects />,
    description: "A collection of projects that demonstrate my skills and drive for innovation.",
    className: "col-span-3 lg:col-span-1",
    href: "#",
    cta: "Learn more",
    background: (
        <div className="absolute right-2 top-4 h-[300px] border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105">
        <SafariDemo />
      </div>
    ),
  },
];

export function BentoDemo() {
  const { currentView, setView } = useView();
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleViewChange = (view: React.ReactNode | null) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setView(view);
      setIsTransitioning(false);
    }, 300);
  };

  if (currentView) {
    return (
      <div className={`w-ful transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
        <InteractiveHoverButton text="Return" onClick={() => handleViewChange(null)} className="mx-auto my-5"/>
        <div className="w-full">{currentView}</div>
      </div>
    );
  }

  return (
    <BentoGrid>
      {features.map((feature, idx) => (
        <BentoCard
          key={idx}
          {...feature}
          cta={
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                setIsTransitioning(true);
                setTimeout(() => {
                  handleViewChange(feature.slug);
                }, 300);
              }}
              className={`transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}
            >
              {feature.cta}
            </button>
          }
        />
      ))}
    </BentoGrid>
  );
}