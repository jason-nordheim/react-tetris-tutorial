import React from 'react'
import { StyledCell } from './styles/StyledCell.js'
import { TETROMINOS } from '../tetrominos'

const Cell = ({type}) => {
    console.log('regular')
    return  <StyledCell type={type} color={TETROMINOS[type].color} /> 
}
// only re-render when the cell is changing 
export default React.memo(Cell) 