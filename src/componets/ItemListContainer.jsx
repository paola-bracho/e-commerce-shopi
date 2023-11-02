import { pedirDatos } from "../helpers/pedirDatos";
import { useEffect, useState } from "react";
import { ItemList } from "./ItemList";


export const ItemListcontainer = () => {
    
    const [productos, setProductos] = useState([]);
    console.log(productos)
    useEffect(() => {
        pedirDatos()
            .then((res) => {
                setProductos(res);
            })
    }, [])

    return (
        <div>
            <ItemList productos={productos} />
        </div>
    )
}