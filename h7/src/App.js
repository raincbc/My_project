import React, { useContext } from 'react';
import { Routes , Route } from 'react-router-dom';
import './App.css';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import MainPage from './pages/MainPage';
import { Navigate } from 'react-router-dom';
import { FoodContext } from './context/context';
import LoaderContent from './components/LoaderContent';
import MenuPage from './pages/MenuPage';
import TrendingPage from './pages/TrendingPage';
import SettingsPage from './pages/SettingsPage';

const PrivateRouter = ({ children }) => {
    let { currentUser } = useContext(FoodContext)
    if (currentUser === null) {
        return <Navigate to="/"/>
    }
    return children
}

const App = () => {
    const { currentUser,isActiveMainMenu } = useContext(FoodContext)

      return (
          <div className='App'>
              <Routes>
                  <Route path='/' element={ currentUser ?
                      <Navigate to='/main'/> : <Navigate to='/login'/>} />
                  <Route path='/register' element={<RegisterPage />} />
                  <Route path='/login' element={<LoginPage />} />
                  <Route path='/menu' element={<MenuPage />} />
                  <Route path='/trending' element={<TrendingPage />} />
                  <Route path='/settings' element={<SettingsPage />} />
                  <Route path='/main' element={
                      <PrivateRouter>                          
                          <MainPage />
                      </PrivateRouter>                  
                  }                      
                  />                  
                  <Route path='*' element={<Navigate to='/' />} />
                  <Route path='/loader' element={<LoaderContent />} />
              </Routes>              
          </div>            
      )
}

export default App