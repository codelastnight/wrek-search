import React, { useState } from 'react';
import Fuse from 'fuse.js'
import matchList from './list.json'
import './search.scss'

const options = {
      
}

interface SearchProps{
  searchResult: string
  setSearch: (data: string) => void
}

function Search(props: SearchProps) {
  const [results, setResults] = useState([] as Fuse.FuseResult<unknown>[]) 
  const [result, setResult] = useState(props.searchResult)
  function onInput(e:React.ChangeEvent<HTMLInputElement>) {
    setResult(e.target.value)
    const fuse = new Fuse(matchList.match, options) 
    if (e.target.value.length > 0 ) {
      setResults(fuse.search(e.target.value))
    } else {
      setResults([])
    }
  }

  function sendSearch(data:string) {
    console.log(data)
    setResult(data)
    props.setSearch(data)
  }

  return (
    <div className="search">
      <div className="search-wrapper">
        <input value={result} onChange={e => onInput(e)} placeholder="search for anything,,,">
    
        </input>
        <button onClick={() => sendSearch(result)}>Search!</button>
       
      </div>
      <div className={ results.length > 0 ? "search__auto show" : "search__auto" }>
          {
            results.map((item, i) => (
              <div 
                className="search__auto--item"
                key={i} 
                onClick={() => sendSearch(item.item as string)}
                tabIndex={0} 
                > { 
                item.item as string
                } 
                </div>
            ))
          }

        </div>
    </div>
  );
}
  


export default Search;
