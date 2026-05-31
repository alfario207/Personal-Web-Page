import React from "react";

export default function Experiences() {
    return (
        <section id="experiences" className="scroll-mt-28 dark:text-[#D4D4D8]">
            <h2 className="text-sm text-[#71717B] mb-3 sm:mb-6">EXPERIENCES</h2>
            <div className="space-y-6">
                <div className="grid grid-cols-1 gap-2 space-y-3 sm:gap-8">
                    <div className="sm:flex justify-between">
                        <div className="text-xs text-[#71717B] my-2 sm:my-1">
                            2020 — Present
                        </div>
                        <div className="max-w-lg">
                            <h3 className="font-medium dark:text-[#F4F4F5]">Senior Front-End Engineer</h3>
                            <p className="text-[#71717B] my-0.5 sm:my-2">Kredibel</p>
                            <p className="text-sm text-[#71717B]">
                                Leading the development of design system components and developer tools. 
                                Built reusable UI libraries used across multiple product teams.
                            </p>
                        </div>
                    </div>

                    <div className="sm:flex justify-between">
                        <div className="text-xs text-[#71717B] my-2 sm:my-1">
                            2018 — 2020
                        </div>
                        <div className="max-w-lg">
                            <h3 className="font-medium dark:text-[#F4F4F5]">Front-End Engineer</h3>
                            <p className="text-[#71717B] my-0.5 sm:my-2">Acme</p>
                            <p className="text-sm text-[#71717B]">
                                Developed key features for the project management platform.
                                Focused on performance optimization and accessibility improvements.
                            </p>
                        </div>
                    </div>

                    <div className="sm:flex justify-between">
                        <div className="text-xs text-[#71717B] my-2 sm:my-1">
                            2016 — 2018
                        </div>
                        <div className="max-w-lg">
                            <h3 className="font-medium dark:text-[#F4F4F5]">UI/UX Designer</h3>
                            <p className="text-[#71717B] my-0.5 sm:my-2">Wumbo</p>
                            <p className="text-sm text-[#71717B]">
                                Designed user interfaces and prototyped new features. 
                                Collaborated closely with engineering teams to implement design systems.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}