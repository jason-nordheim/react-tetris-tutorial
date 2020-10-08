import React from 'react'
import { StyledButton } from './styles/StyledButton'

/**
 * Component to represent the pause button, takes 
 * in the games paused status (true = paused) and a callback 
 * function to be executed upon the buttons click event
 * @param {{isPaused:boolean,callback:function}} props 
 */
const PauseButton = ({isPaused, callback}) => 
    <StyledButton onClick={callback}>
        { isPaused ? "Play": "Pause"}
    </StyledButton>


export default PauseButton
