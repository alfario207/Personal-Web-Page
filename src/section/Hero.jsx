import React from "react";
import HeroImage from "../component/HeroImage";
import HeroBody from "../component/HeroBody";

export default function Hero() {
    return (
        <section className="w-full flex items-center gap-8 scroll-mt-12">
            <HeroImage />
            <HeroBody />
        </section>
    )
}
