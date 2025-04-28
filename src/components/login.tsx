import React from 'react';
import './login.css';
import App from '../App';
import root from '../index';

const Login: React.FC = () => {

    const UserEntered = (loginType: string) => {
        let user = (document.getElementById('username') as HTMLInputElement).value;
        let pass = (document.getElementById('password') as HTMLInputElement).value;
        if (loginType = "create"){
            
        }
        if (user != "" && pass != ""){
            root.render(
                <React.StrictMode>
                  <App />
                </React.StrictMode>
              );
        }
    }

    return(
        <div className="login">
            <input type="text" placeholder="Username" id="username" name="username"/>
            <input type="password" placeholder="Password" id="password" name="password"/>
            <input type="submit" value="Sign In" name="loginButton" onClick={() => UserEntered('login')}/>
            <input type="submit" value="Create User" name="createUserButton" onClick={() => UserEntered('create')}/>
        </div>
    );
};

export default Login;