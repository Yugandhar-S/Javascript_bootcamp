let myAccount = {
  name: "Yugandhar",
  expenses: 0,
  income: 0,
};

//addIncome

//resetAccount

//getAccountSummary
//Account for Andrew has $900. $1000 in income. $100 in expenses

/*
addIncome
addExpense
addExpense
getAccountSummary
resetAccount
getAccountsummary
*/

let addIncome = function (account, income) {
  account.income = account.income + income;
};

let addExpense = function (account, amount) {
  account.expenses = account.expenses + amount;
  account.income = account.income - amount;
};

let getAccountSummary = function (account) {
  return ` Account for ${account.name} has ${account.income}. ${
    account.income + account.expenses
  } in income. ${account.expenses} in expenses`;
};

let resetAccount = function (account) {
  account.income = 0;
  account.expenses = 0;
};

addIncome(myAccount, 2000);

addExpense(myAccount, 2.5);

addExpense(myAccount, 160);

let summary = getAccountSummary(myAccount);
console.log(summary);

resetAccount(myAccount);

let summaryTwo = getAccountSummary(myAccount);
console.log(summaryTwo);
