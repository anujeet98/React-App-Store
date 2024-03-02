import { useContext } from 'react';
import './CartBtn.css'
import CartContext from '../../contexts/store/cart-context';

const CartBtn = (props) => {
    const cartCtx = useContext(CartContext);
    return (
        <button className="cart-btn" onClick={props.onClick}>    
            <i className="ri-shopping-cart-line cart-icon"></i>
            <div className='cart-text'> Your Cart </div>
            <div className='cart-quantity'>{cartCtx.items.size}</div>
        </button>
    )
}

export default CartBtn;