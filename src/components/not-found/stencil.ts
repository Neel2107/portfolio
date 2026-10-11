/**
 * Coverage mask of "404" set in the site's sans: one alpha byte per pixel
 * of a width × height box, with the ink centred. `fill` is how much of the
 * box the numerals may take up, from 0 to 1.
 */
export const numeralMask = (width: number, height: number, fill = 1) => {
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d", { willReadFrequently: true });
  if (!ctx) return null;

  const family = getComputedStyle(document.body).fontFamily;
  // Measure once at a known size, then scale so the ink itself, not the
  // line box around it, fills the space.
  ctx.font = `600 100px ${family}`;
  const probe = ctx.measureText("404");
  const probeWidth = probe.actualBoundingBoxLeft + probe.actualBoundingBoxRight;
  const probeHeight =
    probe.actualBoundingBoxAscent + probe.actualBoundingBoxDescent;
  const fontSize =
    Math.min((width * fill) / probeWidth, (height * fill) / probeHeight) * 100;

  ctx.font = `600 ${fontSize}px ${family}`;
  const ink = ctx.measureText("404");
  const inkWidth = ink.actualBoundingBoxLeft + ink.actualBoundingBoxRight;
  const inkHeight = ink.actualBoundingBoxAscent + ink.actualBoundingBoxDescent;
  ctx.textAlign = "left";
  ctx.textBaseline = "alphabetic";
  ctx.fillText(
    "404",
    (width - inkWidth) / 2 + ink.actualBoundingBoxLeft,
    (height - inkHeight) / 2 + ink.actualBoundingBoxAscent
  );

  const { data } = ctx.getImageData(0, 0, width, height);
  const mask = new Uint8Array(width * height);
  for (let i = 0; i < mask.length; i += 1) mask[i] = data[i * 4 + 3];
  return mask;
};
