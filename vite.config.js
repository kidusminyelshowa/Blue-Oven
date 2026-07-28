import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  server: {
    open: true
  },
  plugins: [
    viteStaticCopy({
      targets: [
        { src: 'support.js', dest: '' },
        { src: 'image-slot.js', dest: '' },
        { src: '_ds', dest: '' },
        { src: 'assets', dest: '' }
      ]
    })
  ]
});
