import { useState, useEffect } from 'react'
import { createStage } from '../gameHelpers'

export const useStage = (player, resetPlayer) => {
    const [stage, setStage] = useState(createStage())
    //console.log(`player ${Date.now().toString()}`, player)

    useEffect(() => {
        const updateStage = prevStage => {
            // flush the stage 
            const newStage = prevStage.map(row => 
                row.map(cell => (cell[1] === 'clear' ? [0, 'clear']: cell))
            )

            // draw tetrimino 
            player.tetromino.forEach((row, y) => {
                row.forEach((value, x) => {
                    if(value !== 0) {
                        newStage[y + player.pos.y][x + player.pos.x] 
                        = [value, `${player.collided ? 'merged': 'clear'}`]
                    }
                })
            })

            // check if we collided 
            if(player.collided) resetPlayer() 

            return newStage
        }

        console.log('updating stage')
        setStage(prev => updateStage(prev))
        console.log('stage update complete')
    }, [player, resetPlayer])

    return [stage, setStage]
}