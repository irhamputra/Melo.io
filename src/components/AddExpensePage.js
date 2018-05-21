import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import ExpenseForm from './ExpenseForm';

export default class AddExpensePage extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <Header/>
                <h1>Add Expense Page</h1>
                <ExpenseForm/>
                <Footer/>
            </div>
        )
    }
}