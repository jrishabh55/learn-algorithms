export function countDigits(n: number): number {
  // Base Case
  if (n < 1) {
    return 0;
  }

  // Recursive case assumptions
  const smallAns = countDigits(Math.trunc(n/10));

  // Calculate
  return 1 + smallAns;

}


console.log(countDigits(10))
