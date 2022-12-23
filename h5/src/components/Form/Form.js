import React, { useState, useContext } from "react";
import { FormInput } from './FormInput';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import { CardsContext } from "../../context/context";

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

const Form = () => {
    
    const [cardNum, setCardNum] = useState('');
    const [cvv, setSvv] = useState('');
    const [fullName, setFullName] = useState('');
    const [type, setType] = useState('');
    const [err, setErr] = useState({
        cardNum: '',
        cvv: '',
        fullName: '',
        type: ''
    })
    
    const setError = () => {
        let isErr = false;

        if (!cardNum || cardNum.length < 16) {
            setErr(prev => ({ ...prev, cardNum: 'Wrong card number' }))
            isErr = true
        }

        if (!cvv || cvv.length > 3 || cvv.length < 3 ) {
            setErr(prev => ({ ...prev, cvv: 'Wrong cvv number' }))
            isErr = true
        }

        if (fullName === '') {
            setErr(prev => ({ ...prev, fullName: 'Wrong name' }))
            isErr = true
        }

        if (type ==='' || !(type === 'Visa' || type === 'Mastercard')) {
            setErr(prev => ({ ...prev, type: 'Wrong card type' }))
            isErr = true
        }

        return isErr;
    }

    const { getCardsData } = useContext(CardsContext); 
    const navigate = useNavigate()

    const handelSubmit = (event)=> {
        event.preventDefault()

        const id = Date.now()
        const date = Math.floor(Math.random(1) * 12) + '/' + Math.floor(Math.random(22) * 35);

        if (!setError()) {
            getCardsData({ cardNum, cvv, fullName, type, id, date });

            navigate('/')
        }
    }

    const changeValue = (event) => {
        const name = event.target.name
        const value = event.target.value

        switch (name) {
            case 'cardNum':
                setCardNum(value);
                if(err.cardNum) setErr(prevState => ({...prevState, cardNum:''}))
                return 
            
            case 'cvv':
                setSvv(value);
                if(err.cvv) setErr(prevState => ({...prevState, cvv:''}))            
                return 

            case 'fullName':
                setFullName(value);
                if(fullName.cardNum) setErr(prevState => ({...prevState, fullName:''}))            
                return

            case 'type':
                setType(value);
                if(err.type) setErr(prevState => ({...prevState, type:''}))
                return
            
            default:
                alert('1')
        }
    }

    const setValue = (name) => {
        switch (name) {
            case 'cardNum':
                return cardNum;
            
            case 'cvv':
                return cvv;


            case 'fullName':
                return fullName;


            case 'type':
                return type;
            
            default:
                alert('1')
        }
    }

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