// EXERCISE 14
// The balance is supposed to equal the difference of all deposits and all withdrawals.
// Check every bank account balance and return the array of bank accounts with a wrong balance
// Array example: bankAccounts in /data/data.js
// getClientsWithWrongBalance(bankAccounts) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]

export function getClientsWithWrongBalance(array) {
  // Your code goes here...
  var wrongBalance = [];
  for (var x = 0; x < array.length; x++) {
    var difference;
    var sumDeposits = 0;
    var sumWithdrawals = 0;
    if (Object.hasOwn(array[x], "deposits")) {
      for (var y = 0; y < array[x].deposits.length; y++) {
        sumDeposits += array[x].deposits[y];
      }
    } else continue;
    if (Object.hasOwn(array[x], "withdrawals")) {
      for (var z = 0; z < array[x].withdrawals.length; z++) {
        sumWithdrawals += array[x].withdrawals[z];
      }
    } else continue;

    difference = sumDeposits - sumWithdrawals;

    if (difference != array[x].balance) {
      wrongBalance.push(array[x]);
    } else continue;
  }
  return wrongBalance;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-14"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
