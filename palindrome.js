/** @format */

const palindrome = (str) => {
  const reversed = str.split("").reverse().join("");
  return (
    reversed.split(" ").join("").toLowerCase() ===
    str.split(" ").join("").toLowerCase()
  );
};

module.exports = palindrome;
