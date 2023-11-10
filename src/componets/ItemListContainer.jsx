import { useEffect, useState } from "react";
import { ItemList } from "./ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/config";


export const ItemListContainer = () => {
    
    const [productos, setProductos] = useState([]);
    const [title, setTitle] = useState("Home");
    const category = useParams().category;

    useEffect(() => {

        const productsRef = collection(db, "products");

        const q = category ? query(productsRef, where("category", "==", category,)) : productsRef;

        getDocs(q)
            .then((resp) => {
                setProductos(
                    resp.docs.map((doc) => {
                        return {...doc.data(), id: doc.id}
                    })
                )
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