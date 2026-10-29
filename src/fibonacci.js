function fibs(n) {
  let res = [0, 1];
  for (let i = 0; i < n - 1; i++) {
    res.push(res[i] + res[i + 1]);
  }
  return res;
}

function fibsRec(n) {
  if (n < 2) return n === 0 ? [0] : [0, 1];

  let res = fibsRec(n - 1);

  res.push(res[res.length - 1] + res[res.length - 2]);

  return res;
}

export { fibs, fibsRec };
