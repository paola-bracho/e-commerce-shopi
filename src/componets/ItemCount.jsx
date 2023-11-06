import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/20/solid"


export const ItemCount = ( { count, handleAdd, handleSubtract, handleAddToCart } ) => {
  return (
    <div>
        <div className="flex flex-row">
            <button onClick={handleSubtract} className="bg-gray-800 text-white w-10 h-10 rounded-full m-4 text-lg"><MinusSmallIcon></MinusSmallIcon></button>
            <p className="m-4 text-xl">{count}</p>
            <button onClick={handleAdd} className="bg-gray-800 text-white w-10 h-10 rounded-full m-4 text-sm"><PlusSmallIcon></PlusSmallIcon></button>
        </div>
            <button onClick={handleAddToCart} className="bg-gray-800 text-white w-32 h-auto rounded-full p-3 m-3 ml-7">Add cart</button>
            
    </div>
  )
}
