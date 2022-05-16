export const rgbToHex = (rgb) => {
  const [r, g, b] = rgb.split(',');

  // eslint-disable-next-line no-bitwise
  const c = (r << 16) | (g << 8) | b;

  return `#${c.toString(16).padStart(6, 0)}`;
};
