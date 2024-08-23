import { lerp } from "./lerp";
import { unlerp } from "./unlerp";

export function remap(
  fromMin: number,
  fromMax: number,
  toMin: number,
  toMax: number,
  value: number
) {
  return lerp(toMin, toMax, unlerp(fromMin, fromMax, value));
}
