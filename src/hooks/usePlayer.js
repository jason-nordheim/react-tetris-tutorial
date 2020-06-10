import { useState, useCallback } from 'react'

import {STAGE_WIDTH} from '../gameHelpers'
import {randomTetromino, TETROMINOS} from '../tetrominos'


export const usePlayer = () => {
    const [player, setPlayer] = useState({
        pos: {x: 0, y: 0}, 
        tetromino: TETROMINOS[0].shape, 
        collided: false
    })

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
        console.log('reseting')
        setPlayer({
            pos: {x: (STAGE_WIDTH / 2 - 2), y: 0 }, 
            tetromino: randomTetromino().shape, 
            collided: false 
        })
    }, [])

    return [player, updatePlayerPos, resetPlayer]
}