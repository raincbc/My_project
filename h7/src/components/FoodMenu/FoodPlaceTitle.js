import styled from 'styled-components'
import filter from '../../assets/filter.svg'

const FoodPlaceTitle = () => {
  return (
      <Title>          
          <p>All Items</p>
          <img src={filter} alt='' />          
      </Title>      
    )    
}

export default FoodPlaceTitle

const Title = styled.div`
    display:flex;
    align-items: center;
    margin-left:60px;

    p{
        font-weight: 800;
        font-size: 24px;
        line-height: 27px;
        margin-right:30px;
    }
`;