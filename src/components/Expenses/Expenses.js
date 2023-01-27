import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expense(props) {
  const [newFilter, setNewFilter] = useState("2022");

  const onFilterChangedHandler = (enteredFilter) => {    
    setNewFilter(enteredFilter);
  };

  const filteredExpenses = props.expenses.filter(expense => expense.date.getFullYear().toString() === newFilter);

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={newFilter}
          onFilterChanged={onFilterChangedHandler}
        />
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList expenses={filteredExpenses}/>
      </Card>
    </div>
  );
}

export default Expense;
