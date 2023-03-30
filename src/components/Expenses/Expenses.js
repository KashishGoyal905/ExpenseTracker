import React, { useState } from 'react'
import './Expenses.css'
import { ExpenseItem } from "./ExpenseItem";
import { ExpenseFilter } from './ExpenseFilter';
import { ExpensesChart } from './ExpensesChart';

export const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = (SelectedYear) => {
        setFilteredYear(SelectedYear);
    }
    const filtererdExpenses = props.items.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear;
    })
    return (
        <div className="expenses">
            <ExpenseFilter onChangeFilter={filterChangeHandler} selected={filteredYear} />
            <ExpensesChart expenses={filtererdExpenses} />
            {filtererdExpenses.length === 0 ? <p>No expenses found</p> : filtererdExpenses.map((expense) => (
                <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />
            ))}
        </div>
    )
}
