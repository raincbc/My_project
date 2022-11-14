import React from "react";

const UserCard = (props) => {
    return (
        <div>
            <div>User Information:</div>
            <div>Name: {props.props.name}</div>
            <div>Surname: {props.props.surname}</div>
            <div>Age: {props.props.age}</div>
        </div>
    );
}

const UserCardText = (props) => {
    return (
        <div>My info:  {props.props.name}  {props.props.surname}  {props.props.age}</div>
    )
}

const Advisory = (props) => {
    return (
        <div>Привет {props.props.name}, тебе {props.props.age} , я {(props.props.name < 18 ? 'не могу' : 'могу')} налить тебе выпить</div>
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
                <UserCard props={this.state} />
            </div>
            <div>
                <UserCardText props={this.state} />
            </div>
            <div>
                <Advisory props={this.state}/>
            </div>
        </div>
        )
    }
}
