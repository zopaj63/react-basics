import { useState } from "react";
import logo from './logo.svg';
import './App.css';

function Greeting(props) {
  console.log(props);
  return <div>{props.greeting} {props.children}!</div>
}

function Clicker() {
  const [counter, setCounter] = useState(0);
  const updateCounter = () => {
    // setCounter(counter + 1);
    // ili, bolja alternativa:
    setCounter((state) => state + 1);
  }
  return <button onClick={updateCounter}>Clicked {counter} time(s)</button>;
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <Greeting greeting="Hi">everybody</Greeting>

        <Clicker />


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
