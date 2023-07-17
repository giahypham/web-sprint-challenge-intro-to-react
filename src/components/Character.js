// Write your Character component here




import React from 'react';


const Character = ({ characters }) => {
  return (
    <div>
      <h2>Character List</h2>
      <ul>
        {characters.map((character) => (
          <li key={character.name}>
            <h3>{character.name}</h3>
            <p>Height: {character.height}</p>
            <p>Mass: {character.mass}</p>
            <p>Hair Color: {character.hair_color}</p>
            <p>Skin Color: {character.skin_color}</p>
            <p>Eye Color: {character.eye_color}</p>
            <p>Birth Year: {character.birth_year}</p>
            <p>Gender: {character.gender}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Character;


