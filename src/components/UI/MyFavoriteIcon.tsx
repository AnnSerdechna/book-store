import React from "react";
import styled from "styled-components"
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { IconButton } from "@mui/material";

const MyFavoriteIcon = () => {
  const [isFavorite, setIsFavorite] = React.useState(false);

  const onAddToFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <IconButton onClick={onAddToFavorite}>
      {isFavorite ? <IsFavorite /> : <Favorite />}
    </IconButton>
  );
};

export default MyFavoriteIcon;

const Favorite = styled(FavoriteBorderIcon)`
  color: #1976d2;
`;
const IsFavorite = styled(FavoriteIcon)`
  color: #fff;
`;
