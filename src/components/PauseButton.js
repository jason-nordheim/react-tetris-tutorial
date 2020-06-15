import React from 'react'

import { StyledButton } from './styles/StyledButton'

const PauseButton = ({isPaused, callback}) => {
    return (
        <StyledButton onClick={callback}>
            { isPaused ? "Play": "Pause"}
        </StyledButton>
    )
}

export default PauseButton
