import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {C1,C2}  from './C1/C1';

//function App() {
  const App = props => {

    const [personsState,setPersonsState] = useState ({
      persons :[
        {name: "Susanta",age: 16},
        {name: "Ambarish Da",age: 15},
        {name: "Sudipto",age: 14}
      ],
      otherstate : "Hi how are you!!"
    });

    const clickHandler = () => {
      setPersonsState({
        persons :[
          {name: "Susantaaaa",age: 16},
          {name: "Ambarish Da",age: 15},
          {name: "Sudipto777",age: 14}
        ]
      })
    }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <C1 />
        <C2 country="India" state="WB"/>
        <C2 country="UK" state="London">"Hi! I am in London"</C2>        
        <button onClick={clickHandler}>Click</button>
        <C2 
          name={personsState.persons[0].name} 
          age={personsState.persons[0].age} />
        <C2 
          name={personsState.persons[1].name} 
          age={personsState.persons[1].age}/>
        <C2 
          name={personsState.persons[2].name} 
          age={personsState.persons[2].age} />
        <a
          className="App-link"
          href="https://reactjs.org"
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
