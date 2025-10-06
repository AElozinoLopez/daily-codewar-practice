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
  const result = [];

  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      result.push(i);
    }
  }
  // return result.length ? result : `${n} is prime`;
  return result.length ? result : `${n} is prime`;
}

console.log(divisors(13));

// Start looping from 2 (since 1 is excluded) up to n - 1 (since n itself is excluded).

// Collect all numbers that divide n evenly (n % i === 0).

// If no divisors are found, return the string "<n> is prime".

//////////////////////////////////////////////////////////////////////

// Practice 5
// Implement a function that computes the difference between two lists.
// The function should remove all occurrences of elements from the first
// list (a) that are present in the second list (b). The order of elements
// in the first list should be preserved in the result.

// Examples
// If a = [1, 2] and b = [1], the result should be [2].

// If a = [1, 2, 2, 2, 3] and b = [2], the result should be [1, 3].

// Solution
function arrayDiff(a, b) {
  return a.filter((item) => !b.includes(item));
}

console.log(arrayDiff([1, 2, 3, 4, 5], [3, 4]));

// This function does the following
// Preserves the order of elements in a.
// Removes all occurrences of elements in b.
// Works with numbers, strings, or any comparable values.

//  Practice 6
// Define a function that takes an integer argument and returns a logical value true or false depending on if the integer is a prime.

// Per Wikipedia, a prime number ( or a prime ) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

// Requirements
// You can assume you will be given an integer input.
// You can not assume that the integer will be only positive. You may be given negative numbers as well ( or 0 ).

// Examples
// is_prime(1)  /* false */
// is_prime(2)  /* true  */
// is_prime(-1) /* false */

function isPrime(num) {
  if (num <= 1) return false; // 0 and 1 and negative numbers are not prime
  if (num === 2) return true;
  if (num % 2 === 0) return false; // to eliminate even numbers > 2

  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (n % i === 0) return false; // divisible by a smaller number
  }
  return true;
  // return num % 2 === 0 ? true : false;
}

console.log(isPrime(4));

////////////////////////////////////////////////////////////////////////////

// Practice 7
// Write a function that takes an integer as input, and returns the number of bits that are equal to one
// in the binary representation of that number. You can guarantee that input is non-negative.

// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

// Solution 1
function countBits(n) {
  return n
    .toString(2) // To convert the number to binary (base 2)
    .split("") // To split binary to individaul bits
    .filter((bit) => bit === "1").length; // .filter is to keep only '1's and // .length is to count how many '1's there are
}

console.log(countBits(24));

// Solution 2
// This solution is purely bitwise solution, that is, no string conversion

function countBit(n) {
  let count = 0;
  while (n > 0) {
    count += n & 1; // To add 1 if the last bit is 1
    n >>= 1; // to right shift the bits
  }
  return count;
}

console.log(countBit(24));
