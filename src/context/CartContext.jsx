import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const initialCart = JSON.parse(localStorage.getItem("Cart")) || [];

export const CartProvider = ( {children} ) => {

    const [cart, setCart] = useState(initialCart);

    const addToCart = (item, count) => {
    const addedItem = {...item, count};
  
    const newCart = [...cart];
  
    const itsInCart = newCart.find((product) => product.id === addedItem.id);
  
        if (itsInCart){
            itsInCart.count += count;
        } else{
            newCart.push(addedItem);
        }
        setCart(newCart);
    }
    
    const quantityInCart = () => {
        return cart.reduce((acc, prod) => acc + prod.count, 0);
    }
    
    const totalPrice = () => {
        return cart.reduce((acc, prod) => acc + prod.price * prod.count, 0) 
    }
    
    const emptyCart = () => {
        setCart([]);
    }

    useEffect(() => {
        localStorage.setItem("Cart", JSON.stringify(cart))
    }, [cart])
    

  return (
    <CartContext.Provider value={ {cart, addToCart, quantityInCart, totalPrice, emptyCart} }>
        {children}
    </CartContext.Provider>
  )

}