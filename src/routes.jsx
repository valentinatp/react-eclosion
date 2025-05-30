

import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import Home from './Components/Home/Home'
import Layout from './pages/Layout'
import Register from './Components/Forms/Register/register'


export const router = createBrowserRouter(
    createRoutesFromElements(
        // un componente "Route" por cada ruta
        <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/ejemplo" element={<h1>Hola ejemplo</h1>} />
        </Route>
    )
)