import React from "react";

export const DataContext = React.createContext()

export const UserProvider = (props) => {
    const album = []
    return <DataContext.Provider value={{}}>
        {props.children}
    </DataContext.Provider>
}