/// <reference types="vitest" />
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test:{
    globals: true,
    include: ['src/**/*.spec.tsx'],
    environment: 'jsdom',
    coverage: { 
      provider: 'v8',
      reporter: ['lcov', 'html'], 
      reportsDirectory: 'coverage',
      all: true,
      include: [ '**/src/**/*.template.tsx']
    },
    setupFiles: './vitest.setup.ts'
  }
})