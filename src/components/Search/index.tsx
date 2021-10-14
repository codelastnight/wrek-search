import React, { useState } from 'react';
import Fuse from 'fuse.js'
import matchList from './list.json'
import classes from './search.module.scss'

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

  const handleKeyDown = (event: any) => {
    if (event.key === 'Enter') {
      sendSearch(event.target.value)
    }
  }
  return (
    <div className={classes.search}>
      <div className={classes.search__wrapper}>
        <input value={result} onChange={e => onInput(e)} onKeyDown={handleKeyDown} placeholder="search for anything,,,">
    
        </input>
        <button onClick={() => sendSearch(result)}>Search!</button>
       
      </div>
      <div className={ results.length > 0 ? `${classes.search__auto} ${classes.show}`: classes.search__auto }>
          {
            results.map((item, i) => (
              <div 
                className={classes.search__auto__item}
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
