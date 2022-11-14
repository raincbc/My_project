import React from "react";

const UserCard = (props) => {
    const { name, surname, age } = props.data;

    return (
        <div>
            <div>User Information:</div>
            <div>Name: {name}</div>
            <div>Surname: {surname}</div>
            <div>Age: {age}</div>
        </div>
    );
}

const UserCardText = (props) => {
    const { name, surname, age } = props.data;

    return (
        <div>My info:  {name}  {surname}  {age}</div>
    )
}

const Advisory = (props) => {
    const { name, age } = props.data;

    return (
        <div>Привет {name}, тебе {age} , я {age < 18 ? 'не могу' : 'могу'} налить тебе выпить</div>
    )
}


export default class FirstTask extends React.Component{
    state = {
        name: 'Denis',
        surname: 'Pshenychnyi',
        age: 36
    }

    render() {
        return (<div>
            <div>
                <UserCard data={this.state} />
            </div>
            <div>
                <UserCardText data={this.state} />
            </div>
            <div>
                <Advisory data={this.state} />
            </div>
        </div>
        )
    }
}
