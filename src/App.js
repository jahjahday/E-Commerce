import React from 'react';
import HomePage from './pages/homepage/homepage-component';
import ShopPage from './pages/shop/shop';

import './App.css';
import { Route } from 'react-router-dom';


function App() {
  return (
    <div>
      <switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
     </switch>
       
    </div>
  );
}

export default App;
