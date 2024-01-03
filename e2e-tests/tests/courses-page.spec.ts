import { expect, test } from "@playwright/test";

const WEB_URL = "http://localhost:8080";
test.beforeEach(async ({ page }) => {
  // Runs before each test and signs in each page.
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

test("should courses page visible", async ({ page }) => {
  await page.goto(`${WEB_URL}/courses`);
  // checking search feature
  await page.getByPlaceholder("Search For anything...").fill("stripe");
  await page.getByPlaceholder("Search For anything...").fill("");
  // checking filter feature
  await page.getByRole("link", { name: "react" }).first().click();
  await page.getByRole("link", { name: "No Filter" }).click();
  // checking course title and image
  await expect(
    page.getByText("Build a drag and drop Kanban Board").first()
  ).toBeVisible();
  await expect(
    page.getByRole("img", { name: "Build a drag and drop Kanban Board" })
  ).toBeVisible();
  await expect(page.getByText("Master TypeScript").first()).toBeVisible();
  await expect(
    page.getByRole("img", { name: "Master TypeScript" })
  ).toBeVisible();
});
