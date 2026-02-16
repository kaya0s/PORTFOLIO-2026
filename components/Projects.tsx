"use client";

import { useState } from "react";
import Section from "./Section";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

const projects = [
    {
        id: 1,
        title: "TeachTrack",
        category: "Machine Learning",
        description: "A Classroom Behavior Detection System designed to help educators monitor student engagement and behavior in real-time using machine learning.",
        longDescription: "TeachTrack is an advanced AI-powered system that uses computer vision to analyze student engagement and behavior patterns in classroom environments. It provides real-time insights to educators, helping them identify students who may need additional attention or support.",
        image: "",
        tech: ["Python", "TensorFlow", "OpenCV", "React", "FastAPI"],
        features: ["Real-time behavior analysis", "Student engagement tracking", "Alert system for educators", "Dashboard analytics"],
    },
    {
        id: 2,
        title: "Mini-Jarvis",
        category: "Automation Tool",
        description: "A Python-based automation assistant designed to help with mini tasks.",
        longDescription: "Mini-Jarvis is a intelligent automation assistant built with Python that helps users streamline their daily tasks through voice commands and automated workflows. It can handle various mini tasks from file management to web automation.",
        image: "",
        tech: ["Python", "Speech Recognition", "Natural Language Processing", "Automation"],
        features: ["Voice command processing", "Task automation", "File management", "Web scraping capabilities"],
    },
    {
        id: 3,
        title: "HJ Gownshop",
        category: "Web Application",
        description: "A web-based gown rental management system with user authentication, including Google OAuth and Paypal Sandbox integration.",
        longDescription: "HJ Gownshop is a comprehensive gown rental platform that allows users to browse, select, and rent gowns for special occasions. The system features secure authentication, payment processing, and inventory management.",
        image: "",
        tech: ["PHP", "JavaScript", "MySQL", "Google OAuth", "PayPal API"],
        features: ["User authentication", "Google OAuth integration", "PayPal Sandbox payments", "Inventory management"],
    },
    {
        id: 4,
        title: "Squidgame",
        category: "Game Development",
        description: "Red Light Green Light is an inspired project based on the famous Korean show with 4 players.",
        longDescription: "Squidgame is a multiplayer game inspired by the popular Korean series, featuring the iconic Red Light Green Light challenge. Built with Java, it supports 4 simultaneous players with real-time gameplay mechanics.",
        image: "",
        tech: ["Java", "Swing", "Multiplayer Networking", "Game Physics"],
        features: ["4-player multiplayer", "Real-time gameplay", "Red Light Green Light mechanics", "Score tracking"],
    },
    {
        id: 5,
        title: "HJ-EVENTS",
        category: "Full-stack Application",
        description: "A fullstack admin/client system for wedding booking and has 7 integrations with backups and others like emails payments.",
        longDescription: "HJ-EVENTS is a comprehensive wedding booking management system that serves both administrators and clients. The platform features 7 different integrations including email services, payment gateways, and automated backup systems.",
        image: "",
        tech: ["MongoDB", "Express.js", "React", "Node.js", "Email API", "Payment Gateway"],
        features: ["Admin dashboard", "Client booking system", "7 service integrations", "Automated backups", "Email notifications", "Payment processing"],
    },
];

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

    return (
        <>
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

                    {/* Right Middle Column */}
                    <div className="md:col-span-4 overflow-hidden">
                        <ProjectCard
                            project={projects[2]}
                            onClick={() => setSelectedProject(projects[2])}
                            className="h-[300px] md:h-[350px]"
                        />
                    </div>

                    {/* Bottom Left Project */}
                    <div className="md:col-span-6 overflow-hidden border-t border-foreground/5">
                        <ProjectCard
                            project={projects[3]}
                            onClick={() => setSelectedProject(projects[3])}
                            className="h-[250px] md:h-[300px]"
                        />
                    </div>

                    {/* Bottom Right Project */}
                    <div className="md:col-span-6 overflow-hidden border-t border-l md:border-t md:border-l-0 border-foreground/5">
                        <ProjectCard
                            project={projects[4]}
                            onClick={() => setSelectedProject(projects[4])}
                            className="h-[250px] md:h-[300px]"
                        />
                    </div>
                </div>
            </Section>

            <ProjectModal
                project={selectedProject}
                onClose={() => setSelectedProject(null)}
            />
        </>
    );
}
