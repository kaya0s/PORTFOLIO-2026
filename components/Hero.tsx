"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
    const opacity = useTransform(scrollYProgress, [0, 0.3, 1], [1, 0.5, 0]);
    const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
    const imgY = useTransform(scrollYProgress, [0, 1], [0, 100]);

    return (
        <section
            ref={containerRef}
            className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-background pt-20"
        >
            <div className="japanese-grid absolute inset-0 opacity-[0.03]" />

            {/* Background Name (Behind Photo) */}
            <motion.div
                layoutId="kayaos-branding"
                style={{ opacity: useTransform(scrollYProgress, [0, 0.3], [0.03, 0]), scale }}
                className="absolute inset-0 flex items-center justify-center pointer-events-none z-0"
            >
                <span className="text-[25vw] font-black tracking-tighter uppercase text-foreground">
                    KAYAOS
                </span>
            </motion.div>

            <div className="container relative z-10 mx-auto px-8 md:px-16 lg:px-32 flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24">

                {/* Left Content (Text) */}
                <motion.div
                    style={{ opacity, y }}
                    className="flex-1 order-2 md:order-1"
                >
                    <div className="space-y-8">
                        <div className="inline-flex items-center gap-4">
                            <span className="h-px w-12 bg-accent" />
                            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-accent">Full Stack Developer</span>
                        </div>

                        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.9] uppercase">
                            Creating <br />
                            <span className="text-outline-accent text-transparent">Anything</span> <br />
                            New.
                        </h1>

                        <p className="max-w-md text-sm md:text-base leading-relaxed text-foreground/50 font-light tracking-wide">
                            I am kayaos, a developer who loves creating anything new and exploring technologies.
                            Based in BUKIDNON, PHILIPPINES, I specialize in building high-performance systems and modern digital solutions.
                        </p>

                    </div>
                </motion.div>

                {/* Right Content (Creative Photo) */}
                <motion.div
                    style={{ opacity, scale, y: imgY }}
                    className="relative flex-1 order-1 md:order-2"
                >
                    <div className="relative aspect-[4/5] w-full max-w-[450px] mx-auto overflow-hidden border border-foreground/5 bg-foreground/[0.02] collage-mask">
                        {/* Main Profile Photo Placeholder */}
                        <motion.div
                            initial={{ scale: 1.2, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                            className="h-full w-full"
                        >
                            <img
                                src="/images/profile.jpg"
                                alt="kayaos"
                                className="h-full w-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-1000"
                            />
                        </motion.div>

                        {/* Decorative Glitch/Editorial Overlays */}
                        <div className="absolute inset-0 pointer-events-none">
                            <div className="absolute top-0 right-0 h-32 w-32 border-t border-r border-accent/30" />
                            <div className="absolute bottom-0 left-0 h-32 w-32 border-b border-l border-accent/20" />
                            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-foreground/5" />
                        </div>

                        {/* Floating Info Tag */}
                        <motion.div
                            initial={{ x: 50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 1, duration: 1 }}
                            className="absolute bottom-10 -right-4 bg-accent p-6 text-background shadow-2xl"
                        >
                            <span className="text-[9px] font-black uppercase tracking-[0.5em] block mb-2">Availability</span>
                            <span className="text-sm font-bold block">Open for Projects</span>
                        </motion.div>
                    </div>

                    {/* Background Text behind photo */}
                    <div className="absolute -top-10 -left-10 z-[-1] pointer-events-none hidden lg:block">
                        <span className="text-[12rem] font-bold text-foreground/[0.02] italic select-none">匠</span>
                    </div>
                </motion.div>

            </div>

            {/* Dynamic Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
            >
                <span className="text-[10px] font-bold uppercase tracking-[0.8em] text-foreground/20 italic">Scroll</span>
                <div className="h-12 w-[1px] bg-gradient-to-b from-accent to-transparent" />
            </motion.div>

        </section>
    );
}
