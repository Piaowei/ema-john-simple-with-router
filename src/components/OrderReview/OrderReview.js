import React from 'react';
import { useHistory } from 'react-router';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { clearTheCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';


const OrderReview = () => {
    const [dproducts] = useProducts();
    const [cart, setCart] = useCart(dproducts);
    const history = useHistory();
    // console.log("from order review", dproducts);
    const handleRemove = key => {
        const newCart = cart.filter(product => product.key !== key);
        setCart(newCart);
        removeFromDb(key);
    }

    const handleProccedtoShipping = () => {
        // setCart([]);
        // clearTheCart();
        // history.push('/placeOrder');
        history.push('/shipping');
    }

    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    cart.map(product => <ReviewItem
                        key={product.key}
                        product={product}
                        handleRemove={handleRemove}

                    ></ReviewItem>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <button onClick={handleProccedtoShipping} className="btn-regular " >Procced to Shipping</button>
                </Cart>

            </div>

        </div>
    );
};

export default OrderReview;

{/* <h1>{dproducts.length}</h1>
<h3>{cart.length}</h3>
<h2>This is Order Review</h2>
<Cart cart={cart}></Cart> */}