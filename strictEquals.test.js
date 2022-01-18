function strictEquals(a, b) {
  if (Object.is(a, NaN) && Object.is(b, NaN)) {
    return false;
  }
  if (
    (Object.is(a, -0) && Object.is(b, 0)) ||
    (Object.is(a, 0) && Object.is(b, -0))
  ) {
    return true;
  }

  return Object.is(a, b);
}

describe("Test on function strictEquals", () => {
  describe("Given same values (1, 1)", () => {
    test("Expected true", () => {
      //Arrange
      const valueToGive = 1;
      const expectedOutput = true;

      //Act
      const output = strictEquals(valueToGive, valueToGive);

      //Assert
      expect(expectedOutput).toBe(output);
    });
  });
});
