import { BrowserCheck } from 'checkly/constructs'

new BrowserCheck('wayfair-metallo-tile-price-monitor', {
  name: 'Wayfair Metallo Tile \u2013 Price Monitor',
  frequency: 60,
  locations: ['us-east-1', 'us-west-1'],
  code: {
    entrypoint: './wayfair-price.spec.ts',
  },
})
