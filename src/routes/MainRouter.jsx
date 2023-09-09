<<<<<<< HEAD
// import React from 'react'
import Home from '../pages/Home';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NavBarComponent from '../components/NavBarComponent/NavBarComponent';
import Category from '../pages/Category';
=======
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "../pages/Home"
import NavBarComponent from "../components/NavBarComponent/NavBarComponent"
import Category from ".../pages/Category"

>>>>>>> d569e9762616fef27b7860a21d47c6e5de136bb7

const MainRouter = () => {
    return (
        <Router>
            <NavBarComponent/>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/category/:categoryId" element={<Category />}/>
            </Routes>
        </Router>
    )
}

export default MainRouter
