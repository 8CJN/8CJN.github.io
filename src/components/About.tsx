import { Server, Database, Layers, ShieldCheck, Code2, GitBranch } from 'lucide-react';

const skills = [
  { icon: Server, label: 'Java 后端', desc: 'Spring Boot / Spring MVC / RESTful API' },
  { icon: Database, label: '数据存储', desc: 'MySQL / Redis / MyBatis' },
  { icon: Layers, label: '中间件', desc: 'RabbitMQ / Nginx / Tomcat' },
  { icon: ShieldCheck, label: '安全与认证', desc: 'Spring Security / JWT / OAuth2' },
  { icon: Code2, label: '开发工具', desc: 'IntelliJ IDEA / Maven / Gradle' },
  { icon: GitBranch, label: 'DevOps', desc: 'Git / Docker / Linux / CI/CD' },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold">
            About <span className="text-accent">Me</span>
          </h2>
          <p className="mt-3 text-fg/40 max-w-md mx-auto">
            关于我的技术背景与专业能力
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          <div className="lg:col-span-2 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink/10 text-pink text-sm font-medium">
              从 0 到 1 打造多个生产级 Java 项目
            </div>
            <p className="text-fg/60 leading-relaxed">
              我是一名注重实战的 Java 后端开发者，在校期间独立负责过多个完整项目的后端架构设计与开发实现。擅长快速理解业务需求，选择合适的技术方案，并交付高质量、可迭代的软件产品。
            </p>
            <p className="text-fg/60 leading-relaxed">
              熟练使用 Java 进行后端开发，掌握 Spring 全家桶、MySQL、Redis、Elasticsearch 等技术栈，具备 Linux 服务器运维与线上问题排查能力。始终保持学习心态，不断提升自己的工程素养与技术深度。
            </p>
            <div className="pt-2 flex items-center gap-6 text-sm text-fg/40">
              <span>
                📍 <span className="text-fg/60">山西太原</span>
              </span>
              <span>
                🏫 <span className="text-fg/60">太原科学大学 · 计算机科学与技术</span>
              </span>
            </div>
          </div>

          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {skills.map((s) => (
              <div
                key={s.label}
                className="group flex items-start gap-4 p-5 rounded-xl bg-bg-card border border-white/5 transition-all duration-250 hover:border-accent/20"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent/20 transition-colors">
                  <s.icon size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-fg text-sm">{s.label}</h3>
                  <p className="text-xs text-fg/40 mt-1">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
