import React, { useState } from 'react'
import './NewExpense.css';
import { ExpenseForm } from './ExpenseForm';

export const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false);

    const startEditngHandler = () => {
        setIsEditing(true);
    }
    const stopEditngHandler = () => {
        setIsEditing(false);
    }
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        }
        props.onAddExpense(expenseData);
        setIsEditing(false);
    }
    return (
        <div className="new-expense">
            {!isEditing && <button onClick={startEditngHandler}>Add New Expense</button>}
            {isEditing && <ExpenseForm onCancel={stopEditngHandler} onSaveExpenseData={saveExpenseDataHandler} />}

        </div>
    )
}
