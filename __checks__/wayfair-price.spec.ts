import { test, expect } from '@playwright/test'

const PRODUCT_URL =
  process.env.ENVIRONMENT_URL ??
  'https://www.wayfair.com/Ackland--Metallo-4-in.-x-12-in.-Glossy-Ceramic-Subway-Wall-Tile-WAYNMAR4X12G-L2970-K~MVP12071.html'

test('Wayfair Metallo Tile \u2013 extract and validate price', async ({ page }) => {
  // Navigate to the product page
  await page.goto(PRODUCT_URL, { waitUntil: 'domcontentloaded' })

  // Wait for a price element to appear on the page
  const priceLocator = page.locator('[data-test-id="PriceDisplay"] span, .PriceBlock .SFPrice, [class*="BasePriceBlock"] [class*="price"]').first()
  await priceLocator.waitFor({ state: 'visible', timeout: 15000 })

  // Extract the price text
  const priceText = await priceLocator.textContent()
  console.log(`Current price: ${priceText?.trim()}`)

  // Assert the price is a valid dollar amount (e.g. $4.29, $12.99)
  expect(priceText?.trim()).toMatch(/\$\d+\.\d{2}/)
})
