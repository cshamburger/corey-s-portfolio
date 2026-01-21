"use client";

import Hero from "@/components/Home/Hero";
import Counter from "@/components/Home/Counter";
import WorkProgress from "@/components/Home/WorkProgress";
import Services from "@/components/Home/Services";

import Portfolio from "@/components/SharedComponent/portfolio";
import Testimonial from "@/components/SharedComponent/Testimonial";
import Blog from "@/components/SharedComponent/Blog";

import Contact from "@/components/Home/Contact";

export default function Home() {
    return (
        <main>
            <Hero />
            <Counter isColorMode={false} />
            <WorkProgress isColorMode={false} />
            <Services />
            <Portfolio />
            <Testimonial />
            <Blog />
            <Contact />
        </main>
    );
}
