export function printNumber(n: number, desc = false): string {
  // Base Case
  if (n <= 1) {
    return n.toString();
  }

  // Recursive case assumptions
  const smallAns = printNumber(n - 1, desc);

  // Calculate
  if (desc) {
    return `${n}, ${smallAns}`;
  }

  return `${smallAns}, ${n}`;
}

console.log(printNumber(10))
console.log(printNumber(10, true))
