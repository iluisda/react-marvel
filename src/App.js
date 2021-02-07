import logo from './images/marvel.png';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import getCharacters from './API/getCharacters';
// Components
import Header from "./components/Header";
getCharacters().then(res => {
  console.log(res)
});
function App() {
  return (
    <>
    <Header logo={logo}></Header>
    <div className="App">
      
    </div>
    </>
  );
}

export default App;
