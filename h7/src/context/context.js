import React, { useState } from 'react'
import { menuData } from '../components/Data/MainData';

export const FoodContext = React.createContext()

export const DataProvider = (props) => {
    const [activeMenu, setActiveMenu] = useState('');
    const [activeBasket, setActiveBasket] = useState(false);
    const [isActiveMainMenu, setIsActiveMainMenu] = useState(menuData[0]);
    const [selectedFoodItem, setSelectedFoodItem] = useState([]);
    const [chosenFoodElem, setChosenFoodElem] = useState(false);
    const [selectedItem, setSelectedItem] = useState('');

    const getActiveMenu = (props) => {
        setActiveMenu(props)
    }

    const getActiveBasket = (props) => {
        setActiveBasket(props)
    }

    const getActiveMainMenu = (props) => {
        setIsActiveMainMenu(props)
    }

    const getSelectedFoodItem = (item) => {
        setSelectedFoodItem(prevState => {
            item.count = 1
            return [...prevState, item]
        })
    }

    const getSelectedItem = (props) => {
        setSelectedItem(props)
    }

    return (
        <FoodContext.Provider value={{
            activeMenu, getActiveMenu,
            activeBasket, getActiveBasket,
            isActiveMainMenu, getActiveMainMenu,
            selectedFoodItem, getSelectedFoodItem,
            chosenFoodElem, setChosenFoodElem,
            selectedItem, getSelectedItem,
            setSelectedFoodItem,
        }}>
            {props.children}
        </FoodContext.Provider>
    )
}