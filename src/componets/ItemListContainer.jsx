import { pedirDatos } from "../helpers/pedirDatos";
import { useEffect, useState } from "react";
import { ItemList } from "./ItemList";
import { useParams } from "react-router-dom";


export const ItemListContainer = () => {
    
    const [productos, setProductos] = useState([]);
    const [title, setTitle] = useState("Home");
    const category = useParams().category;

    useEffect(() => {
        pedirDatos()
            .then((res) => {
                if(category){
                    setProductos( res.filter((prod) => prod.category === category) );
                    setTitle(category);
                } else {
                    setProductos(res);
                    setTitle("Home")
                }             
            })
    }, [category])

    return (
        <>
        <h2 className="flex justify-center text-xl m-5 mt-20">{title}</h2>
        <div className="container mx-auto">
            <div className="p-[30px]">
                <ItemList productos={productos} />
            </div>
        </div>
        </>
    )
}