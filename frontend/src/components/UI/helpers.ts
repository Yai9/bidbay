import { BidData } from "../../store/bidSlice";

export const handleFieldData = (items: BidData[], bidItem: BidData) => {
  const foundItem = items.find((item) => item._id === bidItem._id);
  return {
    title: foundItem?.title || "",
    description: foundItem?.description || "",
    longDescription: foundItem?.longDescription || "",
    image: foundItem?.image || "",
  };
};
