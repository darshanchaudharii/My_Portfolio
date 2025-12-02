import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface StaggeredTextProps {
    text: string;
    className?: string;
}

const StaggeredText = ({ text, className }: StaggeredTextProps) => {
    const letters = text.split("");

    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.05, delayChildren: 0.04 * i },
        }),
    };

    const child = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
        hidden: {
            opacity: 0,
            y: 20,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
    };

    return (
        <motion.div
            className={cn("overflow-hidden flex flex-wrap", className)}
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        >
            <span className="sr-only">{text}</span>
            {letters.map((letter, index) => (
                <motion.span variants={child} key={index} aria-hidden="true">
                    {letter === " " ? "\u00A0" : letter}
                </motion.span>
            ))}
        </motion.div>
    );
};

export default StaggeredText;
