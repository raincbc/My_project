import styled, { keyframes } from "styled-components"
import Title from "./Form/Title"
import discount from '../assets/discount.png'
import grapes from '../assets/grapes.png'
import { useContext } from "react"
import { FoodContext } from "../context/context"
import { fadeOut, fadeIn } from "react-animations"

const LoaderContent = () => {
  const { faceLoader, loader } = useContext(FoodContext);

  return (
    <Container
    loader={loader}
    >
          <Discount src={discount} alt=''/>
      <Title
        text={"Yelp App"}
        faceLoader={faceLoader}
      />
          <p>developed by Rain_cbc</p>
          <Grapes src={grapes} alt=''/>
    </Container>
  )
}

export default LoaderContent

const animationOut = keyframes`
  ${fadeOut}
`;

const animationIn = keyframes`
  ${fadeIn}
`;

const Container = styled.div`
  text-align:center;
  animation: 1s ${(props)=> props.loader ? animationIn : animationOut};
  // transition: opacity 1s;

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