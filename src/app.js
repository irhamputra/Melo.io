import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css'
import './styles/style.scss';
import configStore from './store/configStore';
import { Provider } from 'react-redux';

// Router
import Routes from './routers/AppRouter';

// Redux
import { addExpense } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import getVisibleExpenses from './selectors/expenses';

const store = configStore();

// mock data. TODO: connect to Databases and remove mock data
store.dispatch(addExpense({ description: 'Spotify', amount: 900, createdAt: 1526949601009 }));
store.dispatch(addExpense({ description: 'Pay Rent', amount: 400, createdAt: 1526949582329}));
store.dispatch(setTextFilter());

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

console.log(visibleExpenses);

const App = () => (
    <Provider store={store}>
        <Routes/>
    </Provider>
);

ReactDOM.render(<App />, document.querySelector('.app'));