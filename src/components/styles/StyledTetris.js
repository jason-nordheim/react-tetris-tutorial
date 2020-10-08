import styled from 'styled-components'


/**
 * Wraps the root cgame component 
 */
export const StyledTetrisWrapper = styled.div`
    width: 100vw; 
    height: 100vh; 
    background-color: #000; 
    background-size: cover; 
    overflow: hidden; 
`

/**
 * Wrapper for the actual game portion 
 */
export const StyledTetris = styled.div`
    display: flex; 
    align-items: flex-start; 
    padding: 40px; 
    margin: 0 auto; 
    max-width: 900px; 

    aside {
        width: 100%; 
        max-width: 200px; 
        display: block; 
        padding: 20px; 
    }
`