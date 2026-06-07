import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    base: './', // ✅ 使用相对路径，完美适配GitHub Pages，这是最简单可靠的方式
    // 或者，如果将来计划部署到子目录（如自定义域名），也可以写成：
    // base: '/你的仓库名/',
});