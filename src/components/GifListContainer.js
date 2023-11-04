import React, {useState, useEffect}from 'react';
import GifList from './GifList';
import GifSearch from './GifSearch';

export default function GifListContainer() {

const [gifs, setGifs]= useState([])
const [search, setSearch]= useState("dolphin")
const api_key ="mfm4VszV4YNcGEEoDSSvPxNeNgbwXbqQ"

useEffect(()=>{
    fetch(`https://api.giphy.com/v1/gifs/search?q=${search}&api_key=${api_key}&rating=g`)
    .then( r => r.json())
    .then((data)=> {
        
        const fetchedGifs= data.data.slice(0,3).map((gif) => (gif.images.original.url))
        //console.log(fetchedGifs)

        setGifs(fetchedGifs);

      
        
    })
},[search])

   function handleSubmit(query){
     setSearch(query)
   }


  return (
    <div>

        <GifSearch onSubmitSearch={handleSubmit} />
        <GifList gifs={gifs}/>
       

    </div>
  )
}
