import React from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import styled from 'styled-components'
import RollDice from './RollDice'
import { useState } from 'react'
import Rules from './Rules'
const GamePlay = () => {

    const [selectedNumber, setSelectedNumber] = useState();
    const [currentDice, setCurrentDice] = useState(1);
    const [score, setScore] = useState(0);
    const [error, setError] = useState('')
    const [showRules, setShowRules] = useState(false)
    const generateRandomNumber = () => {
        return (Math.floor(Math.random() * 6 + 1));
    }

    const rollDiceFunc = () => {

        if (!selectedNumber) {
            setError("You haven't selected any number")
            return
        };

        const randomNum = generateRandomNumber();
        setCurrentDice((prev) => randomNum);


        if (selectedNumber === randomNum) {
            setScore((prev) => prev + currentDice)
        }
        else {
            setScore((prev) => prev - 2)
        }
        setSelectedNumber(undefined)
        // setCurrentDice(1)
    }

    const resetScore = () => {
        setScore(0);
    }
    return (
        <MainContainer>


            <div className="top-section">

                <TotalScore sc={score} />
                <NumberSelector num={selectedNumber} numFunc={setSelectedNumber} error={error} setError={setError} />
            </div>
            <RollDice currDice={currentDice} rollFunc={rollDiceFunc} />

            <div className="btns">
                <button className='styleBtn' onClick={resetScore}>Reset</button>
                <button className='styleBtn' onClick={()=>setShowRules((prev)=>!prev)}>{showRules? "Hide": "Show"} Rules</button>
            </div>

            {
                showRules && <Rules />
            }
        </MainContainer>

    )
}

export default GamePlay

const MainContainer = styled.div`
.top-section{
    display:flex;
    justify-content:space-evenly;
}

.btns{
    margin-top:20px;
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
gap:10px;    

}

.styleBtn{
    padding: 10px 18px;
    background-color:black;
    border-radius:5px;
    color:white;
    font-family: "poppins";
    border:1px solid transparent;
    width:220px;
    font-size:16px;
    transition: 0.2s background-color ease-in;
    cursor:pointer;
}

`