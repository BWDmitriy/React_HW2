import './App.css';
import logo from './world.png';
import Worlds from '../Worlds/Worlds';
import Person from '../Person/Person';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Let's greet everyone!</h1>
        <Worlds />
        <Person name="Dmitriy" />
        <Person />
      </header>
    </div>
  );
}

export default App;
