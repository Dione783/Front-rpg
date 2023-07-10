import {React,useState} from "react";
import "./create.css"

export default function Create(){

    const [name,setName] = useState("");
    const [description,setDescription] = useState("");
    const [url,setUrl] = useState("");
    const [vila,setVila]= useState("");
    const [select,setSelect] = useState();

    function mudarName(e){
        name.charAt(0).toUpperCase();
        setName(e.target.value);
    }

    function mudarDescricao(e){
        name.charAt(0).toUpperCase();
        setDescription(e.target.value);
    }

    function mudarUrl(e){
        name.charAt(0).toUpperCase();
        setUrl(e.target.value);
    }

    function mudarVila(e){
        name.charAt(0).toUpperCase();
        setVila(e.target.value)
    }

    function mudarSelect(e){
        setSelect(e.target.value);
        console.log(e.target.value)
    }


    return (
        <div className="createContainer">
            <h1>Criar personagem</h1>
            <fieldset>
                    <form method="POST" action="http://26.182.184.168:3000">
                        <label>Nome</label><input type="text" min="3" placeholder="Nome" name="name" value={name} onChange={e=>mudarName(e)}></input>
                        <label>Descrição</label><input type="text" placeholder="Descrição" name="description" value={description} onChange={e=>mudarDescricao(e)}></input>
                        <label>Url da imagem</label><input type="text" placeholder="Url Imagem" name="url" value={url} onChange={e=>mudarUrl(e)}></input>
                        <label>Vila</label>
                        <select name="vila" onChange={(e)=>{mudarSelect(e)}} value={select}>
                            <option>Undefined</option>
                            <option>Nazzubur</option>
                            <option>Ybaros</option>
                            <option>Urlok</option>
                            <option>Hogar de Los Perdidos</option>
                            <option>Ziamnoje</option>
                            <option>Otwór</option>
                            <option>Vila das Mulheres</option>
                        </select>
                        <label>Add Vila ou Região</label><input type="text" placeholder="vila" name="addvila" value={vila} onChange={e=>mudarVila(e)}></input>
                        <button>Submit</button>
                    </form>
            </fieldset>
        </div>
    )
}