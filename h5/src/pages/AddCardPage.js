import Form from "../components/Form/Form";
import styled from "styled-components";
// import Card from "../components/Card";
// import { defaultCards } from "../data/data";
import React, { useState, useContext } from "react";
import { CardsContext } from "../context/context";
import { useNavigate } from "react-router-dom";
import AddCardCard from "../components/AddCardCard";

const AddCard = () => {

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
        <Container>
            <Title>
                Create a new card
            </Title>
                <AddCardCard
                    cardNum={cardNum}
                    cvv={cvv}
                    fullName={fullName}
                    type={type}

                />
            <Form
                handelSubmit={handelSubmit}
                changeValue={changeValue}
                err={err}
                setValue={setValue}
            />
        </Container>
        
    )
}

export default AddCard;

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