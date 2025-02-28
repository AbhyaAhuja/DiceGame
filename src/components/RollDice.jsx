import React from 'react'
import styled from 'styled-components';
import { useState } from 'react';

// import { current } from '@reduxjs/toolkit';
const RollDice = (props) => {
    return (
        <DiceContainer>
            <div className='dice' onClick={props.rollFunc}>
               
                <img src={`/faces/dice_${props.currDice}.png`} alt="" height="200px" width="200px"/>
            </div>
            <p>
                Click on the Dice to roll
            </p>
        </DiceContainer>
    )
}

export default RollDice;


const DiceContainer = styled.div`
    display:flex;
    justify-content: center;
    margin-top:48px;
    flex-direction:column;
    align-items:center;
.dice{
    cursor:pointer;
}
`
// src\assets\faces\face1.png