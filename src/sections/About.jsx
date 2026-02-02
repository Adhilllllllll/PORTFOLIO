"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/common/SectionWrapper";

const aboutContent = {
    title: "About",
    subtitle: "A bit about me",
    paragraphs: [
        "A Full Stack Developer with a passion for building robust, scalable web applications that solve real-world problems. My expertise spans the entire development lifecycle—from system design and architecture to deployment and maintenance.",
        "I specialize in the MERN stack (MongoDB, Express, React, Node.js) and have extensive experience with containerization using Docker, cloud deployments on AWS, and implementing real-time features with Socket.IO.",
    ],
    highlights: [
        {
            icon: "💻",
            label: "Stack",
            value: "MERN",
            description: "MongoDB, Express, React, Node.js"
        },
        {
            icon: "🚀",
            label: "Focus",
            value: "Scalable Systems",
            description: "Production-ready architecture"
        },
        {
            icon: "☁️",
            label: "Infrastructure",
            value: "Docker & AWS",
            description: "Cloud-native deployments"
        },
    ],
};

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 },
    },
};

export default function About() {
    return (
        <SectionWrapper id="about">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* Left - Content */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <motion.p
                        variants={itemVariants}
                        className="text-indigo-400 font-medium mb-2"
                    >
                        {aboutContent.subtitle}
                    </motion.p>

                    <motion.h2
                        variants={itemVariants}
                        className="text-4xl md:text-5xl font-bold text-white mb-8"
                    >
                        {aboutContent.title}
                    </motion.h2>

                    <div className="space-y-4">
                        {aboutContent.paragraphs.map((paragraph, index) => (
                            <motion.p
                                key={index}
                                variants={itemVariants}
                                className="text-zinc-400 leading-relaxed text-lg"
                            >
                                {paragraph}
                            </motion.p>
                        ))}
                    </div>
                </motion.div>

                {/* Right - Highlight Cards */}
                <motion.div
                    className="grid gap-4"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {aboutContent.highlights.map((item, index) => (
                        <motion.div
                            key={item.label}
                            variants={itemVariants}
                            className="glass-card p-6 rounded-2xl group cursor-default"
                            whileHover={{ x: 10 }}
                        >
                            <div className="flex items-start gap-4">
                                <span className="text-3xl">{item.icon}</span>
                                <div>
                                    <p className="text-sm text-zinc-500 uppercase tracking-wider mb-1">
                                        {item.label}
                                    </p>
                                    <p className="text-xl font-semibold text-white mb-1">
                                        {item.value}
                                    </p>
                                    <p className="text-sm text-zinc-500">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </SectionWrapper>
    );
}
