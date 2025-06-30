import { useState } from "react";
import style from './styles/pizza-style.module.css'
export default function SwapMovies(){
   
const movies = [
  { name: "Gatacca",
    releaseYear: "1998",
    genre: "Ciencia ficción, distopía",
    synopsis: "Un hombre logra su sueño en una sociedad construida en contra suyo",
    photoName: "movies/Gattaca.jpg"
    
  },
  { name: "El planeta del tesoro",
    releaseYear: "2002",
    genre: "Ciencia ficción, aventura",
    synopsis: "Un chico descubre de lo que es capaz al embarcarse en una aventura a otro planeta",
    photoName: "movies/TreasureP.webp"
    
  },
  { name: "Wolf Children",
    releaseYear: "2012",
    genre: "Fantasía, Drama",
    synopsis: "Una chica cría a un par de niños capaces de transformarse en lobo",
    photoName: "movies/WolfC.webp"
    
  },
  { name: "Jurassic Park",
    releaseYear: "1993",
    genre: "Ciencia ficción, acción",
    synopsis: "Un experimento genético logra traer de vuelta a los dinosaurios y termina en un desastre",
    photoName: "movies/JurassicP.jpg"
    
  },
];

const[count,setCount] = useState(0);
const increment = ()=>setCount(count+1);
const decrement = ()=>setCount(count-1);

return (
    <div className="moviesContainer">
      <p>Comparto una selección de algunas de mis películas favoritas</p>
      <br />
      <h1>{movies[count].name}</h1>
      <br />
      <section>
      <img src={movies[count].photoName} alt={movies[count].name} />
      <p>{movies[count].synopsis}</p>
      </section>
      <br />
      <button onClick={decrement} disabled={count === 0}>Anterior</button>
      <button onClick={increment} disabled={count === movies.length - 1}>Siguiente</button>
    </div>
  );
}



