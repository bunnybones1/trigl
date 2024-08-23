import { absFloor } from "./math/absFloor";
import { clamp } from "./math/clamp";

export const scaleValuesInArray = (arr: number[], scale: number) => {
  for (let i = 0; i < arr.length; i++) {
    arr[i] *= scale;
  }
};

export const addToArrayUnique = <T>(arr: T[], value: T) => {
  const index = arr.indexOf(value);
  if (index === -1) {
    arr.push(value);
  }
};

export const removeFromArray = <T>(arr: T[], value: T, strict = false) => {
  const index = arr.indexOf(value);
  if (index !== -1) {
    arr.splice(index, 1);
  } else if (strict) {
    throw new Error("could not find value in array");
  }
  return value;
};

export function removeFromArrayByPredicate<T>(
  arr: T[],
  predicate: (val: T) => boolean,
  strict?: false
): T | undefined;
export function removeFromArrayByPredicate<T>(
  arr: T[],
  predicate: (val: T) => boolean,
  strict: true
): T;
export function removeFromArrayByPredicate<T>(
  arr: T[],
  predicate: (val: T) => boolean,
  strict = false
): T | undefined {
  const index = arr.findIndex(predicate);
  if (index !== -1) {
    return arr.splice(index, 1)[0];
  }
  if (strict) {
    throw new Error("could not find value in array");
  }
  return undefined;
}

export const moveBetweenArrays = <T>(src: T[], dst: T[], value: T) => {
  dst.push(removeFromArray(src, value));
  return value;
};

export const replaceManyInArray = <T>(
  arr: Array<T | undefined>,
  value: T,
  replacement?: T
) => {
  if (value === replacement) {
    throw new Error("Nope. This would cause an infinite loop");
  }
  let index = arr.indexOf(value);
  while (index !== -1) {
    arr[index] = replacement;
    index = arr.indexOf(value);
  }
};

export function getArrayDiffs<T>(oldArr: T[], newArr: T[]) {
  const added = newArr.filter((item) => !oldArr.includes(item));

  const removed = oldArr.filter((item) => !newArr.includes(item));

  const equal = newArr.filter((item) => oldArr.includes(item));

  return {
    added,
    removed,
    equal
  };
}

export const pushToArrayMap = <T, T2>(
  map: Map<T, T2[]>,
  key: T,
  value: T2,
  oneCopyMax = false
) => {
  if (!map.has(key)) {
    map.set(key, []);
  }
  const arr = map.get(key) as T2[];
  if (arr) {
    if (oneCopyMax) {
      if (arr.indexOf(value) === -1) {
        arr.push(value);
      }
    } else {
      arr.push(value);
    }
  }
};

export const cleanRemoveFromArrayMap = <T, T2>(
  map: Map<T, T2[]>,
  key: T,
  value: T2
) => {
  if (!map.has(key)) {
    return;
  }
  const arr = map.get(key) as T2[];
  if (arr) {
    removeFromArray(arr, value);
    if (arr.length === 0) {
      map.delete(key);
    }
  }
};

export function findClosestNumber(arr: number[] | Float32Array, value: number) {
  let lowestDiff = Number.POSITIVE_INFINITY;
  let bestMatch = arr[0];
  for (const i of arr) {
    const diff = Math.abs(i - value);
    if (diff < lowestDiff) {
      lowestDiff = diff;
      bestMatch = i;
    }
  }
  return bestMatch;
}

//binary search only works assuming numbers have been sorted from lowest to highest
export function findClosestNumberIndex(
  arr: number[] | Float32Array,
  value: number
): number {
  const middleIndex = ~~(arr.length * 0.5);
  let step = value > arr[middleIndex] ? 1 : -1;
  let index = middleIndex;
  let oldSample = arr[index];
  let everTurned = false;
  function directionMatches(val: number, val2: number) {
    return (val > 0 && val2 > 0) || (val < 0 && val2 < 0);
  }
  let limit = 100;
  while (step !== 0 && limit > 0) {
    index = clamp(index + step, 0, arr.length - 1);
    const newSample = arr[index];
    if (!directionMatches(value - newSample, value - oldSample)) {
      step *= -1;
      everTurned = true;
    }
    step = absFloor(step * (everTurned ? 0.5 : 2));
    oldSample = newSample;
    limit--;
  }
  return index;
}

export function getLast<T>(arr: readonly T[]) {
  return arr[arr.length - 1];
}

export function getPrev<T>(arr: readonly T[], item: T) {
  return arr[(arr.indexOf(item) - 1 + arr.length) % arr.length];
}

export function getNext<T>(arr: readonly T[], item: T) {
  return arr[(arr.indexOf(item) + 1) % arr.length];
}

export function getRandom<T>(arr: readonly T[], random = Math.random) {
  return arr[~~(random() * arr.length)];
}

export function pluckRandom<T>(arr: T[], random = Math.random) {
  return arr.splice(~~(random() * arr.length), 1)[0];
}

export function pluckRandomMatching<T>(
  arr: T[],
  matcher: (item: T) => boolean,
  random = Math.random
) {
  const validItems = arr.filter(matcher);
  if (validItems.length === 0) {
    return undefined;
  }
  const pickedItem = validItems[~~(random() * validItems.length)];
  return arr.splice(arr.indexOf(pickedItem), 1)[0];
}

export function getClampedIndex<T>(arr: readonly T[], i: number) {
  return arr[clamp(i, 0, arr.length - 1)];
}

export function getFromArrayWrapped<T>(arr: readonly T[], i: number) {
  const t = arr.length;
  return arr[((i % t) + t) % t];
}

export function shuffleArray<T>(array: T[], random = Math.random) {
  let randomIndex = 0;
  for (let currentIndex = array.length - 1; currentIndex >= 0; currentIndex--) {
    randomIndex = Math.floor(random() * currentIndex);
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex]
    ];
  }
}

export function areArraysEqual<T>(a: T[], b: T[]) {
  return a.length === b.length && a.every((val, i) => val === b[i]);
}
