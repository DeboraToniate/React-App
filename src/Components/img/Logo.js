import React from 'react'
import './Style.css'
import CNN from './logo.svg'

export default function Logo() {

    return(
        <div>
            <img src={CNN} className="custom-logo"></img>
        </div>
    )
}