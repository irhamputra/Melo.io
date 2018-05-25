import database from '../firebase/firebase';

export const addExpense = (expenses) => {
    return {
        type: 'ADD_EXPENSE',
        expenses
    }
};

export const startAddExpense = (expenseData = {}) => {
    return (dispatch) => {
        const {description = '', note = '', amount = 0, createdAt = 0} = expenseData;
        const expenses = { description, note, amount, createdAt };
        database.ref('expenses').push(expenses)
            .then((data) => {
                dispatch(addExpense({
                    id: data.key,
                    ...expenses
                }))
            })
    }
};

// Remove
export const removeExpense = ({id}) => {
    return {
        type: 'REMOVE_EXPENSE',
        id
    }
};

// Edit
export const editExpense = (id, update) => {
    return {
        type: 'EDIT_EXPENSE',
        id,
        update
    }
};
