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
test('should setup set date by date', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    })
});