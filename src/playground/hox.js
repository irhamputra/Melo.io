import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => {
    return(
        <div>
            <h1>Info</h1>
            <p>Info: {props.info}</p>
        </div>
    )
};

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is a private</p>}
            <WrappedComponent {...props}/>
        </div>
    )
};

const reqAuth = (AuthComponent) => {
    return(props) => (
        <div>
            {props.isAuthenticated ? (
                <AuthComponent {...props}/>
            ) : (
                <p>Please login to view your dashboard</p>
            )}
        </div>
    )
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = reqAuth(Info);

ReactDOM.render(<AuthInfo isAuthenticated={false} info="This is an info"/>, document.querySelector('.app'));