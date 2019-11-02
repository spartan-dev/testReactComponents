import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import {listItems} from './components/List'
import ListDemo from './components/listDemo'
import DynamicMoviesList from './components/dynamicListsDemo/DynamicMoviesList';

function App() { //drilling 

  return (
    <div className="App">
      <Header>
        <p>loremdkoaskdoaskdokasodkasoksdoaksodko</p>
        <p>spy unico</p>
        <p>y diferente</p>
      </Header>
      <ul>{listItems}</ul>
      <ListDemo/>
      <hr />
        <DynamicMoviesList />
    </div>
  );
}

export default App;
