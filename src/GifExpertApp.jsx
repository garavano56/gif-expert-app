import { useState } from "react";                       // import { AddCategory } from "./components/AddCategory";
import { AddCategory, GifGrid } from "./components";    //  import { GifGrid } from "./components/GifGrid";
                                                      
const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);

  const onAddCategory = (newCategory) => {
    
    if ( categories.includes(newCategory) ) return;

		setCategories( [newCategory, ...categories ] );
    // setCategories( cat => [...categories, 'Valorant' ] );    // Otra forma
	}

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory 
        onNewCategory={ (value) => onAddCategory(value) } 
      />
      {/* <button onClick={ onAddCategory }>Agregar</button> */}
                                   
      { 
          categories.map( category => (        // category => { return (......) }  es igual a  // category => ()
              <GifGrid 
                key={category} 
                category={category} />
          ))
      }
    </>
  );
};

export default GifExpertApp;


// El .map lo que hace es recorrer las categorías y ya, pero no estamos en JavaScript puro, sino en React. Una de las claves de tener el key cuando trabajamos con un .map en React es esa.
// Sí se ejecuta el categories.map y las recorre, pero si el componente ya ha sido creado, no lo vuelve a crear, simplemente lo muestra y listo. Solo vuelve a crear los GifGrid para la categoría nueva que no existe.

