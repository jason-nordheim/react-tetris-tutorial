import React, { useState } from 'react'

// styled components 
import { createStage, checkCollision } from '../gameHelpers'
import { StyledTetris, StyledTetrisWrapper } from './styles/StyledTetris'

//custom hooks 
import { usePlayer } from '../hooks/usePlayer'
import { useStage } from '../hooks/useStage'
import { useinterval, useInterval } from '../hooks/useInterval'

import Stage from './Stage'
import Display from './Display'
import StartButton from './StartButton'

const Tetris = () => {

    // state 
    const [dropTime, setDropTime] = useState(null)
    const [gameOver, setGameOver] = useState(false)

    // custom hooks 
    const [player, updatePlayerPos, resetPlayer, playerRotate] = usePlayer(); 
    const [stage, setStage] = useStage(player, resetPlayer); 

    console.log('re-render')

    const movePlayer = dir => { 
        if (!checkCollision(player, stage, {x: dir, y: 0})) {
            updatePlayerPos({x: dir, y: 0}); 
        }
    }

    const startGame = () => {
        // reset everything 
        setStage(createStage())
        setDropTime(1000) // 1 second 
        resetPlayer(); 
        setGameOver(false)
    }
    
    const drop = () => {
        if(!checkCollision(player, stage, {x: 0, y:1})){
            updatePlayerPos({x: 0, y: 1, collided: false})
        } else {
            if (player.pos.y < 1 ) { 
                // collision occured at the top of the stage 
                console.log('game over')
                setGameOver(true)
                setDropTime(null)
            }
            updatePlayerPos({x: 0, y: 0, collided: true})
        }
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
            } else if (keyCode === 38) { // rotate clockwise (up arrow) 
                playerRotate(stage, 1)
            }
        }
    } 

    useInterval(() => {
        drop()
    }, dropTime)

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