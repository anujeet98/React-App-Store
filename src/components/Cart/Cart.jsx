import React, { useContext } from 'react';
import classes from './Cart.module.css'
import Modal from '../Modal/Modal';
import CartContext from '../../contexts/store/cart-context';
import CartItem from './CartItem';


const Cart = (props) => {    
    const cartCtx = useContext(CartContext);

    const cartItems = []; 
    cartCtx.items.forEach((item,key) => {
        cartItems.push(<CartItem key={item.id} data={item}/>);
    });

    return (
        <Modal onHideCart={props.onHideCart}>
            <ul className={classes.ul}>
                {cartItems}
            </ul>
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>Rs. {cartCtx.total}</span>
            </div>
            <div className={classes.btnGrp}>
                <button className={classes['button--cancel']} onClick={props.onHideCart}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>
    )
}

export default Cart;