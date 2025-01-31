'use client'
import React from "react"
import styule from "./header.module.css"

export default function Header() {
    return (
        <header>
            <h1>Header</h1>
            <ul>
                <li>
                    Home
                </li>
                <li>
                    Medico
                </li>
                <li>
                    paciente
                </li>
                <li>
                    Consulta
                </li>
            </ul>
        </header>

    )
}