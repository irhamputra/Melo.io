import selectors from '../../selectors/expenses';

const seed = [{
    id: '1',
    description: 'Rent',
    note: '',
    amount: 200,
    createdAt: 0
}, {
    id: '2',
    description: 'Internet',
    note: '',
    amount: 400,
    createdAt: -11110000
}, {
    id: '3',
    description: 'Spotify',
    note: '',
    amount: 100,
    createdAt: 100000
}];

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