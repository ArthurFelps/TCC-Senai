import React, {useContext} from 'react'
import style from './Card-item.module.css';
import { ShopContext } from "../../../Context/shop-context";


export const CardItem = (props) => {

  const { id, productName, price, productImage } = props.data;

  const { cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(ShopContext);


  return (

    <div className={style['cartItem']}>

      <img src={productImage}  />
      <div className={style["description"]}>

        <p>
          <b>{productName}</b>
        </p>
        <p>R${price}</p>

        <div className={style["countHandler"]}>
          <button onClick={() => removeFromCart(id)}> - </button>
          <input
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />
          <button onClick={() => addToCart(id)}> + </button>
        </div>

      </div>

    
    </div>

  )
}
