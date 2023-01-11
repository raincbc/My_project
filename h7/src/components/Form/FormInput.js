
import styled from 'styled-components'

const FormInput = ({ title, placeholder, location, name, handleChange, values, touched, errors }) => {

  return (
      <InputWrapper location={location}>
          <Label>{ title }</Label>
          <Input
              name={name}
              placeholder={placeholder}
              onChange={handleChange}
              value={values.name}
              type={name}
              autoComplete={'on'}
          />
          {touched.name && errors.name ? <div>{errors}</div> : null}
      </InputWrapper>
  )
}

export default FormInput

const InputWrapper = styled.div`
    width:388px;
    margin:0 auto;

    :nth-child(3){
        ${(props) => props.location === "/register" ? 'display:block;' : 'display:none;'};
    }
`;

const Label = styled.label`
    display:block;
    font-weight: 700;
    font-size: 12px;
    line-height: 18px;
    margin-top:16px;
`;

const Input = styled.input`
    background: #F3F3F3;
    border-radius: 15px;
    border:none;
    width:100%;
    padding:16px 13px;
    box-sizing:border-box;

    ::placeholder{
        font-weight: 700;
        font-size: 11px;
        line-height: 18px;
        text-decoration-line: underline;
        color: #CC9696;
    }

    :focus {
        outline: 0;
        outline-offset: 0;
    }
`;
