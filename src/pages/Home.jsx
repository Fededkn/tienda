<<<<<<< HEAD
// import ButtonComponent from './components/ButtonComponent/ButtonComponent';
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import {ProductsData} from "../json/ProductsData";

const Home = () => {
    return (
        // <ItemListContainer greeting="¡Bienvenidx a Tienda Tech!" />
        <ItemListContainer productsData="ProductsData"/>
=======
import ButtonComponent from "../components/ButtonComponent";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";

const Home = () => {
    return (
        <ItemListContainer greeting="¡Bienvenidx a Tienda Tech!" />
>>>>>>> d569e9762616fef27b7860a21d47c6e5de136bb7
    )
}

export default Home