import { useContext, useState } from "react"
import { CartContext } from "../context/CartContext"
import { useForm } from "react-hook-form";
import { collection, addDoc } from "firebase/firestore";
import { db } from '../firebase/config';

export const Checkout = () => {

    const [orderId, setOrderId] = useState("");

    const { cart, totalPrice, emptyCart } = useContext(CartContext)

    const { register, handleSubmit } = useForm();

    const buy = (data) => {
        const order = {
            client: data,
            products: cart,
            total: totalPrice()
        }
        console.log(order)

        const ordersRef = collection(db, "orders");

        addDoc(ordersRef, order)
            .then((doc) => {
                setOrderId(doc.id);
                emptyCart();
            })
    }

    if (orderId) {
        return (
           <div className="flex flex-col items-center justify-center mt-28">
            <h1 className="text-3xl font-semibold">¡Thanks for your purchase!</h1>
            <p className="text-xl m-10">Your order number is: {orderId}</p>
           </div> 
        )
    }

  return (
    <div className="grid place-items-center mt-[60px] items-center justify-center">
        <div className="border-gray-600 border-2 rounded-xl p-20 ">
            <h1 className="text-xl text-center mb-10">finalize the purchase</h1>
            <form className="flex flex-col gap-5 align items-center" onSubmit={handleSubmit(buy)}>

                <input className="p-1 w-72 rounded-lg border-gray-500 border" 
                    type="text" 
                    placeholder="Enter your Name" 
                    {...register("name")}
                    />
                <input className="p-1 w-72 rounded-lg border-gray-500 border" 
                    type="email" 
                    placeholder="Enter your e-mail" 
                    {...register("email")}
                    />
                <input className="p-1 w-72 rounded-lg border-gray-500 border" 
                    type="password" 
                    placeholder="Enter your password" 
                    {...register("password")}
                    />

                <button className="bg-gray-800 text-white w-24 h-auto rounded-xl p-3 mt-8" type="submit">buy</button>
            
            </form>
        </div>
    </div>
  )
}
