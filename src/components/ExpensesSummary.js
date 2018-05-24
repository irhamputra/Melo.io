import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectorsExpenses from '../selectors/expenses';
import selectorsTotal from '../selectors/expenses-total';

const ExpensesSummary = ({ expenseCount, expensesTotal }) => {
    const expense = expenseCount === 1 ? 'invoice' : 'invoices' ;
    const format = numeral(expensesTotal / 100).format('$0,0.00');

    return (
        <div>
            <h3>View Total {expenseCount} {expense}, {format}</h3>
        </div>
    )
};

const mapStateToProps = (state) => {
    const visibleExpenses = selectorsExpenses(state.expenses, state.filters);

    return {
        expenseCount: visibleExpenses.length,
        expensesTotal: selectorsTotal(visibleExpenses)
    }
};

export default connect(mapStateToProps)(ExpensesSummary);
