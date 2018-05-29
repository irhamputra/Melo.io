import React from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom';

// Import UI
import IndexPage from '../components/Index';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import HelpPage from '../components/HelpPage';
import LoginPage from "../components/LoginPage";

// Add Route Here!!!
const Routes = () => {
    return(
        <HashRouter>
            <Switch>
                <Route exact path="/" component={LoginPage}/>
                <Route path="/dashboard" component={IndexPage}/>
                <Route path="/create" component={AddExpensePage}/>
                <Route path="/edit/:id" component={EditExpensePage}/>
                <Route path="/help" component={HelpPage}/>
            </Switch>
        </HashRouter>
    )
};

export default Routes;