import React from 'react'
import {StyledDisplay} from './styles/StyledDisplay'

/**
 * Component responsible for displaying basic game content 
 * @param {{gameOver:boolean, text:string}} props
 */
const Display = ({gameOver, text}) => <StyledDisplay gameOver={gameOver}>{text}</StyledDisplay>

export default Display