import React, { useState } from 'react';
import logo from './images/marvel.png';
import './App.scss';
import "bootstrap/dist/css/bootstrap.min.css";

// Components
import Header from "./components/Header";
import Main from './containers/Main'
import Footer from './components/Footer'


function App() {

  const [inputValue, setInputValue] = useState("");
  const handleCallback = (childData) => {
    setInputValue(childData)
  }

  return (
    <div className="app">
      <div className="header">
      <Header logo={logo} parentCallback={(e)=>handleCallback(e)}></Header>
      </div>
      <div className="main">
      <Main inputValue={inputValue}/>
        </div>
      <div className="footer">
      <Footer/>
        </div>
    </div>
  );
}

export default App;
