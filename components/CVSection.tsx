"use client";

import Section from "./Section";
import { FileText, Download, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

export default function CVSection() {
    return (
        <Section id="cv" title="Trajectory" subtitle="Curriculum Vitae" verticalTitle="CV">
            <div className="flex flex-col items-center justify-center space-y-8">
                <div className="max-w-2xl text-center">
                    <p className="text-lg leading-relaxed text-foreground/70">
                        A comprehensive record of my professional journey, including education,
                        key roles, and notable contributions to the field of software engineering
                        and artificial intelligence.
                    </p>
                </div>

                <div className="grid w-full max-w-lg gap-4 sm:grid-cols-2">
                    <motion.a
                        href="#"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex items-center justify-center gap-3 bg-foreground py-4 text-sm font-semibold text-background transition-opacity hover:opacity-90"
                    >
                        <ExternalLink size={18} />
                        View CV
                    </motion.a>
                    <motion.a
                        href="#"
                        whileHover={{ scale: 1.02, backgroundColor: "rgba(var(--foreground), 0.05)" }}
                        whileTap={{ scale: 0.98 }}
                        className="flex items-center justify-center gap-3 border border-foreground/10 py-4 text-sm font-semibold transition-colors"
                    >
                        <Download size={18} />
                        Download PDF
                    </motion.a>
                </div>

                <div className="relative w-full max-w-3xl overflow-hidden border border-foreground/5 bg-foreground/[0.01] p-12 text-center">
                    <div className="japanese-grid absolute inset-0 opacity-[0.02]" />
                    <div className="relative z-10 flex flex-col items-center gap-8">
                        <FileText size={48} className="text-foreground/10" />
                        <div className="space-y-2">
                            <h4 className="text-xl font-medium italic">Available for selective opportunities.</h4>
                            <p className="text-xs uppercase tracking-[0.3em] text-foreground/40">Latest Update: Feb 2026</p>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}
