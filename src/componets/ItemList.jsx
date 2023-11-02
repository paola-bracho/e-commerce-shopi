import { Item } from "./Item"

export const ItemList = ( {productos} ) => {

    console.log(productos)
  return (
    <div>
        <h2>Productos</h2>
        <div>
            { productos.map((prod) => <Item producto={prod} key={prod.id} />)}
        </div>
    </div>
  )
}