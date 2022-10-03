import React, {useState} from 'react'
import GifSearch from './GifSearch';
import GifList from './GifList';

function GifListContainer() {

  const [fetchedGifs, setFetchedGifs] = useState([]);
  
  function searchGif(searchQuery) {

    fetch(`https://api.giphy.com/v1/gifs/search?q=${searchQuery}&api_key=Oonv9a0pWkd2u8u7URZo8MBmXCu9ejO7&rating=g`)
      .then(res => res.json())
        .then(imageData => setFetchedGifs(imageData.data))
  }

  // Filtering the first 3 elements
  const firstThreeGifs = fetchedGifs.filter((fetchedGif, index) => {
    return index < 3;
  });

  return (
    <div>
      <GifSearch searchGif={searchGif} />
      {
        firstThreeGifs.map((fetchedGif) => {
          return <GifList key={fetchedGif.id} fetchedGif={fetchedGif} />}
        )
      }
    </div>
  )
}

export default GifListContainer