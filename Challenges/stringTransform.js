function transformString(input) {
  const length = input.length;

  // Check divisibility
  const divisibleBy3 = length % 3 === 0;
  const divisibleBy5 = length % 5 === 0;

  if (divisibleBy3 && divisibleBy5) {
    // Divisible by 15
    return input
      .split("")
      .reverse()
      .map((char) => char.charCodeAt(0))
      .join(" ");
  } else if (divisibleBy3) {
    // Divisible by 3
    return input.split("").reverse().join("");
  } else if (divisibleBy5) {
    // Divisible by 5
    return input
      .split("")
      .map((char) => char.charCodeAt(0))
      .join(" ");
  } else {
    // Not divisible by 3 or 5
    return input;
  }
}

// Test cases for divisible by 3
console.log(transformString("Hamburger")); // "regrubmaH"
console.log(transformString("Bellox")); // "xolleB"

// Test cases for divisible by 5
console.log(transformString("Bello")); // The return code will be "66 101 108 108 111"
console.log(transformString("Hello")); // the output will be "72 101 108 108 111"

// Test cases for divisible by 15
console.log(transformString("Divisible by 15")); // the output will be "53 49 32 121 98 32 101 108 98 105 115 105 118 105 68"
console.log(transformString("second check!!!")); // ouptut "33 33 33 107 99 101 104 99 32 100 110 111 99 101 115"
console.log(transformString("another one....")); // output "46 46 46 46 101 110 111 32 114 101 104 116 111 110 97"

// Test cases for not divisible by 3 or 5
console.log(transformString("Computer")); // this will not change "Computer"
console.log(transformString("Africa")); // this will remain the same "Africa"
