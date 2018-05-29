import React, {Component} from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

class LoginPage extends Component{
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div>
                <button onClick={() => {
                    this.props.dispatch(startLogin());
                }}>Login</button>
            </div>
        )
    }

}

export default connect()(LoginPage);