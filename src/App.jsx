import './App.css'
import Navigation from './components/Navigation'
import { Route, Routes } from 'react-router-dom'
import Home from './routes/home/Home'
import NotFound from './components/NotFound'
import Product from './routes/products/Product'
import Formulario from './routes/formulario/Formulario'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='formulario' element={<Formulario />} />
        <Route path='producto' element={<Product />} >
          <Route path=':productId' element={<Product />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
