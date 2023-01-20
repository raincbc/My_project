import React, { useContext } from 'react';
import { Routes , Route } from 'react-router-dom';
import './App.css';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import MainPage from './pages/MainPage';
import { Navigate } from 'react-router-dom';
import { FoodContext } from './context/context';
// import LoaderContent from './components/LoaderContent';

const PrivateRouter = ({ children }) => {
    let { currentUser } = useContext(FoodContext)
    if (currentUser === null) {
        return <Navigate to="/"/>
    }
    return children
}

const App = () => {
    const { currentUser } = useContext(FoodContext)

      return (
          <div className='App'>
              <Routes>
                  <Route path='/' element={ currentUser ?
                      <Navigate to='/main'/> : <LoginPage />} />
                  <Route path='/register' element={<RegisterPage/>} />
                  <Route path='/main' element={
                      <PrivateRouter>                          
                          <MainPage />                         
                      </PrivateRouter>                  
                  }                      
                  />                  
                  <Route path='*' element={<Navigate to='/' />} />                  
              </Routes>              
          </div>            
      )
}

export default App