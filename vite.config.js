import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        howItWorks: resolve(__dirname, 'how-it-works.html'),
        startHere: resolve(__dirname, 'start-here.html'),
        caseStudies: resolve(__dirname, 'case-studies.html'),
        caseStudy1: resolve(__dirname, 'case-study-1.html'),
        about: resolve(__dirname, 'about.html'),
      },
    },
  },
})
