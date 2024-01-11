
import './App.css';
import NavbarComp from './components/NavbarComp';
import MainComp from './components/MainComp';
import logo from './logo.png';


function App() {
  return (
    <div className="App">
      <NavbarComp logo={logo}/>
      <MainComp />
     
    </div>
  );
}

export default App;
