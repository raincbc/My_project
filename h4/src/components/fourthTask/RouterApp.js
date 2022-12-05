import React from "react";
import UsersData from '../firstTask/UsersData';
import UsersProvider from "../context/DataContext";
import AllPosts from "../thirdTask/AllPosts";
import LoaderHOC from "../secondTask/LoaderHOC";
import { Routes, Route, Link } from 'react-router-dom';
import photo from '../../assets/photo.jpg'

const Home = () => {
    return (
        <div className="image-container" >
            <img src={photo} />
        </div>
    )
}

const FirstTask = () => {
    return (
        <div>
            <UsersProvider>
                <UsersData />
            </UsersProvider>
        </div>
    )
}

const SecondTask = () => {
    return (
        <div>
            <LoaderHOC/>
        </div>
    )
}

const ThirdTask = () => {
    return (
        <div>
            <AllPosts/>
        </div>
    )
}

export default class RouterApp extends React.Component{
    render() {
        return (
            <div>
                <div className="container">
                    <Link to='/'>Home</Link>
                    <Link to='/first-task'>First Task</Link>
                    <Link to='/second-task'>Second Task</Link>
                    <Link to='/third-task'>Third Task</Link>
                </div>
                <div>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/first-task' element={<FirstTask />} />
                        <Route path='/second-task' element={<SecondTask />} />
                        <Route path='/third-task' element={<ThirdTask/>} />
                    </Routes>
                </div>            
            </div>
        )
    }
}
