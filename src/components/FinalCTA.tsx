import { motion } from "motion/react";

export const FinalCTA = () => {
  return (
    <section id="final" className="min-h-[480px] flex items-center justify-center text-center relative overflow-hidden py-30">
      <div className="absolute inset-0 bg-gradient-to-t from-bg-deep/92 via-bg-deep/60 to-bg-deep/40 z-0" />
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#04080F_0%,#0A1520_30%,#060C18_60%,#04080F_100%)] -z-10" />

      {/* City Skyline SVG */}
      <svg className="absolute bottom-0 left-0 right-0 opacity-35 z-0 w-full h-[300px]" viewBox="0 0 1400 300" preserveAspectRatio="xMidYMax meet">
        <rect x="0" y="200" width="1400" height="100" fill="#04080F" />
        {[
          { x: 20, y: 140, w: 40, h: 60 },
          { x: 80, y: 100, w: 60, h: 100 },
          { x: 160, y: 60, w: 45, h: 140 },
          { x: 280, y: 80, w: 50, h: 120 },
          { x: 350, y: 40, w: 70, h: 160 },
          { x: 550, y: 70, w: 55, h: 130 },
          { x: 690, y: 50, w: 65, h: 150 },
          { x: 845, y: 70, w: 55, h: 130 },
          { x: 980, y: 60, w: 60, h: 140 },
          { x: 1125, y: 80, w: 50, h: 120 },
          { x: 1325, y: 60, w: 60, h: 140 },
        ].map((b, i) => (
          <rect key={i} x={b.x} y={b.y} width={b.w} height={b.h} fill="#07101C" opacity={0.8 + i * 0.01} />
        ))}
        <rect x="0" y="195" width="1400" height="8" fill="url(#groundGlow)" opacity="0.6" />
        <defs>
          <linearGradient id="groundGlow" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#00F5D4" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#00F5D4" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="relative z-10 bg-bg-mid/80 border border-cyan-accent/55 rounded-sm px-10 md:px-24 py-18 backdrop-blur-3xl shadow-[0_0_80px_rgba(0,245,212,0.08)] max-w-[700px] mx-6"
      >
        <div className="font-mono text-[10px] tracking-[5px] text-cyan-accent uppercase mb-6 opacity-70">// The Work Never Stops</div>
        <h2 className="font-orbitron text-[22px] md:text-[3vw] lg:text-[42px] font-black tracking-[3px] uppercase text-text-primary mb-10 leading-tight">
          The Work Continues
          <span className="text-cyan-accent glow-text block mt-2">Decades From Now</span>
        </h2>
        <div className="flex flex-wrap gap-4 justify-center">
          <button className="font-mono text-[11px] tracking-[3px] uppercase px-8 py-3.5 bg-cyan-accent text-bg-deep rounded-sm font-bold transition-all hover:bg-white hover:-translate-y-0.5 cyan-glow">
            ENTER BLACKSPIRE
          </button>
          <button className="font-mono text-[11px] tracking-[3px] uppercase px-8 py-3.5 bg-transparent text-cyan-accent border border-cyan-accent/50 rounded-sm transition-all hover:bg-cyan-accent/10 hover:border-cyan-accent hover:-translate-y-0.5">
            Explore the Ecosystem
          </button>
        </div>
      </motion.div>
    </section>
  );
};
