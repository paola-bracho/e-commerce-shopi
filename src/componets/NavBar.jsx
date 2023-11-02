import { Link } from "react-router-dom"
import { CartWidget } from "./CartWidget"

export const Navbar = () => {
    return (
        <nav className="bg-gray-800 flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-base">
            
            {/* <ul className="flex items-center gap-10 text-gray-200">
                <Link to="/" className="font-bold text-2xl text-gray-200"><h1>Shopi</h1></Link>
                <li><Link to="/" className="">Home</Link></li>
                <li><Link to={`/category/women's clothing`} className="">Women</Link></li>
                <li><Link to={`/category/men's clothing`} className="">Men</Link></li>
                <li><Link to={`/category/jewelery`} className="">Jewelery</Link></li>
                <li><Link to={`/category/electronics`} className="">Electronics</Link></li>
            </ul>

            <ul className="flex items-center gap-10 text-gray-200">
            <li><Link to="#" className="">My order</Link></li>
            <li><Link to="#" className="">My acount</Link></li>
            <li><Link to="#" className=""></Link>Sign In</li>
            <li><Link to="#" className=""><CartWidget /></Link></li>
            </ul> */}
        </nav>
    )
} 