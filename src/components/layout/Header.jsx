"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "@/components/common/ThemeToggle";

const navLinks = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Skills", href: "#skills" },
    { label: "Work", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
];

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            // Determine active section
            const sections = navLinks.map(link => link.href.slice(1));
            for (const section of sections.reverse()) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 150) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleNavClick = (e, href) => {
        e.preventDefault();
        setIsMobileMenuOpen(false);
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? "glass py-3 border-b border-[var(--border)]"
                : "bg-transparent py-5 border-transparent"
                }`}
        >
            <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <motion.a
                        href="#"
                        className="relative group"
                        onClick={(e) => {
                            e.preventDefault();
                            window.scrollTo({ top: 0, behavior: "smooth" });
                        }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <span className="text-2xl font-bold">
                            <span className="gradient-text">A</span>
                            <span className="text-[var(--text-primary)]">DHIL</span>
                            <span className="text-indigo-500">.</span>
                        </span>
                    </motion.a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-6">
                        <ul className="flex items-center gap-1">
                            {navLinks.map((link) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        onClick={(e) => handleNavClick(e, link.href)}
                                        className={`relative px-4 py-2 text-sm font-medium transition-colors rounded-full ${activeSection === link.href.slice(1)
                                            ? "text-[var(--text-primary)]"
                                            : "text-[var(--text-tertiary)] hover:text-[var(--text-primary)]"
                                            }`}
                                    >
                                        {activeSection === link.href.slice(1) && (
                                            <motion.span
                                                layoutId="activeSection"
                                                className="absolute inset-0 bg-[var(--surface-elevated)] rounded-full"
                                                transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                            />
                                        )}
                                        <span className="relative z-10">{link.label}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>

                        <div className="w-px h-6 bg-[var(--border)]" />

                        <div className="flex items-center gap-4">
                            <ThemeToggle />
                            <motion.a
                                href="#contact"
                                onClick={(e) => handleNavClick(e, "#contact")}
                                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full hover:opacity-90 transition-opacity"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <span>Let&apos;s Talk</span>
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </motion.a>
                        </div>
                    </div>

                    {/* Mobile Controls */}
                    <div className="flex md:hidden items-center gap-4">
                        <ThemeToggle />
                        <button
                            className="p-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {isMobileMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="md:hidden overflow-hidden bg-[var(--surface-elevated)]/90 backdrop-blur-md border-t border-[var(--border)] mt-2 rounded-xl"
                        >
                            <ul className="py-6 space-y-2 px-4">
                                {navLinks.map((link, index) => (
                                    <motion.li
                                        key={link.href}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.05 }}
                                    >
                                        <a
                                            href={link.href}
                                            onClick={(e) => handleNavClick(e, link.href)}
                                            className="block px-4 py-3 text-lg font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--surface)] rounded-lg transition-colors"
                                        >
                                            {link.label}
                                        </a>
                                    </motion.li>
                                ))}
                                <motion.li
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: navLinks.length * 0.05 }}
                                    className="pt-4"
                                >
                                    <a
                                        href="#contact"
                                        onClick={(e) => handleNavClick(e, "#contact")}
                                        className="inline-flex w-full justify-center items-center gap-2 px-6 py-3 text-base font-medium text-white bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
                                    >
                                        Let&apos;s Talk
                                    </a>
                                </motion.li>
                            </ul>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </motion.header>
    );
}
