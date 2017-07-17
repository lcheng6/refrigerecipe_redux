import React from 'react';
import { CardColumns } from 'reactstrap';

const CardBoard = ({children}) => (
  <CardColumns>
    {children}
  </CardColumns>
)

export default CardBoard
