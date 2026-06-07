import { useRef, useState, useCallback } from 'react';
import { ArrowRight, Github } from 'lucide-react';

const titleWords = ['Building', 'Robust', 'Backends'];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [magnifyIndex, setMagnifyIndex] = useState<number | null>(null);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const totalWidth = rect.width;
      const segWidth = totalWidth / titleWords.length;
      const idx = Math.floor(x / segWidth);
      setMagnifyIndex(idx >= 0 && idx < titleWords.length ? idx : null);
    },
    []
  );

  const handleMouseLeave = useCallback(() => setMagnifyIndex(null), []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-[400px] h-[400px] bg-pink/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="animate-fade-up max-w-3xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-accent/30 bg-accent/5 text-accent text-sm font-medium">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          Open to Work
        </div>

        <h1
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] cursor-default select-none flex items-center justify-center gap-x-4 sm:gap-x-5 lg:gap-x-6"
        >
          {titleWords.map((word, i) => (
            <span
              key={word}
              className={`inline-block transition-all duration-300 ease-out origin-center ${
                i === 2 ? 'text-accent' : ''
              } ${magnifyIndex === i ? 'scale-125 text-accent' : magnifyIndex !== null ? 'scale-90 opacity-40' : ''}`}
            >
              {word}
            </span>
          ))}
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-fg/60 leading-relaxed">
          车靖楠 – 后端开发者
        </p>

        <p className="mt-4 max-w-lg mx-auto text-fg/40 leading-relaxed">
          专注于高可用分布式系统与云原生架构设计，用代码构建坚不可摧的后端基础设施。
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-lg bg-accent text-bg font-semibold hover:bg-accent/90 transition-all duration-250 shadow-lg shadow-accent/20 hover:shadow-accent/30 hover:-translate-y-0.5"
          >
            View Projects
            <ArrowRight size={18} />
          </a>
          <a
            href="https://github.com/8CJN"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-lg border border-fg/15 text-fg/80 font-semibold hover:border-fg/30 hover:text-fg transition-all duration-250 hover:-translate-y-0.5"
          >
            <Github size={18} />
            GitHub
          </a>
        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-3">
          {['Java', 'Spring Boot', 'MySQL', 'Redis', 'RabbitMQ', 'MyBatis', 'Docker', 'Git'].map(
            (tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-md text-xs font-medium bg-bg-card border border-white/5 text-fg/50"
              >
                {tech}
              </span>
            )
          )}
        </div>
      </div>
    </section>
  );
}
