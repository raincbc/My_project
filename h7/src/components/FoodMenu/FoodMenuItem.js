import styled from 'styled-components'

const FoodMenuItem = ({title, src}) => {
  return (
    <Container>
      <Image src={src} />
      <p>{title}</p>
    </Container>
  )
}

export default FoodMenuItem


const Container = styled.li`
  width: 100px;
  height: 160px;
  border-radius: 60px;
  background: #F3F3F3;
  list-style-type:none;

  p{
    font-weight: 500;
    font-size: 14px;
    line-height: 65px;
    color: #585858;
  }
`;

const Image = styled.img``;
