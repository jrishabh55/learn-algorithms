export function findFibonacciNumber(n: number): number {
  // Base Case
  if (n <= 1 ) {
    return n;
  }

  // Recursive case assumptions
  const num1 = findFibonacciNumber(n - 1);
  const num2 = findFibonacciNumber(n - 2);

  // Calculate
  return num1 + num2;
}


console.log(findFibonacciNumber(6))
