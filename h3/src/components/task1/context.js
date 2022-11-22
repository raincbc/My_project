import { render } from "@testing-library/react";
import React from "react";

export const DataContext = React.createContext();

export default class AlbumProvider extends React.Component{
    state = {
        data: []
    };

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/albums')
            .then(response => {
                if (response.ok) {
                    const res = response.json();
                    return res
                } else {
                    throw new Error('err');
                }   
            })            
            .then(res => this.setState({ data: res }))
            .catch(e => console.log(e));
    }
    
    render() {
        return (
            < DataContext.Provider value={this.state.data} >
                {this.props.children}
            </DataContext.Provider >
        )
    }   
}