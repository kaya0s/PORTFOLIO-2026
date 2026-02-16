"use client";

import { motion } from "framer-motion";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-foreground/5 py-12">
            <div className="container mx-auto px-8 md:px-16 lg:px-32">
                <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
                    <div className="flex items-center gap-4">
                        <span className="font-serif text-2xl font-bold tracking-tighter">
                            kaya<span className="text-accent">0</span>s
                        </span>
                        <div className="h-4 w-[1px] bg-foreground/10" />
                        <p className="text-[10px] uppercase tracking-[0.2em] text-foreground/30">
                            © {currentYear} All Rights Reserved
                        </p>
                    </div>

                    <nav className="flex items-center gap-8">
                        <a href="#about" className="text-[10px] uppercase tracking-[0.2em] text-foreground/40 transition-colors hover:text-foreground">About</a>
                        <a href="#projects" className="text-[10px] uppercase tracking-[0.2em] text-foreground/40 transition-colors hover:text-foreground">Projects</a>
                        <a href="#contact" className="text-[10px] uppercase tracking-[0.2em] text-foreground/40 transition-colors hover:text-foreground">Contact</a>
                    </nav>

                    <div className="text-[10px] uppercase tracking-[0.2em] text-foreground/20">
                        Crafted with Intent
                    </div>
                </div>
            </div>
        </footer>
    );
}
