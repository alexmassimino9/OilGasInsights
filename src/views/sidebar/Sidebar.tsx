import { useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import {Box,List, Divider, IconButton, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import {ChevronLeft, Menu as MenuIcon } from '@mui/icons-material';
import {tokens} from '../../theme';
import { Link } from "react-router-dom";
import useMediaQuery from '@mui/material/useMediaQuery';
import Config from "../../config";
import logo from '../../assets/logo.png';
import {StyledDrawer, DrawerHeader} from './';
import { useGlobalContext } from '../../context/AppContext';


const Sidebar = () => {

  const [selected, setSelected] = useState(1); // Default to Dashboard
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const {open} = useGlobalContext();
  return (
    <Box sx={{ display: 'flex' }}>
      <StyledDrawer variant="permanent" open={open} theme={theme}
        sx={{
        "& .MuiDrawer-paper": {
          backgroundColor: colors.mirage[300]
        }
            }}>
        {/* header */}
<DrawerHeader />
        <Divider />
        <List>
          {Config.SIDEBAR_ITEMS.map((item) => {
            const isSelected = selected === item.id;
            return (
              <ListItem key={item.id} disablePadding sx={{ display: 'block', backgroundColor: isSelected ? 'rgba(255, 255, 255, 0.12)' : 'transparent' }}>
                <Link to={item.url} className="sidebar-link" style={{ textDecoration: "none", display: 'flex', alignItems: 'center', width: '100%', color: 'inherit' }}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                    "&:hover": {
                      backgroundColor: 'rgba(255, 255, 255, 0.08)',
                    },
                  }}
                  onClick={() => setSelected(item.id)}
                >
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: open ? 3 : 'auto',
                          justifyContent: 'center',
                          color: isSelected ? theme.palette.primary.main : 'inherit',
                        }}
                      >
                          {item.icon}
                      </ListItemIcon>
                      <ListItemText primary={item.page} sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
                  </Link>
              </ListItem>
            );
          })}
        </List>
        <Divider />
      </StyledDrawer>
    </Box>
  );
}


export default Sidebar;