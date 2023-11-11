import logo from './logo.svg';
import './App.css';
import Nav from './NavBar';
import Projects from './pages/Projects';

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Projects></Projects>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://q4c.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
