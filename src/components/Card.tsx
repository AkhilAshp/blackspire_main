import { motion } from "motion/react";

export const Card = ({ number, title, desc }: { number: string; title: string; desc: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="group relative bg-bg-mid/85 border border-cyan-accent/20 rounded-sm p-9 backdrop-blur-xl transition-all hover:border-cyan-accent/55 hover:-translate-y-0.5"
  >
    <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-dim to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    <div className="font-mono text-[10px] tracking-[3px] text-cyan-accent mb-5 opacity-70">{number} —</div>
    <h3 className="font-orbitron text-[15px] font-bold tracking-[2px] uppercase text-text-primary mb-3">{title}</h3>
    <p className="text-[13px] text-text-secondary font-normal tracking-wide leading-relaxed">{desc}</p>
  </motion.div>
);

export const CardSmall = ({ icon, title }: { icon: string; title: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="bg-bg-mid/85 border border-cyan-accent/20 rounded-sm p-7 backdrop-blur-xl transition-all hover:border-cyan-accent/55 hover:-translate-y-0.5 text-center"
  >
    <div className="text-[22px] mb-3.5 text-cyan-accent">{icon}</div>
    <h4 className="font-orbitron text-[11px] tracking-[2px] uppercase text-text-primary">{title}</h4>
  </motion.div>
);
