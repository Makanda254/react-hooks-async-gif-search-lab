import React from 'react'

export default function GifList({gifs}) {

    //console.log(gifs)
  return (

    <ul>
        {gifs.map((gif) => (
            <li key={gif}>
                <img src={gif} alt="Gif" />
            </li>
        ))}
        
    </ul>
  )
    
    
        
  
}
