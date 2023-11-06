import { Link } from "react-router-dom"
import { PlusSmallIcon } from "@heroicons/react/20/solid"

export const Item = ( {producto} ) => {
  return (
    <div className="">
      <div className="bg-white border cursor-pointer w-64 h-[300px] mb-4 relative overflow-hidden group transition rounded-lg">
        <div className="relative mb-2 w-full h-full flex justify-center items-center">
          {/* image */}
          <div className="w-[200px] mx-auto flex justify-center items-center">
            <img className='max-h-[160px] group-hover:scale-110 transition duration-300' src={producto.image} alt={producto.description} />
          </div>
        </div>
       
        {/* buttons */}
        <div className="absolute top-2 right-0 group-hover:right-2  p-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <button>
            <div className="flex justify-center items-center text-white bg-gray-400 w-8 h-8">
              <PlusSmallIcon></PlusSmallIcon>
            </div>
          </button>
        </div>
      </div>
      {/* category, title, price */}
        <div>
          <div className="text-xs capitalize text-gray-500">{producto.category}</div>
          <Link to={`/item/${producto.id}`}>
            <h2 className='font-semibold mb-1 truncate mr-5'>{producto.title}</h2>
          </Link>
          <div className='font-semibold mb-4'>${producto.price}</div>
          <Link to={`/item/${producto.id}`} className="bg-gray-800 text-white w-32 h-auto rounded-xl p-2 text-sm">show more</Link>
        </div>
    </div>
  )
}
