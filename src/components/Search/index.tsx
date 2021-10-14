import React, { useState, useEffect } from 'react';
import Fuse from 'fuse.js'
import matchList from './list.json'
import './search.scss'

function Search(props: any) {
  const [results, setResults] = useState([] as Fuse.FuseResult<unknown>[]) 

  function onInput(e:React.ChangeEvent<HTMLInputElement>) {

    const options = {
      
    }
    
    const fuse = new Fuse(matchList.match, options)
    
    
    if (e.target.value.length > 0 ) {
      setResults(fuse.search(e.target.value))
    } else {
      setResults([])
    }
  }

  useEffect(() => {
    // Update the document title using the browser API
    
  });
  return (
    <div className="search">
      <input onChange={e => onInput(e)} placeholder="search for anything,,,"></input>
      <div className={ results.length > 0 ? "search__auto show" : "search__auto" }>
        {
          results.map((item, i) => 
          <div key={i}> {item.item} {item.score} </div>
          )
        }

      </div>
    </div>
  );
}
  


export default Search;
