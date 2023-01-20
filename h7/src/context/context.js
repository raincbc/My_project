import React, { useEffect, useState } from 'react'
import { menuData } from '../components/Data/MainData';

export const FoodContext = React.createContext()

export const DataProvider = (props) => {
    const [activeMenu, setActiveMenu] = useState('');
    const [activeBasket, setActiveBasket] = useState(false);
    const [isActiveMainMenu, setIsActiveMainMenu] = useState(menuData[0]);
    const [selectedFoodItem, setSelectedFoodItem] = useState([]);
    const [chosenFoodElem, setChosenFoodElem] = useState(false);
    const [selectedItem, setSelectedItem] = useState('');
    const [finishOrder, setFinishOrder] = useState(false);
    const [currentUser, setCurrentUser] = useState(
        localStorage.getItem('user')
            ? JSON.parse(localStorage.getItem('user'))
            : null
    );

    useEffect(() => {
        if (currentUser === null) {
            localStorage.setItem('user', 'null')
        } else {
            localStorage.setItem('user', JSON.stringify(currentUser))
        }
    }, [currentUser]);

    // const getActiveMenu = (props) => {
    //     setActiveMenu(props)
    // }

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
            activeMenu, setActiveMenu,
            activeBasket, getActiveBasket,
            isActiveMainMenu, getActiveMainMenu,
            selectedFoodItem, getSelectedFoodItem,
            chosenFoodElem, setChosenFoodElem,
            selectedItem, getSelectedItem,
            setSelectedFoodItem, finishOrder,
            setFinishOrder, currentUser, setCurrentUser,
        }}>
            {props.children}
        </FoodContext.Provider>
    )
}