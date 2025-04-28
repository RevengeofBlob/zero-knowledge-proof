import React from 'react';
import './login.css';

const Login: React.FC = () => {
    return(
        <div className="login">
            <input type="text" placeholder="Username" id="username" name="username"/>
            <input type="password" placeholder="Password" id="password" name="password"/>
            <input type="submit" value="Sign In" name="loginButton"/>
            <input type="submit" value="Create User" name="createUserButton"/>
        </div>
    );
};

export default Login;