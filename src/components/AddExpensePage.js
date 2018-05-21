import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';

export default class AddExpensePage extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <Header/>
                <h1>Add Expense Page</h1>
                <p>Body text</p>
                <Footer/>
            </div>
        )
    }
}