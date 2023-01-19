// import React, { useState, useContext } from "react";
import { FormInput } from './FormInput';
import styled from 'styled-components';
// import { useNavigate } from "react-router-dom";
// import { CardsContext } from "../../context/context";

const formData = [
    {
        id: '1',
        name:'cardNum',
        title: 'Card number',
        placeholder: '0000000000000000',
        type: 'number'
    },
    {
        id: '2',
        name:'cvv',
        title: 'CVV',
        placeholder: '000',
        type: 'number'
    },
    {
        id: '3',
        name:'fullName',
        title: 'Your fullname',
        placeholder: 'Rick Sanchez',
        type: 'text'
    },
    {
        id: '4',
        name:'type',
        title: 'Visa or Mastercard',
        placeholder: 'Visa',
        type: 'text'
    },
]

const Form = ({handelSubmit, changeValue, err, setValue}) => {

    return (        
        <FormList onSubmit={handelSubmit}>
            {formData.map(({ id, title, placeholder, name, type }) => (
                <FormInput
                    key={id}
                    title={title}
                    placeholder={placeholder}
                    name={name}
                    func={changeValue}
                    err={err[name]}
                    value={setValue(name)}
                    type={type}
                />
            ))}
            <Button type="submit">
                Add Card
            </Button>
        </FormList>
    )
}

export default Form;

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