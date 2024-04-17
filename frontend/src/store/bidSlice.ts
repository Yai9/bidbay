import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type BidData = {
  _id?: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
};

export interface BidState {
  items: BidData[];
  selectedItem: BidData;
}

const initialState: BidState = {
  items: [],
  selectedItem: {
    _id: "",
    title: "",
    description: "",
    longDescription: "",
    image: "",
  },
};

const bidSlice = createSlice({
  name: "bids",
  initialState,
  reducers: {
    setBids: (state, action) => {
      if (action.payload === null) state.items = [];
      else state.items = [...state.items, ...action.payload];
    },
    addBid: (state, action: PayloadAction<BidData>) => {
      const newItem = action.payload;
      state.items.push(newItem);
    },
    removeBid: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      state.items = state.items.filter((item) => item._id !== id);
    },
    updateBid: (state, action: PayloadAction<BidData>) => {
      const newItem = action.payload;
      if (newItem) {
        const foundItem = state.items.findIndex(
          (item) => item._id === newItem._id
        );

        const oldItem = { ...state.items[foundItem] };
        state.items[foundItem] = { ...oldItem, ...newItem };
      }
    },
    setSelectedItem: (state, action: PayloadAction<string>) => {
      state.selectedItem._id = action.payload;
    },
  },
});
export const bidActions: any = bidSlice.actions;

export default bidSlice;
