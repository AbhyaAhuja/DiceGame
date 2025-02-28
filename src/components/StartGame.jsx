import React from 'react'
import styled from 'styled-components'

const StartGame = (props) => {
    return (
        <Container>

            <img src="https://th.bing.com/th/id/OIP.ieKhASjUEHxa6JEb-oUwAQHaFx?w=259&h=200&c=7&r=0&o=5&dpr=1.1&pid=1.7" alt="meh" />

            <div className='content'>
                <h1>Dice Game</h1>
                <Button onClick = {props.toggle}>Play</Button>
            </div>

        </Container>
    )
}

export default StartGame

const Container = styled.div`
    max-width:1180px;
    display:flex;
    margin: 0 auto;
    height:100vh;
    align-items:center;


.content{
    h1{
        font-size: 96px;
        white-space:nowrap

    }
}
`

const Button = styled.button`
    padding: 10px 18px;
    background-color:black;
    border-radius:5px;
    color:white;
    font-family: "poppins";
    border:1px solid transparent;
    min-width:220px;
    font-size:16px;
    transition: 0.2s background-color ease-in;
    cursor:pointer;

&:hover{

    background-color: white;
    border: 1px solid black;
    color: black;
    transition: 0.1s background-color ease-in;
}

`