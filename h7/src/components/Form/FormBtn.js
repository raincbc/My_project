import styled from "styled-components"

const FormBtn = ({btnText}) => {
    return (
        <ButtonWrapper>
            <Button type='submit'>
                {btnText}
            </Button>
        </ButtonWrapper>
    )
    
}

export default FormBtn

const ButtonWrapper = styled.div`
    text-align:center;
    margin-top:37px;
`;

const Button = styled.button`
    width:165px;
    padding: 16px 0;
    background: #2D9CDB;
    border-radius: 15px;
    color:white;
    border:none;
    box-sizing:border-box;
    cursor:pointer;
    font-weight: 700;
    font-size: 14px;
    line-height: 18px;
`;