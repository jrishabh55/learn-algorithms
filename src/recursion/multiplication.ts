export function multiplication(n: number, m: number): number {
  // Step 1 - Base Case
  if (m < 0) {
    n = -n;
    m = -m;
  }
  if (m === 0) return 0;

  // Assumption Recursive case
  const smallAns = multiplication(n, m - 1);

  // 3rd Step - Calculate it
  return n + smallAns;
}

console.log(multiplication(50, -50));
