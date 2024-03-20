import { useState } from 'react';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import {Box,Drawer,List, Divider, IconButton, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import {ChevronLeft, Menu as MenuIcon,Mail as MailIcon, Dashboard as DashboardIcon } from '@mui/icons-material';
import {tokens} from '../../theme'
import useMediaQuery from '@mui/material/useMediaQuery';
import Config from "../../config"
import logo from '../../assets/logo.png'
const drawerWidth = 240;
const menu = Config.SIDEBAR_ITEMS
const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));



const StyledDrawer = styled(Drawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    "& .MuiDrawer-docked": {
      backgroundColor: 'red'
    },
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [open, setOpen] = useState(false);
  const desktop = useMediaQuery("(min-width: 600px");
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <Box sx={{ display: 'flex' }}>
      <StyledDrawer variant="permanent" open={open}
        sx={{
        "& .MuiDrawer-paper": {
          backgroundColor: colors.mirage[300]
        }
            }}>
        {/* header */}
        <DrawerHeader>
        {
          open && desktop ? 
          <Box 
            sx={{
               display: 'flex', width: "100%", alignItems: "center",
              justifyContent: "space-between", }}>
            <img src={logo} alt={'logo'}  className='logo'/>
              <IconButton onClick={handleClose}>
                <ChevronLeft />
              </IconButton>
         
          </Box> 
          : !open && desktop ? 

            <IconButton onClick={handleOpen} >
              <MenuIcon/>
            </IconButton>
          :
            <IconButton>
            <img src={logo} alt={'logo'}  className='logo'/>
            </IconButton>
        }
        </DrawerHeader>  
        <Divider />


        <List>
          {menu.map((item, index) => (
            <ListItem key={item.id} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 50,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                    {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.page} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
    
      </StyledDrawer>
    
    </Box>
  );
}

export default Sidebar;