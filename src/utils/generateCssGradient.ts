import { Color } from "three";

const __tempColor = new Color();
const percents3 = ["10%", "50%", "90%"];
const slots9 = new Array(9);
for (let i = 0; i < 9; i++) {
  slots9[i] = i;
}
function generateCssHueGradient(saturation: number, value: number) {
  const colors = slots9.map((p, i) =>
    __tempColor
      .setHSL(1 - (i - 0.5) / 7, 1 - saturation / -360, 1 - value / -360)
      .getStyle()
  );
  return `linear-gradient(${colors})`;
}
function generateCssSaturationGradient(hue: number, value: number) {
  const colors = percents3.map(
    (p, i) =>
      `${__tempColor.setHSL(hue / 360, 1 - i / 2, 1 - value / -360).getStyle()} ${p}`
  );
  return `linear-gradient(${colors})`;
}
function generateCssValueGradient(hue: number, saturation: number) {
  const colors = percents3.map(
    (p, i) =>
      `${__tempColor.setHSL(hue / 360, 1 - saturation / -360, 1 - i / 2).getStyle()} ${p}`
  );
  return `linear-gradient(${colors})`;
}

export function generateCssGradient(
  type: "h" | "s" | "l",
  hue: number,
  saturation: number,
  value: number
) {
  switch (type) {
    case "h":
      return generateCssHueGradient(saturation, value);
    case "s":
      return generateCssSaturationGradient(hue, value);
    case "l":
      return generateCssValueGradient(hue, saturation);
  }
}
