import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

test("product detail gallery does not render image annotation overlays", async () => {
  const source = await readFile("src/components/ProductDetailView.tsx", "utf8");

  assert.doesNotMatch(source, /Label Status Badge/);
  assert.doesNotMatch(source, /bottom-3 inset-x-0 flex items-center justify-center pointer-events-none/);
});
