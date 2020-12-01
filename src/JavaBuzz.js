class Javabuzz {
  _isDivisibleByThree(number, divisor) {
    return (number % divisor === 0);
  }

  isDivisibleByFifteen(number) {
   return this._isDivisibleBy(number, 15);
 }
}
