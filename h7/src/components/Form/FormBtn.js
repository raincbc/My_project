import styled from "styled-components"

const FormBtn = ({btnText, type, onClick}) => {
    return (
        <ButtonWrapper>
            <Button
                onClick={onClick}
                type={type}>
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

    @media (max-width: 400px) {
        padding:10px 0;
    }
`;