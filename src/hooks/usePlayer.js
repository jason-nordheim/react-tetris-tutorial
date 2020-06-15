import { useState, useCallback } from 'react'

import {STAGE_WIDTH, checkCollision} from '../gameHelpers'
import {randomTetromino, TETROMINOS} from '../tetrominos'


export const usePlayer = () => {
    const [player, setPlayer] = useState({
        pos: {x: 0, y: 0}, 
        tetromino: TETROMINOS[0].shape, 
        collided: false
    })

    const rotate = (matrix, direction) => {
        // make the rows columns (transponse)
        const rotateTetromino = matrix.map((value, index) => {
            return matrix.map(col => col[index])
        })
        // reverse each row to get new matrix 
        if (direction > 0 ) return rotateTetromino.map(row => row.reverse()) 
        else return rotateTetromino.reverse() 
    }

    const playerRotate = (stage, direction) => {
        const clonedPlayer = JSON.parse(JSON.stringify(player))
        clonedPlayer.tetromino = rotate(clonedPlayer.tetromino, direction) 

        // make sure its rotation is valid (on grid, not colliding with another piece)
        const pos = clonedPlayer.pos.x
        let offset = 1; 
        while (checkCollision(clonedPlayer, stage, {x: 0, y: 0})){
            clonedPlayer.x += offset
            offset = -(offset + (offset > 0 ? 1 : -1))
            if (offset > clonedPlayer.tetromino[0].length) {
                rotate(clonedPlayer.tetromino, -(direction))
                clonedPlayer.pos.x = pos 
                return 
            }
        }
        setPlayer(clonedPlayer) 
    }

    const updatePlayerPos = ({x, y, collided=false}) => {
        const previous = {...player} 
        const newPlayer = {
            tetromino: previous.tetromino, 
            pos: { x: (previous.pos.x += x), y: (previous.pos.y += y)}, 
            collided
        }
        setPlayer(newPlayer)
    }

    const resetPlayer = useCallback(() => {
        console.log('reseting player')
        setPlayer({
            pos: {x: (STAGE_WIDTH / 2 - 2), y: 0 }, 
            tetromino: randomTetromino().shape, 
            collided: false 
        })
    }, [])

    return [player, updatePlayerPos, resetPlayer, playerRotate]
}