export default function removeFromArray<T>(array: T[], item: T) {
  const i = array.indexOf(item);
  if (i !== -1) {
    array.splice(i, 1);
  }
}
