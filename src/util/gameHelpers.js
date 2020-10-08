export const STAGE_WIDTH = 12
export const STAGE_HEIGHT = 20 

/**
 * Creates a new game 'stage' (the grid on which the tetrominos are placed)
 * that is an array of arrays filled with an array that has two values: 
 *  1. Number ('0' indicates empty)
 */
export const createStage = () => 
    Array.from(Array(STAGE_HEIGHT), () => 
        new Array(STAGE_WIDTH).fill([0, 'clear']))
 

export const checkCollision = (player, stage, { x: moveX, y: moveY}) => {
    for (let y = 0; y < player.tetromino.length; y++) {
        for(let x = 0; x < player.tetromino[y].length; x++){
            // 1. check on tetromino cell 
            if(player.tetromino[y][x] !== 0){
                if (
                    // 2. Check that our move is inside the game areas height (y)
                    // We shouldn't go through the bottom of the play area
                    !stage[y + player.pos.y + moveY] ||
                    // 3. Check that our move is inside the game areas width (x)
                    !stage[y + player.pos.y + moveY][x + player.pos.x + moveX] ||
                    // 4. Check that the cell wer'e moving to isn't set to clear
                    stage[y + player.pos.y + moveY][x + player.pos.x + moveX][1] !== 'clear'
                )  return true 

            } 
        }
    }
    return false 
}