import { fibs, fibsRec } from "./fibonacci";

test("Fibonacci", () => {
  expect(fibs(7)).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
});

test("Fibonacci recursive", () => {
  expect(fibsRec(7)).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
});
