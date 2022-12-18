import React from "react";
import { Routes, Route } from 'react-router-dom';
import AddCard from './pages/AddCardPage'
import Start from "./pages/StartPage";

export default class RouterApp extends React.Component{
    render() {
        return (
            <div>
                <Routes>
                    <Route path='/' element={<Start />} />
                    <Route path='/add-card' element={<AddCard/>} />
                </Routes>
            </div>            
        )
    }
}
