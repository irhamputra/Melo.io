import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';

export default class EditExpensePage extends Component {
    constructor(props){
        super(props)
    }

    render(){
        console.log(this.props);
        return(
            <div>
                <Header/>
                <h1>Edit Expense Page - {this.props.match.params.id}</h1>
                <Footer/>
            </div>
        )
    }
}