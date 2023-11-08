import { useContext, useState } from "react";
import { ItemCount } from "./ItemCount"
import { CartContext } from "../context/CartContext";

export const ItemDetail = ( {item} ) => {

  const { cart, addToCart } = useContext(CartContext);
  console.log(cart)
  const [count, setCount] = useState(1);

  const handleSubtract = () => {
      count > 1 && setCount(count - 1)
  }

  const handleAdd = () => {
      count < item.stock && setCount(count + 1)
  }

  return (
    <div className="flex flex-row m-20 justify-center">
      <div className="w-[300px] mx-10 flex justify-center items-center">
        <img className="w-64 m-2 mr-10" src={item.image} alt={item.title} />
      </div>
          <div className="py-6 w-[1000px]">
            <p className="text-sm">{item.category}</p>
            <p className="text-3xl my-4">{item.title}</p>
            <p className="text-base">{item.description}</p>
            <p className="text-2xl my-4">{item.price} $</p>
            <ItemCount 
            count={count} 
            handleAdd={handleAdd} 
            handleSubtract={handleSubtract} 
            handleAddToCart={() => {addToCart(item, count)}} 
            />
          </div>
    </div>
  )
}
