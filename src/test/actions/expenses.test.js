import {editExpense, removeExpense} from "../../actions/expenses";

// test REMOVE object
test('should setup remove expense action object', () => {
    const action = removeExpense({id: '123abc'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    })
});

// test EDIT object
test('should setup edit expense action object', () => {
    const action = editExpense({ id: '123abc', update: '' });
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        update: ''
    })
});