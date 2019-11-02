import React from 'react'
import logo from '../logo.svg'
import img,{dylan} from '../assets/images'


const header = ({children}) => { //componnete tonto  en inglish stateless  dumb component ()
   console.log(children)
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React, Ironhacker!</h1>
        <h3>You are ready to take this to the next level!</h3>4
        {children[2]}
        <img src={img.miFoto} width='200' height='200' />
        <span style={{backgroundColor:'red'}}>{dylan}</span>
      </header>
    );
  }
  
  export default header;

