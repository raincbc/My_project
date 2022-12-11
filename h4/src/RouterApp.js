import React from "react";
import { Routes, Route, Link } from 'react-router-dom';
import Home from "./pages/Homepage";
import FirstTask from "./pages/Firstpage";
import SecondTask from "./pages/Secondpage";
import ThirdTask from "./pages/Thirdpage";


const links = [
    {
        id: '1',
        path: '/',
        title: 'Home'
    },

    {
        id: '2',
        path: '/first-task',
        title: 'First Task'
    },

    {
        id: '3',
        path: '/second-task',
        title: 'Second Task'
    },

    {
        id: '4',
        path: '/third-task',
        title: 'Third Task'
    },
]
export default class RouterApp extends React.Component{
    render() {
        return (
            <>
                <nav className="container">
                    <ul>
                        {links.map(({ id, path, title }) => (
                            <li key={id}>
                                <Link to={path}>{title}</Link>
                            </li>
                        ))}
                    </ul>   
                </nav>
                <div>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/first-task' element={<FirstTask />} />
                        <Route path='/second-task' element={<SecondTask />} />
                        <Route path='/third-task' element={<ThirdTask/>} />
                    </Routes>
                </div>            
            </>
        )
    }
}
