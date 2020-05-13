//Expense  ->object{Description, amount}
//method =>
//addExpense -> description, amount
//getAccountSummary-> total up all expenses -> Yugandhar has $2362 in expenses

//add income array to account
//setup and addIncome method->description,amount
//tweak getAccountSummary
// return `${this.name} has $${totalExpenses} in expenses.`;
//Yugandhar Salvi has a balance of $10. $100 in income $90 in expenses.

const account = {
  name: "Yugandhar Salvi",
  expenses: [],
  income: [],

  addExpense: function (description, amount) {
    this.expenses.push({
      Description: description,
      Amount: amount,
    });
  },

  addIncome: function (source, income) {
    this.income.push({
      Description: source,
      Income: income,
    });
  },

  getAccountSummary: function () {
    let totalExpenses = 0;
    let totalIncome = 0;
    let accountBalance = 0;

    this.expenses.forEach(function (expense) {
      totalExpenses = totalExpenses + expense.Amount;
    });

    this.income.forEach(function (amount) {
      totalIncome = totalIncome + amount.Income;
    });

    accountBalance = totalIncome - totalExpenses;

    return `${this.name} has balance of $${accountBalance}. $${totalIncome} in income. $${totalExpenses}in expenses.`;
  },
};

account.addExpense("Rent", 45);
account.addExpense("Coffee", 45);
account.addIncome("Job", 100);
console.log(account.getAccountSummary());
//addIncome("Cashback", 2000);
