// Expense Reducer
const expenseDefault = [];
const expenseReducer = (state = expenseDefault, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [...state, action.expenses];
        case 'REMOVE_EXPENSE':
            return state.filter(({id}) => id !== action.id);
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.update
                    }
                }
                return expense;
            });
        case 'SET_EXPENSES':
            return action.expenses;
        default:
            return state;
    }
};

export default expenseReducer;