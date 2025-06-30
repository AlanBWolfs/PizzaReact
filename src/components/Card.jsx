export default function Card(){
    // Creando objeto de estilos para el componente
    const logoStyle = {
        height: "50px",
        width: "50px",
        margin: "10px",
    }
        const imageStyle = {
        height: "300px",
        width: "300px",
    }

    const cardStyle = {
        border: "2px solid white",
        padding: "10px"
    }

    
    return(
        <div style={cardStyle}>
            <div><img src="https://avatars.githubusercontent.com/u/212776863?s=400&u=55c4304ae4be240fdf62dc80e070b3fd8904f588&v=4" alt="Catto" style={imageStyle}/></div>
            <h1>Alan Bañuelos</h1>
                <div>
                    <a href="https://github.com/AlanBWolfs"><img src="https://img.icons8.com/m_rounded/512/228BE6/github.png" alt="GitHub" style={logoStyle} className="logo"/></a>
                    <a href="https://www.linkedin.com/in/alan-bañuelos-gonzález-b65906257/"><img src="https://www.svgrepo.com/show/157006/linkedin.svg" alt="GitHub" style={logoStyle} className="logo"/></a>
                 </div>
        </div>

    )
}