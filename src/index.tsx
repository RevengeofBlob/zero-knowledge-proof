import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Login from './components/login'
import reportWebVitals from './reportWebVitals';
import sqlite3 from 'sqlite3';

// Currently errors
// Account database setup
// const db = new sqlite3.Database('accounts.sqlite3');

// db.serialize(() => {
//   db.run("CREATE TABLE IF NOT EXISTS users (username TEXT PRIMARY KEY, password TEXT, age TEXT");
// });

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Login/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

export default root;