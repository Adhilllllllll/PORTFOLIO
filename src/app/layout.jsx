import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import { ThemeProvider } from "@/context/ThemeContext";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
});

export const metadata = {
    title: "ADHIL P | Full Stack Developer",
    description:
        "Full Stack Developer crafting scalable, production-ready web applications with the MERN stack, Docker, and AWS.",
    keywords: [
        "Full Stack Developer",
        "MERN Stack",
        "React",
        "Node.js",
        "MongoDB",
        "Docker",
        "AWS",
        "Web Developer",
    ],
    authors: [{ name: "ADHIL P" }],
    creator: "ADHIL P",
    openGraph: {
        type: "website",
        locale: "en_US",
        title: "ADHIL P | Full Stack Developer",
        description:
            "Full Stack Developer crafting scalable, production-ready web applications.",
        siteName: "ADHIL P Portfolio",
    },
    twitter: {
        card: "summary_large_image",
        title: "ADHIL P | Full Stack Developer",
        description:
            "Full Stack Developer crafting scalable, production-ready web applications.",
    },
    robots: {
        index: true,
        follow: true,
    },
};

export const viewport = {
    width: "device-width",
    initialScale: 1,
    themeColor: "#050505",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={inter.variable}>
            <body className="bg-[var(--background)] text-[var(--text-primary)] antialiased transition-colors duration-300">
                <ThemeProvider>
                    {/* Animated gradient background */}
                    <div className="gradient-bg">
                        <div className="gradient-orb gradient-orb-1" />
                        <div className="gradient-orb gradient-orb-2" />
                        <div className="gradient-orb gradient-orb-3" />
                    </div>

                    {/* Noise texture overlay */}
                    <div className="noise" />

                    <Header />
                    <main className="relative z-10">{children}</main>
                </ThemeProvider>
            </body>
        </html>
    );
}

