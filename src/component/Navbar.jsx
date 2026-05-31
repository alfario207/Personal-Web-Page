import React from "react";
import DarkModeBtn from "./DarkModeBtn";

export default function Navbar() {
    return (
        <div id="navbar" className="sticky top-0 bg-[#fafafaf0] dark:bg-[#080d1bf0]">
            <navbar className="flex justify-center items-center pt-8 pb-4 mb-4">
                <nav className="flex sm:gap-1 justify-around items-center text-xs sm:text-sm p-1 max-w-lg rounded-full shadow-md dark:shadow-slate-600 bg-white dark:bg-[#18181B]">
                    <a className="cursor-pointer dark:text-[#F4F4F5] px-2.25 py-2 sm:px-4" href="#about">About</a>
                    <a className="cursor-pointer dark:text-[#9F9FA9] px-2.25 py-2 sm:px-4 text-[#71717B]" href="#experiences">Experiences</a>
                    <a className="cursor-pointer dark:text-[#9F9FA9] px-2.25 py-2 sm:px-4 text-[#71717B]" href="#skills">Skills</a>
                    <a className="cursor-pointer dark:text-[#9F9FA9] px-2.25 py-2 sm:px-4 text-[#71717B]" href="#projects">Projects</a>
                    <a className="cursor-pointer dark:text-[#9F9FA9] px-2.25 py-2 sm:px-4 text-[#71717B]" href="#contact">Contact</a>
                    <div className="h-4 w-px bg-[#E4E4E7] dark:bg-[#27272A] mx-1"></div>
                    <DarkModeBtn />
                </nav>
            </navbar>   
        </div>
    )
}