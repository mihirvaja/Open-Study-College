import React, { useContext, useState } from 'react';
import { CartContext } from '../contexts/cartContext';
import styles from '../styles/Header.module.scss';
import { FaShoppingCart } from "react-icons/fa";

export default function Header() {

  //set state for quantity in cart and for cart visibility

  //cart icon will show an ticker of number of items in cart if any
  //hovering over cart icon will open cart, showing items there and allowing to update quantity

  const { cartItems, increaseQuantity, decreaseQuantity, cartTotal } = useContext(CartContext);
  const [isCartVisible, setCartVisible] = useState(false);

  const handleIncreaseQuantity = (product) => {
    increaseQuantity(product);
  };

  const handleDecreaseQuantity = (product) => {
    decreaseQuantity(product);
  };

  const handleMouseEnter = () => {
    setCartVisible(true);
  };

  const handleMouseLeave = () => {
    setCartVisible(false);
  };

  return (
    <header className={styles.header}>
      <h1>Open Shop</h1>
      <div className={styles.cartIcon} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <FaShoppingCart/>
        
        {cartItems.length > 0 && (
          <span className={styles.cartIcon__counter}>{cartItems.length}</span>
        )}

        {cartItems.length > 0 && isCartVisible && (
          <div className={styles.cart}>
            <div className={styles.cart__heading}>Your Cart</div>

            {cartItems.map((product, index) => (
              <div className={styles.cart__item} key={index}>
                <div className={styles.cart__image}>
                  <img src={product.featuredImage.url} title={product.title} alt={product.title}></img>
                </div>

                <div className={styles.cart__content}>
                  <div className={styles.cart__title}>{product.title} - ${product.variants.edges[0].node.price.amount}</div>
                
                  <div className={styles.cart__quantity}>
                    <button onClick={() => handleDecreaseQuantity(product)}>-</button>
                    <span>{product.quantity}</span>
                    <button onClick={() => handleIncreaseQuantity(product)}>+</button>
                  </div>
                </div>
              </div>
            ))}

            <div className={styles.cart__total}>Total Cart Value: <span>${cartTotal}</span></div>
            <button className={styles.cart__button}>Checkout</button>            
          </div>
        )}
      </div>
    </header>
  );
}