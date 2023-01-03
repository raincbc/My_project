import styled from "styled-components";

export const FormInput = ({ title, placeholder, name, err, func, value, type }) => {
    
    return (
        
        <InputWrapper>
            <Label>{ title }</Label>
            <Input
                name={name}
                placeholder={placeholder}
                onChange={func}
                value={value}
                type={type}
            />
            {err !== ''
                ? <span>{err}</span>
                : ''}            
        </InputWrapper>
    )
}

const InputWrapper = styled.div`
    
`;

const Input = styled.input`
    display:block;
    width: 514px;
    height: 76px;
    border:none;
    background: #E7D7EF;
    border-radius: 25px;
    margin-bottom:20px;
    padding-left: 23px;
    box-sizing:border-box;
    font-family: 'Abel';
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 38px;
    letter-spacing: 4.17391px;
    color: rgba(0, 0, 0, 0.44);

    &::placeholder {
        font-family: 'Abel';
        font-style: normal;
        font-weight: 400;
        font-size: 30px;
        line-height: 38px;
        letter-spacing: 4.17391px;
        color: rgba(0, 0, 0, 0.44);
    }

    
`;

const Label = styled.label`
    font-family: 'Abel';
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 38px;
    letter-spacing: 4.17391px;

    color: #010000;
`;

