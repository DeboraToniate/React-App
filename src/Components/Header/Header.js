import React from 'react'
import './Header.css'

export default function Header() {

    return(
        <div className="container--sm">
            <header className="header_group">
                <div className="header__main" role="navigation">
                    <div className="header__menu container--menu">
                        <nav className="content__menu" id="content__menu">
                            <ul id="menu-menu-header" className="menu">
                                <li><a href="#">Nacional</a></li>
                                <li><a href="#">Business</a></li>
                                <li><a href="#">Internacional</a></li>
                                <li className="active"><a href="#">Saúde</a></li>
                                <li><a href="#">Tecnologia</a></li>
                                <li><a href="#">Esporte</a></li>
                                <li><a href="#">Entretenimento</a></li>
                                <li><a href="#">Estilo</a></li>
                                <li><a href="#">Viagem e Gastronomia</a></li>
                                <li><a href="#">Newsletters</a></li>
                                <li><a href="#">Podcasts</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        </div>
    )
}