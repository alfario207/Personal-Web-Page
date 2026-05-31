import React from "react";
import githubIcon from "../assets/images/social/github.svg";
import linkedinIcon from "../assets/images/social/linkedin.svg";
import youtubeIcon from "../assets/images/social/youtube.svg";

export default function HeroBody() {
    return (
        <div className="w-full sm:w-auto">
            <h2 className="text-2xl md:text-3xl font-medium text-[#18181B] dark:text-[#FAFAFA]">Sarah Chen</h2>
            <p className="text-sm md:text-lg text-[#71717B] dark:text-[#D4D4D8]">Front-end Enginner & Designer</p>

            <div className="mt-3 sm:flex items-center gap-6 sm:mt-6 text-sm sm:text-base text-[#71717B] dark:text-[#D4D4D8]">
                <p>sarah@example.com</p>
                <div className="flex items-center gap-2.5">
                    <img src={githubIcon} alt="GitHub" className="w-4.5 h-4.5" />
                    <p>GitHub</p>
                </div>
                <div className="flex items-center gap-2.5">
                    <img src={linkedinIcon} alt="LinkedIn" className="w-4.5 h-4.5" />
                    <p>LinkedIn</p> 
                </div>
                <div className="flex items-center gap-2.5">
                    <img src={youtubeIcon} alt="YouTube" className="w-4.5 h-4.5" /> 
                    <p>Youtube</p>
                </div>
            </div>
        </div>
    )
}
