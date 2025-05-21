// EXERCISE 14
// The balance is supposed to equal the difference of all deposits and all withdrawals.
// Check every bank account balance and return the array of bank accounts with a wrong balance
// Array example: bankAccounts in /data/data.js
// getClientsWithWrongBalance(bankAccounts) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]

export function getClientsWithWrongBalance(array) {
  // Your code goes here...
  var wrongBalance = [];
  for (var user of array) {
    var difference;
    var sumDeposits = 0;
    var sumWithdrawals = 0;
    if (user.deposits) {
      for (var amount of user.deposits) {
        sumDeposits += amount;
      }
    } else continue;
    if (user.withdrawals) {
      for (var amount of user.withdrawals) {
        sumWithdrawals += amount;
      }
    } else continue;

    difference = sumDeposits - sumWithdrawals;

    if (difference != user.balance) {
      wrongBalance.push(user);
    } else continue;
  }
  return wrongBalance;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-14"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
