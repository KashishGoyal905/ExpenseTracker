import React from 'react';
import './ExpenseItem.css';
import { ExpenseDate } from './ExpenseDate';
export const ExpenseItem = (props) => {
    const clickHandeler = () => {
        console.log('clickHandeler');
    }

    return (
        <div className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">{props.amount}</div>
            </div>
            <button onClick={clickHandeler}>Update</button>
        </div>
    )
}
