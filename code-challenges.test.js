// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.

describe ("namesCap", () => {
  it("takes an array of objects and returns an array with a sentence about each person with their name capitalized", () => {
    const desc = [
      { name: "ford prefect", occupation: "a hitchhiker" },
      { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
      { name: "arthur dent", occupation: "a radio employee" }]
    expect(namesCap(desc)).toEqual("Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee.")
  })
})

// FAIL  ./code-challenges.test.js
// namesCap

//   ✕ takes an array of objects and returns an array with a sentence about each person with their name capitalized (1 ms)
// ● namesCap › takes an array of objects and returns an array with a sentence about each person with their name capitalized
//   ReferenceError: namesCap is not defined

// b) Create the function that makes the test pass.

//PseudoCode:

// Return an array with a sentence about each person with their name capitalized.
// Use .map to create a new array calling on the provided function.
// Use .name to indicate the function name specified.
// In order to split the string into an array of substrings use .split.
// To replace the regular expression use .replace.
// And finally use .toUpperCase to convert the the names to uppercase letters.

  const namesCap = (array) => {
    return array.map(newSentence => {
      let name = newSentence.name.split(" ").map(value => value.replace(value[0], value[0].toUpperCase()))
      let fullname = name.join(" ")
      let desc = desc.occupation
      let newSentence = `${fullname} is ${desc}.`
      return newSentence
    })
  }

  
// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

describe ("mixData", () => {
  it("that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.", () => {
    const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
    const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
    expect(mixData(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
    expect(mixData(hodgepodge2)).toEqual([ 2, 1, -1 ])
  })
})

// a) Create a test with an expect statement using the variables provided.

// FAIL  ./code-challenges.test.js
// mixData
//   ✕ that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3. (3 ms)

// PseudoCode:
// Return an array of only the REMAINDERS of the numbers when divided by 3.
// Use .filter create a new array with all elements that pass the test implemented by the      provided function.
// The .length returns an integer value that represents the number of characters in the string.

// b) Create the function that makes the test pass.

const mixData = (array) => {
  let numArray = array.filter(value => typeof value === "number")
  for (i = 0; i < numArray.length; i++) {
       numArray[i] = numArray[i] % 3;
       }
       return numArray
     }

// mixData

//     ✓ that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3. (1 ms)

// Test Suites: 1 passed, 1 total

// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

describe ("numCubed", () => {
  it("takes in an array of numbers and returns the sum of all the numbers cubed", () => {
    const cubeAndSum1 = [2, 3, 4]
    const cubeAndSum2 = [0, 5, 10]
    expect(cubed(cubeAndSum1)).toEqual(99)
    expect(cubed(cubeAndSum2)).toEqual(1125)
  })
})

//  FAIL  ./code-challenges.test.js
  // numCubed
  // ✕ takes in an array of numbers and returns the sum of all the numbers cubed

// b) Create the function that makes the test pass.

// PseudoCode:

// Create function that takes in array of numbers
// Return the array in numbers cubed
// Use .map to iterate through the array
// Use .reduce to loop through each step of the array and sum of all the previous steps

const cubed = (arr) => {
  let cubedArr = arr.map((value) => {
    return value ** 3;
  });
  return cubedArr.reduce((a, b) => a + b, 0);
};

// PASS  ./code-challenges.test.js
// cubed
//   ✓ takes in an array of numbers and returns the sum of all the numbers cubed (2 ms)