import React from 'react'
import './App.css'
import Conteudo from './Components/Conteúdo/Conteudo'
import Header from './Components/Header/Header'

export default function App() {

    return(
        <div className="container">
            <Header/>
            <Conteudo/>
        </div>
    )
}