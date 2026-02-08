"use client";

import { motion } from "framer-motion";
import Button from "@/components/common/Button";
import AnimatedText from "@/components/common/AnimatedText";

const heroContent = {
    greeting: "Hey there, I'm",
    name: "ADHIL P",
    roles: ["Full Stack Developer", "Backend Architect", "Problem Solver"],
    tagline:
        "I craft scalable, production-ready web applications that solve real problems. Specializing in the MERN stack, cloud infrastructure, and systems that scale.",
    cta: {
        primary: { label: "View My Work", href: "#projects" },
        secondary: { label: "Get In Touch", href: "#contact" },
    },
};

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.3,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
    },
};

export default function Hero() {
    const handleScroll = (e, href) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
        >
            <motion.div
                className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* Greeting */}
                <motion.p
                    variants={itemVariants}
                    className="text-[var(--text-tertiary)] text-lg md:text-xl mb-4 font-medium"
                >
                    {heroContent.greeting}
                </motion.p>

                {/* Name with gradient */}
                <motion.div variants={itemVariants} className="mb-6">
                    <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight">
                        <span className="gradient-text">{heroContent.name}</span>
                    </h1>
                </motion.div>

                {/* Role */}
                <motion.div
                    variants={itemVariants}
                    className="flex items-center gap-3 mb-8"
                >
                    <div className="h-[2px] w-12 bg-gradient-to-r from-indigo-500 to-purple-500" />
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-[var(--text-secondary)]">
                        {heroContent.roles[0]}
                    </h2>
                </motion.div>

                {/* Tagline */}
                <motion.div variants={itemVariants} className="max-w-2xl mb-12">
                    <p className="text-lg md:text-xl text-[var(--text-tertiary)] leading-relaxed">
                        {heroContent.tagline}
                    </p>
                </motion.div>

                {/* CTAs */}
                <motion.div
                    variants={itemVariants}
                    className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
                >
                    <Button
                        href={heroContent.cta.primary.href}
                        onClick={(e) => handleScroll(e, heroContent.cta.primary.href)}
                        variant="primary"
                    >
                        {heroContent.cta.primary.label}
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Button>
                    <Button
                        href={heroContent.cta.secondary.href}
                        onClick={(e) => handleScroll(e, heroContent.cta.secondary.href)}
                        variant="secondary"
                    >
                        {heroContent.cta.secondary.label}
                    </Button>
                </motion.div>

                {/* Scroll indicator */}
                <motion.div
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block" // Hide on small mobile if needed, or keep
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 0.5 }}
                >
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="flex flex-col items-center gap-2"
                        onClick={(e) => handleScroll(e, "#about")}
                        style={{ cursor: "pointer" }}
                    >
                        <span className="text-xs text-[var(--text-tertiary)] uppercase tracking-widest">Scroll</span>
                        <div className="w-5 h-8 border border-[var(--border-hover)] rounded-full flex items-start justify-center p-1.5">
                            <motion.div
                                animate={{ y: [0, 8, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                                className="w-1 h-2 bg-[var(--text-tertiary)] rounded-full"
                            />
                        </div>
                    </motion.div>
                </motion.div>
            </motion.div>

            {/* Decorative elements - Theme aware */}
            <div className="absolute top-1/2 right-10 -translate-y-1/2 hidden xl:block pointer-events-none">
                <motion.div
                    className="w-64 h-64 border border-[var(--border)] rounded-full"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 0.2 }}
                    transition={{ delay: 1, duration: 1 }}
                />
                <motion.div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-[var(--border)] rounded-full"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 0.3 }}
                    transition={{ delay: 1.2, duration: 1 }}
                />
                <motion.div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-indigo-500/30 rounded-full"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 0.5 }}
                    transition={{ delay: 1.4, duration: 1 }}
                />
            </div>
        </section>
    );
}
