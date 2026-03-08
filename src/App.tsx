import { motion } from "motion/react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { SectionLabel } from "./components/SectionLabel";
import { SectionTitle } from "./components/SectionTitle";
import { Card, CardSmall } from "./components/Card";
import { Ventures } from "./components/Ventures";
import { OriginEngine } from "./components/OriginEngine";
import { Execution } from "./components/Execution";
import { Timeline } from "./components/Timeline";
import { FinalCTA } from "./components/FinalCTA";
import { PRINCIPLES } from "./constants";

export default function App() {
  return (
    <div className="min-h-screen selection:bg-cyan-accent selection:text-bg-deep">
      <Navbar />
      
      <Hero />

      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-dim/30 to-transparent" />

      {/* SECTION 2 — NOTHING HERE WAS BOUGHT */}
      <section id="built" className="py-32">
        <div className="max-w-[1300px] mx-auto px-6 md:px-12">
          <SectionLabel>FOUNDATION</SectionLabel>
          <SectionTitle accent="Bought">Nothing Here Was</SectionTitle>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">
            <Card
              number="01"
              title="Not Acquired"
              desc="No shortcuts. No buyouts. Every system earned its place through sustained execution over time."
            />
            <Card
              number="02"
              title="Not Assembled"
              desc="No patchwork of parts. Every component was designed to integrate from the first moment of conception."
            />
            <Card
              number="03"
              title="Built From Zero"
              desc="One idea at a time. One system at a time. One venture at a time. From nothing into everything."
            />
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            <CardSmall icon="◈" title="Every Platform" />
            <CardSmall icon="⬡" title="Every System" />
            <CardSmall icon="✦" title="Every Venture" />
          </div>
        </div>
      </section>

      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-dim/30 to-transparent" />

      {/* SECTION 3 — SYSTEMS VS PRODUCTS */}
      <section id="systems" className="py-32 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_50%,rgba(0,245,212,0.03)_0%,transparent_60%)] pointer-events-none" />
        <div className="max-w-[1300px] mx-auto px-6 md:px-12">
          <SectionLabel>ARCHITECTURE</SectionLabel>
          <SectionTitle accent="Products">Systems vs</SectionTitle>
          
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-10 items-stretch">
            <div className="flex flex-col gap-3">
              {["Products", "Platforms", "Ecosystems"].map((label) => (
                <motion.div
                  key={label}
                  whileHover={{ paddingLeft: "36px" }}
                  className="border border-cyan-accent/20 rounded-sm p-6 bg-bg-mid/85 backdrop-blur-xl flex items-center gap-4 transition-all hover:border-cyan-accent/55 hover:shadow-[0_0_20px_rgba(0,245,212,0.06)]"
                >
                  <div className="w-1.5 h-1.5 bg-cyan-accent rounded-full shadow-[0_0_8px_#00F5D4]" />
                  <span className="font-orbitron text-[13px] tracking-[3px] uppercase text-text-secondary">{label}</span>
                </motion.div>
              ))}
            </div>
            
            <div className="border border-cyan-accent/55 rounded-sm bg-gradient-to-br from-cyan-accent/5 to-transparent p-12 flex flex-col justify-center relative overflow-hidden shadow-[0_0_60px_rgba(0,245,212,0.06)]">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-accent/5 to-transparent pointer-events-none" />
              <SectionLabel className="mb-5 opacity-70">The Distinction</SectionLabel>
              <h3 className="font-orbitron text-lg md:text-[2.2vw] lg:text-[28px] font-black tracking-[3px] uppercase text-cyan-accent leading-tight glow-text mb-6">
                Systems That<br />Connect Them All
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                Products solve problems. Platforms scale solutions. Ecosystems create entire worlds. Blackspire operates at the system layer — where everything is designed to connect, compound, and endure.
              </p>
            </div>
          </div>

          <div className="mt-15 flex flex-wrap items-center justify-center gap-4 p-8 border border-cyan-accent/20 rounded-sm bg-bg-mid/85 backdrop-blur-xl">
            {["Product", "Platform", "Ecosystem", "System Layer"].map((node, i) => (
              <div key={node} className="flex items-center gap-4">
                <div className={`font-mono text-[10px] tracking-[2px] uppercase px-5 py-2.5 border rounded-sm transition-all cursor-default ${
                  node === "System Layer" ? "border-cyan-accent text-cyan-accent bg-cyan-accent/10 shadow-[0_0_16px_rgba(0,245,212,0.2)]" : "border-cyan-accent/20 text-text-secondary hover:border-cyan-accent hover:text-cyan-accent hover:shadow-[0_0_16px_rgba(0,245,212,0.2)]"
                }`}>
                  {node}
                </div>
                {i < 3 && (
                  <div className="hidden sm:block w-10 h-[1px] bg-gradient-to-r from-cyan-dim to-cyan-accent/30 relative after:content-['▶'] after:absolute after:right-[-5px] after:top-1/2 after:-translate-y-1/2 after:text-[8px] after:text-cyan-dim" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-dim/30 to-transparent" />

      {/* SECTION 4 — TIMELINE */}
      <section className="py-32">
        <div className="max-w-[1300px] mx-auto px-6 md:px-12">
          <SectionLabel>DEVELOPMENT TRACK</SectionLabel>
          <SectionTitle accent="Timeline">Ecosystem</SectionTitle>
          <Timeline />
        </div>
      </section>

      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-dim/30 to-transparent" />

      {/* SECTION 5 — VENTURES */}
      <section className="py-32">
        <div className="max-w-[1300px] mx-auto px-6 md:px-12">
          <SectionLabel>ACTIVE VENTURES</SectionLabel>
          <SectionTitle accent="Ecosystem">The</SectionTitle>
          <Ventures />
        </div>
      </section>

      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-dim/30 to-transparent" />

      {/* SECTION 6 — ORIGIN ENGINE */}
      <section className="py-32">
        <div className="max-w-[1300px] mx-auto px-6 md:px-12">
          <SectionLabel className="text-center">ORIGIN ENGINE</SectionLabel>
          <h2 className="font-orbitron text-2xl md:text-3xl lg:text-4xl font-bold tracking-[4px] uppercase text-text-primary text-center mb-4">
            Where It All <span className="text-cyan-accent">Begins</span>
          </h2>
          <OriginEngine />
        </div>
      </section>

      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-dim/30 to-transparent" />

      {/* SECTION 7 — BUILT THROUGH EXECUTION */}
      <section className="py-32">
        <div className="max-w-[1300px] mx-auto px-6 md:px-12">
          <SectionLabel>EXECUTION PROTOCOL</SectionLabel>
          <SectionTitle accent="Execution">Built Through</SectionTitle>
          <Execution />
        </div>
      </section>

      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-dim/30 to-transparent" />

      {/* SECTION 8 — DESIGNED TO EXPAND */}
      <section id="expand" className="py-40 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_29px,rgba(0,245,212,0.025)_30px),repeating-linear-gradient(90deg,transparent,transparent_29px,rgba(0,245,212,0.025)_30px)] animate-pulse" />
        <div className="max-w-[1300px] mx-auto px-6 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block bg-bg-mid/85 border border-cyan-accent/55 rounded-sm px-10 md:px-20 py-16 backdrop-blur-3xl shadow-[0_0_60px_rgba(0,245,212,0.06)] max-w-[700px]"
          >
            <SectionLabel className="text-center mb-4">DESIGN MANDATE</SectionLabel>
            <h2 className="font-orbitron text-xl md:text-[2.5vw] lg:text-[36px] font-black tracking-[4px] uppercase text-text-primary mb-4">
              Designed to <span className="text-cyan-accent glow-text">Expand</span>
            </h2>
            <p className="text-sm text-text-secondary tracking-wide">
              Every system is built with room to grow.<br />Every decision accounts for what comes next.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-dim/30 to-transparent" />

      {/* SECTION 9 — CORE PRINCIPLE */}
      <section id="principle" className="py-32">
        <div className="max-w-[1300px] mx-auto px-6 md:px-12">
          <SectionLabel>CORE PRINCIPLE</SectionLabel>
          <SectionTitle accent="Foundation">The</SectionTitle>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 relative">
            <div className="absolute top-1/2 left-[12%] right-[12%] h-[1px] bg-gradient-to-r from-transparent via-cyan-dim to-transparent opacity-40 -translate-y-1/2 hidden lg:block" />
            {PRINCIPLES.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-bg-mid/85 border border-cyan-accent/20 rounded-sm p-9 backdrop-blur-xl text-center transition-all hover:border-cyan-accent/55 hover:-translate-y-1 relative z-10 mx-1.5 last:border-cyan-accent/55 last:shadow-[0_0_30px_rgba(0,245,212,0.12)]"
              >
                <div className="text-[28px] mb-4 text-cyan-accent glow-text">{p.icon}</div>
                <h3 className="font-orbitron text-[12px] tracking-[3px] uppercase text-text-primary mb-2">{p.title}</h3>
                <p className="text-[11px] text-text-muted tracking-wide">{p.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}
