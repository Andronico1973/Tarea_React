import React from 'react'
import Header from '../componentes/Header/Header'
import Aside from '../componentes/Aside/Aside'
import Main from '../componentes/Main/Main'

import Navbar from '../componentes/Navbar/Navbar'
import './Tarea.css'




const Tarea = () => {
    return (
        <div className='tarea'>
            <Header />
            <Navbar />
            <Aside />
            <Main />

        </div>
    )
}

export default Tarea
