import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import styled from "styled-components";

const Pagination = () => {
  return (
    <>
      <Button>
        <ArrowBack />
      </Button>
      <Button>
        <ArrowForward />
      </Button>
    </>
  )
}

export default Pagination;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  background: transparent;
  border: 2px solid #1976d2;
  cursor: pointer;
  margin: 20px;
  width: 50px;
  height: 50px;
  border-radius: 5px;
  transition: all 300ms;

  &:hover {
    border-color: #FF1536;
  }

  &:active {
    transform: scale(0.9)
  }
`;

const ArrowBack = styled(ArrowBackIosIcon)`
  color: #1976d2;

  ${Button}:hover & {
    color: #FF1536;
  }
`;
const ArrowForward = styled(ArrowForwardIosIcon)`
  color: #1976d2;

  ${Button}:hover & {
    color: #FF1536;
  }
`;
