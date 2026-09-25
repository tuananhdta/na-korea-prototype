import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

test("policy pages do not expose AI-style summary labels", async () => {
  const source = await readFile("src/components/PolicyPageView.tsx", "utf8");

  assert.doesNotMatch(source, /Tóm Tắt Điểm Trọng Tâm \(Key Takeaways\)/);
  assert.doesNotMatch(source, /dateModified:\s*new Date\(\)\.toISOString\(\)/);
});

test("policy hero titles use white text on the dark banner", async () => {
  const source = await readFile("src/components/PolicyPageView.tsx", "utf8");

  assert.match(source, /<h1 className="[^\"]*text-white[^\"]*">\s*\{policy\.title\}/);
});
