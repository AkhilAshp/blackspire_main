import { motion } from "motion/react";

export const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-[140px] pb-20 overflow-hidden relative">
      <div className="max-w-[1300px] mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="font-mono text-[10px] tracking-[5px] text-cyan-accent uppercase mb-6 flex items-center gap-3"
            >
              <div className="w-8 h-[1px] bg-cyan-accent shadow-[0_0_8px_#00F5D4]" />
              Ecosystem Architecture
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-orbitron text-[44px] md:text-[5.5vw] lg:text-[76px] font-black tracking-[6px] leading-[1.05] text-text-primary mb-2"
            >
              BLACK<span className="text-cyan-accent glow-text">SPIRE</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="font-rajdhani text-base md:text-[1.8vw] lg:text-[22px] font-normal text-text-secondary tracking-wider mb-9 max-w-[480px] leading-relaxed"
            >
              The Systems Behind Tomorrow<br />Are Built Here
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <button className="font-mono text-[11px] tracking-[3px] uppercase px-8 py-3.5 bg-cyan-accent text-bg-deep rounded-sm font-bold transition-all hover:bg-white hover:-translate-y-0.5 cyan-glow">
                Enter the Ecosystem
              </button>
              <button className="font-mono text-[11px] tracking-[3px] uppercase px-8 py-3.5 bg-transparent text-cyan-accent border border-cyan-accent/50 rounded-sm transition-all hover:bg-cyan-accent/10 hover:border-cyan-accent hover:-translate-y-0.5">
                Explore Systems
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-16 flex flex-wrap gap-3"
            >
              {["Mobility", "Technology", "Infrastructure", "Health", "Innovation"].map((chip) => (
                <div
                  key={chip}
                  className="font-mono text-[10px] tracking-[3px] uppercase px-5 py-2 border border-cyan-accent/20 rounded-full text-text-secondary bg-cyan-accent/5 transition-all hover:border-cyan-accent hover:text-cyan-accent hover:bg-cyan-accent/10 cursor-default"
                >
                  {chip}
                </div>
              ))}
            </motion.div>
          </div>

          <div className="flex items-center justify-center relative">
            <div className="w-full max-w-[520px] aspect-square relative">
              <svg className="w-full h-full" viewBox="0 0 520 520" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#00F5D4" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#00F5D4" stopOpacity="0" />
                  </radialGradient>
                </defs>

                {/* Rings */}
                <circle cx="260" cy="260" r="200" fill="none" stroke="rgba(0,245,212,0.07)" strokeWidth="1" />
                <circle cx="260" cy="260" r="140" fill="none" stroke="rgba(0,245,212,0.1)" strokeWidth="1" strokeDasharray="4 6" />
                <circle cx="260" cy="260" r="80" fill="none" stroke="rgba(0,245,212,0.15)" strokeWidth="1" />

                <circle cx="260" cy="260" r="80" fill="url(#coreGlow)" />

                {/* Core */}
                <circle cx="260" cy="260" r="44" fill="rgba(4,12,24,0.9)" stroke="#00F5D4" strokeWidth="1.5" />
                <text x="260" y="255" textAnchor="middle" className="font-orbitron text-[8px] font-bold fill-cyan-accent tracking-[2px]">BLACK</text>
                <text x="260" y="268" textAnchor="middle" className="font-orbitron text-[8px] font-bold fill-cyan-accent tracking-[2px]">SPIRE</text>

                {/* Connector lines */}
                {[
                  { x2: 260, y2: 120 },
                  { x2: 380, y2: 160 },
                  { x2: 390, y2: 340 },
                  { x2: 260, y2: 390 },
                  { x2: 130, y2: 340 },
                  { x2: 130, y2: 160 },
                ].map((line, i) => {
                  const angle = (i * 60 - 90) * (Math.PI / 180);
                  const x1 = 260 + 44 * Math.cos(angle);
                  const y1 = 260 + 44 * Math.sin(angle);
                  return (
                    <line key={i} x1={x1} y1={y1} x2={line.x2} y2={line.y2} stroke="rgba(0,245,212,0.35)" strokeWidth="1" />
                  );
                })}

                {/* Nodes */}
                {[
                  { x: 260, y: 110, label: "MOBILITY", icon: "⚡" },
                  { x: 388, y: 148, label: "TECH", icon: "◈" },
                  { x: 398, y: 348, label: "INFRA", icon: "⬡" },
                  { x: 260, y: 400, label: "HUMAN", icon: "◎" },
                  { x: 122, y: 348, label: "COMM", icon: "⬡" },
                  { x: 132, y: 148, label: "INNOV", icon: "✦" },
                ].map((node, i) => (
                  <g key={i}>
                    <circle cx={node.x} cy={node.y} r="22" fill="rgba(4,12,24,0.9)" stroke="rgba(0,245,212,0.5)" strokeWidth="1" />
                    <text x={node.x} y={node.y - 4} textAnchor="middle" className="font-mono text-[6px] fill-text-secondary tracking-wider">{node.label}</text>
                    <text x={node.x} y={node.y + 7} textAnchor="middle" className="text-[12px] fill-cyan-accent">{node.icon}</text>
                  </g>
                ))}

                {/* Animated pulse rings */}
                <motion.circle
                  cx="260" cy="260" r="50" fill="none" stroke="rgba(0,245,212,0.15)" strokeWidth="1"
                  animate={{ r: [50, 200], opacity: [0.3, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />
                <motion.circle
                  cx="260" cy="260" r="50" fill="none" stroke="rgba(0,245,212,0.1)" strokeWidth="1"
                  animate={{ r: [50, 200], opacity: [0.2, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 1.5 }}
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
