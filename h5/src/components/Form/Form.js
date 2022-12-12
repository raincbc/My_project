import React, { useState } from "react";
import { FormInput } from './FormInput';
import styled from 'styled-components';
import VisaCard from "../../cards/Visa";
import { Link } from "react-router-dom";

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
        placeholder: 'VISA',
    },
]

const Container = styled.div`
    padding: 0 80px;
`;

const Title = styled.h4`
    font-family: 'Abel';
    font-style: normal;
    font-weight: 400;
    font-size: 48px;
    line-height: 61px;
    letter-spacing: 4.17391px;
`;

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


const Form = () => {
    
    const [cardNum, setCardNum] = useState('');
    const [cvv, setSvv] = useState('');
    const [fullName, setFullName] = useState('');
    const [type, setType] = useState('');

    const handelSubmit = (event)=> {
        event.preventDefault()
    }

    const changeValue = (event) => {
        const name = event.target.name
        const value = event.target.value

        console.log(name, value)
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
        <Container>
            <Title>
                Create a new card
            </Title>
            <VisaCard/>
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
                <Link to="/my-cards">
                    <Button type="submit">
                        Add Card
                    </Button>
                </Link>
            </FormList>
        </Container>
    )

}

export default Form;