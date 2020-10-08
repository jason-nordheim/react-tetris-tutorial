import { useState, useEffect } from 'react'
import { createStage } from '../util/gameHelpers'

/**
 * Hook representing the grid upon which the player-piece (tetrominos) is placed
 * @param {*} player 
 * @param {*} resetPlayer 
 */
export const useStage = (player, resetPlayer) => {
    const [stage, setStage] = useState(createStage())
    const [rowsCleared, setRowsCleared] = useState(0)

    /**
     * anytime the player piece changes (new position, rotation, etc.)
     * check to see if we can clear any rows and then update the stage with the 
     * rows cleared  
     */
    useEffect(() => {
        setRowsCleared(0) 

        /**
         * function to clear any rows on the stage that have been completed 
         * @param {stage} newStage 
         */
        const sweepRows = (newStage) => {
            return newStage.reduce((acc, row) => {
                if (row.findIndex(cell => cell[0] === 0) === -1) { // returns -1 if no match 
                    // row filled, slide the row off the stage 
                    setRowsCleared(prev => prev + 1)
                    acc.unshift(new Array(newStage[0].length).fill([0, 'clear']))
                    return acc 
                }
                // row not filled, keep in newStage 
                acc.push(row)
                return acc
            }, [])
        }

        /**
         * handles the updating of the stage with each tetromino
         * @param {stage} prevStage 
         */
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
            if(player.collided) {
                resetPlayer() 
                return sweepRows(newStage)
            } 
            return newStage
        }

        setStage(prev => updateStage(prev))
    }, [player, resetPlayer])

    return [stage, setStage, rowsCleared]
}