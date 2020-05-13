//Expense  ->object{Description, amount}
//method =>
//addExpense -> description, amount
//getAccountSummary-> total up all expenses -> Yugandhar has $2362 in expenses

const account = {
  name: "Yugandhar Salvi",
  expenses: [],

  addExpense: function (description, amount) {
    this.expenses.push({
      Description: description,
      Amount: amount,
    });
  },

  getAccountSummary: function () {
    let totalExpenses = 0;
    this.expenses.forEach(function (expense) {
      totalExpenses = totalExpenses + expense.Amount;
    });
    return `${this.name} has $${totalExpenses} in expenses.`;
  },
};

account.addExpense("Rent", 950);
account.addExpense("Coffee", 2);
console.log(account.expenses);
console.log(account.getAccountSummary());
