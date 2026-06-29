import { deflateSync } from "node:zlib";
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = new URL("../public", import.meta.url);
mkdirSync(outDir, { recursive: true });

function crc32(buffer) {
  let crc = ~0;
  for (const byte of buffer) {
    crc ^= byte;
    for (let i = 0; i < 8; i += 1) {
      crc = (crc >>> 1) ^ (0xedb88320 & -(crc & 1));
    }
  }
  return ~crc >>> 0;
}

function chunk(type, data) {
  const typeBuffer = Buffer.from(type);
  const length = Buffer.alloc(4);
  length.writeUInt32BE(data.length);
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(Buffer.concat([typeBuffer, data])));
  return Buffer.concat([length, typeBuffer, data, crc]);
}

function setPixel(image, size, x, y, color, alpha = 255) {
  if (x < 0 || y < 0 || x >= size || y >= size) return;
  const index = (y * size + x) * 4;
  image[index] = color[0];
  image[index + 1] = color[1];
  image[index + 2] = color[2];
  image[index + 3] = alpha;
}

function drawLine(image, size, x1, y1, x2, y2, color, width) {
  const steps = Math.max(Math.abs(x2 - x1), Math.abs(y2 - y1)) * 2;
  for (let i = 0; i <= steps; i += 1) {
    const t = i / steps;
    const x = Math.round(x1 + (x2 - x1) * t);
    const y = Math.round(y1 + (y2 - y1) * t);
    for (let dx = -width; dx <= width; dx += 1) {
      for (let dy = -width; dy <= width; dy += 1) {
        if (dx * dx + dy * dy <= width * width) setPixel(image, size, x + dx, y + dy, color);
      }
    }
  }
}

function drawCircle(image, size, cx, cy, radius, color, width, start = 0, end = Math.PI * 2) {
  const steps = Math.ceil(radius * 7);
  for (let i = 0; i <= steps; i += 1) {
    const angle = start + ((end - start) * i) / steps;
    const x = Math.round(cx + Math.cos(angle) * radius);
    const y = Math.round(cy + Math.sin(angle) * radius);
    for (let dx = -width; dx <= width; dx += 1) {
      for (let dy = -width; dy <= width; dy += 1) {
        if (dx * dx + dy * dy <= width * width) setPixel(image, size, x + dx, y + dy, color);
      }
    }
  }
}

function drawPng(size) {
  const image = Buffer.alloc(size * size * 4, 255);
  const black = [17, 17, 17];
  const red = [193, 18, 31];
  const scale = size / 180;
  const w = Math.max(1, Math.round(size / 90));

  drawCircle(image, size, 90 * scale, 90 * scale, 72 * scale, black, w, -1.55, Math.PI * 1.94);
  drawCircle(image, size, 90 * scale, 90 * scale, 72 * scale, red, w, Math.PI, Math.PI * 1.28);
  drawLine(image, size, 37 * scale, 37 * scale, 143 * scale, 37 * scale, black, w);
  drawLine(image, size, 143 * scale, 37 * scale, 143 * scale, 143 * scale, black, w);
  drawLine(image, size, 143 * scale, 143 * scale, 37 * scale, 143 * scale, black, w);
  drawLine(image, size, 37 * scale, 143 * scale, 37 * scale, 37 * scale, black, w);
  drawCircle(image, size, 90 * scale, 51 * scale, 10.5 * scale, black, w);
  drawLine(image, size, 90 * scale, 62 * scale, 90 * scale, 110 * scale, black, w);
  drawLine(image, size, 70 * scale, 71 * scale, 90 * scale, 84 * scale, black, w);
  drawLine(image, size, 90 * scale, 84 * scale, 130 * scale, 71 * scale, black, w);
  drawLine(image, size, 29 * scale, 72 * scale, 90 * scale, 92 * scale, black, w);
  drawLine(image, size, 90 * scale, 92 * scale, 151 * scale, 72 * scale, black, w);
  drawLine(image, size, 37 * scale, 95 * scale, 90 * scale, 101 * scale, black, w);
  drawLine(image, size, 90 * scale, 101 * scale, 143 * scale, 95 * scale, black, w);
  drawLine(image, size, 90 * scale, 110 * scale, 56 * scale, 143 * scale, black, w);
  drawLine(image, size, 90 * scale, 110 * scale, 124 * scale, 143 * scale, black, w);
  drawLine(image, size, 80 * scale, 90 * scale, 37 * scale, 143 * scale, black, w);
  drawLine(image, size, 100 * scale, 90 * scale, 143 * scale, 143 * scale, black, w);
  drawLine(image, size, 81 * scale, 83 * scale, 79 * scale, 143 * scale, black, Math.max(1, w - 1));
  drawLine(image, size, 99 * scale, 83 * scale, 101 * scale, 143 * scale, black, Math.max(1, w - 1));

  const rawRows = [];
  for (let y = 0; y < size; y += 1) {
    rawRows.push(Buffer.from([0]));
    rawRows.push(image.subarray(y * size * 4, (y + 1) * size * 4));
  }

  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(size, 0);
  ihdr.writeUInt32BE(size, 4);
  ihdr[8] = 8;
  ihdr[9] = 6;
  ihdr[10] = 0;
  ihdr[11] = 0;
  ihdr[12] = 0;

  return Buffer.concat([
    Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]),
    chunk("IHDR", ihdr),
    chunk("IDAT", deflateSync(Buffer.concat(rawRows))),
    chunk("IEND", Buffer.alloc(0))
  ]);
}

function writePng(name, size) {
  writeFileSync(join(outDir.pathname, name), drawPng(size));
}

writePng("favicon-16x16.png", 16);
writePng("favicon-32x32.png", 32);
writePng("apple-touch-icon.png", 180);
writePng("android-chrome-192x192.png", 192);
writePng("android-chrome-512x512.png", 512);

const png32 = drawPng(32);
const icoHeader = Buffer.alloc(22);
icoHeader.writeUInt16LE(0, 0);
icoHeader.writeUInt16LE(1, 2);
icoHeader.writeUInt16LE(1, 4);
icoHeader[6] = 32;
icoHeader[7] = 32;
icoHeader[8] = 0;
icoHeader[9] = 0;
icoHeader.writeUInt16LE(1, 10);
icoHeader.writeUInt16LE(32, 12);
icoHeader.writeUInt32LE(png32.length, 14);
icoHeader.writeUInt32LE(22, 18);
writeFileSync(join(outDir.pathname, "favicon.ico"), Buffer.concat([icoHeader, png32]));
