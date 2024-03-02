
import { useContext } from 'react';
import Button from '../../UI/Button';
import classes from './CandyItem.module.css';
import CartContext from '../../../contexts/store/cart-context';

const CandyItem = (props) => {
    const cartCtx = useContext(CartContext);

    const addToCartHandler = (qty) => {
        const cartItem = {...props.item, quantity: qty};
        delete cartItem.description;  //removed description: as not required in cart
        cartCtx.addItem(cartItem);
    }
    return (
        <li className={classes.item}>
            <div className={classes.itemContent}>
                <span className={classes["name"]}>{props.item.name}</span>
                <span className={classes["description"]}>{props.item.description}</span>
                <span className={classes["price"]}>Rs. {props.item.price}</span>
                <div className={classes.actionGrp}>
                    <Button attributes={{className: classes.buyBtn, onClick: ()=>{addToCartHandler(1)}}}>Buy 1</Button>
                    <Button attributes={{className: classes.buyBtn, onClick: ()=>{addToCartHandler(2)}}}>Buy 2</Button>
                    <Button attributes={{className: classes.buyBtn, onClick: ()=>{addToCartHandler(3)}}}>Buy 3</Button>
                </div>
            </div>
        </li>
    );
}

export default CandyItem;