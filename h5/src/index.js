import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import RouterApp from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { CardsProvider } from './context/context';

// const setNum = (props) => {
//         console.log(props)
//     }
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CardsProvider>
      <Router>
        <RouterApp />
      </Router>
    </CardsProvider>
  </React.StrictMode>
);

