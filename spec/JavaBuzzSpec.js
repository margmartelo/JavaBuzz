describe('Javabuzz', function() {

  var javabuzz;
  beforeEach(function() {
    javabuzz = new Javabuzz();
  });

  describe('when playing, says', function() {

    it('"Java" when a number is divisible by 3', function() {
      expect(javabuzz.says(3)).toEqual("Java");
    });

    it('"Java" when a number is divisible by 5', function() {
      expect(javabuzz.says(5)).toEqual("Buzz");
    });

    it('"Java" when a number is divisible by 3 and 5', function() {
      expect(javabuzz.says(15)).toEqual("Javabuzz");
    });

    it('returns number when a number is NOT divisible by 3 and/or 5 ', function() {
      expect(javabuzz.says(11)).toEqual(11);
    });
  });
});
