import React, { Component } from 'react';
import {connect} from 'react-redux';
import {setTextFilter, sortByAmount, sortByDate, setEndDate, setStartDate} from "../actions/filters";
import {DateRangePicker} from 'react-dates';

class ExpenseListFilter extends Component{
    constructor(props){
        super(props);

        this.state = {
            focused: null,
        }
    }

    onDatesChange({startDate, endDate}){
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate))
    }

    onFocusChange(focused){
        this.setState(() => ({ focused }))
    }

    render(){
        return (
            <div>
                <input
                    type="text"
                    value={this.props.filters.text}
                    onChange={(e) => {
                        this.props.dispatch(setTextFilter(e.target.value))
                    }}
                    placeholder="Search a list..."
                />
                <select
                    value={this.props.filters.sortBy}
                    onChange={(e) => {
                        if (e.target.value === 'date') {
                            this.props.dispatch(sortByDate())
                        } else if (e.target.value === 'amount') {
                            this.props.dispatch(sortByAmount())
                        }
                    }}>
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>
                <DateRangePicker
                    startDate={this.props.filters.startDate}
                    endDate={this.props.filters.endDate}
                    onDatesChange={this.onDatesChange.bind(this)}
                    focusedInput={this.state.focused}
                    onFocusChange={this.onFocusChange.bind(this)}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                    showClearDates={true}
                />
            </div>
        )
    }
}



const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
};

export default connect(mapStateToProps)(ExpenseListFilter)