import React, { useContext,createContext,ReactNode} from "react";

interface AppContextType {

}

interface AppProviderProps {
    children: ReactNode;
}
const AppContext = createContext<AppContextType>({

});

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {

    return (
        <AppContext.Provider value={{}}>
            {children}
        </AppContext.Provider>
    );
}
export const useGlobalContext = () => {
    return useContext(AppContext);
  };
  
export { AppContext, AppProvider };
