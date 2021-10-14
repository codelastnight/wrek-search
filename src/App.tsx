import React, { useState, useEffect } from 'react';
import Main from './components/Main';
import Results from './components/Results';
import './App.css';



function App() {
 
  return (
    <div className="App">
       <Greeting  />
      
    </div>
  );
}


function Greeting(props: any) {

  const [result, setResult] = useState('')
  const setSearch = (data:string) => {
      setResult(data)
  }

  if (result.length == 0 ) {
    return <Main searchResult={result}  setSearch={setSearch} />;
  }
  return <Results searchResult={result} setSearch={setSearch}/>;
}


export default App;
