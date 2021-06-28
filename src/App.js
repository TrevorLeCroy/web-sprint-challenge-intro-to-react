import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import Character from './components/Character';
import {setupWorker} from 'msw';
import styled from 'styled-components';

const CharacterHolder = styled.div`
  margin: 0px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [characters, setCharacters] = useState([]); 

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    setupWorker(axios.get('https://swapi.dev/api/people')
      .then(res => {
        // console.log(res.data);
        // console.log(res.data.results);
        
        setCharacters(() => {
          if(res.data.results === undefined) {
            return res.data;
          }
          return res.data.results;
        });
        
        console.log(characters);

      })
      .catch(err => {
        console.log(err);
      }));
  }, []);

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <CharacterHolder>
        {
          characters.map(character => {
            return <Character character={character} key={character.name+character.mass}> </Character>
        })}
      </CharacterHolder>
    </div>
  );
}

export default App;
