import React from 'react';
import { Routes , Route } from 'react-router-dom';
import './App.css';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import MainPage from './pages/MainPage';
// import LoaderContent from './components/LoaderContent';

export default class RouterApp extends React.Component{
  render() {
      return (
          <div className='App'>
              <Routes>
                  <Route path='/' element={<LoginPage/>} />
                  <Route path='/register' element={<RegisterPage/>} />
                  <Route path='/main' element={<MainPage/>}/>
              </Routes>
          </div>            
      )
  }
}