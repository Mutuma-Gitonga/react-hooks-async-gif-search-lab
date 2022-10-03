import React from 'react'

function GifList({fetchedGif}) {
  
    


    // const gifsToDisplay = firstThreeGifs.map((gif) => (

      
    
    // ))

    // console.log(firstThreeGifs);

    // <li key={index}><img src={index < 3 ? gif.images.original.url : null} alt={fetchedGifs.title} /></li>

  return (
    <div>
      <ul style={{listStyleType: "none"}}>
        <li key={fetchedGif.id}><img key={fetchedGif.id} src={fetchedGif.images.original.url} alt={fetchedGif.title} /></li>
      </ul> 
    </div>
  )
}

export default GifList