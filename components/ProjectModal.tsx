"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github, ArrowRight } from "lucide-react";
import { useEffect } from "react";

interface Project {
    id: number;
    title: string;
    category: string;
    description: string;
    longDescription: string;
    image: string;
    tech: string[];
    features: string[];
}

interface ProjectModalProps {
    project: Project | null;
    onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
    useEffect(() => {
        if (project) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [project]);

    return (
        <AnimatePresence>
            {project && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-background/90 backdrop-blur-xl"
                    />

                    {/* Modal Content */}
                    <motion.div
                        layoutId={`project-${project.id}`}
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="relative z-10 w-full max-w-5xl max-h-[85vh] overflow-hidden border border-foreground/5 bg-background shadow-[0_0_100px_rgba(0,0,0,0.2)] my-auto"
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute right-6 top-6 z-50 rounded-full bg-background/50 p-3 text-foreground/40 backdrop-blur-md transition-all hover:bg-accent hover:text-background"
                        >
                            <X size={20} />
                        </button>

                        <div className="flex flex-col md:flex-row h-full max-h-[85vh] overflow-hidden">
                            {/* Visual Side */}
                            <div className="relative w-full md:w-1/2 bg-foreground/[0.02] flex items-center justify-center overflow-hidden border-r border-foreground/5">
                                <div className="absolute inset-0 japanese-grid opacity-10" />
                                <div className="p-12 md:p-20 flex flex-col items-center justify-center text-center">
                                    <span className="mb-4 block text-[10px] font-black uppercase tracking-[0.6em] text-accent">
                                        Trajectory {project.id}
                                    </span>
                                    <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-8">
                                        {project.title.split(' ')[0]} <br />
                                        <span className="text-outline-accent text-transparent">{project.title.split(' ')[1] || "Project"}</span>
                                    </h2>
                                    <div className="h-24 w-px bg-gradient-to-b from-accent to-transparent" />
                                </div>
                            </div>

                            {/* Info Side */}
                            <div className="w-full md:w-1/2 overflow-y-auto p-8 md:p-16 custom-scrollbar">
                                <div className="mb-12">
                                    <div className="flex items-center gap-4 mb-6">
                                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-accent">
                                            {project.category}
                                        </span>
                                        <div className="h-px flex-1 bg-foreground/5" />
                                    </div>
                                    <h3 className="text-3xl font-black tracking-tighter mb-4 uppercase">{project.title}</h3>
                                    <p className="text-base text-foreground/50 leading-relaxed font-light">
                                        {project.longDescription}
                                    </p>
                                </div>

                                <div className="mb-12 space-y-10">
                                    <div>
                                        <h4 className="mb-6 text-[10px] font-black uppercase tracking-[0.2em] text-foreground/30 flex items-center gap-4">
                                            Features <div className="h-px flex-1 bg-foreground/5" />
                                        </h4>
                                        <ul className="space-y-4">
                                            {project.features.map((f) => (
                                                <li key={f} className="flex items-center gap-4 text-sm text-foreground/70 font-light group">
                                                    <ArrowRight size={14} className="text-accent group-hover:translate-x-1 transition-transform" />
                                                    {f}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="mb-6 text-[10px] font-black uppercase tracking-[0.2em] text-foreground/30 flex items-center gap-4">
                                            Stack <div className="h-px flex-1 bg-foreground/5" />
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {project.tech.map((t) => (
                                                <span
                                                    key={t}
                                                    className="px-3 py-1.5 border border-foreground/10 text-[9px] font-black uppercase tracking-widest text-foreground/40 hover:border-accent hover:text-accent transition-colors"
                                                >
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-foreground/5">
                                    <a
                                        href="#"
                                        className="flex-1 group flex items-center justify-center gap-3 bg-foreground py-4 text-[10px] font-black uppercase tracking-widest text-background hover:bg-accent transition-colors"
                                    >
                                        Live Preview <ExternalLink size={14} />
                                    </a>
                                    <a
                                        href="#"
                                        className="flex-1 flex items-center justify-center gap-3 border border-foreground/10 py-4 text-[10px] font-black uppercase tracking-widest hover:border-accent hover:text-accent transition-colors"
                                    >
                                        Source Code <Github size={16} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
