
export default function Header(){
    // Creando objeto de estilos para el componente
    const headerStyle = {
        color:"#edc84b",
        textTransform: "uppercase",
        textAlign: "center",
        fontSize: "5rem",
        fontWeight:300,
        letterSpacing:".8rem",
        position: "relative",
        width: "100%",
        display: "block",
    }
    return(
        <header>
            <h1 style={headerStyle}>Pizza Time</h1>
        </header>
    )
}