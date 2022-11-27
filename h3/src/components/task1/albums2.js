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
class Album3 extends React.Component{
    state = {
        num:'',
        visible:[]
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { album } = this.props;
        const userAlbums = album.slice(0, this.state.num);
        this.setState({visible:userAlbums})
    }

    changeValue = (event) => {  
        const inputValue = event.target.value;
        this.setState({num:inputValue})
    }

    render() { 
        const albums = this.state.visible;
        return (
            <div>
                <div className="line"></div>
                <div>
                    <div>
                        {albums.map((album, index) => (
                            <div key={album.id} >
                                {album.id} - {index} - {album.title}
                            </div>
                        ))
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