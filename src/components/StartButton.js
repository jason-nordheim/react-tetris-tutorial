import React from 'react'
import { StyledButton } from './styles/StyledButton'


/**
 * Styled button component to be used to start the game
 * 
 * accepts a callback function to be executed upon the click 
 * of the start button 
 * 
 * @param {{callback:function}} props 
 */
const StartButton = ({callback}) => <StyledButton onClick={callback}>Start Game</StyledButton>

export default StartButton
