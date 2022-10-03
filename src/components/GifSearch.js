import React, {useState} from 'react'

function GifSearch({searchGif}) {

  const [searchText, setSearchText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    searchGif(searchText);

    // setSearchText("");
  }

  return (
    <div>
      <form style={{float:"right", border: "2px solid red"}} onSubmit={handleSubmit}> 
        <label>
          Enter search term:
          <br/>
          <input type="text" name="text" value={searchText} placeholder="" onChange={e => setSearchText(e.target.value)}/>
        </label>
        <br/>
        <input type="submit" name="submit" value="Find Gifs"/>
      </form>
    </div>
  )
}

export default GifSearch