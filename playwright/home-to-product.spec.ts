import { test, expect } from "@playwright/test";

test("from the Homepage to the Product Detail Page", async ({ page }) => {
  await page.goto("/");

  const card = page.getByRole("article").filter({
    has: page.getByRole("heading", { name: "Octopus Kettle 1.7 L" }),
  });
  await card.getByRole("link", { name: "Learn more" }).click();

  await expect(page).toHaveURL("/products/octopus-kettle-1-7-l");
  await expect(
    page.getByRole("heading", {
      level: 1,
      name: "Product detail page with slug: octopus-kettle-1-7-l",
    }),
  ).toBeVisible();
});
