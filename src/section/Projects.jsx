import React from "react";
import componentLibrary from '../assets/images/projects/component-library.svg'
import porfolioWebsite from '../assets/images/projects/portfolio-website.svg'

export default function Projects() {
    return (
        <section id="projects" className="space-y-6 scroll-mt-30">
            <h2 className="text-sm text-[#71717B] dark:text-[#D4D4D8]">PROJECTS</h2>
            <div className="sm:flex gap-6">
                <img src={componentLibrary} alt="Component Library" className="w-full sm:w-3xs" />
                <div className="flex flex-col justify-center">
                    <h2 className="font-medium dark:text-[#F4F4F5]">Component Library</h2>
                    <p className="text-sm text-[#71717B] dark:text-[#D4D4D8] my-2">
                        Open-source React component library with TypeScript support. 
                        Features 50+ components with comprehensive documentation and Storybook integration.
                    </p>
                    <div className="flex gap-2.5 text-[#71717B] dark:text-[#D4D4D8]">
                        <div className="bg-[#E4E4E7] dark:bg-[#27272A] px-2 py-1 rounded-md">React</div>
                        <div className="bg-[#E4E4E7] dark:bg-[#27272A] px-2 py-1 rounded-md">Tailwind CSS</div>
                        <div className="bg-[#E4E4E7] dark:bg-[#27272A] px-2 py-1 rounded-md">Base UI</div>
                    </div>
                </div>
            </div>

            <div className="sm:flex gap-6">
                <img src={porfolioWebsite} alt="Portfolio Website" className="w-full sm:w-3xs" />
                <div className="flex flex-col justify-center">
                    <h2 className="font-medium dark:text-[#F4F4F5]">Portfolio Website</h2>
                    <p className="text-sm text-[#71717B] dark:text-[#D4D4D8] my-2">
                       Minimalist portfolio showcasing design and development work. 
                       Built with performance and accessibility in mind.
                    </p>
                    <div className="flex gap-2.5 text-[#71717B] dark:text-[#D4D4D8]">
                        <div className="bg-[#E4E4E7] dark:bg-[#27272A] px-2 py-1 rounded-md">Tailwind CSS</div>
                        <div className="bg-[#E4E4E7] dark:bg-[#27272A] px-2 py-1 rounded-md">HTML</div>
                    </div>
                </div>
            </div>
        </section>
    )
}