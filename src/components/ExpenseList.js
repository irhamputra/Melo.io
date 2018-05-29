import React from 'react';
import ExpenseListItem from './ExpenseListItem';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';


const ExpenseList = (props) => (
    <div>
        <h1>Invoice Report List</h1>
        {props.expenses.length ? props.expenses.map((expense) => {
            return <ExpenseListItem key={expense.id} {...expense}/>
        }) : <div>Please wait! We currently get your data from database...</div>}
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    }
};

export default connect(mapStateToProps)(ExpenseList);
