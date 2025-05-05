import React from 'react';
import './login.css';
//import App from '../App';
import root from '../index';
import Computer from './fake_computer';

const Login: React.FC = () => {

    const UserEntered = (loginType: string) => {
        let user = (document.getElementById('username') as HTMLInputElement).value;
        let pass = (document.getElementById('password') as HTMLInputElement).value;
        if (user != "" && pass != ""){
            if (loginType = "create"){
                //Add new user to db.
                    AccountVerification(user)
            }
            else{
                //Select from db. If at least one row, user exists.
                    AccountVerification(user)
            }
        }
    }

    const AccountVerification = (user: string) => {
        root.render(
            <React.StrictMode>
              <Computer userId={user}/>
            </React.StrictMode>
          );
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