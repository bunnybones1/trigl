export function setLocalNumber(key: string, val: number) {
  localStorage.setItem(key, val.toString());
}
export function getLocalNumber(key: string, defaultVal = 0) {
  const stored = localStorage.getItem(key);
  if (stored) {
    return parseFloat(stored);
  } else {
    return defaultVal;
  }
}
