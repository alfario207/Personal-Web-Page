import React from "react";
import Navbar from "./component/Navbar";
import Hero from "./section/Hero";
import About from "./section/About";
import Experiences from "./section/Experiences";
import Skills from "./section/Skills";
import Projects from "./section/Projects";
import Contact from "./section/Contact";
import Footer from "./section/Footer";

export default function App() {
    return (
    <>
    <Navbar />
    <main className="w-full">
        <div className="max-w-3xl mx-auto px-4 py-8 sm:px-8 sm:py-16">
            <Hero />
            <hr className="border-[#E4E4E7] dark:border-[#27272A] my-12" />
            <About />
            <hr className="border-[#E4E4E7] dark:border-[#27272A] my-12" />
            <Experiences />
            <hr className="border-[#E4E4E7] dark:border-[#27272A] my-12" />
            <Skills />
            <hr className="border-[#E4E4E7] dark:border-[#27272A] my-12" />
            <Projects />
            <hr className="border-[#E4E4E7] dark:border-[#27272A] my-12" />
            <Contact />
            <hr className="border-[#E4E4E7] dark:border-[#27272A] my-12" />
            <Footer />
        </div>
    </main>
    </>
    )
}