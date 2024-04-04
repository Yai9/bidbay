import * as React from "react";
import { Route, Routes } from "react-router-dom";
import BidsPage from "./components/bids/BidsPage";
import UserProfile from "./components/profile/UserProfile";

const RoutesList = () => {
  return (
    <Routes>
      <Route path="/" element={<BidsPage />} />
      <Route path="/profile" element={<UserProfile />} />
    </Routes>
  );
};

export default RoutesList;
