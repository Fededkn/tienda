// import React from 'react'
import Home from '../pages/Home';
import NavBarComponent from '../components/NavBarComponent/NavBarComponent';
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ItemCount from '../components/ItemCount/ItemCount';
// import Category from '../pages/Category';


const MainRouter = () => {
    return (
        <Router>
            <NavBarComponent/>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/category/:categoryId" element={<ItemListContainer greeting='Bienvenidxs!' />}/>
                <Route path="/item/:id" element={<ItemDetailContainer />}/>
            </Routes>
        </Router>
    )
}

export default MainRouter
