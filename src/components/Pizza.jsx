import style from './styles/pizza-style.module.css'
//? Los estilos con .module.css sólo funcionan donde son importados

export default function Pizza({pizzaObject,onDelete}){
    console.log("Props",pizzaObject)
    return(
        //! Usando operador ternario para tener una clase condicional
        <li className={`${style.pizza} ${pizzaObject.soldOut ? style["sold-out"]: ""}`}>
            <img src={pizzaObject.photoName} alt={pizzaObject.name}/>
            <div>
                <h3>{pizzaObject.name}</h3>
                <p>{pizzaObject.ingredients}</p>
                <p>${pizzaObject.price}</p>
                <button on onClick={()=>onDelete(pizzaObject.name)}>Delete pizza</button>
            </div>
        </li>
    )
}