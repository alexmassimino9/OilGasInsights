import { CSSObject } from "@emotion/react";
import { Drawer, styled, Theme } from "@mui/material";
import Config from "../../config";

interface StyledDrawerProps {
    theme: Theme;
    open: boolean;
}
const openedMixin = (theme: Theme): CSSObject => ({
  width: Config.DRAWER_WIDTH,
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

const StyledDrawer = styled(Drawer, {
    shouldForwardProp: (prop) => prop !== 'open',
  })<StyledDrawerProps>(({ theme, open }) => ({
    width: Config.DRAWER_WIDTH,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    "& .MuiDrawer-docked": {
      backgroundColor: 'red',
    },
    ...(open ? openedMixin(theme) : closedMixin(theme)),
    '& .MuiDrawer-paper': open ? openedMixin(theme) : closedMixin(theme),
  }));
  
  export default StyledDrawer;