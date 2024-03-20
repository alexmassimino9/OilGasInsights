import { ChevronLeft, Menu as MenuIcon } from "@mui/icons-material"
import { Box, IconButton, styled } from "@mui/material"
import { useGlobalContext } from "../../context/AppContext"
import Config from "../../config"
// const theme = useTheme();
const StyledDrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));
const DrawerHeader = () => {
const {open , desktop, handleDrawerClose, handleDrawerOpen} = useGlobalContext();
    return(<StyledDrawerHeader>
{
  open && desktop ? 
  <Box 
    sx={{
       display: 'flex', width: "100%", alignItems: "center",
      justifyContent: "space-between", }}>
    <img src={Config.LOGO} alt={'logo'}  className='logo'/>
      <IconButton onClick={handleDrawerClose}>
        <ChevronLeft />
      </IconButton>
 
  </Box> 
  : !open && desktop ? 
    <IconButton onClick={handleDrawerOpen} >
      <MenuIcon/>
    </IconButton>
  :
    <IconButton>
    <img src={Config.LOGO} alt={'logo'}  className='logo'/>
    </IconButton>
}
</StyledDrawerHeader> )
}

export default DrawerHeader