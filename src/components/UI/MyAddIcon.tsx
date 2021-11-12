import { FC, useState } from 'react';
import styled from "styled-components"
import AddIcon from "@mui/icons-material/Add";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { IconButton } from '@mui/material';

interface MyAddIconProps {
  onAdd: () => void;
}

const MyAddIcon: FC<MyAddIconProps> = ({ onAdd }) => {
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  const onAddedToCart = () => {
    setIsAddedToCart(!isAddedToCart);
    onAdd();
  };


  return (
    <IconButton onClick={onAddedToCart} >
      {isAddedToCart ? <Check /> : <Add />}
    </IconButton>
  )
}

export default MyAddIcon

const Check = styled(CheckCircleIcon)`
  color: #fff;
`;
const Add = styled(AddIcon)`
  color: #1976d2;
`;
