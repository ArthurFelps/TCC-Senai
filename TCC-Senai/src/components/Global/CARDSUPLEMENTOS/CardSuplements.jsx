import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import styles from './../CARDSUPLEMENTOS/card.module.css';
import { ShopContext } from "../../../Context/shop-context";




export default function CardSuplements(props) {

  const { id, productName, price, productImage } = props.data;

  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemAmount = cartItems[id]


  return (

    <div className={styles["produto"]}>

      <img src={productImage} className={styles["imagempro"]} />
      <p>{productName}</p>
      <p>{price}</p>
      <button className={styles["botaocompra"]} onClick={() => addToCart(id)} >Adicionar ao Carrinho {cartItemAmount > 0 && <> ({cartItemAmount}) </>} </button>
      
    </div>


  );
}
