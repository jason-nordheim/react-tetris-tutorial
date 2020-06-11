import React from 'react'
import { StyledCell } from './styles/StyledCell.js'
import { TETROMINOS } from '../tetrominos'

const Cell = ({type}) => {
    return  <StyledCell type={type} color={TETROMINOS[type].color} /> 
}
// only re-render when the cell is changing 
export default React.memo(Cell) 