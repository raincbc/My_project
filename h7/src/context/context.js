import React, { useState } from 'react'
import { menuData } from '../components/Data/MainData';

export const FoodContext = React.createContext()

export const DataProvider = (props) => {
    const [activeMenu, setActiveMenu] = useState('');
    const [activeBasket, setActiveBasket] = useState(false);
    const [isActiveMainMenu, setIsActiveMainMenu] = useState(menuData[0])

    const getActiveMenu = (props) => {
        setActiveMenu(props)
    }

    const getActiveBasket = (props) => {
        setActiveBasket(props)
    }

    const getActiveMainMenu = (props) => {
        setIsActiveMainMenu(props)
    }

    return (
        <FoodContext.Provider value={{
            activeMenu, getActiveMenu,
            activeBasket, getActiveBasket,
            isActiveMainMenu, getActiveMainMenu
        }}>
            {props.children}
        </FoodContext.Provider>
    )
}