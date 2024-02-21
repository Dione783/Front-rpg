import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./Header.css";

export default function Home(){
    return(
        <div>
            <header>
            <div><Link to="/create">Criar</Link><Link to="/list">List</Link></div>
                <h1>Personagens</h1>
            </header>
            <Outlet></Outlet>
        </div>
    )
}