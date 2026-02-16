"use client";

import Section from "./Section";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function About() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const rotate = useTransform(scrollYProgress, [0, 1], [0, 15]);
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

    return (
        <Section id="about" title="Curiosity" subtitle="About Me" verticalTitle="About">
            <div ref={ref} className="grid gap-12 lg:grid-cols-12 items-center">
                <div className="lg:col-span-7 space-y-10">
                    <p className="text-2xl md:text-4xl leading-[1.3] text-foreground/90 font-light tracking-tight">
                        I am a developer who loves <span className="text-accent italic">creating anything new</span> and exploring technologies.
                    </p>
                    <div className="flex gap-12">
                        <div className="space-y-6 flex-1">
                            <p className="text-sm md:text-base leading-relaxed text-foreground/60 font-light">
                                My journey is driven by a profound curiosity for how things work and a passion for building robust,
                                scalable systems. I believe that the best solutions come from a mix of technical rigor and a
                                constant drive to explore the unknown. I'm always looking for the next challenge to master.
                            </p>
                        </div>
                        <div className="space-y-6 flex-1 hidden md:block border-l border-foreground/5 pl-12">
                            <p className="text-sm md:text-base leading-relaxed text-foreground/60 font-light italic">
                                "Simplicity is the ultimate sophistication."
                                <br />
                                <span className="text-[10px] mt-2 block opacity-30 not-italic">— Leonardo da Vinci</span>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-5 relative group">
                    <motion.div
                        style={{ rotate, scale }}
                        className="relative aspect-square overflow-hidden bg-foreground/[0.02] border border-foreground/5 flex items-center justify-center p-8"
                    >
                        <div className="absolute inset-0 japanese-grid opacity-10" />

                        <span className="relative z-10 font-serif text-[18vw] opacity-[0.05] group-hover:opacity-0 transition-opacity duration-500 select-none">新</span>

                        {/* Minimalist Floating Elements */}
                        <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute top-12 left-12 h-16 w-[1px] bg-accent/20"
                        />
                        <motion.div
                            animate={{ x: [0, 20, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute bottom-12 right-12 w-16 h-[1px] bg-accent/20"
                        />
                    </motion.div>

                    <div className="absolute -bottom-8 -right-8 h-32 w-32 border border-foreground/5 -z-10 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-700" />
                </div>
            </div>
        </Section>
    );
}
