import React, {Component} from 'react';

class ExpenseForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            description: '',
            note: ''
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
                    <input type="number" placeholder="Amount"/>
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