import React from "react";
import githubIcon from '../assets/images/social/github.svg'
import linkedinIcon from '../assets/images/social/linkedin.svg'
import youtubeIcon from '../assets/images/social/youtube.svg'

export default function Contact() {
    return (
        <section id="contact">
            <h2 className="text-sm text-[#71717B] dark:text-[#D4D4D8]">CONTACT</h2>
            <p className="text-sm my-6 text-[#27272A] dark:text-[#E4E4E7]">
                Feel free to reach out if you want to collaborate on a project, 
                need help with front-end development, or just want to connect.
            </p>
            <div className="mt-3 text-sm sm:flex items-center gap-6 sm:text-base text-[#71717B] dark:text-[#D4D4D8]">
                <p>sarah@example.com</p>
                <div className="flex items-center gap-2.5">
                    <img src={githubIcon} className="w-4.5 h-4.5" />
                    <p>GitHub</p>
                </div>
                <div className="flex items-center gap-2.5">
                    <img src={linkedinIcon} className="w-4.5 h-4.5" />
                    <p>LinkedIn</p> 
                </div>
                <div className="flex items-center gap-2.5">
                    <img src={youtubeIcon} className="w-4.5 h-4.5" /> 
                    <p>Youtube</p>
                </div>
            </div>
        </section>
    )
}