// Practice 1

//Write a function that takes in a string of one or more words,
// and returns the same string, but with all words that have five
// or more letters reversed (Just like the name of this Kata).
// Strings passed in will consist of only letters and spaces. S
// paces will be included only when more than one word is present.

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
