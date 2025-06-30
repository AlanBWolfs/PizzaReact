import NavBar from "../components/Navbar"
import Footer from "../components/Footer"

export default function Card(){
    // Creando objeto de estilos para el componente

return(
    <div>
        <NavBar/>  
        <div className="container">
            <div className="profileContainer">
                <div>
                <img src="https://avatars.githubusercontent.com/u/212776863?s=400&u=55c4304ae4be240fdf62dc80e070b3fd8904f588&v=4" alt="Catto" className="profileImg"/>
                </div>
                <h1 className="networkProfiles">Alan Bañuelos</h1>
                <div className="profileText">Aspirante a desarrollador Java Fullstack, interesado en el análisis de datos, backend y videojuegos. Me encanta aprender de todo y poder crear cosas útiles para los demás.</div>
                <div className="networkProfiles">
                    <a href="https://github.com/AlanBWolfs"><img src="https://img.icons8.com/m_rounded/512/228BE6/github.png" alt="GitHub"  className="networkImg"/></a>
                    <a href="https://www.linkedin.com/in/alan-bañuelos-gonzález-b65906257/"><img src="https://www.svgrepo.com/show/157006/linkedin.svg" className="networkImg"/></a>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
    )
}