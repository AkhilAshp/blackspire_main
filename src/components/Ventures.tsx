import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { VENTURES } from "../constants";

export const Ventures = () => {
  const [activeTab, setActiveTab] = useState<keyof typeof VENTURES>("Mobility Systems");

  return (
    <div id="ventures" className="py-20">
      <div className="flex flex-wrap gap-1 mb-10 border-b border-cyan-accent/20">
        {Object.keys(VENTURES).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab as keyof typeof VENTURES)}
            className={`font-mono text-[10px] tracking-[3px] uppercase px-6 py-3 transition-all relative ${activeTab === tab ? "text-cyan-accent glow-text" : "text-text-muted hover:text-text-secondary"
              }`}
          >
            {tab}
            {activeTab === tab && (
              <motion.div
                layoutId="activeTab"
                className="absolute bottom-[-1px] left-0 right-0 h-[2px] bg-cyan-accent shadow-[0_0_10px_rgba(0,245,212,0.5)]"
              />
            )}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <AnimatePresence mode="wait">
          {VENTURES[activeTab].map((venture, i) => (
            <motion.div
              key={`${activeTab}-${venture.name}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ delay: i * 0.05 }}
              className="group bg-bg-mid/85 border border-cyan-accent/20 rounded-sm p-7 md:p-5 backdrop-blur-xl transition-all hover:border-cyan-accent/55 hover:-translate-y-1 cursor-default"
            >
              <div className="w-10 h-10 border border-cyan-accent/20 rounded-[4px] flex items-center justify-center mb-4 text-[18px] text-cyan-accent group-hover:border-cyan-accent group-hover:shadow-[0_0_12px_rgba(0,245,212,0.3)] transition-all">
                {venture.icon}
              </div>
              <h4 className="font-orbitron text-[12px] tracking-[2px] uppercase text-text-primary mb-2">{venture.name}</h4>
              <p className="text-[12px] text-text-secondary leading-relaxed">{venture.desc}</p>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};
