"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent, useSpring } from "framer-motion";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "next-themes";

const navItems = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "CV", href: "#cv" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [hidden, setHidden] = useState(false);
    const { scrollY, scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() ?? 0;
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }
    });

    return (
        <>
            <motion.nav
                variants={{
                    visible: { y: 0, opacity: 1 },
                    hidden: { y: -100, opacity: 0 },
                }}
                animate={hidden ? "hidden" : "visible"}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="fixed top-0 left-0 right-0 z-50 flex flex-col items-center"
            >
                <div className="w-full h-[1px] bg-foreground/5 overflow-hidden">
                    <motion.div
                        className="h-full bg-accent origin-left"
                        style={{ scaleX }}
                    />
                </div>

                <div className="mt-8 flex items-center glass rounded-full px-6 py-2 gap-8">
                    <div className="hidden md:flex items-center gap-8">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="text-[9px] font-bold uppercase tracking-[0.3em] text-foreground/40 transition-all hover:text-foreground hover:tracking-[0.4em]"
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>

                    <div className="h-3 w-[1px] bg-foreground/10 hidden md:block" />

                    <button
                        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                        className="text-foreground/40 transition-colors hover:text-foreground"
                        aria-label="Toggle theme"
                    >
                        {mounted && (theme === "dark" ? <Sun size={14} strokeWidth={2.5} /> : <Moon size={14} strokeWidth={2.5} />)}
                    </button>

                    <button
                        className="md:hidden text-foreground/60 p-1"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <Menu size={18} />
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            <motion.div
                initial={false}
                animate={mobileMenuOpen ? "open" : "closed"}
                variants={{
                    open: { x: 0 },
                    closed: { x: "100%" },
                }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="fixed inset-0 z-[60] bg-background md:hidden"
            >
                <div className="flex flex-col h-full p-12">
                    <div className="flex justify-end items-center mb-24">
                        <button onClick={() => setMobileMenuOpen(false)}>
                            <X size={32} strokeWidth={1} />
                        </button>
                    </div>
                    <div className="flex flex-col gap-12">
                        {navItems.map((item, idx) => (
                            <motion.a
                                key={item.name}
                                href={item.href}
                                initial={{ opacity: 0, x: 20 }}
                                animate={mobileMenuOpen ? { opacity: 1, x: 0 } : {}}
                                transition={{ delay: 0.2 + idx * 0.1 }}
                                onClick={() => setMobileMenuOpen(false)}
                                className="text-4xl font-bold tracking-tighter"
                            >
                                {item.name}
                            </motion.a>
                        ))}
                    </div>
                    <div className="mt-auto flex justify-between items-end">
                        <button
                            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                            className="text-foreground/60 p-4 border border-foreground/10 rounded-full"
                        >
                            {mounted && (theme === "dark" ? <Sun size={24} /> : <Moon size={24} />)}
                        </button>
                        <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-foreground/20">© 2026</span>
                    </div>
                </div>
            </motion.div>
        </>
    );
}
