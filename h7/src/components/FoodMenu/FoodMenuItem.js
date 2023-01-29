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
  height: 150px;
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

  @media (max-width: 1280px) {
    width: 80px;
    height: 130px;

    img{
      top:35%;
      max-width:70px;
    }

    p{
      margin-top:60px;
    }
  }

  @media (max-width: 1024px) {
    width: 60px;
    height: 100px;

    img{
      transform:scale(0.8) translate(-60%, -70%);
    }

    p{
      margin-top:40px;
    }
  }

  @media (max-width: 768px) {
    width:80px;
    height: 140px;

    p{
      margin-top:60px;
    }

    img{
      transform:scale(0.5) translate(-100%, -100%) ;
      top:30px;
    }
  }

  @media (max-width: 650px) {
    width:60px;
    height: 100px;

    p{
      margin-top:40px;
    }
  }

  @media (max-width: 400px) {
    width:50px;
  }
`;
