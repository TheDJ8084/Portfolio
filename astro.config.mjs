// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import markdoc from '@astrojs/markdoc';
import keystatic from '@keystatic/astro';

const isBuild = process.env.npm_lifecycle_event === 'build';

// https://astro.build/config
export default defineConfig({
  site: 'https://TheDJ8084.github.io',
  base: isBuild ? '/Portfolio' : '/',
  integrations: [
    react(), 
    markdoc(), 
    ...(isBuild ? [] : [keystatic()])
  ],
  output: 'static'
});
