export const setTextFilter = (text = '') => {
    return {
        type: 'SET_TEXT_FILTER',
        text
    }
};

// Sort By date
export const sortByDate = () => {
    return{
        type: 'SORT_BY_DATE'
    }
};

// Sort By amount
export const sortByAmount = () => {
    return {
        type: 'SORT_BY_AMOUNT'
    }
};

// Set Start Date
export const setStartDate = (startDate) => {
    return {
        type: 'SET_START_DATE',
        startDate
    }
};

// Set End Date
export const setEndDate = (endDate) => {
    return {
        type: 'SET_END_DATE',
        endDate
    }
};