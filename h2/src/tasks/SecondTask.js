

import React from "react";

export default class UserForm extends React.Component{
    state = {
        name: '',
        surname: '',
        error:''
    }

    handleSubmit = (event) => {
        event.preventDefault();
    };

    handleChange = (event) => {
    }

    changeValue = (event) => {
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
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}