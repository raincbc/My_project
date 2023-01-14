import styled from 'styled-components'
import * as Img from '../Data/FoodMenuPhotos'

const FoodMenuItem = ({title, src, changeActiveItem, isActive}) => {
  return (
    <Container
      isActive={isActive}
      onClick={changeActiveItem}
    >
      <img src={Img[`${src}`]} alt=''/>
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
  background-color:${(props)=>props.isActive ? 'white' : '#F3F3F3'};
  list-style-type:none;
  cursor:pointer;
  box-shadow:${(props)=>props.isActive ? '0px 4px 46px rgba(0, 0, 0, 0.1)' : 'none'} ;

  img{
    position:absolute;
    top:30%;
    transform:translate(-50%, -50%)
  }

  p{
    margin-top:90px;
    font-weight: 500;
    font-size: ${(props)=>props.isActive ? '18px' : '#14px'};
    line-height: 65px;
    color: ${(props)=>props.isActive ? 'black' : '#585858'};
  }
`;
