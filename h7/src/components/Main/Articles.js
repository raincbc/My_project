import React, { useContext } from 'react'
import styled from 'styled-components'
import { articlesData } from '../Data/ArticlesData'
import Article from './Article'
import Title from '../Form/Title'
import { FoodContext } from '../../context/context'
import Arrow from './Arrow'

const Articles = () => {
  const {loader} = useContext(FoodContext)
  return (
    <Container>
      <ArticlesTitle>
        <Title
          text={'Articles'}
          loader={loader}
        />
        <span>
          <Arrow />
        </span>
      </ArticlesTitle> 
      {articlesData.map((elem) => (
        <Article
          key={elem.id}
          title={elem.title}
          titleSrc={elem.titleSrc}
          color={elem.color}
        />
      ))}
    </Container>
  )
}

export default Articles

const Container = styled.div`
  height: 415px;
  padding-left:90px;
  margin-top:40px;
  box-sizing:border-box;
  padding-right:30px;

  h1{
    font-weight: 800;
    font-size: 24px;
    line-height: 27px;
    padding-top:0;
    width:100px
  }

  
`;

const ArticlesTitle = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
  margin-bottom:15px;

  span{
    background: #F5F6F7;
    border-radius: 15px;
    width:46px;
    height:46px;
    cursor:pointer;
  }
`;