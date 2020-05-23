export function sumOfDigits(n: number): number {
  // Base Case
  if (n <= 0) {
    return 0;
  }

  // Recursive case assumptions
  const smallAns = sumOfDigits(Math.trunc(n / 10));

  // Calculate
  const lastDigit = n % 10;
  return lastDigit + smallAns;

}


console.log(sumOfDigits(5))
