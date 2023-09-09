// import ButtonComponent from './components/ButtonComponent/ButtonComponent';
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import {ProductsData} from "../json/ProductsData";

const Home = () => {
    return (
        // <ItemListContainer greeting="¡Bienvenidx a Tienda Tech!" />
        <ItemListContainer productsData="ProductsData"/>
    )
}

export default Home