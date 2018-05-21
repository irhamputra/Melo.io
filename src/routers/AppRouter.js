import React from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom';

// Import UI
import IndexPage from '../components/Index';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import HelpPage from '../components/HelpPage';

// Add Route Here!!!
const Routes = () => {
    return(
        <HashRouter>
            <Switch>
                <Route exact path="/" component={IndexPage}/>
                <Route path="/create" component={AddExpensePage}/>
                <Route path="/edit/:id" component={EditExpensePage}/>
                <Route path="/help" component={HelpPage}/>
            </Switch>
        </HashRouter>
    )
};

export default Routes;