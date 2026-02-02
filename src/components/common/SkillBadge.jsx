"use client";

import { motion } from "framer-motion";

export default function SkillBadge({ skill, index = 0 }) {
    return (
        <motion.span
            className="inline-flex items-center px-3 py-1.5 rounded-md text-sm font-medium bg-zinc-800/80 text-zinc-300 border border-zinc-700/50 hover:border-indigo-500/50 hover:text-indigo-400 transition-colors duration-200"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
        >
            {skill}
        </motion.span>
    );
}
