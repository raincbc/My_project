import styled from 'styled-components'
import * as Img from './FoodMenuPhotos'

const FoodMenuItem = ({title, src}) => {
  return (
    <Container>
      <img src={Img[`${src}`]} />
      <p>{title}</p>
    </Container>
  )
}

export default FoodMenuItem


const Container = styled.li`
  position:relative;
  width: 100px;
  height: 160px;
  border-radius: 60px;
  background: #F3F3F3;
  list-style-type:none;
  cursor:pointer;

  img{
    position:absolute;
    top:30%;
    transform:translate(-50%, -50%)
  }

  p{
    margin-top:90px;
    font-weight: 500;
    font-size: 14px;
    line-height: 65px;
    color: #585858;
  }
`;
