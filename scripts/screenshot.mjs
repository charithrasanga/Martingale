import { chromium } from "@playwright/test";
import fs from "node:fs";
import path from "node:path";

const out = path.join(process.cwd(), "qa-screenshots");
fs.mkdirSync(out, { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

const routes = [
  ["home", "http://127.0.0.1:3000/"],
  ["estate", "http://127.0.0.1:3000/estate"],
  ["wines", "http://127.0.0.1:3000/wines"],
];

for (const [name, url] of routes) {
  await page.goto(url, { waitUntil: "networkidle" });
  await page.waitForTimeout(800);
  await page.screenshot({
    path: path.join(out, `${name}-full.png`),
    fullPage: true,
  });
  await page.screenshot({
    path: path.join(out, `${name}-hero.png`),
    fullPage: false,
  });
  console.log("captured", name);
}

await browser.close();
