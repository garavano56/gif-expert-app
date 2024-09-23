import { useState, useEffect } from "react";

import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { getGifs } from "../helpers/getGifs";


export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs( category );

    // console.log( { images, isLoading });

    // const [counter, setCounter] = useState(10)}

    // const [images, setImages] = useState([]);

    // const getImages = async() => {
    //     const newImages = await getGifs(category);
    //     setImages(newImages);
    // }

    // useEffect( () => {
    //     getImages();
    // }, [])

    return (
        <>
            <h3>{ category }</h3>

            {
                isLoading && ( <h2>Cargando...</h2> )
                // isLoading ? (<h2>Cargando...</h2>) : null    Una forma
            }

            

            <div className="card-grid">
                {   
                    images.map( (image) => (
                        <GifItem 
                            key={ image.id } 
                            { ...image }        // Exparsimos todas las propiedades para evitar pasarle cuna por una. Ej: id={ image.id }  title={ image.tile }  url={ image.url } 
                        />
                    ))
                }
            </div>
            {/* <h5>{ counter }</h5> */}
            {/* <button onClick={ () => setCounter(counter + 1 ) }>+1</button> */}
        </>
    )
}

// React cada vez que detecta un cambio en el estado. Vuelve a redibujarlo


{/* <ol> {   images.map( ({id, title}) => (
            <li key={ id }>{ title }</li> ))
     } 
</ol> */}