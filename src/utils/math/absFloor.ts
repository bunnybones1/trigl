export function absFloor(val: number) {
  return Math.floor(Math.abs(val)) * (val < 0 ? -1 : 1);
}
