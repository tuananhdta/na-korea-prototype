import test from "node:test";
import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";

const read = (path) => readFile(path, "utf8");

test("Cẩm Nang navigation uses the Vietnamese URL paths", async () => {
  const source = await read("src/lib/navigation.ts");

  assert.match(source, /title: "Cẩm Nang"/);
  assert.match(source, /href: "\/cam-nang"/);
  assert.match(source, /href: "\/cam-nang\/ginsenoside"/);
});

test("Cẩm Nang has canonical routes and legacy catalog redirects", async () => {
  const [catalogPage, ginsenosidePage, legacyCatalogPage, legacyGinsenosidePage] = await Promise.all([
    read("src/app/cam-nang/page.tsx"),
    read("src/app/cam-nang/ginsenoside/page.tsx"),
    read("src/app/catalog/page.tsx"),
    read("src/app/catalog/ginsenoside/page.tsx"),
  ]);

  assert.match(catalogPage, /SITE_CONFIG\.siteUrl}\/cam-nang/);
  assert.match(ginsenosidePage, /SITE_CONFIG\.siteUrl}\/cam-nang\/ginsenoside/);
  assert.match(legacyCatalogPage, /redirect\("\/cam-nang"\)/);
  assert.match(legacyGinsenosidePage, /redirect\("\/cam-nang\/ginsenoside"\)/);
});

test("Cẩm Nang tab syncing uses the new route paths", async () => {
  const source = await read("src/components/catalog/CatalogClientView.tsx");

  assert.match(source, /pathname === "\/cam-nang\/ginsenoside"/);
  assert.match(source, /pathname === "\/cam-nang"/);
});

test("new Cẩm Nang route files exist", async () => {
  await Promise.all([
    access("src/app/cam-nang/page.tsx"),
    access("src/app/cam-nang/ginsenoside/page.tsx"),
  ]);
});

test("Cẩm Nang flipbook headers do not render badge or file-size text", async () => {
  const [viewerSource, clientSource] = await Promise.all([
    read("src/components/catalog/FlipBookViewer.tsx"),
    read("src/components/catalog/CatalogClientView.tsx"),
  ]);

  assert.doesNotMatch(viewerSource, /\{badge\}/);
  assert.doesNotMatch(viewerSource, /\{fileSize &&/);
  assert.doesNotMatch(clientSource, /fileSize=\{/);
  assert.doesNotMatch(clientSource, /badge=\{/);
});

test("Cẩm Nang CTA renders the selected catalog image below its actions", async () => {
  const source = await read("src/components/catalog/CatalogClientView.tsx");

  assert.match(source, /src=\{heroContent\.image\}/);
  assert.match(source, /alt=\{heroContent\.imageAlt\}/);
});
