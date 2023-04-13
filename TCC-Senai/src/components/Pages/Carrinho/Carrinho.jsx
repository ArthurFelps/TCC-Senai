import React, { useContext } from 'react'
import { PRODUCTS } from '../../../products'
import { ShopContext } from "../../../Context/shop-context";
import { CardItem } from './Card-Item';
import style from './Card-item.module.css';


export const Carrinho = () => {

  const { cartItems, getTotalCartAmount } = useContext(ShopContext);

  const totalAmount = getTotalCartAmount();

  return (

    <div className={style["cart"]}>
        <div> 

          <h1>Produtos no Carrinho:</h1>
        
        </div>

        <div className={style["cart-two"]}>

        {PRODUCTS.map(product => {
          if (cartItems[product.id] !== 0) {
            return <CardItem data={product} key={product.id} />
          }
        })}

        </div>

        {totalAmount > 0 ? (
        <div className={style["checkout"]}>
          <p> Total: R${totalAmount} </p>
       
        </div>
      ) : (
        <h1> Seu carrinho de compras está vazio</h1>
      )}

    </div>
  )
}
