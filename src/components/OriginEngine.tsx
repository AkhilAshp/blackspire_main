import { motion } from "motion/react";

export const OriginEngine = () => {
  const labels = [
    { text: "Ideas", className: "top-2.5 left-1/2 -translate-x-1/2" },
    { text: "Teams", className: "right-2.5 top-1/2 -translate-y-1/2" },
    { text: "Execution", className: "bottom-2.5 left-1/2 -translate-x-1/2" },
    { text: "Systems", className: "left-2.5 top-1/2 -translate-y-1/2" },
    { text: "Ventures", className: "top-[30%] right-0" },
  ];

  return (
    <div id="origin" className="py-20 text-center relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(0,245,212,0.04)_0%,transparent_65%)] pointer-events-none" />
      
      <div className="flex flex-col items-center">
        <div className="relative w-[340px] h-[340px] my-15">
          {/* Rings */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
            className="absolute inset-[10px] border border-cyan-accent/5 rounded-full"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute inset-[40px] border border-cyan-accent/10 rounded-full"
          />

          {/* Core */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 border-2 border-cyan-accent rounded-full flex items-center justify-center bg-[radial-gradient(circle,rgba(0,245,212,0.15),transparent)] shadow-[0_0_30px_rgba(0,245,212,0.35),0_0_60px_rgba(0,245,212,0.1)] z-10">
            <span className="font-orbitron text-[9px] tracking-[2px] text-cyan-accent glow-text">ORIGIN</span>
          </div>

          {/* Labels */}
          {labels.map((label, i) => (
            <motion.div
              key={label.text}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`absolute font-mono text-[9px] tracking-[2px] uppercase text-text-secondary whitespace-nowrap px-3 py-1.5 border border-cyan-accent/20 rounded-full bg-bg-mid/85 transition-all hover:text-cyan-accent hover:border-cyan-accent hover:shadow-[0_0_10px_rgba(0,245,212,0.2)] cursor-default ${label.className}`}
            >
              {label.text}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
