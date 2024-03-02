
import { useContext } from 'react';
import classes from './CartItem.module.css';
import CartContext from '../../contexts/store/cart-context';


const CartItem = (props) => {
    const cartCtx = useContext(CartContext);

    const addItemHandler = () => {
        const item = {...props.data, quantity: 1};
        delete item.description;
        cartCtx.addItem(item);
    }
    return (
        <li className={classes["cartItem-li"]}>
            <div>
                <span className={classes["cartItem-name"]}>{props.data.name}</span>
                <div className={classes["cartItem-metadata"]}>
                    <span className={classes["cartItem-price"]}>Rs. {props.data.price}</span>
                    <div className={classes["cartItem-quantity"]}>x {props.data.quantity}</div>
                </div>
            </div>
            <div className={classes["item-btn-action-grp"]}>
                <button onClick={()=>cartCtx.removeItem(props.data.id)}>-</button>
                <button onClick={addItemHandler}>+</button>
            </div>
        </li>
    )
}

export default CartItem;