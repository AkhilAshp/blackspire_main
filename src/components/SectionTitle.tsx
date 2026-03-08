import { motion } from "motion/react";

export const SectionTitle = ({ children, accent }: { children: string; accent?: string }) => (
  <motion.h2
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="font-orbitron text-2xl md:text-3xl lg:text-4xl font-bold tracking-[4px] uppercase mb-14 text-text-primary"
  >
    {children} {accent && <span className="text-cyan-accent">{accent}</span>}
  </motion.h2>
);
