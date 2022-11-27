import React from "react";
import'../../index.css'
import { DataContext } from "./context";
import { WithData } from "./context";

export class Album2 extends React.Component{

    render() {
        return (
            <div>
                <div className="line"></div>
                <DataContext.Consumer>
                    {(albums) => {
                        return albums.map((album, index) => (
                            <div key={album.id} >
                                {album.id} - {index} - {album.title}
                            </div>
                        ))
                    }
                    }
                </DataContext.Consumer>
            </div>            
        )
    }
}
export class Album3 extends React.Component{

    handleSubmit = (event) => {
        event.preventDefault(); 
        const { album, num } = this.props;
        const userAlbums = album.slice(0, num);
        return userAlbums;         
    }

    changeValue = (event) => {        
        const inputValue = event.target.value;
        this.props.setNum(inputValue)
    }

    render() { 
        return (
            <div>
                <div className="line"></div>
                <div>
                    <div>
                        {(userAlbums) => {
                        return userAlbums.map((album, index) => (
                            <div key={album.id} >
                                {album.id} - {index} - {album.title}
                            </div>
                        ))
                    }
                    }
                        {this.userAlbums}
                    </div>
                    <div>                        
                        <form onSubmit={this.handleSubmit}>
                            <div>                                
                                <input
                                    placeholder="Enter number"
                                       onChange={this.changeValue}
                                ></input>
                            </div>
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                </div>               
            </div>            
        )
    }
}

export default WithData(Album3)