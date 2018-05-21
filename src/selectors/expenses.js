// get visible
const getVisible = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate; // true
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate; // true
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch
    }).sort((a, b) => {
       if (sortBy === 'date'){
           return a.createdAt < b.createdAt ? 1 : -1;
       }  else if (sortBy === 'amount'){
           return a.amount < b.amount ? 1 : -1
       }
    })
};

export default getVisible;
