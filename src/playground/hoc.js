// Higher Order Component (HOC) - A component (HOC) that renders an other component:
// - Reuse code
// - Render hijacking
// - Prop manipulation
// - Abstract stare

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info: {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info. Please don´t share!</p>}
            <WrappedComponent {...props} />
        </div>
    );
};

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated
                ? <WrappedComponent {...props} />
                : <p>Please loggin to view the info</p>}
        </div>
    )
}

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(
//     <AdminInfo isAdmin={true} info="Tnere are the detials" />,
//     document.querySelector('#app')
// );

ReactDOM.render(
    <AuthInfo isAuthenticated={false} info="Tnere are the detials" />,
    document.querySelector('#app')
);