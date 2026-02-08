"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/common/SectionWrapper";
import { skills } from "@/data/skills";

const categoryConfig = {
    frontend: {
        label: "Frontend",
        icon: "🎨",
        gradient: "from-blue-500 to-cyan-500",
    },
    backend: {
        label: "Backend",
        icon: "⚙️",
        gradient: "from-indigo-500 to-purple-500",
    },
    devops: {
        label: "DevOps & Tools",
        icon: "🚀",
        gradient: "from-purple-500 to-pink-500",
    },
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

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 },
    },
};

const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1,
        scale: 1,
    },
};

export default function Skills() {
    const categories = Object.keys(skills);

    return (
        <SectionWrapper id="skills">
            <div className="text-center mb-16">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-indigo-400 font-medium mb-2"
                >
                    What I work with
                </motion.p>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-4xl md:text-5xl font-bold text-[var(--text-primary)]"
                >
                    Skills & Technologies
                </motion.h2>
            </div>

            <motion.div
                className="grid md:grid-cols-3 gap-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                {categories.map((category) => {
                    const config = categoryConfig[category];
                    return (
                        <motion.div
                            key={category}
                            variants={cardVariants}
                            className="glass-card rounded-2xl p-6 group"
                        >
                            {/* Category Header */}
                            <div className="flex items-center gap-3 mb-6">
                                <span className="text-2xl">{config.icon}</span>
                                <div>
                                    <h3 className="text-lg font-semibold text-[var(--text-primary)]">
                                        {config.label}
                                    </h3>
                                    <div className={`h-0.5 w-12 bg-gradient-to-r ${config.gradient} mt-1`} />
                                </div>
                            </div>

                            {/* Skills */}
                            <motion.div
                                className="flex flex-wrap gap-2"
                                variants={containerVariants}
                            >
                                {skills[category].map((skill, index) => (
                                    <motion.span
                                        key={skill}
                                        variants={skillVariants}
                                        transition={{ delay: index * 0.05 }}
                                        className="px-3 py-1.5 text-sm font-medium bg-[var(--surface-elevated)] border border-[var(--border)] rounded-lg text-[var(--text-secondary)] hover:bg-[var(--surface)] hover:border-[var(--border-hover)] hover:text-[var(--text-primary)] transition-all cursor-default"
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </motion.div>
                        </motion.div>
                    );
                })}
            </motion.div>
        </SectionWrapper>
    );
}
