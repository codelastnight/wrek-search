import React, { useState, useEffect } from 'react';
import Main from './components/Main';
import Results from './components/Results';
import './App.css';

function Greeting(props: any) {
  const isLoggedIn = props.isLoggedIn;
  if (!isLoggedIn) {
    return <Main />;
  }
  return <Results />;
}


function App() {
  const [isResult, setIsResult] = useState(false)


  return (
    <div className="App">
       <Greeting isLoggedIn={isResult} />
      
    </div>
  );
}

export default App;
