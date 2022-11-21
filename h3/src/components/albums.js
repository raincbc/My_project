import React from "react";

export default class Album extends React.Component{
    state = {
        data:[]
    };

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/albums')
            .then(response => {
                if (response.ok) {
                    return response.json(); 
                } else {
                    throw new Error('err');
                }   
            })
            .then(result => this.setState({ data: result }))
        console.log(this.state)
    }

    render() {
        return (
            <div></div>
        )
    }
}