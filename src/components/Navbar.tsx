export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] bg-bg-deep/85 backdrop-blur-2xl border-b border-cyan-accent/20">
      <div className="max-w-[1300px] mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3 font-orbitron text-[15px] font-bold tracking-[4px] text-cyan-accent glow-text">
          BLACKSPIRE
        </div>
        <ul className="hidden md:flex gap-9 list-none">
          {["Systems", "Ventures", "Origin", "Enter"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="font-mono text-[11px] tracking-[2px] text-text-secondary hover:text-cyan-accent uppercase transition-colors"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
