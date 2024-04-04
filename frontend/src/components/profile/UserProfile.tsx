import React from "react";
import { Avatar, Box, MenuItem, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import AddBid from "../AddBid";

const UserProfile = () => {
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const profileOptions = ["My auctions", "Bids", "Bought items", "Settings"];

  const theme = useTheme();

  return (
    <Box
      maxWidth="xl"
      display="flex"
      marginX="auto"
      color={theme.palette.text.secondary}
      sx={{ marginTop: "20px" }}
    >
      <Box
        mx="24px"
        p="10px"
        display="flex"
        flexDirection="column"
        gap="24px"
        boxShadow="2px 5px 5px gray"
        borderRadius="5px"
        bgcolor={theme.palette.primary.main}
      >
        <Box
          display="flex"
          bgcolor={theme.palette.primary.light}
          alignItems="center"
          borderRadius="5px"
          p="10px"
          gap="8px"
        >
          <Avatar
            alt="User profile"
            src="https://files.oaiusercontent.com/file-IFogPlEk4VCYJOUsoJhl3Dex?se=2123-10-23T15%3A08%3A11Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3DDALL%25C2%25B7E%25202023-11-16%252022.07.02%2520-%2520Beautiful%2520Circle%2520app%2520icon%2520for%2520Personalized%2520Avatar%2520Creator%252C%2520inspired%2520by%2520the%2520concept%2520of%2520transforming%2520selfies%2520into%2520unique%2520avatars.%2520The%2520style%2520should%2520be%2520mo.png&sig=F0JOFb3G8SRpbB5EHtILkZPdgY0BqHVM1V6qLwmrEF8%3D"
            sx={{ width: 200, height: 200 }}
          />
          <Typography variant="h5" fontWeight="700">
            Jane Williams
          </Typography>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          borderRadius="5px"
          bgcolor={theme.palette.primary.light}
        >
          {profileOptions.map((option) => (
            <MenuItem key={option} onClick={handleCloseUserMenu}>
              <Typography fontWeight="600" textAlign="center">
                {option}
              </Typography>
            </MenuItem>
          ))}
        </Box>
      </Box>
      <AddBid />
    </Box>
  );
};

export default UserProfile;
