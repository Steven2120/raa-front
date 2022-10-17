import { Box, Typography } from "@mui/material";

function Footer() {
  return (
    <Box
      bgcolor="#17637B"
      position={"fixed"}
      top={"90vh"}
      height={"10vh"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      width={"100%"}
    >
      <Typography fontWeight="bold" color="white">
        MyMusicStore.com
      </Typography>
    </Box>
  );
}

export default Footer;
