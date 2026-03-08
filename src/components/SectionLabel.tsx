import { ReactNode } from "react";
import { motion } from "motion/react";

export const SectionLabel = ({ children, className = "" }: { children: ReactNode; className?: string }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 0.8, x: 0 }}
    viewport={{ once: true }}
    className={`font-mono text-[10px] tracking-[4px] text-cyan-accent uppercase mb-5 ${className}`}
  >
    // {children}
  </motion.div>
);
