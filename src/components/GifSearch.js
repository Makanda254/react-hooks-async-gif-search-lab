import React, {useState} from 'react';

export default function GifSearch({onSubmitSearch}) {
    const [query, setQuery] = useState()

    function handleSearch(e){
        setQuery(e.target.value)
        
    }

    function handleQuerySearch(e){
        e.preventDefault()
        onSubmitSearch(query)
    }
  return (
    <div>
    <form onSubmit={handleQuerySearch}>
      <div className="form-group">
        <label htmlFor="search">Enter a Search Term:</label>
        <input
          id="search"
          className="form-control"
          type="text"
          value={query}
          onChange={handleSearch}
        />
      </div>
      <button type="submit" className="btn btn-success">
        Find Gifs
      </button>
    </form>
  </div>

  )
}
