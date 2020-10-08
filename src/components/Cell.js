import React from 'react'
import { StyledCell } from './styles/StyledCell.js'
import { TETROMINOS } from '../util/tetrominos'

/**
 * Represents a cell on the stage 
 * @param {type} type - the type of tetromino  
 */
const Cell = ({type}) => <StyledCell type={type} color={TETROMINOS[type].color} /> 

// only re-render when the cell is changing 
export default React.memo(Cell) 