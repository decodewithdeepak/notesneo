'use client';
import { motion } from "motion/react";

interface HighlightTextProps {
    children: React.ReactNode;
    className?: string;
    highlightColor?: string;
    textColor?: string;
    delay?: number;
    duration?: number;
}

export default function HighlightText({
    children,
    className = '',
    highlightColor = 'bg-gray-200',
    textColor = '#000000',
    delay = 0.5,
    duration = 0.8
}: HighlightTextProps) {
    return (
        <motion.span
            className={`relative inline-block py-0.5 ${className}`}
            initial={{ color: '#fff' }}
            whileInView={{ color: textColor }}
            transition={{ duration: 0.3, delay: delay + 0.2 }}
            viewport={{ once: true }}
        >
            {children}
            <motion.div
                className={`absolute inset-0 ${highlightColor} -z-10`}
                initial={{ width: 0, x: -6 }}
                whileInView={{ width: '110%', x: -6 }}
                transition={{ duration, delay }}
                viewport={{ once: true }}
            />
        </motion.span>
    );
}