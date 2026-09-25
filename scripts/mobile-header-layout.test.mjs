import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

test("mobile header sits directly below the promo banner", async () => {
  const source = await readFile("src/components/Header.tsx", "utf8");

  assert.match(source, /const headerOffset = isBannerVisible \? "top-20" : "top-0";/);
  assert.match(source, /isScrolled\s*\n\s*\? "h-40"\s*\n\s*: "h-\[168px\] sm:h-44"/);
  assert.doesNotMatch(source, /top-24 sm:top-20/);
});
