import React, { useContext } from "react";
import { Box, useTheme, IconButton } from "@mui/material";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { ColorModeContext, tokens } from "../../theme";
import { useGlobalContext } from "../../context/AppContext";
import Config from "../../config";

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const {desktop} = useGlobalContext();
  return (
    <Box 
    display="flex" 
    justifyContent="space-between" 
    p={1} 
    bgcolor={colors.green[300]}
  >
    {/* Logo and title are hidden on mobile */}
    {desktop && (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        borderRadius="3px"
      >
        <img src={Config.LOGO} alt="logo" className="logo" style={{ marginRight: '8px' }}/>
        <h1>Oil & Gas Insights</h1>
      </Box>
    )}

    {/* Topbar menu */}
    <Box display="flex" sx={{"& :hover": {backgroundColor: "inherit", color: colors.grey[100]}}}>
      <IconButton onClick={colorMode.toggleColorMode} aria-label="Toggle theme">
        {theme.palette.mode === "dark" ? <DarkModeOutlinedIcon /> : <LightModeOutlinedIcon />}
      </IconButton>
      <IconButton aria-label="Settings">
        <SettingsOutlinedIcon />
      </IconButton>
    </Box>
  </Box>
  );
};

export default Topbar;
