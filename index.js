const romanHash = {
  1: "I",
  5: "V",
  10: "X",
  50: "L",
  100: "C",
  500: "D",
  1000: "M",
};
const s = "1989";
// s = 1989
function romanToInt(s) {
  let accumulator = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === 1 && s[i + 1] === 5) {
      accumulator += "IV";
      i++;
    } else if (s[i] === 1 && s[i + 1] === 10) {
      accumulator += "IX";
      i++;
    } else if (s[i] === 10 && s[i + 1] === 50) {
      accumulator += "XL";
      i++;
    } else if (s[i] === 10 && s[i + 1] === 100) {
      accumulator += "XC";
      i++;
    } else if (s[i] === 100 && s[i + 1] === 500) {
      accumulator += "CD";
      i++;
    } else if (s[i] === 100 && s[i + 1] === 1000) {
      accumulator += "CM";
      i++;
    } else {
      // accumulator += romanHash[s[0]];
    }
  }
  console.log(romanHash["50"]);
  return accumulator;
}

romanToInt(s);
