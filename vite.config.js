import { resolve } from 'path'
import { readdirSync, existsSync } from 'fs'
import { defineConfig } from 'vite'

// Dynamically collect all resource HTML files
const resourceDir = resolve(__dirname, 'resources')
const resourcePages = existsSync(resourceDir)
  ? readdirSync(resourceDir)
      .filter(f => f.endsWith('.html'))
      .reduce((acc, file) => {
        const name = 'resource-' + file.replace('.html', '')
        acc[name] = resolve(resourceDir, file)
        return acc
      }, {})
  : {}

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
        mediaAppearances: resolve(__dirname, 'media-appearances.html'),
        ...resourcePages,
      },
    },
  },
})
