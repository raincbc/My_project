import React from "react";
import AlbumProvider, { DataContext } from "./context";

export default class Album2 extends React.Component{
    render() {
        return (
            <div>
                <DataContext.Consumer>
                    {albums => {
                        console.log(albums)
                        // albums.map((album, index) => (
                        //     <div key={album.id} >
                        //         {album.id} - {index} - {album.title}
                        //     </div>
                        // ))
                    }}
                 </DataContext.Consumer>
            </div>
        )
    }
}
