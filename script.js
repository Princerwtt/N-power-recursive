function power(x, n) {
  if (x == 0) {
    return 0;
  }
  if (n == 0) {
    return 1;
  }
  return x * power(x, n - 1);
}
console.log(power(3, 5));
