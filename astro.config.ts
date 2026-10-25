import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// GitHub Pages project site: https://rileyjensen22.github.io/peanut-test/
export default defineConfig({
  site: 'https://rileyjensen22.github.io',
  base: '/peanut-test',
  trailingSlash: 'ignore',
  output: 'static',
  vite: { plugins: [tailwindcss()] },
});
