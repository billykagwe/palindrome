/** @format */

const palindrome = require("./palindrome");

describe("Palindrome test", () => {
  it("should define palindrome function", () => {
    expect(palindrome).toBeDefined();
  });

  it("should return true for 'mom' parameter", () => {
    expect(palindrome("mom")).toBeTruthy();
  });

  it("should fail for billy", () => {
    expect(palindrome("billy")).toBeFalsy();
  });

  it("should work even with case difference", () => {
    expect(palindrome("Madam")).toBeTruthy();
  });

  it("should work even with sentences", () => {
    expect(palindrome("Murder for a jar of red rum")).toBeTruthy();
  });
});
