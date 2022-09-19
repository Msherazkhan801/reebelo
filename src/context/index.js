import { createContext,useState } from "react";

export const globalContext = createContext();

export const GlobalProvider = ({ children }) => {
    const [cartValue, setCartValue] = useState(1)
    return <globalContext.Provider value={{
        cartValue: cartValue,
        setCartValue:setCartValue,
    }}>{children}</globalContext.Provider>;
};