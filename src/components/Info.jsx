import React, { useState,useEffect} from "react";
import { Routes, Route, useParams } from 'react-router-dom';
import "./info.css"

export default function Info(){
    let userId = useParams();
    const [perso,setPerso] = useState({});

    useEffect(()=>{
        fetch(`http://localhost:3000/list/${userId.id}`).then(data=>
        data.json()).then(res=>{setPerso(res)})
        console.log(perso)
    },[])

    return (<div id="playerContainer">
        <h2>{perso.name}</h2>
        <div>
        <img src={perso.url}></img>
        <p>{perso.description}</p>
        </div>
    </div>)
}