import { expect } from "@playwright/test";
import { test } from "../fixture";

test.beforeEach(async ({ page }) => {
  page.setViewportSize({ width: 1280, height: 800 });
  await page.goto("https://fgars.org/");
  await page.waitForLoadState("networkidle");
});

test("open clube page", async ({ aiAssert, aiAction }) => {
  await aiAction('Move your mouse over the forth item in the nav list and click the Clube button');
  // 👀 assert by AI
  await aiAssert("There should be a section titled CLUBES FILIADOS on the page");
});

