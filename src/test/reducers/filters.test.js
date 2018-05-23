import moment from 'moment';
import filterReducer from '../../reducers/filters';

test('should setup filter values', () => {
    const state = filterReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
});

test('should sort by amount', () => {
    const state = filterReducer(undefined, { type: 'SORT_BY_AMOUNT'});
    expect(state.sortBy).toBe('amount');
});

test('should sort by date', () => {
    const state = filterReducer(undefined, { type: 'SORT_BY_DATE' });
    expect(state.sortBy).toBe('date');
});