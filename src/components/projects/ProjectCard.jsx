"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ProjectCard({ project }) {
    const { title, subtitle, description, techStack, features, links, featured, image } =
        project;

    return (
        <motion.article
            className={`glass-card rounded-2xl overflow-hidden group ${featured ? "md:col-span-2 lg:col-span-3" : ""
                }`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            <div className={`${featured ? "grid md:grid-cols-2 gap-0" : ""}`}>
                {/* Project Preview */}
                <div className={`relative ${featured ? "h-full min-h-[300px]" : "h-48"} project-image-placeholder overflow-hidden`}>
                    {/* Project Image */}
                    {image ? (
                        <Image
                            src={image}
                            alt={`${title} preview`}
                            fill
                            className="object-contain object-center group-hover:scale-105 transition-transform duration-500 p-2"
                        />
                    ) : (
                        <>
                            {/* Grid pattern fallback */}
                            <div className="absolute inset-0 opacity-10">
                                <svg width="100%" height="100%">
                                    <defs>
                                        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
                                        </pattern>
                                    </defs>
                                    <rect width="100%" height="100%" fill="url(#grid)" />
                                </svg>
                            </div>
                            {/* Floating elements for visual interest */}
                            <motion.div
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                            >
                                <div className="w-32 h-32 border border-white/10 rounded-full" />
                            </motion.div>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 border border-white/5 rounded-full" />
                        </>
                    )}

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 via-purple-500/10 to-transparent" />

                    {/* Featured badge */}
                    {featured && (
                        <div className="absolute top-4 left-4 z-10">
                            <span className="px-3 py-1.5 text-xs font-semibold rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
                                Featured Project
                            </span>
                        </div>
                    )}
                </div>

                {/* Content */}
                <div className="p-6 md:p-8">
                    <header className="mb-4">
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">
                            {title}
                        </h3>
                        <p className="text-indigo-400 font-medium">{subtitle}</p>
                    </header>

                    <p className="text-zinc-400 mb-6 leading-relaxed">{description}</p>

                    {/* Features */}
                    <div className="mb-6">
                        <h4 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-3">
                            Key Features
                        </h4>
                        <ul className="grid gap-2">
                            {features.slice(0, 4).map((feature, index) => (
                                <li
                                    key={index}
                                    className="flex items-start gap-2 text-sm text-zinc-400"
                                >
                                    <span className="text-indigo-500 mt-0.5">▹</span>
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Tech Stack */}
                    <div className="mb-6">
                        <h4 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-3">
                            Built With
                        </h4>
                        <div className="flex flex-wrap gap-2">
                            {techStack.map((tech) => (
                                <span
                                    key={tech}
                                    className="px-2.5 py-1 text-xs font-medium bg-white/5 border border-white/10 rounded-md text-zinc-400"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Links */}
                    <div className="flex gap-4 pt-4 border-t border-white/5">
                        {links.github && (
                            <a
                                href={links.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path
                                        fillRule="evenodd"
                                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <span>Source Code</span>
                            </a>
                        )}
                        {links.live && (
                            <a
                                href={links.live}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                    />
                                </svg>
                                <span>Live Demo</span>
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </motion.article>
    );
}
