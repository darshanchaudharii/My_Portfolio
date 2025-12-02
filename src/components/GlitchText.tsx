import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface GlitchTextProps {
    text: string;
    className?: string;
}

const GlitchText = ({ text, className = "" }: GlitchTextProps) => {
    const [isGlitching, setIsGlitching] = useState(false);

    useEffect(() => {
        const SHOW_MS = 5000; // glitch ON time (5 seconds)
        const HIDE_MS = 1000; // glitch OFF time (1 second)
        const CYCLE_MS = SHOW_MS + HIDE_MS; // total loop length

        const triggerGlitch = () => {
            setIsGlitching(true);
            // turn glitch off after SHOW_MS
            const offTimer = window.setTimeout(() => setIsGlitching(false), SHOW_MS);
            return offTimer;
        };

        // start immediately
        let offTimer = triggerGlitch();

        // repeat every CYCLE_MS
        const interval = window.setInterval(() => {
            // clear any previous timer (safety) then trigger again
            if (offTimer) clearTimeout(offTimer);
            offTimer = triggerGlitch();
        }, CYCLE_MS);

        return () => {
            clearInterval(interval);
            if (offTimer) clearTimeout(offTimer);
        };
    }, []);

    return (
        <div className={`relative inline-block ${className}`}>
            {/* Main Text - Always visible */}
            <span className="relative z-10 drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">
                {text}
            </span>

            {/* Scanline Overlay */}
            <div
                className="absolute inset-0 pointer-events-none z-20 mix-blend-overlay opacity-30"
                style={{
                    background:
                        "linear-gradient(to bottom, transparent 50%, rgba(0, 0, 0, 0.5) 51%)",
                    backgroundSize: "100% 4px",
                }}
            />

            {isGlitching && (
                <>
                    <motion.span
                        className="absolute top-0 left-0 -z-10 text-purple-500 mix-blend-screen"
                        initial={{ x: 0, opacity: 1 }}
                        animate={{ x: [-2, 2, -1, 0] }}
                        transition={{ duration: 0.2, repeat: Infinity }}
                    >
                        {text}
                    </motion.span>
                    <motion.span
                        className="absolute top-0 left-0 -z-10 text-cyan-500 mix-blend-screen"
                        initial={{ x: 0, opacity: 1 }}
                        animate={{ x: [2, -2, 1, 0] }}
                        transition={{ duration: 0.2, repeat: Infinity }}
                    >
                        {text}
                    </motion.span>
                </>
            )}
        </div>
    );
};

export default GlitchText;
