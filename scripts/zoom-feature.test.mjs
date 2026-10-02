import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const read = (path) => readFile(path, "utf8");

test("FlipBookViewer source code contains Zoom and Pan implementation", async () => {
  const source = await read("src/components/catalog/FlipBookViewer.tsx");

  // Verify icons import
  assert.match(source, /ZoomIn/);
  assert.match(source, /ZoomOut/);
  assert.match(source, /RotateCcw/);

  // Verify zoom states
  assert.match(source, /const \[zoomLevel, setZoomLevel\] = useState\(1\);/);
  assert.match(source, /const \[panPosition, setPanPosition\] = useState\(\{ x: 0, y: 0 \}\);/);
  assert.match(source, /const \[isDragging, setIsDragging\] = useState\(false\);/);

  // Verify zoom range limits (min 1, max 2.5, step 0.3)
  assert.match(source, /Math\.min\(prev \+ 0\.3, 2\.5\)/);
  assert.match(source, /Math\.max\(prev - 0\.3, 1\)/);

  // Verify pan boundary clamping logic
  assert.match(source, /const maxPanX = \(dimensions\.width \* zoomLevel\) \/ 1\.5;/);
  assert.match(source, /const maxPanY = \(dimensions\.height \* zoomLevel\) \/ 1\.5;/);

  // Verify flip event resets pan
  assert.match(source, /setPanPosition\(\{ x: 0, y: 0 \}\);/);

  // Verify double click zoom toggle logic
  assert.match(source, /setZoomLevel\(1\.6\);/);

  // Verify Mouse and Touch drag listeners exist
  assert.match(source, /onMouseDown=\{handleMouseDown\}/);
  assert.match(source, /onMouseMove=\{handleMouseMove\}/);
  assert.match(source, /onTouchStart=\{handleTouchStart\}/);
  assert.match(source, /onTouchMove=\{handleTouchMove\}/);

  // Verify FlipBook disables mouse flipping when zoomed
  assert.match(source, /useMouseEvents=\{!isZoomed\}/);
  assert.match(source, /disableFlipByClick=\{isZoomed\}/);
});

test("Simulating Zoom logic calculations", () => {
  let zoomLevel = 1;

  // Zoom In steps
  const zoomIn = () => {
    zoomLevel = Number(Math.min(zoomLevel + 0.3, 2.5).toFixed(2));
  };
  const zoomOut = () => {
    zoomLevel = Number(Math.max(zoomLevel - 0.3, 1).toFixed(2));
  };
  const resetZoom = () => {
    zoomLevel = 1;
  };

  // Case 1: Initial state
  assert.equal(zoomLevel, 1);

  // Case 2: Zoom in step 1 -> 1.3
  zoomIn();
  assert.equal(zoomLevel, 1.3);

  // Case 3: Zoom in step 2 -> 1.6
  zoomIn();
  assert.equal(zoomLevel, 1.6);

  // Case 4: Zoom in to max (2.5)
  zoomIn(); // 1.9
  zoomIn(); // 2.2
  zoomIn(); // 2.5
  zoomIn(); // should remain capped at 2.5
  assert.equal(zoomLevel, 2.5);

  // Case 5: Zoom out step by step
  zoomOut(); // 2.2
  assert.equal(zoomLevel, 2.2);

  // Case 6: Reset zoom
  resetZoom();
  assert.equal(zoomLevel, 1);

  // Case 7: Zoom out at minimum (1.0)
  zoomOut();
  assert.equal(zoomLevel, 1);
});

test("Simulating Pan Clamping calculations", () => {
  const clampPan = (clientX, startX, panX, width, zoomLevel) => {
    const maxPanX = (width * zoomLevel) / 1.5;
    const newX = Math.max(Math.min(clientX - startX, maxPanX), -maxPanX);
    return newX;
  };

  const width = 460;
  const zoomLevel = 2; // maxPanX = 460 * 2 / 1.5 = 613.33

  // Normal drag within bounds
  let panX = clampPan(100, 0, 0, width, zoomLevel);
  assert.equal(panX, 100);

  // Extreme drag to positive infinity (should clamp to maxPanX)
  panX = clampPan(2000, 0, 0, width, zoomLevel);
  assert.equal(panX, (width * zoomLevel) / 1.5);

  // Extreme drag to negative infinity (should clamp to -maxPanX)
  panX = clampPan(-2000, 0, 0, width, zoomLevel);
  assert.equal(panX, -(width * zoomLevel) / 1.5);
});
