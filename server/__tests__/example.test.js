function sum(a, b) {
  return a + b;
}

test('sum 4 and 5, result 9', () => {
  const result = sum(4, 5);
  expect(result).toBe(9);
});
