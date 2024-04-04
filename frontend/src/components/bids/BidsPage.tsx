import React from "react";
import { styled } from "@mui/system";
import Box from "@mui/material/Box";
import BidList from "./BidList";

const BidWrapper = styled(Box)`
  padding: 40px;
`;
const BidsPage = () => {
  return (
    <BidWrapper maxWidth="xl">
      <BidList />
    </BidWrapper>
  );
};

export default BidsPage;
