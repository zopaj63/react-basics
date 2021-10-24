import logo from './logo.svg';
import './App.css';

function Greeting(props) {
  console.log(props);
  return <div>Greetings {props.name}!</div>
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <Greeting name="everybody" />

        <a
          className="App-link"
          href="https://github.com/zopaj63/react-basics"
          target="_blank"
          rel="noreferrer"
        >
          My GitHub Repository
        </a>
      </header>
    </div>
  );
}

export default App;
