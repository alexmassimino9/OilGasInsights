import React, {useState, useContext,createContext,ReactNode} from "react";
import useMediaQuery from '@mui/material/useMediaQuery';
interface AppContextType {
    open: boolean;
    desktop: boolean;
    handleDrawerClose: () => void;
    handleDrawerOpen: () => void;
}

interface AppProviderProps {
    children: ReactNode;
}
const AppContext = createContext<AppContextType>({

open: true, 
desktop: false, 
handleDrawerClose: () => {}, 
handleDrawerOpen: () => {},
});

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
    const [open,setOpen] = useState(false);
    const desktop = useMediaQuery("(min-width:600px)");
    const handleDrawerClose = () => setOpen(false);
    const handleDrawerOpen = () => setOpen(true);

    return (
        <AppContext.Provider value={{open, desktop, handleDrawerClose, handleDrawerOpen}}>
            {children}
        </AppContext.Provider>
    );
}
export const useGlobalContext = () => {
    return useContext(AppContext);
  };
  
export { AppContext, AppProvider };
