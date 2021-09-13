import React, {useContext, useEffect, useState} from 'react'
import { cartDataContext } from '../../cartDatacontext';


const CartIcon = function() {
    const {cartData, setCartData} = useContext(cartDataContext)
    const [totalPrice, setTotalPrice] = useState("Пустая корзина");
    const [count, setCount] = useState(0)
 
    useEffect(() => {
        let newPrice = cartData.reduce(function(prev, next){
          return prev+(next.price*next.count);
          },0);
        if (newPrice!=0) {setTotalPrice(newPrice.toFixed(2)) }
        else {
            setTotalPrice("Пустая корзина")
        } ;
    },[cartData]);

    // useEffect(()=>{},[])
  

    return(
        <div className="header__cart">    
            <span className="cart-number">{cartData.length}</span>           
            <span className="cart-total">{totalPrice}
            </span>
        </div>
    )
}

export default CartIcon;