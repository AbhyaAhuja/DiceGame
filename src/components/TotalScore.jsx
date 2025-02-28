import React from 'react'
import styled from 'styled-components'

const TotalScore = ({sc}) => {
    return (
        <ScoreContainer>
            <h1>{sc}</h1>
            <p>Total Score</p>
        </ScoreContainer>
    )
}

export default TotalScore

const ScoreContainer = styled.div`
text-align:center;
max-width:200px;
/* background-color:gray; */
h1{
    font-size: 100px;
    line-height:150px;
}
p{
    font-size:24px;
    font-weight:500px;

}
`