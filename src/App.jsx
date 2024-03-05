import './App.css'
import Navigation from './components/Navigation'
import { Route, Routes } from 'react-router-dom'
import Home from './routes/home/Home'
import NotFound from './components/NotFound'
import Product from './routes/products/Product'
import Formulario from './routes/formulario/Formulario'
import ProtectedRoute from './routes/ProtectedRoute'
import { useAuth0 } from '@auth0/auth0-react'

function App() {

  const { isAuthenticated } = useAuth0()

  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route element={<ProtectedRoute isValid={isAuthenticated} />}>
          <Route path='formulario' element={<Formulario />} />
        </Route>

        <Route path='producto' element={<Product />} >
          <Route path=':productId' element={<Product />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
