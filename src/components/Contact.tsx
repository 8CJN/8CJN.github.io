import { Mail, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Get In <span className="text-accent">Touch</span>
          </h2>
          <p className="mt-3 text-fg/40 max-w-md mx-auto">
            期待与您交流，欢迎随时联系
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent flex-shrink-0">
                <Mail size={18} />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-fg">Email</h3>
                <p className="text-sm text-fg/50 mt-0.5">chejingnan@outlook.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent flex-shrink-0">
                <MapPin size={18} />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-fg">Location</h3>
                <p className="text-sm text-fg/50 mt-0.5">北京，中国</p>
              </div>
            </div>
          </div>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="space-y-4"
          >
            <input
              type="text"
              placeholder="姓名"
              className="w-full px-4 py-3 rounded-lg bg-bg-card border border-white/10 text-fg placeholder-fg/30 text-sm focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/30 transition-colors"
            />
            <input
              type="email"
              placeholder="邮箱"
              className="w-full px-4 py-3 rounded-lg bg-bg-card border border-white/10 text-fg placeholder-fg/30 text-sm focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/30 transition-colors"
            />
            <textarea
              rows={4}
              placeholder="消息内容..."
              className="w-full px-4 py-3 rounded-lg bg-bg-card border border-white/10 text-fg placeholder-fg/30 text-sm focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/30 transition-colors resize-none"
            />
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-bg font-semibold text-sm hover:bg-accent/90 transition-all duration-250 shadow-lg shadow-accent/20"
            >
              <Send size={16} />
              发送消息
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
