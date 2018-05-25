import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import { startAddExpense } from "../actions/expenses";

class AddExpensePage extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <Header/>
                <h1>Create an Invoice</h1>
                <ExpenseForm
                    onSubmit={(expenses) => {
                        this.props.dispatch(startAddExpense(expenses));
                        this.props.history.push('/')
                    }}
                />
                <Footer/>
            </div>
        )
    }
}


export default connect()(AddExpensePage)