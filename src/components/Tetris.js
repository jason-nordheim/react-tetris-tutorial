import React, { useState } from 'react'

// styled components 
import { createStage, checkCollision } from '../util/gameHelpers'
import { StyledTetris, StyledTetrisWrapper } from './styles/StyledTetris'

//custom hooks 
import { usePlayer } from '../hooks/usePlayer'
import { useStage } from '../hooks/useStage'
import { useInterval } from '../hooks/useInterval'
import { useGameStatus } from '../hooks/useGameStatus'

// components 
import Stage from './Stage'
import Display from './Display'
import StartButton from './StartButton'

/**
 * Game Root Component 
 */
const Tetris = () => {
    // state 
    const [dropTime, setDropTime] = useState(null)
    const [gameOver, setGameOver] = useState(false)
    
    // custom hooks 
    const [player, updatePlayerPos, resetPlayer, playerRotate] = usePlayer(); 
    const [stage, setStage, rowsCleared] = useStage(player, resetPlayer); 
    const [score, setScore, rows, setRows, level, setLevel] = useGameStatus(rowsCleared)

    /**
     * if there is nothing in the way, move the player-piece 
     * to in the desired direction 
     * @param {*} dir 
     */
    const movePlayer = dir => { 
        if (!checkCollision(player, stage, {x: dir, y: 0})) {
            updatePlayerPos({x: dir, y: 0}); 
        }
    }

    /**
     * Starts the game 
     */
    const startGame = () => {
        // reset everything 
        setStage(createStage())
        setDropTime(1000) // 1 second 
        resetPlayer(); 
        setGameOver(false)
        setScore(0)
        setRows(0)
        setLevel(0)
    }
    
    /**
     * Executes the player-piece drop 
     */
    const drop = () => {
        // increase level when player has cleared 10 rows 
        if ( rows > (level + 1) * 10) {
            // increase level 
            setLevel(prev => prev + 1)
            // increase speed 
            setDropTime(1000 / (level + 1 ) + 200)
        }

        if(!checkCollision(player, stage, {x: 0, y:1})){
            updatePlayerPos({x: 0, y: 1, collided: false})
        } else {
            if (player.pos.y < 1 ) { 
                // collision occured at the top of the stage
                // GAMEOVER!  
                setGameOver(true)
                setDropTime(null)
            }
            updatePlayerPos({x: 0, y: 0, collided: true})
        }
    }
    
    /**
     * Function to drop a player-piece (tetromino), to be executed at a regular interval 
     * (set in state)
     */
    const dropPlayer = () => {
        setDropTime(null) // stop dropping the piece if a user has already requested a drop
        drop()
    } 

    /**
     * function to continue droping the player-piece until it reaches the bottom of 
     * the screen 
     */
    const dropPlayerToBottom = () => {
        while(!checkCollision(player, stage, {x: 0, y: 1})){
            updatePlayerPos({x: 0, y: 1, collided: false})
        }
    }

    /**
     * If the user presses the down key, we must stop and restart 
     * the drop intervals execution to avoid dropping the piece twice 
     * @param {event} event 
     */
    const keyUp = ({ keyCode }) => {
        if(!gameOver && keyCode === 40) {
            setDropTime(1000 / (level + 1 ) + 200)
        }
    }

    /**
     * Event handler to handle moveing the player-piece 
     * @param {event} event - the event object  
     */
    const move = (event) => {
        event.preventDefault()
        const { keyCode } = event
        if(!gameOver) {
            if(keyCode === 37) {
                movePlayer(-1) // to the left (left Arrow Key)
            } else if (keyCode === 39) {
                movePlayer(1) // to the right (Right Arrow Key)
            } else if (keyCode === 40) {
                dropPlayer(); 
            } else if (keyCode === 38) { // rotate clockwise (up arrow) 
                playerRotate(stage, 1)
            } else if (keyCode === 32){
                dropPlayerToBottom()
            }
        }
    } 

    useInterval(() => {
        drop()
    }, dropTime)

    /**
     * JSX 
     */
    return (
        <StyledTetrisWrapper 
            role="button" 
            tabIndex="0" 
            onKeyDown={move} 
            onKeyUp={keyUp}
            >
            <StyledTetris >
                <Stage stage={stage}/> 
                <aside>
                    {
                        // change what's in the display conditionally 
                        // depending on if the game is finished 
                        gameOver 
                        ? <Display gameOver={gameOver} text="Game Over" /> 
                        : 
                        <div>
                            <Display text={`Score ${score}`} /> 
                            <Display text={`Rows ${rows}`} /> 
                            <Display text={`Level ${level}`} /> 
                        </div>
                        
                    }
                    <StartButton callback={startGame} /> 
                </aside>
            </StyledTetris>
        </StyledTetrisWrapper>
    )
}

export default Tetris