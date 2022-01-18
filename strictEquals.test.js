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
  describe("Given same values (NaN, NaN)", () => {
    test("Expected false", () => {
      //Arrange
      const valueToGive = NaN;
      const expectedOutput = false;

      //Act
      const output = strictEquals(valueToGive, valueToGive);

      //Assert
      expect(expectedOutput).toBe(output);
    });
  });

  describe("Given values 0 and -0", () => {
    test("Expected true (-0, 0))", () => {
      //Arrange
      const valueToGive1 = -0;
      const valueToGive2 = 0;
      const expectedOutput = true;

      //Act
      const output = strictEquals(valueToGive1, valueToGive2);

      //Assert
      expect(expectedOutput).toBe(output);
    });
    test("Expected true (0, -0))", () => {
      //Arrange
      const valueToGive1 = 0;
      const valueToGive2 = -0;
      const expectedOutput = true;

      //Act
      const output = strictEquals(valueToGive1, valueToGive2);

      //Assert
      expect(output).toBe(expectedOutput);
    });
  });
});
