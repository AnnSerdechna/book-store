import { IconButton } from '@mui/material';
import styled from "styled-components";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const MyDeleteIcon = () => {
  return (
    <IconButton>
      <DeleteIcon />
    </IconButton>
  )
}

export default MyDeleteIcon;

const DeleteIcon = styled(DeleteForeverIcon)`
  color: #1976d2;
  transition: all 200ms !important;

  &:hover {
    color: #FF1536;
  }
`;
