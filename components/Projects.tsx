"use client";

import { useState } from "react";
import Section from "./Section";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

const projects = [
    {
        id: 1,
        title: "Zenith OS",
        category: "Web Application",
        description: "A desktop-class operating system interface built entirely for the web.",
        longDescription: "Zenith OS is a sophisticated web-based desktop environment that showcases high-performance React patterns. It includes a window manager, file system abstraction, and a suite of productivity tools, all designed with a minimal glassmorphism aesthetic.",
        image: "/images/project1.jpg",
        tech: ["Next.js", "Tailwind", "Framer Motion", "Zustand"],
        features: ["Window management system", "Real-time collaboration", "Custom file explorer", "Dynamic terminal emulator"],
    },
    {
        id: 2,
        title: "Kintsugi AI",
        category: "Machine Learning",
        description: "An AI-powered restoration tool for vintage ceramics and art pieces.",
        longDescription: "Kintsugi AI uses custom-trained Generative Adversarial Networks (GANs) to predict and visualize the restoration of broken objects. It takes inspiration from the Japanese art of Kintsugi, turning repairs into beautiful, highlighted features of the object.",
        image: "/images/project2.jpg",
        tech: ["Python", "PyTorch", "React", "FastAPI"],
        features: ["Fracture detection", "Texture synthesis", "3D point cloud generation", "AR preview"],
    },
    {
        id: 3,
        title: "Haiku CMS",
        category: "Developer Tool",
        description: "The world's most minimalist headless CMS, structured like a haiku.",
        longDescription: "Haiku CMS is built on the principle of 'less is more'. It provides a strictly curated set of features that force developers to write cleaner, more intentional code. It's designed for portfolios and small-scale creative projects.",
        image: "/images/project3.jpg",
        tech: ["TypeScript", "Node.js", "Redis", "SQLite"],
        features: ["Strict 17-component limit", "Automatic SEO optimization", "Zero-config deployment", "Markdown-first workflow"],
    },
    {
        id: 4,
        title: "Mono Synth",
        category: "Audio Engineering",
        description: "A monophonic synthesizer with a focus on raw analog textures.",
        longDescription: "Mono Synth is an experimental audio tool that leverages the Web Audio API to create authentic analog-sounding waves. It features a tactile interface inspired by classic Japanese hardware synthesizers from the 80s.",
        image: "/images/project4.jpg",
        tech: ["Web Audio API", "Canvas", "React", "Tone.js"],
        features: ["Virtual Voltage Control", "Real-time FFT visualization", "MIDI support", "Preset sharing"],
    },
];

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

    return (
        <Section id="projects" title="Exhibition" subtitle="Portfolio" verticalTitle="Projects" className="py-20 md:py-24">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-px border border-foreground/5 bg-foreground/5 overflow-hidden">
                {/* Main Project (Big) */}
                <div className="md:col-span-8 md:row-span-2 overflow-hidden">
                    <ProjectCard
                        project={projects[0]}
                        onClick={() => setSelectedProject(projects[0])}
                        className="h-[400px] md:h-[701px]"
                    />
                </div>

                {/* Right Top Column */}
                <div className="md:col-span-4 overflow-hidden border-b md:border-b-0 border-foreground/5">
                    <ProjectCard
                        project={projects[1]}
                        onClick={() => setSelectedProject(projects[1])}
                        className="h-[300px] md:h-[350px]"
                    />
                </div>

                {/* Right Bottom Column */}
                <div className="md:col-span-4 overflow-hidden">
                    <ProjectCard
                        project={projects[2]}
                        onClick={() => setSelectedProject(projects[2])}
                        className="h-[300px] md:h-[350px]"
                    />
                </div>

                {/* Bottom Full Wide Sub-Project */}
                <div className="md:col-span-12 overflow-hidden border-t border-foreground/5">
                    <ProjectCard
                        project={projects[3]}
                        onClick={() => setSelectedProject(projects[3])}
                        className="h-[250px] md:h-[300px]"
                    />
                </div>
            </div>

            <ProjectModal
                project={selectedProject}
                onClose={() => setSelectedProject(null)}
            />
        </Section>
    );
}
