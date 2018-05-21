import React, {Component} from 'react';

class ExpenseForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            description: '',
            note: '',
            amount: ''
        }
    }

    onDescriptionChange(e){
        const description = e.target.value;
        this.setState(() => ({ description }))
    }

    onNoteChange(e){
        const note = e.target.value;
        this.setState(() => ({ note }))
    }

    onAmountChange(e){
        const amount = e.target.value;
        if (amount.match(/^\d*(\.\d{0,2})?$/)){
            this.setState(() => ({ amount }))
        }
    }

    render() {
        return (
            <div>
                <form>
                    <label>Add Expense</label>
                    <input
                        type="text"
                        placeholder="Description"
                        value={this.state.description}
                        onChange={this.onDescriptionChange.bind(this)}
                        autoFocus/>
                    <input
                        type="text"
                        placeholder="Amount"
                        value={this.state.amount}
                        onChange={this.onAmountChange.bind(this)}
                    />
                    <textarea
                        placeholder="Add note (optional)"
                        value={this.state.note}
                        onChange={this.onNoteChange.bind(this)}
                    >
                    </textarea>
                    <button>Add</button>
                </form>
            </div>
        )
    }
}

export default ExpenseForm;