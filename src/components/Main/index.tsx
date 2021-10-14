import React, { useState, useEffect } from 'react';
import Search from '../Search';
import logo from '../../logo.png';

function Main() {
    return (
        <div>
        <main>
        <section className="main__section">
            <img src={logo} className="image" alt="this is wrek search logo" />
            Search the web for:
            <Search>
            </Search>
        </section>  
        </main>
        </div>
      
      
    );
  }
  
  export default Main;
  