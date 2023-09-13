// import React from 'react'
import Home from '../pages/Home';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NavBarComponent from '../components/NavBarComponent/NavBarComponent';
import Category from '../pages/Category';
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer';

const MainRouter = () => {
    return (
        <Router>
            <NavBarComponent/>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/category/:categoryId" element={<Category />}/>
                <Route path="/item/:productId" element={<ItemDetailContainer />}/>
            </Routes>
        </Router>
    )
}

export default MainRouter
