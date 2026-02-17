"use client";

import Section from "./Section";
import { Download, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

export default function CVSection() {
    return (
        <Section id="cv" title="Trajectory" subtitle="Curriculum Vitae" verticalTitle="CV">
            <div className="flex flex-col items-center justify-center space-y-6 sm:space-y-8">
                <div className="max-w-2xl text-center">
                    <p className="text-base sm:text-lg leading-relaxed text-foreground/70">
                        A comprehensive record of my professional journey, including education,
                        key roles, and notable contributions to the field of software engineering
                        and artificial intelligence.
                    </p>
                </div>

                <div className="grid w-full max-w-md gap-3 sm:max-w-lg sm:gap-4 sm:grid-cols-2">
                    <motion.a
                        href="/cv/my_CV.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex items-center justify-center gap-3 bg-foreground py-3 sm:py-4 text-[11px] sm:text-sm font-semibold text-background transition-opacity hover:opacity-90"
                    >
                        <ExternalLink size={16} className="sm:hidden" />
                        <ExternalLink size={18} className="hidden sm:block" />
                        View CV
                    </motion.a>
                    <motion.a
                        href="/cv/my_CV.pdf"
                        download="kayaos_CV.pdf"
                        whileHover={{ scale: 1.02, backgroundColor: "rgba(var(--foreground), 0.05)" }}
                        whileTap={{ scale: 0.98 }}
                        className="flex items-center justify-center gap-3 border border-foreground/10 py-3 sm:py-4 text-[11px] sm:text-sm font-semibold transition-colors"
                    >
                        <Download size={16} className="sm:hidden" />
                        <Download size={18} className="hidden sm:block" />
                        Download PDF
                    </motion.a>
                </div>

                <div className="relative w-full max-w-4xl overflow-hidden border border-foreground/5 bg-foreground/[0.01]">
                    <div className="japanese-grid absolute inset-0 opacity-[0.02]" />
                    <div className="relative z-10 h-[70vh] w-full sm:h-auto sm:aspect-[1/1.4]">
                        <iframe
                            src="/cv/my_CV.pdf#view=FitV"
                            className="h-full w-full border-0"
                            title="CV Preview"
                            loading="lazy"
                        />
                    </div>
                </div>

                <div className="text-center space-y-2">
                    <h4 className="text-lg sm:text-xl font-medium italic">Available for selective opportunities.</h4>
                    <p className="text-xs uppercase tracking-[0.3em] text-foreground/40">Latest Update: Feb 2026</p>
                </div>
            </div>
        </Section>
    );
}
