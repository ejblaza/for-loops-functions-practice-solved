// EXERCISE 12
// Return an array of all deposits greater than 100
// Array example: bankAccounts in /data/data.js
// getAllDepositsGreaterThanOneHundred(bankAccounts) => [3432, 43242.34, 23432]

export function getAllDepositsGreaterThanOneHundred(array) {
  // Your code goes here...
  var greaterHundred = [];
  for (var x = 0; x < array.length; x++) {
    if (Object.hasOwn(array[x], "deposits")) {
      for (var y = 0; y < array[x].deposits.length; y++) {
        if (array[x].deposits[y] > 100)
          greaterHundred.push(array[x].deposits[y]);
      }
    } else continue;
  }
  return greaterHundred;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-12"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
