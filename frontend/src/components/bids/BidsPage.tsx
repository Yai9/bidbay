import React, { useState } from "react";
import { styled } from "@mui/system";
import Box from "@mui/material/Box";
import BidList from "./BidList";
import { Button, Dialog, Typography, useTheme } from "@mui/material";
import AddBid from "../AddBid";
import CloseIcon from "@mui/icons-material/Close";

const BidWrapper = styled(Box)`
  padding: 40px;
`;
const BidsPage = () => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();

  return (
    <BidWrapper maxWidth="xl">
      <BidList setShowModal={setOpen} />
      <Dialog open={open}>
        <Box>
          <Button
            sx={{ position: "absolute", right: 0 }}
            onClick={() => setOpen(false)}
          >
            <CloseIcon />
          </Button>
          <Typography
            textAlign="center"
            color={theme.palette.primary.contrastText}
            variant="h5"
          >
            Edit Bid
          </Typography>
          <Box p="20px">
            <AddBid isEditMode={open} setIsEditMode={setOpen} />
          </Box>
        </Box>
      </Dialog>
    </BidWrapper>
  );
};

export default BidsPage;
