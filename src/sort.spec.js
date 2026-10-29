test("merge sort", () => {
  expect(mergeSort([3, 2, 1, 13, 8, 5, 0, 1])).toEqual([
    0, 1, 1, 2, 3, 5, 8, 13,
  ]);
});

test("sort already sorted array", () => {
  expect(mergeSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
});

test("empty arrays", () => {
  expect(mergeSort([])).toEqual([]);
});

import mergeSort from "./sort";
