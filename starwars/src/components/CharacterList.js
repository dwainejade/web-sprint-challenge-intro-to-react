// Write your Character component here
import React from 'react';
import styled from 'styled-components';

const CharacterList = ({ person }) => {

    return (
        <Container>
            <div className='Character'>
                <div>
                    <h2 className='name'>Name: {person.name}</h2>
                </div>
                <div>
                    <h2 className='dob'>DOB: {person.birth_year}</h2>
                </div>
            </div>
        </Container>
    );
};

const Container = styled.div`
    border: 1px solid green;
    display: flex;
    margin: 1% 10%;
    border-radius: 10px;
    
    div{
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        font-family: Stencil Std, Impact;
    }
    
    .dob{
        border: 1px solid grey;
        border-radius: 10px;
        background-color: grey;
        padding: 0 5px
    }

`
export default CharacterList;