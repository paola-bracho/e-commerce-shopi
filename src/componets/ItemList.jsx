import { Item } from "./Item";

export const ItemList = ( {productos} ) => {

  return (
    <div>
        <div className="grid gap-20 grid-cols-4 w-[1500px] mb-28 mt-11">
            { productos.map((prod) => <Item producto={prod} key={prod.id} />)}
        </div>
    </div>
  )
}