import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

test("mobile floating actions expose contact and product buttons", async () => {
  const source = await readFile("src/components/FloatingContact.tsx", "utf8");

  assert.match(source, /<span>Liên hệ<\/span>/);
  assert.match(source, /href="\/san-pham"/);
  assert.match(source, /<span>Sản Phẩm<\/span>/);
  assert.match(source, /safe-area-inset-bottom/);
});
