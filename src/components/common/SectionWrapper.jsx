"use client";

import { motion } from "framer-motion";

const sectionVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            ease: [0.25, 0.46, 0.45, 0.94],
        },
    },
};

export default function SectionWrapper({
    id,
    children,
    className = "",
    containerClassName = "",
}) {
    return (
        <section id={id} className={`py-24 md:py-32 ${className}`}>
            <motion.div
                className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 ${containerClassName}`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={sectionVariants}
            >
                {children}
            </motion.div>
        </section>
    );
}
