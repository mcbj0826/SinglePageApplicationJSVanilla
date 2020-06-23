// Archivo que sirve para  importar los templates y páginas para luego hacer render

import Header from '../templates/Header'
import Home from '../pages/Home'
import Character from '../pages/Character'
import Error404 from '../pages/Error404'
import getHash from '../utils/getHash'
import resolveRoutes from '../utils/resolveRoutes'
import '../styles/styles.css'


const routes = {
    '/': Home,
    '/:id': Character,
    '/contact': 'Contact',
}

//Manejador que sirve para mostrar los elementos según la lógica que le demos


const router = async () => {
    const header = null || document.getElementById('header')
    const content = null || document.getElementById('content')

    header.innerHTML = await Header()
    let hash = getHash()
    let route = await resolveRoutes(hash)
    let render = routes [route] ? routes [route] :Error404
    content.innerHTML = await render()

}

export default router