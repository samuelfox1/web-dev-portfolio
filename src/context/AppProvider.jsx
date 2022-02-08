import React, { createContext } from 'react';
import appData from '../utils/appData.json'

export const AppContext = createContext(appData)

const AppProvider = ({ children }) => {
    return (
        <AppContext.Provider>
            {children}
        </AppContext.Provider>
    );
};

export default AppProvider;
