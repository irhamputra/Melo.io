import selectors from '../../selectors/expenses';
import moment from 'moment';
import seed from '../utils/seed';

// test selectors by set text value
test('should filter by text value', () => {
    const filters = {
        text: 'e',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    };
    const res = selectors(seed, filters);
    expect(res).toEqual([seed[0], seed[1]])
});

test('should sort by date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: moment(0),
        endDate: undefined
    };

    const res = selectors(seed, filters);
    expect(res).toEqual([seed[2], seed[0]])
});

test('should sort by end date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: moment(0)
    };
    const res = selectors(seed, filters);
    expect(res).toEqual([seed[0], seed[1]])
});

test('should sort by start and end date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: moment(0),
        endDate: moment(0).add(5, "days")
    };
    const res = selectors(seed, filters);
    expect(res).toEqual([seed[2], seed[0]])
});