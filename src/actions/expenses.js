import uuid from "uuid";

export const addExpense = ({description = '', note = '', amount = 0, createdAt = 0} = {}) => {
    return {
        type: 'ADD_EXPENSE',
        expenses: {
            id: uuid(),
            description,
            note,
            amount,
            createdAt
        }
    }
};

// Remove
export const removeExpense = ({id}) => {
    return{
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
