import React, { useState, useContext } from "react";
import { FormInput } from './FormInput';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import Card from "../Card";
import MyCards from "../MyCards";
import { CardsContext } from "../../context/context";

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
        placeholder: 'Rick Sanchez',
    },
    {
        id: '4',
        name:'type',
        title: 'Visa or Mastercard',
        placeholder: 'Visa',
    },
]

const FormList = styled.form`
    
`;

const Button = styled.button`
    width: 514px;
    height: 76px;
    background: #AA24E9;
    border-radius: 25px;
    border:none;
    font-family: 'Abel';
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 38px;
    letter-spacing: 4.17391px;
    color: #FFFFFF;
    box-sizing:border-box;
    margin-top:40px;
    cursor:pointer;
`;

export const defaultCards = [
    {
        id: '1',
        cardNum: '9572840914367518',
        cvv: '315',
        fullname: 'Rick Sanchez',
        type: 'Visa',
        date: '12/26'
    },
    {
        id: '2',
        cardNum: '4964937567696764',
        cvv: '681',
        fullname: 'Mortie Smith',
        type: 'Mastercard',
        date: '12/26'
    }
]

const Form = () => {
    
    const [cardNum, setCardNum] = useState('');
    const [cvv, setSvv] = useState('');
    const [fullName, setFullName] = useState('');
    const [type, setType] = useState('');

    const { setNum } = useContext(CardsContext);
    

    const handelSubmit = (event)=> {
        event.preventDefault()
        setNum([cardNum, cvv, fullName, type ])
    }

    const changeValue = (event) => {
        const name = event.target.name
        const value = event.target.value

        switch (name) {
            case 'cardNum':
                return setCardNum({cardNum:value});
            
            case 'cvv':
                return setSvv({cvv:value});


            case 'fullName':
                return setFullName({fullName:value});


            case 'type':
                return setType({type:value});
            
            default:
                alert('1')
        }
    }

    return (
        <FormList onSubmit={handelSubmit}>
            {formData.map(({ id, title, placeholder, name }) => (
                <FormInput
                    key={id}
                    title={title}
                    placeholder={placeholder}
                    name={name}
                    func={changeValue}
                />
            ))}
            {/* <Link to="/my-cards"> */}
                <Button type="submit">
                    Add Card
                </Button>
            {/* </Link> */}
        </FormList>
    )
}

export default Form;