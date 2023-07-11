import {useEffect, useState} from "react"
import "./list.css";
import { Link } from "react-router-dom";

export default function List(){
    
     const [stateListPersonagens,setList] = useState([])
     const [vilas,setVilas] = useState([])
     const [search,setSearch] = useState("");
     const [select,setSelect] = useState();
     const filteredList = search.length > 0 ? stateListPersonagens.filter(perso => perso.name.includes(search) && perso.vila.includes(select)) : []
     
     

        function mudarSearch(e){
            setSearch(e.target.value);
        }
        
        function mudarSelect(e){
            setSelect(e.target.value)
        }
    
    useEffect(()=>{
        fetch("https://back-rpg-3olc.vercel.app/list").then(data=>data.json()).then(res=>setList(res))
        fetch("https://back-rpg-3olc.vercel.app/list/vilas",{method:"GET"}).then(data=>data.json()).then(res=>{setVilas(res)})
        console.log(vilas);
    },[])
    return (<div className="container">
        <select className="options" onChange={(e)=>{mudarSelect(e)}} value={select}>
            {vilas.map(elem=><option>{elem}</option>)}
        </select>
        <input type="text" id="pesquisa" value={search} onChange={mudarSearch} placeholder="Nome do personagen" ></input>
        {search.length > 0 ? (filteredList.map((res,index)=>{
            return(
            <div className="personagem">
                <Link to={`/list/${res._id}`}>
                <h5>{res.name}</h5>
                <img src={res.url} alt="imagem"></img>
                </Link>
            </div>
            )
        })) : (stateListPersonagens.map((res,index)=>{
            return(
            <div className="personagem">
                <Link to={`/list/${res._id}`}>
                <h5>{res.name}</h5>
                <img src={res.url} alt="imagem"></img>
                </Link>
            </div>
            )
        }))}</div>)
}