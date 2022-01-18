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
      expect(output).toBe(expectedOutput);
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
      expect(output).toBe(expectedOutput);
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
      expect(output).toBe(expectedOutput);
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

  describe("Given same values of diferent type (1, '1')", () => {
    test("Expected false", () => {
      //Arrange
      const valueToGive1 = 1;
      const valueToGive2 = "1";
      const expectedOutput = false;

      //Act
      const output = strictEquals(valueToGive1, valueToGive2);

      //Assert
      expect(output).toBe(expectedOutput);
    });
  });

  describe("Given boolean values true and false", () => {
    test("Expected false (true, false)", () => {
      //Arrange
      const valueToGive1 = true;
      const valueToGive2 = false;
      const expectedOutput = false;

      //Act
      const output = strictEquals(valueToGive1, valueToGive2);

      //Assert
      expect(output).toBe(expectedOutput);
    });

    test("Expected true (false, false)", () => {
      //Arrange
      const valueToGive1 = false;
      const valueToGive2 = false;
      const expectedOutput = true;

      //Act
      const output = strictEquals(valueToGive1, valueToGive2);

      //Assert
      expect(output).toBe(expectedOutput);
    });
  });
  describe("Given different values of same type ('Water', 'Oil')", () => {
    test("Expected false", () => {
      //Arrange
      const valueToGive1 = "Water";
      const valueToGive2 = "Oil";
      const expectedOutput = false;

      //Act
      const output = strictEquals(valueToGive1, valueToGive2);

      //Assert
      expect(output).toBe(expectedOutput);
    });
  });
});
