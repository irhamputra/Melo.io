import {createStore} from "redux";

// Action generator
const incrementCount = ({ incrementBy = 1 }) => {
  return {
      type: 'INCREMENT',
      incrementBy
  }
};

const decrementCount = ({ decrementBy = 1 }) => {
    return{
        type: 'DECREMENT',
        decrementBy
    }
};

const setCount = ({ count }) => {
    return {
        type: 'SET',
        count
    }
};

const resetCount = () => {
    return{
        type: 'RESET',
    }
};

const countReducer = (state = {count: 0}, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            };
        case 'RESET':
            return {
                count: 0
            };
        case 'SET':
            return {
                count: action.count
            };

        default:
            return state;
    }
};

const store = createStore(countReducer);

const unsubs = store.subscribe(() => {
    console.log(store.getState())
});

// Increment Dispatch
store.dispatch(incrementCount({}));
store.dispatch(incrementCount({ incrementBy: 5 }));

// Decrement Dispatch
store.dispatch(decrementCount({}));
store.dispatch(decrementCount(({ decrementBy: 100 })));

// Reset Dispatch
store.dispatch(resetCount());

// Set Dispatch
store.dispatch(setCount({ count: 101 }));

unsubs();