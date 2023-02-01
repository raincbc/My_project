import React, { useEffect, useState } from 'react'

export const FoodContext = React.createContext()

export const DataProvider = (props) => {
    const [activeMenu, setActiveMenu] = useState(null);
    const [activeBasket, setActiveBasket] = useState(false);
    const [slideBasket, setSlideBasket] = useState(false);
    const [isActiveMainMenu, setIsActiveMainMenu] = useState('');
    const [selectedFoodItem, setSelectedFoodItem] = useState(
        localStorage.getItem('chosenFood')
            ? JSON.parse(localStorage.getItem('chosenFood'))
            : []
    );
    const [chosenFoodElem, setChosenFoodElem] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [finishOrder, setFinishOrder] = useState(false);
    const [currentUser, setCurrentUser] = useState(
        localStorage.getItem('user')
            ? JSON.parse(localStorage.getItem('user'))
            : null
    );
    const faceLoader = true;
    const [loader, setLoader] = useState(true);
    const [menu, setMenu] = useState(false);


    useEffect(() => {
        if (currentUser === null) {
            localStorage.setItem('user',  JSON.stringify(null));
        } else {
            localStorage.setItem('user', JSON.stringify(currentUser));
        }
    }, [currentUser]);

    const getActiveBasket = (props) => {
        setActiveBasket(props)
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
            isActiveMainMenu, setIsActiveMainMenu,
            selectedFoodItem, getSelectedFoodItem,
            chosenFoodElem, setChosenFoodElem,
            selectedItem, getSelectedItem,
            setSelectedFoodItem, finishOrder,
            setFinishOrder, currentUser, setCurrentUser,
            loader, setLoader, faceLoader,
            menu, setMenu, slideBasket, setSlideBasket,
        }}>
            {props.children}
        </FoodContext.Provider>
    )
}