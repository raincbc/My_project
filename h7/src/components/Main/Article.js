import React from 'react'
import styled from 'styled-components'

const Article = ({ title, titleSrc, color }) => {

  return (
    <Container color={color}>
      <span>
        <img src={titleSrc} alt='' />        
      </span>
      <div>
        <p>{title}</p>
      </div>
    </Container>
  )
}

export default Article

const Container = styled.div`
  display:flex;
  align-items:center;
  
  &:not(:first-child){
    margin-top:20px;
  }

  span{
      border-radius: 15px;
      width: 60px;
      height: 60px;
      background-color:${props => props.color};
      text-align:center;
      margin-right:15px;
    }
    
    img{
      margin:50% auto;
      transform:translate(0, -50%);
    }
  }

  p{
    font-weight: 700;
    font-size: 14px;
    line-height: 18px;
    width:170px;
  }
`;

const ArticleContent = styled.div``;