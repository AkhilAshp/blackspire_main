import { motion } from "motion/react";
import { TIMELINE } from "../constants";

export const Timeline = () => {
  return (
    <div id="timeline" className="py-20">
      <div className="flex items-center justify-between gap-0 relative py-10 overflow-x-auto no-scrollbar">
        {TIMELINE.map((node, i) => (
          <div key={node.label} className="flex items-center flex-1 min-w-[120px]">
            <div className="flex flex-col items-center gap-4 relative z-10 group">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`w-12 h-12 border rounded-full flex items-center justify-center bg-bg-mid/85 transition-all cursor-default ${
                  node.active
                    ? "border-cyan-accent shadow-[0_0_16px_rgba(0,245,212,0.35)] bg-cyan-accent/10"
                    : "border-cyan-accent/20 group-hover:border-cyan-accent group-hover:shadow-[0_0_20px_rgba(0,245,212,0.35)] group-hover:bg-cyan-accent/10"
                }`}
              >
                <div
                  className={`w-2 h-2 rounded-full transition-all ${
                    node.active
                      ? "bg-cyan-accent shadow-[0_0_12px_#00F5D4] scale-125"
                      : "bg-cyan-dim shadow-[0_0_8px_rgba(0,201,174,0.5)] group-hover:bg-cyan-accent group-hover:shadow-[0_0_16px_#00F5D4] group-hover:scale-125"
                  }`}
                />
              </motion.div>
              <span
                className={`font-mono text-[10px] tracking-[3px] uppercase transition-colors ${
                  node.active ? "text-cyan-accent" : "text-text-secondary group-hover:text-cyan-accent"
                }`}
              >
                {node.label}
              </span>
            </div>
            {i < TIMELINE.length - 1 && (
              <div className="h-[1px] bg-gradient-to-r from-cyan-dim/50 to-cyan-accent/10 flex-1 min-w-[40px] -mt-8" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
