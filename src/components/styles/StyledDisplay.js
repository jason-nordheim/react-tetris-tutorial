import styled from 'styled-components'

/**
 * Styles the display section using styled components 
 * 
 * will be red if the game is over 
 */
export const StyledDisplay = styled.div`
    box-sizing: border-box; 
    display: flex; 
    align-items: center; 
    margin: 0 0 20px 0; 
    padding: 20px; 
    border: 4px solid #333; 
    min-height: 30px; 
    width: 100%; 
    border-radius: 20px; 
    color: ${props => (props.gameOver ? 'red': '#999')}; 
    background: #000; 
    font-family: Monospace; 
    font-size: 0.8rem; 
`