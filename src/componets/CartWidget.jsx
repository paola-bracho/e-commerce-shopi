import { ShoppingCartIcon } from '@heroicons/react/24/solid'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'

export const CartWidget = () => {

    const { quantityInCart } = useContext(CartContext);

    return(
        <div>
            <Link to="/cart">
                <ShoppingCartIcon className='h-7 w-7 text-white relative'></ShoppingCartIcon>
                <span className='bg-gray-300 px-[5px] text-xs rounded-full text-black absolute mt-[-34px] ml-[18px] font-bold'>{quantityInCart()}</span>
            </Link>    
        </div>
    )
}