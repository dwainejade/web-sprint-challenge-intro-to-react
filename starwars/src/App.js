import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import CharacterList from './components/CharacterList'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [people, setPeople] = useState([])

  useEffect(() => {
    axios
      .get('http://swapi.dev/api/people/')
      .then(res => {
        console.log('axios returned:', res)
        setPeople(res.data.results)
      })
      .catch(err => {
        console.log('axios err:', err)
      })
  }, [])



  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
          {people.map((person, i) => {
            return (
              <CharacterList
                key = {i}
                person = {person}
              /> 
            )
            })}
    </div>
  );
}

export default App;
