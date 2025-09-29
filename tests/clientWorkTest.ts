import { test, expect } from '@playwright/test';

test('Verify Client Work page navigation and text visibility', async ({ page }) => {
  // Step 1: Navigate to the homepage
  await page.goto('https://www.epam.com/');
  
  // Step 2: Select "Services" from the header menu
  const servicesMenu = await page.locator('text=Services');
  await servicesMenu.click();

  // Step 3: Click the "Explore Our Client Work" link
  const exploreClientWorkLink = await page.locator('text=Explore Our Client Work');
  await exploreClientWorkLink.click();

  // Step 4: Verify that the "Client Work" text is visible on the page
  const clientWorkText = await page.locator('text=Client Work');
  await expect(clientWorkText).toBeVisible();
});