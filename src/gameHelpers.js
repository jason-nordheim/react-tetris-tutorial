export const STAGE_WIDTH = 12
export const STAGE_HEIGHT = 20 

export const createStage = () => 
    Array.from(Array(STAGE_HEIGHT), () => 
        new Array(STAGE_WIDTH).fill([0, 'clear']))
 

export const checkCollision = (player, stage, { x: moveX, y: moveY}) => {
    for (let y = 0; y < player.tetromino.length; y++) {
        for(let x = 0; x < player.tetromino[y].length; x++){
            // 1. check on tetromino cell 
            if(player.tetromino[y][x] !== 0){
                // 2. check that movement is inside of the game area (width/height)
                const validY = !stage[y + player.pos.y + moveY]
                const validX = !stage[y + player.pos.y + moveY][x + player.pos.x + moveX]
                // 3. check that the cell is not set to clear (indicates collision)
                const notClear = stage[y + player.pos.y + moveY][x + player.pos.x + moveX][1] !== 'clear'

                if (validY || validX || notClear) return true 

                // 4. check that the cell we are moving to isn't set to clear 
            } 
        }
    }
}