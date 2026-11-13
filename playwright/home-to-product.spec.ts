import { test, expect } from "@playwright/test";

test("from the Homepage to the Product Detail Page", async ({ page }) => {
  // 1. Open the homepage
  await page.goto("/");

  // 2. Find the Kettle card and click its "Learn more" link
  const card = page.getByRole("article").filter({
    has: page.getByRole("heading", { name: "Octopus Kettle 1.7 L" }),
  });
  await card.getByRole("link", { name: "Learn more" }).click();

  // 3. Verify we landed on the product detail page
  await expect(page).toHaveURL("/products/octopus-kettle-1-7-l");
  await expect(
    page.getByRole("heading", {
      level: 1,
      name: "Product detail page with slug: octopus-kettle-1-7-l",
    }),
  ).toBeVisible();
});
