import React from 'react'
import Cell from './Cell'

import {StyledStage } from './styles/StyledStage'

/**
 * Represents the tetris stage (the place where tetrominos are placed)
 * and maps over them placing them onto the stage 
 * @param {{stage:Array<Array<Array<any>>>}} props  
 */
const Stage = ({ stage }) => 
    <StyledStage width={stage[0].length} height={stage.length}>
        {  stage.map(row => row.map((cell, x) => <Cell key={x} type={cell[0]} />)) }
    </StyledStage>


export default Stage