import React, { useState } from "react";
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
    const [isCancelled, setIsCancelled] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }

        props.onAddExpense(expenseData);
        setIsCancelled(false);
    }

    const onCancelHandler = (event) => {
        setIsCancelled(true);
      };

    const cancelClickedHandler = () => {
        setIsCancelled(false);
    }

    return <div className='new-expense'>
        {!isCancelled && (
          <button onClick={onCancelHandler}>Add New Expense</button>
        )}
        {isCancelled && <ExpenseForm 
        cancelClickedHandler = {cancelClickedHandler}
        onSaveExpenseData={saveExpenseDataHandler} />}
    </div>
}

export default NewExpense;