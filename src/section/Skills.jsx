import React from "react";
import jsIcon from "../assets/images/skills/javascript.svg";
import jsDarkIcon from "../assets/images/skills/javascript-dark.svg";
import uiIcon from "../assets/images/skills/ui-ux.svg";
import uiDarkIcon from "../assets/images/skills/ui-ux-dark.svg";
import backendIcon from "../assets/images/skills/backend.svg";
import backendDarkIcon from "../assets/images/skills/backend-dark.svg";
import toolingIcon from "../assets/images/skills/tooling.svg";
import toolingDarkIcon from "../assets/images/skills/tooling-dark.svg";

export default function Skills() {
    return (
        <section id="skills" className="scroll-mt-40">
            <h2 className="text-sm text-[#71717B] dark:text-[#D4D4D8] mb-3 sm:mb-6">SKILLS</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 ">
                <div className="md:flex gap-6">
                    <div>
                        <img src={jsIcon} className="w-11.25 block dark:hidden" />
                        <img src={jsDarkIcon} className="w-11.25 hidden dark:block" />
                    </div>
                    <div className="sm:max-w-3xs">
                        <h2 className="my-2 md:my-0 font-medium dark:text-[#F4F4F5]">JavaScript & TypeScript</h2>
                        <p className="text-sm text-[#71717B] dark:text-[#D4D4D8] md:my-2">Expert in modern JavaScript (ES6+) and TypeScript for building type-safe applications.</p>
                    </div>
                </div>

                <div className="md:flex gap-6">
                    <div>
                        <img src={uiIcon} className="w-11.25 block dark:hidden" />
                        <img src={uiDarkIcon} className="w-11.25 hidden dark:block" />
                    </div>
                    <div className="sm:max-w-3xs">
                        <h2 className="my-2 md:my-0 font-medium dark:text-[#F4F4F5]">UI//UX Design</h2>
                        <p className="text-sm text-[#71717B] dark:text-[#D4D4D8] md:my-2">Creating intuitive user interfaces with a focus on accessibility and user experience.</p>
                    </div>
                </div>

                <div className="md:flex gap-6">
                    <div>
                        <img src={backendIcon} className="w-11.25 block dark:hidden" />
                        <img src={backendDarkIcon} className="w-11.25 hidden dark:block" />
                    </div>
                    <div className="sm:max-w-3xs">
                        <h2 className="my-2 md:my-0 font-medium dark:text-[#F4F4F5]">Backend Integration</h2>
                        <p className="text-sm text-[#71717B] dark:text-[#D4D4D8] md:my-2">Working with RESTful APIs, GraphQL, and modern backend services for full-stack development.</p>
                    </div>
                </div>

                <div className="md:flex gap-6">
                    <div>
                        <img src={toolingIcon} className="w-11.25 block dark:hidden" />
                        <img src={toolingDarkIcon} className="w-11.25 hidden dark:block" />
                    </div>
                    <div className="sm:max-w-3xs">
                        <h2 className="my-2 md:my-0 font-medium dark:text-[#F4F4F5]">Tooling & Automation</h2>
                        <p className="text-sm text-[#71717B] dark:text-[#D4D4D8] md:my-2">Setting up build tools, CI/CD pipelines, and development workflows for efficient delivery.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}