export default function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const middleIndex = Math.floor(arr.length / 2);

  const firstHalf = arr.slice(0, middleIndex);
  const secondHalf = arr.slice(middleIndex);

  let firstResult = mergeSort(firstHalf);
  let secondResult = mergeSort(secondHalf);

  let newArr = [];

  let i = 0;
  let j = 0;

  while (i < firstResult.length && j < secondResult.length) {
    if (firstResult[i] < secondResult[j]) {
      newArr.push(firstResult[i]);
      i++;
    } else {
      newArr.push(secondResult[j]);
      j++;
    }
  }

  let remainFirst = firstResult.slice(i);
  let remainSecond = secondResult.slice(j);

  const remainArr = [...remainFirst, ...remainSecond];

  newArr.push(...remainArr);

  return newArr;
}
