import React, { useState } from 'react'

// styled components 
import { createStage } from '../gameHelpers'
import { StyledTetris, StyledTetrisWrapper } from './styles/StyledTetris'

//custom hooks 
import { usePlayer } from '../hooks/usePlayer'; 
import { useStage } from '../hooks/useStage'; 

import Stage from './Stage'
import Display from './Display'
import StartButton from './StartButton'

const Tetris = () => {

    // state 
    const [dropTime, setDropTime] = useState(null)
    const [gameOver, setGameOver] = useState(false)

    // custom hooks 
    const [player, updatePlayerPos, resetPlayer ] = usePlayer(); 
    const [stage, setStage] = useStage(player, resetPlayer); 

    console.log('re-render')

    const movePlayer = dir => { 
        updatePlayerPos({x: dir, y: 0}); 
    }

    const startGame = () => {
        // reset everything 
        setStage(createStage())
        resetPlayer(); 
    }
    
    const drop = () => {
        updatePlayerPos({x: 0, y: 1, collided: false})
    }
    
    const dropPlayer = () => {
        drop()
    } 

    const move = ({ keyCode }) => {
        if(!gameOver) {
            if(keyCode === 37) {
                movePlayer(-1) // to the left (left Arrow Key)
            } else if (keyCode === 39) {
                movePlayer(1) // to the right (Right Arrow Key)
            } else if (keyCode === 40) {
                dropPlayer(); 
            }
        }
    } 

    return (
        // need to make button to register keypresses
        <StyledTetrisWrapper role="button" tabIndex="0" onKeyDown={e => move(e)}>
            <StyledTetris >
                <Stage stage={stage}/> 
                <aside>
                    {
                        gameOver 
                        ? ( <Display gameOver={gameOver} text="Game Over" /> ) 
                        : (
                        <div>
                        <Display text="Score" /> 
                        <Display text="Rows" /> 
                        <Display text="Level" /> 
                        </div>
                        )
                    }
                    <StartButton callback={startGame} /> 
                </aside>
            </StyledTetris>
        </StyledTetrisWrapper>
    )
}

export default Tetris