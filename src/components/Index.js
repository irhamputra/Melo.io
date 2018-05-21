import React, { Component } from 'react';
import Header from './Header';
import ExpenseList from './ExpenseList';
import Footer from './Footer';
import ExpenseListFilter from './ExpenseListFilter';

export default class Index extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <Header/>
                <ExpenseListFilter/>
                <ExpenseList/>
                <Footer/>
            </div>
        )
    }
}