import React, { useState, useEffect } from 'react';
import Search from '../Search';
import logo from '../../logo.png';

interface MainProps{
    searchResult: string

    setSearch: (data: string) => void
}

function Main(props: MainProps) {

    return (
        <div>
        <main>
        <section className="main__section">
            <img src={logo} className="image" alt="this is wrek search logo" />
            Search the web for:
            <Search searchResult={props.searchResult} setSearch={props.setSearch} />
            
        </section>  
        </main>
        </div>
      
      
    );
  }
  
  export default Main;
  