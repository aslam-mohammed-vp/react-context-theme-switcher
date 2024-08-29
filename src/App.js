import logo from './logo.svg';
import './App.css';
import { useContext } from 'react';
import { ThemeContext } from './context/ThemeContext';
import ToggleTheme from './components/ToggleTheme';

function App() {

  const { darkTheme } = useContext(ThemeContext);

  return (
    <div className={`App ${darkTheme ? 'dark-theme' : 'light-theme'}`}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <ToggleTheme />
      </header>
    </div>
  );
}

export default App;
