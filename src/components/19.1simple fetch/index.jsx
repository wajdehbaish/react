import React, { useEffect } from "react";

const starWarApi = "https://swapi.dev/api/films/1/"

const StarWar=()=>{
    const [movies,setMonvies]=React.useState({})
    useEffect(async()=>{
        const data=await(await fetch(starWarApi)).json()
       setMonvies(data)
       console.log(data);
    },[])
    return (
        <div>
            <h1>{movies.title}</h1>
            <h2>{movies.director}</h2>
        </div>
    )
    };
    
    export default StarWar;
