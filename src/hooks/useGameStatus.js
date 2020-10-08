import { useState, useEffect, useCallback } from 'react'

/**
 * Takes in the number of rows cleared by the player 
 * @param {number} rowsCleared 
 * @returns {[score:number, setScore:function, rows:number, setRows:function, level:number, setLevel:function]}
 */
export const useGameStatus = rowsCleared => {
    const [score, setScore] = useState(0)
    const [rows, setRows] = useState(0)
    const [level, setLevel] = useState(0)

    // original tetris scoring 
    const linePoints = [40, 100 ,300 ,1200] 

    /**
     * function to calculate the score, leveraging the 'useCallback' hook 
     */
    const calcScore = useCallback(() => {
        // if any rows were cleared, then we can calculate score 
        if(rowsCleared > 0) { 
            const pointsScored = (linePoints[rowsCleared - 1] * (level + 1))
            setScore(prev => prev + pointsScored)
            setRows(prev => prev + rowsCleared)
        }
    }, [level, linePoints, rowsCleared])

    /**
     * Recalculate the score whenever the rows cleared changes 
     */
    useEffect(() => calcScore() , [calcScore, rowsCleared, score]) // dependencies 

    
    return [score, setScore, rows, setRows, level, setLevel]
}