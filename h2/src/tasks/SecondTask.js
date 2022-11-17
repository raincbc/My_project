

import React from "react";

export default class UserForm extends React.Component{
    state = {
        name: '',
        surname: '',
        error:''
    }

    handleSubmit = (event) => {
        event.preventDefault();
        
        if (!this.state.name) {
            this.setState({error:'You don\'t enter name'})
        } else if (!this.state.surname) {
            this.setState({error:'You don\'t enter surname'})
        } else {
            
            alert(`Добро пожаловать ${this.state.surname} ${this.state.name}`)
            this.setState({
                name: '',
                surname: '',
                error:''
            })
        }
    };

    handleChange = (event) => {
    }

    changeValue = (event) => {
        this.setState({error:''})
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input
                            placeholder="name"
                            name="name"
                            onChange={this.changeValue}
                            value={this.state.name}></input>
                    </div>
                    <div>
                        <input
                            placeholder="surname"
                            name="surname"
                            onChange={this.changeValue}
                            value={this.state.surname}></input>
                    </div>
                    <span name="error">{ this.state.error}</span>
                    <button type="submit" >Submit</button>
                </form>
            </div>
        )
    }
}