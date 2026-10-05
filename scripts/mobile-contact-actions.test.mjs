import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

test("mobile floating actions expose Zalo and Hotline stickers", async () => {
  const source = await readFile("src/components/FloatingContact.tsx", "utf8");

  assert.match(source, /Hotline/);
  assert.match(source, /href="tel:0903409939"/);
  assert.match(source, /Chat Zalo/);
  assert.match(source, /href="https:\/\/zalo\.me\/0903409939"/);
});

