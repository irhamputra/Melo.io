import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routers/AppRouter';
import {startSetExpenses} from "./actions/expenses";
import configStore from './store/configStore';
import {Provider} from 'react-redux';
import 'normalize.css/normalize.css'
import './styles/style.scss';
import './firebase/firebase';
import './firebase/firebase';

const store = configStore();

const App = () => (
    <Provider store={store}>
        <Routes/>
    </Provider>
);

ReactDOM.render(<App/>, document.querySelector('.app'));

store.dispatch(startSetExpenses());