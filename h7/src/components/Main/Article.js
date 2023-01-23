import React from 'react'
import styled from 'styled-components'
import ava1 from '../../assets/ava1.svg'
import ava2 from '../../assets/ava2.svg'
import like from '../../assets/like.svg'

const Article = ({ title, titleSrc, color, count }) => {

  return (
    <Container color={color}>
      <span>
        <ArticleImg src={titleSrc} alt='' />        
      </span>
      <ArticleContent>
        <p>{title}</p>
        <div>
          <img src={ava2} alt=''/>
          <img src={ava1} alt=''/>
          <span>
            <img src={like} alt=''/>
            <span>{count}+</span>
          </span>
        </div>
      </ArticleContent>
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

  &>span{
    border-radius: 15px;
    width: 60px;
    height: 60px;
    background-color:${props => props.color};
    text-align:center;
    margin-right:15px;
    }
  }
`;

const ArticleImg = styled.img`
  margin:50% auto;
  transform:translate(0, -50%);
`;

const ArticleContent = styled.div`
  p{
    font-weight: 700;
    font-size: 14px;
    line-height: 18px;
    width:170px;
  }

  div{
    position:relative;
    display:flex;
    align-items:center;

    img:nth-child(2){
      position:absolute;
      left:18px;
    }

    &>span{
      position:absolute;
      left:16px;
      margin-left:20px;
      background: #FFF8D5;
      border: 1px solid #FFFFFF;
      border-radius: 15px;
      padding:3px  11px 5px 8px;
      box-sizing:border-box;
      display:flex;
      align-items:center;
      

      span{
        font-weight: 800;
        font-size: 10px;
        line-height: 12px;
        margin-top:4px;
        margin-left:8px;
      }
    }
}
`;
