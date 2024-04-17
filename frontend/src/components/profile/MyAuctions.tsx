import React, { useEffect } from "react";
import BidItem from "../bids/BidItem";
import { Box } from "@mui/material";
import { BidState, bidActions } from "../../store/bidSlice";
import { useDispatch, useSelector } from "react-redux";

const MyAuctions: React.FC = () => {
  const dispatch = useDispatch();
  const { setBids } = bidActions;
  const bids = useSelector((state: BidState) => state.items);

  const fetchBids = async () => {
    const res = await fetch("/api/bids");
    const data = await res.json();
    dispatch(setBids(data));
  };
  useEffect(() => {
    fetchBids();
    return () => {
      dispatch(setBids(null));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const reversedBids = (bids && [...bids].reverse()) || [];

  return (
    <Box
      maxWidth="xl"
      display="flex"
      marginX="auto"
      flexDirection="column"
      gap="4px"
      justifyContent="center"
    >
      {reversedBids.map((item) => (
        <BidItem
          key={item._id}
          title={item.title}
          description={item.description}
          image={item.image}
          setModalOpen={() => {}}
        />
      ))}
    </Box>
  );
};

export default MyAuctions;
