import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  
  // const [newAmount, setNewAmount] = useState('')
  // const [newDate, setNewDate] = useState('')

  const [newInput, setNewInput] = useState({
    newTitle: "",
    newAmount: "",
    newDate: "",
  });

  const titleChangeHandler = (event) => {
    setNewInput((prevState) => {
      return {
        ...prevState,
        newTitle: event.target.value,
      };
    });
  };

  const amountChangeHandler = (event) => {
    setNewInput((prevState) => {
      return {
        ...prevState,
        newAmount: event.target.value,
      };
    });
  };

  const dateChangeHandler = (event) => {
    setNewInput((prevState) => {
      return {
        ...prevState,
        newDate: event.target.value,
      };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      newTitle: newInput.newTitle,
      newAmount: +newInput.newAmount,
      newDate: newInput.newDate,
    };

    props.onSaveExpenseData(expenseData);

    setNewInput({
      newTitle: "",
      newAmount: "",
      newDate: "",
    });
  };


  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
          <div>
            <div className="new-expense__control">
              <label>Title</label>
              <input
                type="text"
                value={newInput.newTitle}
                onChange={titleChangeHandler}
              />
            </div>
            <div className="new-expense__control">
              <label>Amount</label>
              <input
                type="num"
                min="0.1"
                step="0.1"
                value={newInput.newAmount}
                onChange={amountChangeHandler}
              />
            </div>
            <div className="new-expense__control">
              <label>Date</label>
              <input
                type="date"
                min="2019-01-01"
                max="2023-12-31"
                value={newInput.newDate}
                onChange={dateChangeHandler}
              />
            </div>
          </div>
      </div>
      <div>
          <div>
            <button type="button" onClick={props.cancelClickedHandler}>Cancel</button>
            <button type="submit">Add Expense</button>
          </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
