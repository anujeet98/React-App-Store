import MainForm from "./MainForm";
import MainBody from "./MainBody";
import ProductProvider from "../../contexts/store/ProductProvider";


const Meals = () => {
    return (
        <ProductProvider>
            <MainForm />
            <MainBody />
        </ProductProvider>
        );
    };

export default Meals;