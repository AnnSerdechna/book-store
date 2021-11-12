import { Box } from "@mui/material";
import Skeleton from "@mui/material/Skeleton";
import styled from "styled-components";
import { FC } from "react";

interface MySkeletonProps {
  booksArray: boolean;
  oneBook: boolean;
}

const MySkeleton: FC<MySkeletonProps> = ({ booksArray, oneBook }) => {
  return (
    <>
      {booksArray && (
        <Box sx={{ width: 180, marginRight: 0.5, my: 5 }}>
          <Top>
            <Skeleton variant="rectangular" width={100} height={145} />

            <TopRight>
              <Skeleton variant="rectangular" width={24} height={24} />
              <Skeleton variant="rectangular" width={24} height={24} />
            </TopRight>
          </Top>

          <Skeleton
            width={130}
            height={12}
            variant="rectangular"
            style={{ marginBottom: 20 }}
          />
          <Skeleton
            width={130}
            height={12}
            variant="rectangular"
            style={{ marginBottom: 20 }}
          />

          <Price>
            <Skeleton
              width={50}
              height={12}
              variant="rectangular"
              style={{ marginRight: 30 }}
            />
            <Skeleton width={50} height={12} variant="rectangular" />
          </Price>

          <Skeleton width={50} height={12} variant="rectangular" />
        </Box>
      )}

      {oneBook && (
        <Box sx={{ width: 780, marginRight: 0.5, my: 5 }}>
          <Top>
            <Skeleton variant="rectangular" width={200} height={200} />

            <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <Skeleton width={300} />
              <Skeleton width={300} />
              <Skeleton width={300} />
              <Skeleton width={300} />
            </div>
          </Top>

          <Skeleton width={550} />
          <Skeleton width={550} />
          <Skeleton width={550} />
          <Skeleton width={550} />
          <Skeleton width={550} />

          <>
            <Skeleton width={50} height={12} variant="rectangular" />
            <Skeleton width={50} height={12} variant="rectangular" />
          </>
        </Box>
      )}
    </>
  );
};

export default MySkeleton;

const Top = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;
const TopRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 10px;
`;
const Price = styled.div`
  display: flex;
  margin-bottom: 20px;
`;
