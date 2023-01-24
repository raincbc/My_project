import styled from 'styled-components'
import filter from '../../assets/filter.svg'

const FoodPlaceTitle = ({title}) => {
  return (
      <Title>          
          <p>{title} Items</p>
          <img src={filter} alt='' />          
      </Title>      
    )    
}

export default FoodPlaceTitle

const Title = styled.div`
    display:flex;
    align-items: center;
    margin-left:60px;
    margin-bottom:10px;

    p{
        font-weight: 800;
        font-size: 24px;
        line-height: 27px;
        margin-right:30px;
    }

    img{
        cursor:pointer;
    }

    @media (max-width: 1280px) {
        margin-left:25px;
    }

    @media (max-width: 768px) {
        p{
            font-size: 18px;
            line-height: 20px;
        }

        img{
            transform:scale(0.8);
        }
    }
`;