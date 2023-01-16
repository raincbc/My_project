import React, { useState } from 'react'

export const FoodContext = React.createContext()

export const DataProvider = (props) => {
    const [activeMenu, setActiveMenu] = useState('');
    const [activeBasket, setActiveBasket] = useState(false);
    const getActiveMenu = (props) => {
        setActiveMenu(props)
    }

    const getActiveBasket = (props) => {
        setActiveBasket(props)
    }

    return (
        <FoodContext.Provider value={{
            activeMenu, getActiveMenu,
            activeBasket, getActiveBasket
        }}>
            {props.children}
        </FoodContext.Provider>
    )
}