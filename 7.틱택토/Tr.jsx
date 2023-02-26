import React from 'react';
import Td from './Td';

const Tr = ({ rowIndex, rowData, dispatch }) => {
  return (
    <tr>
      {Array(rowData.length).fill().map((td, i) => 
        <Td key={i} dispatch={dispatch} cellIndex={i} cellData={rowData[i]} rowIndex={rowIndex}>{''}</Td>)}
    </tr>
  )
}

export default Tr; 