import React from "react";
import BidItem from "./BidItem";
import { Box } from "@mui/material";

interface Props {
  id: string;
  title: string;
  description: string;
  image: string;
}

const dummyData: Props[] = [
  {
    id: "123",
    title: "Mazda CX 9",
    description: "Lorem ipsum",
    image:
      "https://hips.hearstapps.com/hmg-prod/images/2020-mazda-cx-9-signature-awd-280-1580783934.jpg?crop=0.691xw:0.518xh;0.0277xw,0.406xh&resize=1200:*",
  },
  {
    id: "456",
    title: "Picasso Painting",
    description: "Lorem ipsum",
    image:
      "https://keyassets.timeincuk.net/inspirewp/live/wp-content/uploads/sites/34/2016/08/DRC-sothebys.jpg",
  },
];

const BidList: React.FC = () => {
  return (
    <Box
      maxWidth="xl"
      display="flex"
      marginX="auto"
      flexDirection="column"
      gap="4px"
      justifyContent="center"
    >
      {dummyData.map((item) => (
        <BidItem
          key={item.id}
          title={item.title}
          description={item.description}
          image={item.image}
        />
      ))}
    </Box>
  );
};

export default BidList;
