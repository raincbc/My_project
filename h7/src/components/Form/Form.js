import React, { useContext } from 'react'
import styled from 'styled-components';
import FormInput from './FormInput';
import { formData } from '../Data/FormData';
import FormBtn from './FormBtn';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom'
import { useFormik } from 'formik';
import { loginValidationSchema, passwordValidationSchema } from '../Data/FormData';
import * as Yup from 'yup';
import { FoodContext } from '../../context/context';

const Form = ({ btnText, nav}) => {
    const navigate = useNavigate();
    const location = useLocation();
    const { setStartApp } = useContext(FoodContext);
    const setLoadingDelay = () => {
        setTimeout(() => setStartApp(true), 1000)
    }

    const { handleSubmit, handleChange, values, touched, errors } = useFormik({
        initialValues: {
            login: '',
            password: '',
            confirmPassword: '',
        },

        validationSchema: Yup.object(location.pathname === '/' ?
                loginValidationSchema : Object.assign(loginValidationSchema, passwordValidationSchema) ),

        onSubmit: (values) => {
            // setStartApp(true)
            navigate(nav)
            setLoadingDelay()
            
            
        }
    })

    const handleRegister = () => {
        navigate('/register')
    }

  return (
      <FormPlace onSubmit={handleSubmit}>
          {formData.map(({ id, title, placeholder, name}) => (            
              <FormInput    
                  name={name}
                  key={id}
                  title={title}                  
                  placeholder={placeholder}  
                  location={location.pathname}
                  handleChange={handleChange}
                  values={values}
                  isTouched={touched[name]}
                  error={errors[name]}
              />              
          ))}
          <FormBtn
              btnText={btnText}
          />
          <CreateAccount
              location={location.pathname}
              onClick={handleRegister}
          >
              <button type='button'>don't have an account</button>
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

    ${(props) => props.location === "/register" ? 'display:none;' : 'display:block;'};

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