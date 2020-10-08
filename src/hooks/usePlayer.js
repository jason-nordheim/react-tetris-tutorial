import { useState, useCallback } from 'react'

import {STAGE_WIDTH, checkCollision} from '../util/gameHelpers'
import {randomTetromino, TETROMINOS} from '../util/tetrominos'


/**
 * Hook to hold the 'player-piece' and manage the movement of player pieces 
 * within the stage 
 * @returns {[player, updatePlayerPos, resetPlayer, playerRotate]}
 */
export const usePlayer = () => {
    // save player to state 
    const [player, setPlayer] = useState({
        pos: {x: 0, y: 0}, 
        tetromino: TETROMINOS[0].shape, 
        collided: false
    })

    /**
     * function that recieves a tetromino from the stage, and rotates the tetromino 
     * by reversing the rows and columns (transposing each cell of the tetrominos) 
     * and returning the rotated tetromino at the same position on the stage 
     * @param {stage} matrix - the stage where the tetrominos should be placed 
     * @param {number} direction - number representing the direction the player-piece should be moved  
     */
    const rotate = (matrix, direction) => {
        // make the rows columns (transponse)
        const rotateTetromino = matrix.map((_value, index) =>  matrix.map(col => col[index]))
        // reverse each row to get new matrix 
        if (direction > 0 ) return rotateTetromino.map(row => row.reverse()) 
        else return rotateTetromino.reverse() 
    }

    /**
     * Function that leverages the 'rotate' function to determine if rotating 
     * the player-piece is possible (i.e. will not result in a collision, or go off the stage) 
     * 
     * if the exact initial position of the tetromino would result ina  collision
     * the adjacent cells are checked to see if the tetrominos could be placed there, 
     * resulting in a valid placement 
     * 
     * if the tetrominos can be rotated, the position is updated on the stage 
     * 
     * @param {stage} stage 
     * @param {direction} direction 
     */
    const playerRotate = (stage, direction) => {
        const clonedPlayer = JSON.parse(JSON.stringify(player))
        clonedPlayer.tetromino = rotate(clonedPlayer.tetromino, direction) 

        // make sure its rotation is valid (on grid, not colliding with another piece)
        const pos = clonedPlayer.pos.x
        let offset = 1; 

        // check the adjacent cells to see if any of the cells could be a valid 
        // placement of the tetrominos
        while (checkCollision(clonedPlayer, stage, {x: 0, y: 0})){
            clonedPlayer.x += offset
            offset = -(offset + (offset > 0 ? 1 : -1))
            if (offset > clonedPlayer.tetromino[0].length) {
                rotate(clonedPlayer.tetromino, -(direction))
                clonedPlayer.pos.x = pos 
                return 
            }
        }
        // update the state of the player-piece   
        setPlayer(clonedPlayer) 
    }

    /**
     * Updates the player position by creating a copy of the player object and then 
     * moving the player to the new position 
     * 
     * collided variable will determine if the tetromino can drop any further 
     * 
     * @param {*} param0 
     */
    const updatePlayerPos = ({x, y, collided=false}) => {
        const previous = {...player} 
        const newPlayer = {
            tetromino: previous.tetromino, 
            pos: { x: (previous.pos.x += x), y: (previous.pos.y += y)}, 
            collided
        }
        setPlayer(newPlayer)
    }

    /**
     * Randomly generates a new tetrominos and places it at the top of the 
     * stage 
     */
    const resetPlayer = useCallback(() => {
        setPlayer({
            pos: {x: (STAGE_WIDTH / 2 - 2), y: 0 }, 
            tetromino: randomTetromino().shape, 
            collided: false 
        })
    }, [])

    return [player, updatePlayerPos, resetPlayer, playerRotate]
}