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

test("should home page visible", async ({ page }) => {
  await page.goto(WEB_URL);
  // Expect a title "to contain" a substring.
  await expect(
    page.getByRole("heading", {
      name: "Launch a new career in as little as 6 months",
    })
  ).toBeVisible();
  await expect(page.getByRole("img", { name: "Hero banner" })).toBeVisible();
  await expect(
    page.getByRole("link", { name: "browes our courses" })
  ).toBeVisible();
  await expect(page.getByText("Get the skills you need")).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Learn More" }).first()
  ).toBeVisible();
  await expect(page.getByText("Unlock your coding potential")).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Try out Yourself" })
  ).toBeVisible();
  await expect(page.getByRole("heading", { name: "Categories" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Resources" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "about" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "connect" })).toBeVisible();
  await expect(
    page.getByText("Made by Prathmesh Pol © 2023 Coursify")
  ).toBeVisible();
});
