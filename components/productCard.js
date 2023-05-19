import React, {useContext} from 'react';
import { CartContext } from '../contexts/cartContext';
import styles from '../styles/Productcard.module.scss';

//markup for product card
//retrieve information from product item and populate data

export default function productCard({product}) {

  const { addToCart } = useContext(CartContext);
  const price = product.variants.edges[0].node.price.amount;

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className={styles.card}>
      <div className={styles.card__image}>
        <img src={product.featuredImage.url} title={product.title} alt={product.title} />
      </div>
      <div className={styles.card__content}>
        <p className={styles.card__title}>
          {product.title} - ${price}
        </p>

        <div className={styles.card__desc}>{product.description}</div>
        <button className={styles.card__button} onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );

}