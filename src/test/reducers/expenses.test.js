import expenseReducer from '../../reducers/expenses';
import seed from '../utils/seed';

test('init should be setup expense reducer', () => {
    const state = expenseReducer(undefined, { type: '@@INIT' })
    expect(state).toEqual([])
});

test('should set add expense', () => {
    const newSeed = {
        id: '4',
        description: 'Buy a laptop',
        amount: 30000,
        note: 'Buy a new laptop',
        createdAt: 12800213000
    };

    const state = expenseReducer(seed, {
        type: 'ADD_EXPENSE',
        expenses: newSeed
    });

    expect(state).toEqual([...seed, newSeed])
});

test('should remove expense by id', () => {
    const state = expenseReducer(seed, {
        type: 'REMOVE_EXPENSE',
        id: seed[0].id
    });
    expect(state).toEqual([seed[1], seed[2]])
});

test('should update expense by id and update', () => {
    const state = expenseReducer(seed, {
        type: 'EDIT_EXPENSE',
        id: seed[1].id,
        update: {
            amount: 2000
        }
    });
    expect(state[1].amount).toBe(2000);
});