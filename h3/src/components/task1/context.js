import { render } from "@testing-library/react";
import { getValue } from "@testing-library/user-event/dist/utils";
import React from "react";
import Album2 from "./albums2";
import Album3 from "./albums2";

export const DataContext = React.createContext();

export default class AlbumProvider extends React.Component{
    state = {
        data: [],
        num: ''
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

    setNum = (data) => {
        console.log(data)
        this.setState({ num: data }) 
    }

    
    
    render() {
        const album = this.state.data
        const num = this.state.num
        return (
            < DataContext.Provider value={{ album, num, setNum:this.setNum }} >
                {this.props.children}
            </DataContext.Provider >
        )
    }   
}

export const WithData = (DataComponent) => {
    return class extends React.Component{
        render() {
            return (
                <DataContext.Consumer>
                    {(value) => {
                        return <DataComponent {...value} />
                    }}
                </DataContext.Consumer>
            )
        }
    }
}