// EXERCISE 11
// Return an array of withdrawal sums of each bank account.
// If the account doesn't have withdrawals, it's sum is 0.
// Array example: bankAccounts in /data/data.js
// getAllWithdrawals(bankAccounts) => [3432, 0, 43242.34, 0, 23432]

export function getAllWithdrawals(array) {
  // Your code goes here...
  var sum = [];
  for (var x = 0; x < array.length; x++) {
    sum[x] = 0;
    if (Object.hasOwn(array[x], "withdrawals")) {
      for (var y = 0; y < array[x].withdrawals.length; y++) {
        sum[x] += array[x].withdrawals[y];
      }
    } else {
      sum[x] = 0;
    }
  }
  return sum;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-11"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
