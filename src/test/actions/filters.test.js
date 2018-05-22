import {setTextFilter, setEndDate, setStartDate, sortByDate, sortByAmount} from "../../actions/filters";
import moment from 'moment';

// test TEXT_FILTER filter object
test('should be filter by text', () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: '',
    })
});

// test START_DATE filter object
test('should setup set start date by date', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    })
});

// test SET_END_DATE filter object
test('should setup set end date by date', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    })
});


// test SORT_BY_DATE filter object
test('should setup sort by date', () => {
    const action = sortByDate();
    expect(action).toEqual({
        type: 'SORT_BY_DATE'
    })
});

// test SORT_BY_AMOUNT filter object
test('should setup sort by amount', () => {
    const action = sortByAmount();
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT'
    })
});