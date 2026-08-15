const palindromes = function (string) {
  const allowedChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
  string = String(string);
  const parsedString = string.toLowerCase()
        .split("")
        .filter(char => allowedChar.includes(char))
        .join();
  const reversedString = parsedString.split("").reverse().join("");
  return parsedString === reversedString ? true : false;
};

module.exports = palindromes;

console.log(palindromes('r3ace3car'));