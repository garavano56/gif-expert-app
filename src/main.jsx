import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import GifExpertApp from './GifExpertApp';

import './styles.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GifExpertApp/>
  </StrictMode>
)

// yarn create vite --> Para crear el proyecto. Luego ingresar el nobre. Seleccionar React y luego Javascript
// yarn --> Ejecutarlo para que se generen los módulos
// yarn dev --> Para ejecutarlo

// garavano54@gmail.com - aars430359 - hhttps://developers.giphy.com/dashboard/?ar=1    - Api Key: mMZlF4gWSbzUC4ZiNUnaJWJnUrnPqRRA
// https://developers.giphy.com/docs/api/endpoint/#random
// Extensión Chrome: Json Viwer Pro
// Ejemplo: https://api.giphy.com/v1/gifs/random?api_key=mMZlF4gWSbzUC4ZiNUnaJWJnUrnPqRRA