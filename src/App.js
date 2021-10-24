import { useState, useEffect } from "react";
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

//https://api.tvmaze.com/search/shows?q=arrested
function TvShowList() {
  useEffect(() => {
    // console.log("I am rendered!");
    fetch("https://api.tvmaze.com/search/shows?q=arrested")
      .then(response => response.json())
      .then(json => console.log(json))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <div>Game of Thrones</div>
      <div>Deadwood</div>
      <div>Friday Night Dinner</div>
    </div>
  )
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="description">Greeting function with props:</p>
        <Greeting greeting="Hi">everybody</Greeting>

        <p className="description">Clicker function with useState:</p>
        <Clicker />

        <p className="description">API fetch request with useEffect:"</p>
        <TvShowList />

        <p className="description">Class function:</p>

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
