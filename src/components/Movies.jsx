import { useState, useEffect } from "react";
export default function Movies(){
   
    //! Creando estado con la información de las Pizzas
    const [movies,setMovies] = useState([
  {
    name: "Gatacca",
    releaseYear: "1998",
    genre: "Ciencia ficción, distopía",
    synopsis: "Un hombre logra su sueño en una sociedad construida en contra suyo",
    photoName: "movies/Gattaca.jpg"
  },
  {
    name: "El planeta del tesoro",
    releaseYear: "2002",
    genre: "Ciencia ficción, aventura",
    synopsis: "Un chico descubre de lo que es capaz al embarcarse en una aventura a otro planeta",
    photoName: "movies/TreasureP.webp"
  },
  {
    name: "Wolf Children",
    releaseYear: "2012",
    genre: "Fantasía, Drama",
    synopsis: "Una chica cría a un par de niños capaces de transformarse en lobo",
    photoName: "movies/WolfC.webp"
  },
  {
    name: "Jurassic Park",
    releaseYear: "1993",
    genre: "Ciencia ficción, acción",
    synopsis: "Un experimento genético logra traer de vuelta a los dinosaurios y termina en un desastre",
    photoName: "movies/JurassicP.jpg"
  },
])
//! Fin del estado

useEffect(()=>{
    const data = localStorage.getItem("movies");
    if (data) setMovies(JSON.parse(data));
},[])
//! Fijar los datos o actualizarlos
useEffect(()=>localStorage.setItem("movies",JSON.stringify(movies)),[movies]);

//! Función para borrar pizzas y actualizar el estado
const swapMovie = (movieName) => setMovies(prev=>prev.filter((pizza)=>pizza.name!==pizzaName));
    return(
        <main className="menu">
            <h2>Mis películas favoritas</h2>   
            <>
                <ul className="pizzas">
                    {pizzas.map((pizza)=>{
                        console.log(pizza);
                        return(
                            <Pizza pizzaObject={pizza} key={pizza.name} onDelete={deletePizza}/>
                        )
                    })}
                </ul>
            </>
        </main>
    );
}