/**
 * Sanitize raw WordPress HTML descriptions before rendering.
 *
 * Strips:
 * - HTML comments (<!-- ... -->)
 * - Orphan "0%" lines left by broken skillbar widgets
 * - data-* attributes on all elements
 * - WordPress-specific CSS classes (alignnone, wp-image-*, size-*, aligncenter, etc.)
 * - Empty <p> tags and excessive <br /> sequences
 * - Elementor/plugin inline attributes (data-path-to-node, data-start, data-end, data-id, data-element_type, etc.)
 *
 * Preserves:
 * - All text content, headings, lists, tables, images, links
 * - style attributes (for table widths, etc.)
 * - src, alt, width, height on <img>
 * - href, target, rel on <a>
 */
export function sanitizeProductDescription(html: string | undefined | null): string {
  if (!html) return "";

  let clean = html;

  // 1. Remove HTML comments (including WordPress widget markers)
  clean = clean.replace(/<!--[\s\S]*?-->/g, "");

  // 2. Remove orphan "0%" lines left by broken skillbar widgets
  //    Pattern: standalone "0%" possibly wrapped in whitespace/br tags
  clean = clean.replace(/(?:<br\s*\/?>|\s)*\n?\s*0%\s*(?:<br\s*\/?>|\s)*/g, "");

  // 3. Remove data-* attributes from all elements
  clean = clean.replace(/\s+data-[\w-]+="[^"]*"/g, "");
  clean = clean.replace(/\s+data-[\w-]+='[^']*'/g, "");

  // 4. Remove WordPress-specific CSS classes but keep the class attribute if other classes remain
  clean = clean.replace(/\bclass="([^"]*)"/g, (_match, classes: string) => {
    const filtered = classes
      .split(/\s+/)
      .filter(
        (cls: string) =>
          cls &&
          !/^(alignnone|aligncenter|alignleft|alignright|wp-image-\d+|size-\w+|wp-block-\w+|elementor-\w+|has-nested-images|columns-default|is-cropped|is-layout-\w+)$/.test(
            cls
          )
      )
      .join(" ");
    return filtered ? `class="${filtered}"` : "";
  });

  // 5. Remove empty paragraphs: <p> </p>, <p></p>, <p>&nbsp;</p>
  clean = clean.replace(/<p[^>]*>\s*(&nbsp;|\s)*<\/p>/gi, "");

  // 6. Collapse 3+ consecutive <br> into a single line break
  clean = clean.replace(/(<br\s*\/?\s*>[\s]*){3,}/gi, "<br />");

  // 7. Remove trailing <br /> before closing tags
  clean = clean.replace(/<br\s*\/?\s*>\s*(<\/(?:p|div|li|td|th)>)/gi, "$1");

  // 8. Normalize whitespace between tags (collapse multiple newlines)
  clean = clean.replace(/\n{3,}/g, "\n\n");

  // 9. Add responsive wrapper to bare <img> tags that aren't already inside a figure
  //    Ensure images get max-width behavior via CSS (handled by .na-product-content img rules)

  // 10. Clean up table: remove ekit- prefixed IDs, style-only width attrs are kept for layout
  clean = clean.replace(/\s+id="ekit-[^"]*"/g, "");

  return clean.trim();
}
