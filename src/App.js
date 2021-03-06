import React from 'react';
import {Switch, Route} from 'react-router-dom';

import './App.css';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';

const HatsPage = () => {
  return (
    <div>
      <h1>
        HATS PAGE
      </h1>
    </div>
  )
}

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route path="/hats" component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
