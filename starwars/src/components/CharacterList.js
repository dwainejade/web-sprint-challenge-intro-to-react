// Write your Character component here
import React from 'react';

const CharacterList = ({name, birth_year }) => {

    return (
        <div className = 'Character'>
            <h2>Name: {name}</h2>
            <h2>DOB: {birth_year}</h2>
        </div>
    );
};

export default CharacterList