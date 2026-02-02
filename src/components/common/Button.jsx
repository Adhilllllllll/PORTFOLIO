"use client";

import { motion } from "framer-motion";

export default function Button({
    children,
    variant = "primary",
    href,
    onClick,
    className = "",
    ...props
}) {
    const baseStyles =
        "inline-flex items-center justify-center px-6 py-3.5 font-medium rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#050505]";

    const variants = {
        primary:
            "bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:opacity-90 focus:ring-indigo-500 shadow-lg shadow-indigo-500/25",
        secondary:
            "bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-white/20 focus:ring-white/20",
        ghost:
            "text-zinc-400 hover:text-white hover:bg-white/5 focus:ring-white/10",
    };

    const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

    const MotionComponent = href ? motion.a : motion.button;

    return (
        <MotionComponent
            href={href}
            onClick={onClick}
            className={combinedClassName}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            {...props}
        >
            {children}
        </MotionComponent>
    );
}
