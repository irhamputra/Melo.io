import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from "../actions/expenses";

class EditExpensePage extends Component {
    constructor(props){
        super(props)
    }

    render(){
        console.log(this.props);
        return(
            <div>
                <Header/>
                <h1>Edit Expense Page - {this.props.expenses.description}</h1>
                <ExpenseForm
                    expense={this.props.expenses}
                    onSubmit={(expense) => {
                        this.props.dispatch(editExpense(this.props.expenses.id, expense));
                        this.props.history.push('/')
                    }}
                />
                <button onClick={() => {
                    this.props.dispatch(removeExpense({ id: this.props.expenses.id}));
                    this.props.history.push('/')
                }}>Remove</button>
                <Footer/>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    return{
        expenses: state.expenses.find((expense) => {
            return expense.id === props.match.params.id;
        })
    }
};

export default connect(mapStateToProps)(EditExpensePage)