// Write your Character component here
import React from 'react';

const CharacterList = ({person }) => {

    return (
        <div className = 'Character'>
            <h2>Name: {person.name}</h2>
            <h3>DOB: {person.birth_year}</h3>
        </div>
    );
};

export default CharacterList;