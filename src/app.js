import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css'
import './styles/style.scss';
import configStore from './store/configStore';
import { Provider } from 'react-redux';

// Router
import Routes from './routers/AppRouter';

const store = configStore();

const App = () => (
    <Provider store={store}>
        <Routes/>
    </Provider>
);

ReactDOM.render(<App />, document.querySelector('.app'));