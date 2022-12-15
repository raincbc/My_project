import Form from "../components/Form/Form";
import styled from "styled-components";
import Card from "../components/Card";
import { defaultCards } from "../components/Form/Form";

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

const AddCard = () => {
    return (
        <Container>
            <Title>
                Create a new card
            </Title>
            {defaultCards.slice(0, 1).map((elem) => (
                <Card
                    key={elem.id}
                    cardNum={elem.cardNum}
                    cvv={elem.cvv}
                    fullname={elem.fullname}
                    type={elem.type}
                    date={elem.date}
                />
            ))}
            <Form/>
        </Container>
        
    )
}

export default AddCard;