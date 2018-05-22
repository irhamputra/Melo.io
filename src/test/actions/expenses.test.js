import {addExpense, editExpense, removeExpense} from "../../actions/expenses";

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
    const action = editExpense('123abc', { note: 'test edit note' });
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        update: {
            note: 'test edit note'
        }
    })
});

// test add expense action object with seed
test('should setup add expense with seed value', () => {
    const seed = {
        description: 'Rent',
        amount: 100,
        createdAt: 1000,
        note: 'pay rent'
    };

    const action = addExpense(seed);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expenses: {
            ...seed,
            id: expect.any(String)
        }
    });
});

// test add expense action object with default value
test('should setup add expense with default value', () => {
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expenses: {
            description: '',
            note: '',
            amount: 0,
            createdAt: 0,
            id: expect.any(String)
        }
    })
});