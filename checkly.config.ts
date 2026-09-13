import { defineConfig } from 'checkly'

export default defineConfig({
  projectName: 'Wayfair Price Monitor',
  logicalId: 'wayfair-price-monitor',
  checks: {
    locations: ['us-east-1', 'us-west-1'],
    checkMatch: '**/*.check.ts',
    browserChecks: { testMatch: '**/*.spec.ts' },
  },
})
