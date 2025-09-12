// Practice 1

//Write a function that takes in a string of one or more words,
// and returns the same string, but with all words that have five
// or more letters reversed (Just like the name of this Kata).
// Strings passed in will consist of only letters and spaces.
// Spaces will be included only when more than one word is present.

// Solution

function spinWords(string) {
  return string
    .split(" ")
    .map((word) =>
      word.length >= 5 ? word.split("").reverse().join("") : word
    )
    .join(" ");
}

console.log(spinWords("This is the first practice"));

// split(" ") → breaks the string into an array of words.

// map(...) → loops through each word.
// If the word length is 5 or more, it’s reversed.
// Otherwise, it stays the same.

// join(" ") → puts the words back into a single string.

/////////////////////////////////////////////////////////////////////////////////////////////////

// PRACTICE 2

// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments,
// neutralizing the threat.
// Your task is to write a function that takes a string and return a new string with all vowels removed.
// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Solution
function disemvowel(str) {
  return str.replace(/[aeiou/AEIOU]/g, "");
}

console.log(disemvowel("This website is terrible!"));

// /[aeiouAEIOU]/g is a regular expression that matches all vowels (both lowercase and uppercase).
// .replace(..., '') removes them by replacing each match with an empty string.

/////////////////////////////////////////////////////////////////////////////////////////////////

// PRACTICE 3
// In this exercise you are required to, given a string, replace every letter with its position in the alphabet.
// If anything in the text isn't a letter, ignore it and don't return it.

// Soluiton
function alphabetPosition(text) {
  return text
    .toLowerCase()
    .split("")
    .filter((char) => char >= "a" && char <= "z") // keeps only letters
    .map((char) => char.charCodeAt(0) - 96) // a is 97
    .join(" ");
}

console.log(alphabetPosition("This is practice 3"));
console.log(alphabetPosition("is 3 768 768 555 a go"));

//////////////////////////////////////////////////////
// PRACTICE 3
// Given the triangle of consecutive odd numbers:
//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// Calculate the sum of the numbers in the nth row of this triangle
// (starting at index 1)

// Solution
// The sum of the numbers in the nth row is always n³

// For example:

// Row 1 → 1 = 1³

// Row 2 → 3 + 5 = 8 = 2³

// Row 3 → 7 + 9 + 11 = 27 = 3³

// Row 4 → 13 + 15 + 17 + 19 = 64 = 4³

// So the formula is n³

function rowSumOddNumbers(n) {
  return n ** 3; // Math.pow(n, 3)
}

console.log(rowSumOddNumbers(1));
console.log(rowSumOddNumbers(2));
console.log(rowSumOddNumbers(3));
console.log(rowSumOddNumbers(4));
console.log(rowSumOddNumbers(5));

////////////////////////////////////////////////////////////////////
// Practice 4
// Create a function named divisors that takes an integer (n > 1)
// and returns an array with all of the integer's divisors(except for 1 and
// the number itself), from smallest to largest. If the number is prime return
// the string '(integer) is prime'

// Examples
// divisors(12) --> [2, 3, 4, 6]
// divisors(25) --> [5]
// divisors(13) --> "13 is prime"

// Solution
function divisors(integer) {
  const n = integer;
  const output = [];

  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      output.push(i);
    }
  }
  return output.lenght ? result : `${integer} is prime`;
}

console.log(divisors(12));
