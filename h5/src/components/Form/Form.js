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
        err: ''
    },
    {
        id: '2',
        name:'cvv',
        title: 'CVV',
        placeholder: '000',
        err: ''
    },
    {
        id: '3',
        name:'fullName',
        title: 'Your fullname',
        placeholder: 'Rick Sanchez',
        err: ''
    },
    {
        id: '4',
        name:'type',
        title: 'Visa or Mastercard',
        placeholder: 'Visa',
        err: ''
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
        if (!cardNum || +cardNum.length < 16) {
            setErr(prev=> ({...prev, cardNum:'Wrong card number'}))
        }

        if (!cvv || +cvv.length > 3 || +cvv.length < 3 ) {
            setErr(prev=> ({...prev, cvv:'Wrong cvv number'}))
        } else {
            
        }

        if (fullName === '') {
            setErr(prev=> ({...prev, fullName:'Wrong name'}))
        }

        if (type ==='' || !(type === 'Visa' || type === 'Mastercard')) {
            setErr(prev=> ({...prev, type:'Wrong card type'}))
        }
    }

    const { getCardsData } = useContext(CardsContext); 
    const navigate = useNavigate()

    const handelSubmit = (event)=> {
        event.preventDefault()

        const id = Date.now()
        const date = Math.floor(Math.random(1) * 12) + '/' + Math.floor(Math.random(22) * 35);

        setError()

        if (!setError) {
            getCardsData({ cardNum, cvv, fullName, type, id, date });

            navigate('/')
        }
    }

    const handleFocus = (event) => {
        event.target = setErr('')
    }

    const changeValue = (event) => {
        const name = event.target.name
        const value = event.target.value

        switch (name) {
            case 'cardNum':
                return setCardNum(value);
            
            case 'cvv':
                return setSvv(value);


            case 'fullName':
                return setFullName(value);


            case 'type':
                return setType(value);
            
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
            {formData.map(({ id, title, placeholder, name }) => (
                <FormInput
                    key={id}
                    title={title}
                    placeholder={placeholder}
                    name={name}
                    func={changeValue}
                    err={err[name]}
                    focus={handleFocus}
                    value={setValue(name)}
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