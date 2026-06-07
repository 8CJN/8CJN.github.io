import { ExternalLink, Github, Star } from 'lucide-react';

const projects = [
  {
    title: 'DistroKV',
    desc: '高性能分布式键值存储，基于 Raft 共识实现强一致性，支持百万级 QPS 读写。',
    tags: ['Go', 'Raft', 'BoltDB'],
    stars: 342,
    github: '#',
    demo: '#',
  },
  {
    title: 'FlowScheduler',
    desc: '云原生任务调度引擎，支持 DAG 依赖编排、动态扩缩容与故障自动恢复。',
    tags: ['Rust', 'Kubernetes', 'gRPC'],
    stars: 218,
    github: '#',
    demo: '#',
  },
  {
    title: 'GatewayX',
    desc: '轻量级 API 网关，内置限流、熔断与可观测性，适用于微服务架构。',
    tags: ['Go', 'Redis', 'Prometheus'],
    stars: 176,
    github: '#',
    demo: '#',
  },
  {
    title: 'CacheForge',
    desc: '多级缓存中间件，LRU/LFU 混合淘汰策略，热 Key 自动探测与预加载。',
    tags: ['Python', 'Redis', 'Lua'],
    stars: 129,
    github: '#',
    demo: '#',
  },
  {
    title: 'LogPipeline',
    desc: '实时日志采集与处理管线，支持结构化解析、增量聚合与告警规则引擎。',
    tags: ['Rust', 'Kafka', 'ClickHouse'],
    stars: 97,
    github: '#',
    demo: '#',
  },
  {
    title: 'AuthVault',
    desc: '统一认证授权服务，RBAC + ABAC 混合模型，JWT / OIDC 双协议支持。',
    tags: ['Go', 'PostgreSQL', 'OAuth2'],
    stars: 84,
    github: '#',
    demo: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Featured <span className="text-accent">Projects</span>
          </h2>
          <p className="mt-3 text-fg/40 max-w-md mx-auto">
            精选开源项目与作品，展示后端工程实践能力
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group relative flex flex-col rounded-xl bg-bg-card border border-white/5 p-6 transition-all duration-250 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/30 hover:border-accent/20"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-lg font-bold text-fg group-hover:text-accent transition-colors duration-250">
                  {p.title}
                </h3>
                <span className="inline-flex items-center gap-1 text-xs text-fg/40">
                  <Star size={12} className="text-pink" />
                  {p.stars}
                </span>
              </div>

              <p className="text-sm text-fg/50 leading-relaxed flex-1">
                {p.desc}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 rounded text-[11px] font-medium bg-accent/10 text-accent/80"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex items-center gap-3 pt-4 border-t border-white/5">
                <a
                  href={p.github}
                  className="inline-flex items-center gap-1.5 text-xs text-fg/40 hover:text-accent transition-colors"
                >
                  <Github size={14} />
                  Code
                </a>
                <a
                  href={p.demo}
                  className="inline-flex items-center gap-1.5 text-xs text-fg/40 hover:text-accent transition-colors"
                >
                  <ExternalLink size={14} />
                  Demo
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
