import React, { useContext } from 'react';
import { DataContext } from './context';

const Albums = () => {

    const { data } = React.useContext(DataContext);
    console.log(data)
    return (
        <div>
            { data.map((album, index) => (
                <div key={album.id} >
                    {album.id} - {index} - {album.title}
                </div>
                ))                
            }
        </div>
    );
}

export default Albums;