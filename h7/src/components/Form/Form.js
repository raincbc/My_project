import React from 'react'
import styled from 'styled-components';
import FormInput from './FormInput';
import { formData } from '../Data/FormData';
import FormBtn from './FormBtn';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom'

const Form = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleRegister = () => {
        navigate('/register')
    }

  return (
      <FormPlace>
          {formData.map(({ id, title, placeholder}) => (            
              <FormInput                  
                  key={id}
                  title={title}                  
                  placeholder={placeholder}  
                  location={location.pathname}
              />              
          ))}
          <FormBtn
              btnText={'Login'}
          />
          <CreateAccount
              onClick={handleRegister}
          >
              <button>don't have an account</button>
          </CreateAccount>
      </FormPlace>
  )
}

export default Form;

const FormPlace = styled.form`
    margin:0 auto;
    max-width:578px;
    padding:50px;
    background-color: white;
    border-radius: 35px;
    margin-top: 17px:
`;

const CreateAccount = styled.div`
    text-align:center;
    margin-top:10px;

    button{
        border: none;
        background-color: transparent;
        text-decoration: underline;
        color: black;
        font-weight: 700;
        font-size: 12px;
        line-height: 18px;
        cursor:pointer;
    }
`;