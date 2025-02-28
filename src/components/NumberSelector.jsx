import React from 'react'
import styled from 'styled-components'

import { useState } from 'react'

const NumberSelector = (props) => {

    const numArray = [1, 2, 3, 4, 5, 6]

    return (

        <NumberSelectorContainer>

            <p className="error">{props.error}</p>
            <div className='boxContainer'>
                {
                    numArray.map((val, i) => (<Box isSelected={val === props.num} key={i} onClick={() => {
                        props.setError("")
                        props.numFunc(val)}}> {val} </Box>))
                    // whenever we pass value w function call, use callback func
                    // isSelected is a prop, to style selected number
                }
            </div>
            <p>
                Select Number
            </p>
        </NumberSelectorContainer>
    )
}

export default NumberSelector


const NumberSelectorContainer = styled.div`
/* background-color:blue; */
text-align:center;
display:flex;
flex-direction:column;
justify-content:center;
.error{
    font-size:15px;
    color:red;
}
.boxContainer{
    display:flex;
    gap:24px;
}

p{
    font-size:24px;
    font-weight:700px;
}
`


const Box = styled.div`
    height:72px;
    width:72px;
    border:1px solid black;
    display:grid;
    place-items:center;
    font-size:24px;
    font-weight:700;
    background-color: ${(props) => (props.isSelected ? "black" : "white")};
    color: ${(props) => (props.isSelected ? "white" : "black")};


`