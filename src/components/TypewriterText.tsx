import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TypewriterTextProps {
    words: string[];
    className?: string;
    typingSpeed?: number;
    deletingSpeed?: number;
    pauseTime?: number;
}

const TypewriterText = ({
    words,
    className = "",
    typingSpeed = 150,
    deletingSpeed = 100,
    pauseTime = 2000,
}: TypewriterTextProps) => {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [currentText, setCurrentText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const word = words[currentWordIndex];

        const type = () => {
            setCurrentText((prev) => {
                if (isDeleting) {
                    return word.substring(0, prev.length - 1);
                } else {
                    return word.substring(0, prev.length + 1);
                }
            });
        };

        let timer: NodeJS.Timeout;

        if (!isDeleting && currentText === word) {
            // Finished typing, wait before deleting
            timer = setTimeout(() => setIsDeleting(true), pauseTime);
        } else if (isDeleting && currentText === "") {
            // Finished deleting, move to next word
            setIsDeleting(false);
            setCurrentWordIndex((prev) => (prev + 1) % words.length);
        } else {
            // Typing or deleting
            timer = setTimeout(type, isDeleting ? deletingSpeed : typingSpeed);
        }

        return () => clearTimeout(timer);
    }, [currentText, isDeleting, currentWordIndex, words, typingSpeed, deletingSpeed, pauseTime]);

    return (
        <span className={className}>
            {currentText}
            <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
                className="inline-block ml-1 w-[2px] h-[1em] bg-primary align-middle"
            />
        </span>
    );
};

export default TypewriterText;
