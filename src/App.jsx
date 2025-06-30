import './App.css' //? Este es un estilo global
import Header from './components/Header.jsx'
import Menu from './components/Menu.jsx'
import Footer from './components/Footer.jsx'
import Owner from './pages/Owner.jsx'
import Home from './pages/Home.jsx'
import { Routes, Route } from 'react-router-dom'

// import Pizza from './components/Pizza' //? Los estilos se importan desde el CSS en componentes

function App() {
  return(
    <div className='container'>
      {/* <h1>Bienvenido a</h1> */}
      {/* <Card/> */}
      <Routes>
        <Route path="/" element={<Home/>}/>,
        <Route path="/Owner" element={<Owner/>}/>
      </Routes>
    </div>
  )
}

export default App
