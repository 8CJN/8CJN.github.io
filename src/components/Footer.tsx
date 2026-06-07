import { Github, Mail, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-fg/30">
          &copy; {new Date().getFullYear()} 车靖楠. All rights reserved.
        </p>
        <p className="text-xs text-fg/20 italic order-last sm:order-none">
          若再许我少年时，一两黄金一两风.
        </p>
        <div className="flex items-center gap-5">
          <a
            href="https://github.com/8CJN"
            target="_blank"
            rel="noopener noreferrer"
            className="text-fg/30 hover:text-accent transition-colors"
          >
            <Github size={18} />
          </a>
          <a
            href="mailto:chejingnan@outlook.com"
            className="text-fg/30 hover:text-accent transition-colors"
          >
            <Mail size={18} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-fg/30 hover:text-accent transition-colors"
          >
            <Twitter size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
