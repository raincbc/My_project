import React from "react";

const BASE_URL1 = 'https://jsonplaceholder.typicode.com/users';

export const DataContext = React.createContext();

export default class UsersProvider extends React.Component{
    state = {
        users: [],
    };

    componentDidMount() {
        fetch(BASE_URL1)
            .then(response => {
                if (response.ok) {
                    const res = response.json();
                    return res
                } else {
                    throw new Error('err');
                }   
            })            
            .then(res => this.setState({ users: res }))
            .catch(e => console.log(e));
    }
    
    render() {
        const users = this.state.users
        return (
            < DataContext.Provider value={{ users }} >
                {this.props.children}
            </DataContext.Provider >
        )
    }   
}

export const withUsers = (WrappedComponent) => {
    return class extends React.Component{
        render() {
            return (
                <DataContext.Consumer>
                    {(value) => {
                        return <WrappedComponent {...this.props} {...value} />
                    }}
                </DataContext.Consumer>
            )
        }
    }
}