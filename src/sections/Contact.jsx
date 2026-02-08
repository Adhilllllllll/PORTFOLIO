"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import SectionWrapper from "@/components/common/SectionWrapper";

// EmailJS Configuration - Replace with your own keys from emailjs.com
const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY";

export default function Contact() {
    const formRef = useRef();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState({ type: "", message: "" });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus({ type: "", message: "" });

        try {
            await emailjs.sendForm(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                formRef.current,
                EMAILJS_PUBLIC_KEY
            );

            setStatus({ type: "success", message: "Message sent successfully! ✓" });
            setFormData({ name: "", email: "", message: "" });
        } catch (error) {
            console.error("EmailJS Error:", error);
            // Fallback to mailto if EmailJS fails
            const mailtoLink = `mailto:adhilp387@gmail.com?subject=Contact from ${formData.name}&body=${encodeURIComponent(formData.message)}%0A%0AFrom: ${formData.email}`;
            window.location.href = mailtoLink;
            setStatus({ type: "info", message: "Opening email client..." });
        } finally {
            setIsSubmitting(false);
            setTimeout(() => setStatus({ type: "", message: "" }), 5000);
        }
    };

    return (
        <SectionWrapper id="contact">
            <div className="max-w-4xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4">
                        Contact
                    </h2>
                    <p className="text-2xl text-[var(--text-primary)] font-semibold mb-2">Get In Touch.</p>
                    <p className="text-lg text-[var(--text-secondary)]">Available for freelancing</p>
                </motion.div>

                {/* Contact Form */}
                <motion.form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="space-y-6"
                >
                    {/* Name Field */}
                    <div className="relative group">
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="Name"
                            className="w-full px-6 py-4 bg-[var(--surface-elevated)] border-2 border-[var(--border)] rounded-lg text-[var(--text-primary)] placeholder-[var(--text-tertiary)] focus:outline-none focus:border-purple-500 transition-all duration-300 group-hover:border-[var(--border-hover)]"
                        />
                        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none" />
                    </div>

                    {/* Email Field */}
                    <div className="relative group">
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="Email"
                            className="w-full px-6 py-4 bg-[var(--surface-elevated)] border-2 border-[var(--border)] rounded-lg text-[var(--text-primary)] placeholder-[var(--text-tertiary)] focus:outline-none focus:border-purple-500 transition-all duration-300 group-hover:border-[var(--border-hover)]"
                        />
                        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none" />
                    </div>

                    {/* Message Field */}
                    <div className="relative group">
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            placeholder="Message"
                            rows={6}
                            className="w-full px-6 py-4 bg-[var(--surface-elevated)] border-2 border-[var(--border)] rounded-lg text-[var(--text-primary)] placeholder-[var(--text-tertiary)] focus:outline-none focus:border-purple-500 transition-all duration-300 resize-none group-hover:border-[var(--border-hover)]"
                        />
                        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none" />
                    </div>

                    {/* Status Message */}
                    {status.message && (
                        <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className={`text-sm ${status.type === "success" ? "text-green-400" :
                                status.type === "error" ? "text-red-400" : "text-[var(--text-tertiary)]"
                                }`}
                        >
                            {status.message}
                        </motion.p>
                    )}

                    {/* Submit Button */}
                    <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full md:w-auto px-12 py-4 bg-[var(--text-primary)] text-[var(--background)] font-semibold rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isSubmitting ? "Sending..." : "Send"}
                    </motion.button>
                </motion.form>
            </div>
        </SectionWrapper>
    );
}
