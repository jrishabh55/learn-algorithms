export function calPower(num: number, power: number): number {
  // Base Case
  if (power === 0) return 1;
  if (power < 0) {
    power = -power;
    num = 1 / num;
  }

  // assumptions
  const smallAns = calPower(num, power - 1);

  // Calculate
  return num * smallAns;
}


console.log(calPower(5, -3));
