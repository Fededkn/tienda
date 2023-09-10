// import ButtonComponent from './components/ButtonComponent/ButtonComponent';
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import {productsData} from "../json/ProductsData";

const Home = () => {
    return (
        <ItemListContainer productsData={productsData}/>
    )
}

export default Home