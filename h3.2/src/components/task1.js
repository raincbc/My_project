import React, { useContext } from 'react';
import { DataContext } from './context';

const Albums = () => {

    const context = React.useContext(DataContext);
    console.log(context)
    return (
        <h1>xgzhyr</h1>
    );
}

export default Albums;