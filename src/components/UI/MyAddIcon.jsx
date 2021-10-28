import React from 'react';
import styled from "styled-components"
import AddIcon from "@mui/icons-material/Add";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { IconButton } from '@mui/material';

const MyAddIcon = () => {
  const [isAddedToCart, setIsAddedToCart] = React.useState(false);

  const onAddedToCart = () => {
    setIsAddedToCart(!isAddedToCart);
  };

  return (
    <IconButton onClick={onAddedToCart} >
      {isAddedToCart ? <Check /> : <Add />}
    </IconButton>
  )
}

export default MyAddIcon

const Check = styled(CheckCircleIcon)`
  color: #00FF7F;
`;
const Add = styled(AddIcon)`
  color: #1976d2;
`;
