import { useContext } from "react"
import { CartContext } from "../context/CartContext"

export const Cart = () => {

    const { cart, totalPrice, emptyCart } = useContext(CartContext)

    const handleEmpty = () => {
        emptyCart();
    }

  return (
    <div>
        <h1 className="text-xl text-center mb-10 mt-14 font-semibold">Shopping Cart</h1>

        {
            cart.map((prod) => (
                <div className="flex flex-row mx-60 border my-10 rounded-xl h-[250px]" key={prod.id}>
                    <img className="max-h-[160px] w-[160px]  m-10" src={prod.image} alt={prod.description} />
                    <div className="flex flex-col w-auto pt-10 pr-10 gap-4">
                        <h2 className="font-semibold text-xl">{prod.title}</h2>
                        <p className="font-normal">Unit price: {prod.price}$</p>
                        <p className="font-normal">Count: {prod.count}</p>
                        <p className="font-normal text-lg">Total: {prod.price * prod.count}$</p>
                    </div>
                </div>
            ))      
        }

        { cart.length > 0 ?
            <>
                <h2 className="font-semibold text-xl text-center mb-10">Total purchase: {totalPrice()}$</h2> 
                <div className="flex justify-center">
                    <button className="bg-gray-800 text-white w-32 h-auto rounded-xl p-2 text-sm" onClick={handleEmpty}>Empty Cart</button>
                </div>
            </> :
                <div className="flex items-center justify-center mt-28">
                    <p className="text-2xl rounded-2xl py-14 px-64 font-semibold border-2 border-gray-500">The cart is empty </p>
                </div>
        }
        
        
    </div>
  )
}
