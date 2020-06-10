import { useState, useEffect } from 'react'
import { createStage } from '../gameHelpers'

export const useStage = (player, resetPlayer) => {
    console.log('player', player)
    const [stage, setStage] = useState(createStage())

    useEffect(() => {
        const updateStage = previousStage => {
            // flush the stage 
            const newStage = previousStage.map(row => 
                row.map(cell => (cell[1] === 'clear' ? [0, 'clear']: cell))
            )

            // draw tetrimino 
            player.tetromino.forEach((row, y) => {
                row.forEach((value, x) => {
                    if(value !== 0) {
                        const position = { x: x + player.pos.x, y: y + player.pos.y}
                        newStage[position.y][position.x] = [value, `${player.collided ? 'merged': 'clear'}`]
                    }
                })
            })
            return newStage
        }

        setStage(prev => updateStage(prev))
    }, [player.collided, player.pos.x, player.pos.y, player.tetrimino])

    return [stage, setStage]
}