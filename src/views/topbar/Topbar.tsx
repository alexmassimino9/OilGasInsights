import { useContext, useState } from "react";
import {
  Box,
  useTheme,
  Modal,
  List,
  ListItem,
  ListItemText,
  Typography,
  Link,
} from "@mui/material";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import WebIcon from "@mui/icons-material/Web";
import GitHubIcon from "@mui/icons-material/GitHub";
import { ColorModeContext, tokens } from "../../theme";
import { useGlobalContext } from "../../context/AppContext";
import Config from "../../config";

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const { desktop } = useGlobalContext();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

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
          <img
            src={Config.LOGO}
            alt="logo"
            className="logo"
            style={{ marginRight: "8px" }}
          />
          <h1>Oil & Gas Insights</h1>
        </Box>
      )}

      {/* Topbar menu */}
      <Box
        display="flex"
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
          "& :hover": {
            backgroundColor: "inherit",
            color: colors.grey[100],
          },
        }}
      >
        {theme.palette.mode === "dark" ? (
          <DarkModeOutlinedIcon
            onClick={colorMode.toggleColorMode}
            aria-label="Toggle theme"
            sx={{ marginInline: "1rem" }}
          />
        ) : (
          <LightModeOutlinedIcon
            onClick={colorMode.toggleColorMode}
            aria-label="Toggle theme"
            sx={{ marginInline: "1rem" }}
          />
        )}

        <InfoOutlinedIcon
          aria-label="Personal Links"
          onClick={handleOpenModal}
          sx={{ marginInline: "1rem" }}
        />
      </Box>

      {/* Personal links modal */}
      <Modal open={isModalOpen} onClose={handleCloseModal}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: colors.tasman[200],
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography variant="h5" sx={{ mb: 2, color: colors.grey[900] }}>
            Personal Links
          </Typography>
          <List>
            <ListItem>
              <ListItemText
                primary={
                  <Link
                    href="https://alexmassimino.com"
                    sx={{ color: colors.grey[900] }}
                  >
                    <WebIcon /> Personal Website
                  </Link>
                }
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={
                  <Link
                    href="https://github.com/alexmassimino9"
                    sx={{ mb: 2, color: colors.grey[900] }}
                  >
                    <GitHubIcon /> GitHub Profile
                  </Link>
                }
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={
                  <Link
                    href="https://github.com/alexmassimino9/oil-gas-insights"
                    sx={{ mb: 2, color: colors.grey[900] }}
                  >
                    <GitHubIcon /> Source Code
                  </Link>
                }
              />
            </ListItem>
          </List>
        </Box>
      </Modal>
    </Box>
  );
};

export default Topbar;
