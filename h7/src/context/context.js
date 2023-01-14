import React, { useState } from 'react'

export const FoodContext = React.createContext()

export const DataProvider = (props) => {
    const [activeMenu, setActiveMenu] = useState('')
    console.log(activeMenu)
    const getActiveMenu = (props) => {
        setActiveMenu(props)
    }

    return (
        <FoodContext.Provider value={{activeMenu, getActiveMenu}}>
            {props.children}
        </FoodContext.Provider>
    )
}