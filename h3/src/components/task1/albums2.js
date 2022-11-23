import React from "react";
import'../../index.css'
import { DataContext } from "./context";
import { WithData } from "./context";

export default class Album2 extends React.Component{
    
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
                    {}
                </DataContext.Consumer>
            </div>            
        )
    }
}

export class Album3 extends React.Component{
    handleSubmit = (event) => {
        event.preventDefault();
    }

    changeValue = (event) => {
        const inputValue = event.target.value;
        console.log(inputValue)
        return inputValue;
    }

    render() {
        return (
            <div>
                <div className="line"></div>
                    <div>
                    <div>
                        <WithData>
                            <form onSubmit={this.handleSubmit}>
                                <div>                                
                                    <input
                                        placeholder="Enter number"
                                        onChange={this.changeValue}
                                    ></input>
                                </div>
                                <button type="submit">Submit</button>
                            </form> 
                        </WithData>
                    </div>                                 
                </div>                
            </div>
        )
    }
}

