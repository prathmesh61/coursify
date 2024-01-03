import { test, expect } from "@playwright/test";
const WEB_URL = "http://localhost:8080";
test("should allow me to log in", async ({ page }) => {
  await page.goto(`${WEB_URL}/login`);

  // Expect a title.
  await expect(page.getByText("Login To Coursify")).toBeVisible();
  // fill the inputs
  await page.getByPlaceholder("Your email").fill("pooja@gmail.com");
  await page.getByPlaceholder("Password").fill("pooja");
  // click on button
  await page.getByRole("button", { name: "Login" }).click();
  // should show pop-up
  await expect(page.getByText("Login Successfully")).toBeVisible();
});
