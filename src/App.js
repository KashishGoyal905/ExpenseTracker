import React, { useState } from 'react';
import { Expenses } from "./components/Expenses/Expenses";
import { NewExpense } from "./components/NewExpenses/NewExpense";

const Dummy_Expenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14)
  },
  {
    id: "e2",
    title: "Tv",
    amount: 94.12,
    date: new Date(2020, 7, 14)
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 94.12,
    date: new Date(2020, 7, 14)
  },
  {
    id: "4",
    title: "New desk",
    amount: 94.12,
    date: new Date(2020, 7, 14)
  }
];

const App = () => {
  const [expenses, setExpenses] = useState(Dummy_Expenses);
  const addExpenseHandler = (enteredExpenseData) => {
    console.log(enteredExpenseData);
    setExpenses((prevExpenses) => {
      return [enteredExpenseData, ...prevExpenses];
    })
  }
  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
