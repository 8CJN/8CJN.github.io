import { Clock, ArrowRight } from 'lucide-react';

const posts = [
  {
    title: 'Raft 共识算法的工程实践与踩坑',
    date: '2025-12-18',
    read: '12 min',
    tag: '分布式',
  },
  {
    title: 'Rust 异步运行时：Tokio 内核机制解析',
    date: '2025-11-05',
    read: '9 min',
    tag: 'Rust',
  },
  {
    title: 'Kubernetes Operator 模式从入门到实战',
    date: '2025-10-22',
    read: '15 min',
    tag: '云原生',
  },
  {
    title: 'Go 内存优化：从 pprof 到实战调优',
    date: '2025-09-14',
    read: '8 min',
    tag: 'Go',
  },
];

export default function Blog() {
  return (
    <section id="blog" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Latest <span className="text-accent">Posts</span>
          </h2>
          <p className="mt-3 text-fg/40 max-w-md mx-auto">
            技术博客，记录思考与实践
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {posts.map((p) => (
            <a
              key={p.title}
              href="#"
              className="group flex items-start gap-5 p-6 rounded-xl bg-bg-card border border-white/5 transition-all duration-250 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/20 hover:border-accent/20"
            >
              <div className="flex-shrink-0 mt-1">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent/20 transition-colors">
                  <span className="text-lg font-bold">
                    {p.date.split('-')[2]}
                  </span>
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-fg group-hover:text-accent transition-colors truncate">
                  {p.title}
                </h3>
                <div className="mt-2 flex items-center gap-3 text-xs text-fg/40">
                  <span>{p.date}</span>
                  <span className="inline-flex items-center gap-1">
                    <Clock size={10} />
                    {p.read}
                  </span>
                  <span className="px-1.5 py-0.5 rounded bg-pink/10 text-pink text-[10px] font-medium">
                    {p.tag}
                  </span>
                </div>
              </div>
              <ArrowRight
                size={16}
                className="flex-shrink-0 mt-1 text-fg/20 group-hover:text-accent group-hover:translate-x-0.5 transition-all"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
