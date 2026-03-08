import { motion } from "motion/react";

export const Execution = () => {
  const steps = [
    { num: "01", title: "Testing", width: "25%" },
    { num: "02", title: "Improving", width: "50%" },
    { num: "03", title: "Rebuilding", width: "75%" },
    { num: "04", title: "Expanding", width: "100%", highlight: true },
  ];

  return (
    <div id="execution" className="py-20">
      <div className="flex flex-col gap-3">
        {steps.map((step, i) => (
          <motion.div
            key={step.num}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            style={{ marginLeft: `${i * 40}px` }}
            className={`bg-bg-mid/85 border rounded-sm px-8 py-6 backdrop-blur-xl flex items-center gap-6 transition-all hover:border-cyan-accent/55 hover:translate-x-2 ${
              step.highlight ? "border-cyan-accent/55 shadow-[0_0_24px_rgba(0,245,212,0.08)]" : "border-cyan-accent/20"
            }`}
          >
            <div className="font-mono text-[9px] tracking-[2px] text-cyan-accent opacity-60 shrink-0 w-[30px]">{step.num}</div>
            <div className="font-orbitron text-sm tracking-[3px] uppercase text-text-primary flex-1">{step.title}</div>
            <div className="flex-[2] h-[2px] bg-gradient-to-r from-cyan-dim to-cyan-accent/10 rounded-full" style={{ width: step.width }} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};
