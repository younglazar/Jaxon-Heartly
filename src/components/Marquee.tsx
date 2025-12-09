"use client";

import { motion } from "framer-motion";

interface MarqueeProps {
    text: string;
}

export default function Marquee({ text }: MarqueeProps) {
    return (
        <div className="bg-clay-red text-cream overflow-hidden py-3 border-y border-charcoal/10">
            <div className="flex whitespace-nowrap">
                <motion.div
                    className="flex space-x-8"
                    animate={{ x: "-50%" }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 20,
                    }}
                >
                    {/* Repeat text multiple times to ensure seamless loop */}
                    {[...Array(4)].map((_, i) => (
                        <span key={i} className="text-lg md:text-xl font-bold uppercase tracking-widest">
                            {text} <span className="mx-4 text-cream/50">·</span>
                        </span>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
