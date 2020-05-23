export function factorial(n: number): number {
  // Step 1 - Base Case
  if (n <= 1) return 1;

  // Assumption Recursive case
  const smallAns = factorial(n - 1);

  // 3rd Step - Calculate it
  return n * smallAns;
}

console.log(factorial(50));
