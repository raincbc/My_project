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
  animation: 1s ${(props) => props.loader ? animationIn : animationOut};
  
  div:nth-child(2){
    margin:0 auto;
  }

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

    @media (max-width: 1280px) {
      h1{
        width:300px;
      }
    }

    @media (max-width: 900px) {
      div:nth-child(2){
        text-align:center;
      }
      h1{
        font-size: 50px;
        line-height: 50px;
      }
    }

    @media (max-width: 400px) {
      h1{
        margin-top:70%;
        margin-bottom:0;
        font-size: 40px;
        line-height: 30px;
      }

      p{
        margin-top:10px;
        font-size: 20px;
        line-height: 55px;
      }
    }
`;

const Grapes = styled.img`
    position:absolute;
    top:385px;
    left:550px;

    @media (max-width: 1280px) {
      transform:scale(0.8);
      left:230px;
      top:340px;
    }

    @media (max-width: 1024px) {
      transform:scale(0.7);
      left:160px;
      top:330px;
    }

    @media (max-width: 900px) {
      transform:scale(0.6);
      left:100px;
      top:270px;
    }

    @media (max-width: 768px) {
      left:120px;
      top:300px;
    }

    @media (max-width: 400px) {
      left:75px;
    }
`;

const Discount = styled.img`
    position:absolute;
    top:65px;
    right:450px;

    @media (max-width: 1280px) {
        transform:scale(0.8);
        right:160px;
      }

    @media (max-width: 1024px) {
        transform:scale(0.7);
        right:100px;
      }

    @media (max-width: 900px) {
      transform:scale(0.6);
      right:50px;
      top:40px;
    }

    @media (max-width: 768px) {
      right:35px;
      top:0;
    }

    @media (max-width: 400px) {
      right:0;
    }

`;