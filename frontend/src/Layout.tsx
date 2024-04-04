import * as React from "react";
import Header from "./components/UI/Header";
import Drawer from "../src/components/UI/Drawer";
import { Box } from "@mui/material";

type Props = {
  children?: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <Box>
      <Header />
      {children}
    </Box>
  );
};

export default Layout;
