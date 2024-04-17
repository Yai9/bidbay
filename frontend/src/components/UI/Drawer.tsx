import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { styled } from "@mui/material";
import { drawerItems } from "../../data/drawerConfig";
import { useNavigate } from "react-router-dom";

interface Props {
  open: boolean;
  toggleDrawer: React.Dispatch<React.SetStateAction<boolean>>;
}

const StyledList = styled(List)`
  color: #000000;
`;

const SideDrawer = ({ open, toggleDrawer }: Props) => {
  const toggleDrawerHandler = () => {
    toggleDrawer(!open);
  };

  const navigate = useNavigate();

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawerHandler}>
      <StyledList>
        {drawerItems.map(({ title, path }, index) => (
          <ListItem key={title} disablePadding>
            <ListItemButton onClick={() => navigate(path)}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={title} />
            </ListItemButton>
          </ListItem>
        ))}
      </StyledList>
    </Box>
  );

  return (
    <div>
      <Drawer open={open} onClick={toggleDrawerHandler}>
        {DrawerList}
      </Drawer>
    </div>
  );
};

export default SideDrawer;
