import { useState } from "react";
export default function SwapMovies(){
   
const movies = [
  { name: "Gatacca",
    releaseYear: "1998",
    genre: "Ciencia ficción, distopía",
    synopsis: "Un hombre considerado como inválido en una sociedad distópica eugenésica dedica su vida entera a luchar por su más anhelado sueño, viajar al espacio.",
    photoName: "movies/Gattaca.jpg"
    
  },
  { name: "El planeta del tesoro",
    releaseYear: "2002",
    genre: "Ciencia ficción, aventura",
    synopsis: "Un chico anteriormente problemático, reflexiona sobre su identidad, potencial y metas tras haberse embarcado en una aventura a otro planeta que cambiaría su vida.",
    photoName: "movies/TreasureP.webp"
    
  },
  { name: "Wolf Children",
    releaseYear: "2012",
    genre: "Fantasía, Drama",
    synopsis: "Una chica que amó a un hombre lobo tiene dos hijos que cuentan con esta misma capacidad; convertirse en lobo. Ella se enfrenta al desafío de criar a estos niños que han de buscar a qué identidad se apegarán más; le de un humano o la de un lobo.",
    photoName: "movies/WolfC.webp"
    
  },
  { name: "Jurassic Park",
    releaseYear: "1993",
    genre: "Ciencia ficción, acción",
    synopsis: "Un experimento genético tiene como resultado la creación de criaturas casi idénticas a los extintos dinosaurios. Los resultados de este experimento son colocados en un parque temático con resultados desastrosos.",
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
      <div className="movieButtons">
      <button onClick={decrement} disabled={count === 0}>Anterior</button>
      <button onClick={increment} disabled={count === movies.length - 1}>Siguiente</button>
      </div>
    </div>
  );
}



