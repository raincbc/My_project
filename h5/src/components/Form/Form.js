import React from "react";
import { FormInput } from './FormInput'

const formData = [
    {
        id: '1',
        name:'cardNum',
        title: 'Card number',
        placeholder: '0000000000000000',
    },
    {
        id: '2',
        name:'cvv',
        title: 'CVV',
        placeholder: '000',
    },
    {
        id: '3',
        name:'fullName',
        title: 'Your fullname',
        placeholder: 'John Smith',
    },
    {
        id: '4',
        name:'type',
        title: 'VISA or MASTERCARD',
        placeholder: '0000000000000000',
    },
]

export default class Form extends React.Component{
    state = {
        cardNum: '',
        cvv: '',
        fullName: '',
        type:''
    }

    handelSubmit(event) {
        event.preventDefault()
    }

    changeValue(event) {
        console.log(event.target.name)
        console.log(event.target.value)
        // this.setState({
        //     [event.target.name]: event.target.value
        // })
    }

    render() {
        return (
            <form onSubmit={this.handelSubmit}>
                {formData.map(({ id, title, placeholder, name }) => (
                    <FormInput
                        key={id}
                        data={{ title, placeholder, name, func:this.changeValue }}
                    />
                ))}
                <button type="submit">Add Card</button>
            </form>
        )
    }
}