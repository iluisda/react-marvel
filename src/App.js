import logo from './images/marvel.png';
import './App.css';
import {Fragment} from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import getCharacters from './API/getCharacters';
// Components
import Header from "./components/Header";
import Main from './containers/Main'

getCharacters().then(res => {
  console.log(res)
});
function App() {
  return (
    <Fragment>
      <Header logo={logo}></Header>
      <div className="App">
        <Main/>
      </div>
    </Fragment>
  );
}

export default App;
