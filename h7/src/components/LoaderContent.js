import styled from "styled-components"
import Title from "./Form/Title"
import discount from '../assets/discount.png'
import grapes from '../assets/grapes.png'
import { useContext } from "react"
import { FoodContext } from "../context/context"

const LoaderContent = () => {
  const { loader } = useContext(FoodContext);
  
  return (
      <Container>
          <Discount src={discount} alt=''/>
      <Title
        text={"Yelp App"}
        loader={loader}
      />
          <p>developed by Rain_cbc</p>
          <Grapes src={grapes} alt=''/>
    </Container>
  )
}

export default LoaderContent


const Container = styled.div`
  text-align:center;

    h1{
      margin-top:60%;
      font-weight: 800;
      font-size: 72px;
      line-height: 65px;
    }

    p{
      margin-top:20px;
      font-weight: 800;
      font-size: 24px;
      line-height: 65px;
    }
`;

const Grapes = styled.img`
    position:absolute;
    top:385px;
    left:550px;
`;

const Discount = styled.img`
    position:absolute;
    top:65px;
    right:450px;
`;