import moment from 'moment';
import filterReducer from '../../reducers/filters';

test('should setup filter values', () => {
    const state = filterReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
});

test('should sort by amount', () => {
    const state = filterReducer(undefined, {type: 'SORT_BY_AMOUNT'});
    expect(state.sortBy).toBe('amount');
});

test('should sort by date', () => {
    const state = filterReducer(undefined, {type: 'SORT_BY_DATE'});
    expect(state.sortBy).toBe('date');
});

test('should sort by text', () => {
    const text = 'text filter';
    const state = filterReducer(undefined, {
        type: 'SET_TEXT_FILTER',
        text
    });
    expect(state.text).toBe(text)
});

test('should set by startDate', () => {
    const startDate = moment().startOf('month');
    const state = filterReducer(undefined, {
        type: 'SET_START_DATE',
        startDate
    });
    expect(state.startDate).toBe(startDate)
});

test('should set by endDate', () => {
    const endDate = moment().endOf('month');
    const state = filterReducer(undefined, {
        type: 'SET_END_DATE',
        endDate
    });
    expect(state.endDate).toBe(endDate);
});

