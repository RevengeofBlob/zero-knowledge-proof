import React from 'react';
import logo from './images/freddie313.png';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import QuestionTab from './components/questionTab';
import './App.css';


const Home: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="image" alt="logo" />
        <h3>
          You want to win a chance to earn tickets to see the Minecraft Movie?
          FLINT N STEEL!
        </h3>
        <Link to="/quiz" className="App Link" style={{color: '#FFF'}} >Click Here To Enter The Raffle!</Link>
      </header>
    </div>
  );
}

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<QuestionTab />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
