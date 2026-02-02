"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/common/SectionWrapper";

const experiences = [
    {
        id: "independent-dev",
        title: "Independent Full Stack Developer",
        period: "2024 - Present",
        description:
            "Building production-grade web applications from concept to deployment. Focus on scalable architecture, clean code, and modern DevOps practices.",
        highlights: [
            "End-to-end development of full-stack applications",
            "Production deployments on AWS with Docker containerization",
            "System design with focus on scalability and maintainability",
            "Implementation of real-time features and secure authentication",
        ],
        icon: "🚀",
    },
    {
        id: "learning-journey",
        title: "Technical Foundation",
        period: "2022 - 2024",
        description:
            "Intensive self-learning and project-based skill development in modern web technologies and cloud infrastructure.",
        highlights: [
            "Mastered MERN stack through hands-on projects",
            "Learned containerization with Docker and orchestration basics",
            "Gained experience with AWS services (EC2, ECR, S3)",
            "Built multiple full-stack applications for portfolio",
        ],
        icon: "📚",
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 },
    },
};

export default function Experience() {
    return (
        <SectionWrapper id="experience">
            <div className="text-center mb-16">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-indigo-400 font-medium mb-2"
                >
                    My journey
                </motion.p>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-4xl md:text-5xl font-bold text-white"
                >
                    Experience
                </motion.h2>
            </div>

            <motion.div
                className="max-w-3xl mx-auto space-y-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                {experiences.map((exp, index) => (
                    <motion.div
                        key={exp.id}
                        variants={itemVariants}
                        className="relative"
                    >
                        {/* Connecting line */}
                        {index < experiences.length - 1 && (
                            <div className="absolute left-6 top-16 bottom-0 w-px bg-gradient-to-b from-indigo-500/50 to-transparent" />
                        )}

                        <div className="glass-card rounded-2xl p-6 md:p-8 group">
                            <div className="flex items-start gap-4">
                                {/* Icon */}
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-white/10 flex items-center justify-center text-2xl shrink-0">
                                    {exp.icon}
                                </div>

                                <div className="flex-1 min-w-0">
                                    {/* Header */}
                                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                                        <h3 className="text-xl font-semibold text-white group-hover:text-indigo-400 transition-colors">
                                            {exp.title}
                                        </h3>
                                        <span className="text-sm font-medium text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full w-fit">
                                            {exp.period}
                                        </span>
                                    </div>

                                    {/* Description */}
                                    <p className="text-zinc-400 mb-4">
                                        {exp.description}
                                    </p>

                                    {/* Highlights */}
                                    <ul className="grid sm:grid-cols-2 gap-2">
                                        {exp.highlights.map((highlight, i) => (
                                            <li
                                                key={i}
                                                className="flex items-start gap-2 text-sm text-zinc-500"
                                            >
                                                <span className="text-indigo-500 mt-0.5">▹</span>
                                                <span>{highlight}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </SectionWrapper>
    );
}
